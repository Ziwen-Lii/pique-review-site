const OWNER = "Ziwen-Lii";
const REPO = "pique-review-site";
const BRANCH = "main";
const CONTENT_PATH = "public/user-content.json";
const EXPORT_VERSION = 1;
const MAX_PAYLOAD_BYTES = 900_000;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Cache-Control": "no-store",
};

function setHeaders(res) {
  for (const [key, value] of Object.entries(corsHeaders)) {
    res.setHeader(key, value);
  }
}

function sendJson(res, status, body) {
  setHeaders(res);
  return res.status(status).json(body);
}

function isChapter(value) {
  return (
    value &&
    typeof value.id === "string" &&
    typeof value.title === "string" &&
    typeof value.markdown === "string"
  );
}

function isCourse(value) {
  return (
    value &&
    typeof value.id === "string" &&
    typeof value.title === "string" &&
    Array.isArray(value.chapters) &&
    value.chapters.every(isChapter)
  );
}

function isCourseList(value) {
  return Array.isArray(value) && value.every(isCourse);
}

function cleanChapter(chapter) {
  return {
    id: chapter.id,
    title: chapter.title,
    markdown: chapter.markdown,
  };
}

function cleanCourse(course) {
  return {
    id: course.id,
    title: course.title,
    chapters: course.chapters.map(cleanChapter),
  };
}

function emptyPayload() {
  return {
    version: EXPORT_VERSION,
    updatedAt: null,
    courses: [],
  };
}

function parseCloudPayload(raw) {
  try {
    const parsed = typeof raw === "string" ? JSON.parse(raw) : raw;
    const courses = Array.isArray(parsed) ? parsed : parsed?.courses;
    return {
      version: Number(parsed?.version) || EXPORT_VERSION,
      updatedAt: typeof parsed?.updatedAt === "string" ? parsed.updatedAt : null,
      courses: isCourseList(courses) ? courses.map(cleanCourse) : [],
    };
  } catch {
    return emptyPayload();
  }
}

function getCourseIndex(courses, courseId) {
  return courses.findIndex((course) => course.id === courseId);
}

function upsertCourse(courses, course) {
  const nextCourse = cleanCourse(course);
  const existingIndex = getCourseIndex(courses, nextCourse.id);
  if (existingIndex === -1) {
    return [...courses, nextCourse];
  }
  return courses.map((item, index) => (index === existingIndex ? nextCourse : item));
}

function upsertChapter(courses, course, chapter) {
  const nextChapter = cleanChapter(chapter);
  const courseId = course.id;
  const existingIndex = getCourseIndex(courses, courseId);

  if (existingIndex === -1) {
    return [
      ...courses,
      {
        id: courseId,
        title: course.title,
        chapters: [nextChapter],
      },
    ];
  }

  return courses.map((item, index) => {
    if (index !== existingIndex) return item;
    const chapterIndex = item.chapters.findIndex((existing) => existing.id === nextChapter.id);
    const chapters =
      chapterIndex === -1
        ? [...item.chapters, nextChapter]
        : item.chapters.map((existing, existingIndex) =>
            existingIndex === chapterIndex ? nextChapter : existing,
          );

    return {
      ...item,
      title: course.title || item.title,
      chapters,
    };
  });
}

function deleteChapter(courses, courseId, chapterId) {
  return courses
    .map((course) =>
      course.id === courseId
        ? {
            ...course,
            chapters: course.chapters.filter((chapter) => chapter.id !== chapterId),
          }
        : course,
    )
    .filter((course) => course.chapters.length > 0);
}

function applyMutation(payload, mutation) {
  if (!mutation || typeof mutation.action !== "string") {
    throw new Error("同步请求格式不正确。");
  }

  let courses = payload.courses.map(cleanCourse);

  if (mutation.action === "upsertCourse") {
    if (!isCourse(mutation.course)) throw new Error("课程数据不完整。");
    courses = upsertCourse(courses, mutation.course);
  } else if (mutation.action === "upsertChapter") {
    if (!mutation.course || typeof mutation.course.id !== "string" || typeof mutation.course.title !== "string") {
      throw new Error("章节所属课程不完整。");
    }
    if (!isChapter(mutation.chapter)) throw new Error("章节数据不完整。");
    courses = upsertChapter(courses, mutation.course, mutation.chapter);
  } else if (mutation.action === "deleteChapter") {
    if (typeof mutation.courseId !== "string" || typeof mutation.chapterId !== "string") {
      throw new Error("删除章节请求不完整。");
    }
    courses = deleteChapter(courses, mutation.courseId, mutation.chapterId);
  } else {
    throw new Error("不支持的同步操作。");
  }

  const nextPayload = {
    version: EXPORT_VERSION,
    updatedAt: new Date().toISOString(),
    courses,
  };

  const byteLength = Buffer.byteLength(JSON.stringify(nextPayload), "utf8");
  if (byteLength > MAX_PAYLOAD_BYTES) {
    throw new Error("同步资料太大，请拆分后再保存。");
  }

  return nextPayload;
}

function getGitHubHeaders(token) {
  return {
    Accept: "application/vnd.github+json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    "X-GitHub-Api-Version": "2022-11-28",
  };
}

async function readGitHubFile(token) {
  const response = await fetch(
    `https://api.github.com/repos/${OWNER}/${REPO}/contents/${CONTENT_PATH}?ref=${BRANCH}`,
    {
      headers: getGitHubHeaders(token),
    },
  );

  if (response.status === 404) {
    return {
      payload: emptyPayload(),
      sha: undefined,
    };
  }

  if (!response.ok) {
    throw new Error(`读取云端资料失败：${response.status}`);
  }

  const file = await response.json();
  const raw = Buffer.from(file.content || "", "base64").toString("utf8");

  return {
    payload: parseCloudPayload(raw),
    sha: file.sha,
  };
}

async function writeGitHubFile(token, payload, sha) {
  const content = Buffer.from(`${JSON.stringify(payload, null, 2)}\n`, "utf8").toString("base64");
  const response = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/contents/${CONTENT_PATH}`, {
    method: "PUT",
    headers: {
      ...getGitHubHeaders(token),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      branch: BRANCH,
      message: `Sync review content ${payload.updatedAt}`,
      content,
      ...(sha ? { sha } : {}),
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    const error = new Error(`写入云端资料失败：${response.status}`);
    error.status = response.status;
    error.detail = detail;
    throw error;
  }
}

async function publishMutation(token, mutation) {
  for (let attempt = 0; attempt < 3; attempt += 1) {
    const { payload, sha } = await readGitHubFile(token);
    const nextPayload = applyMutation(payload, mutation);

    try {
      await writeGitHubFile(token, nextPayload, sha);
      return nextPayload;
    } catch (error) {
      if (error.status !== 409 || attempt === 2) {
        throw error;
      }
    }
  }

  throw new Error("云端资料正在被其他人更新，请稍后再试。");
}

export default async function handler(req, res) {
  setHeaders(res);

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  const token = process.env.GITHUB_SYNC_TOKEN;

  if (req.method === "GET") {
    try {
      const { payload } = await readGitHubFile(token);
      return sendJson(res, 200, payload);
    } catch (error) {
      return sendJson(res, 500, { error: error.message });
    }
  }

  if (req.method !== "POST") {
    return sendJson(res, 405, { error: "只支持 GET/POST 同步请求。" });
  }

  if (!token) {
    return sendJson(res, 500, { error: "Vercel 还没有配置 GITHUB_SYNC_TOKEN，暂时不能写入云端。" });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const nextPayload = await publishMutation(token, body);
    return sendJson(res, 200, nextPayload);
  } catch (error) {
    return sendJson(res, error.status && error.status < 500 ? error.status : 500, {
      error: error.message,
    });
  }
}
