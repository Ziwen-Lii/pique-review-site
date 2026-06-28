import { useEffect, useMemo, useRef, useState } from "react";
import {
  BookOpen,
  ChevronDown,
  ChevronRight,
  Eye,
  FileText,
  FolderPlus,
  ListPlus,
  Moon,
  PanelLeftClose,
  PanelLeftOpen,
  Plus,
  Search,
  Sparkles,
  Type,
  Trash2,
  X,
} from "lucide-react";
import testLecture01Markdown from "./content/test-lecture-01.md?raw";
import testLecture02Markdown from "./content/test-lecture-02.md?raw";
import testLecture03Markdown from "./content/test-lecture-03.md?raw";
import testLecture04Markdown from "./content/test-lecture-04.md?raw";
import testExercisesMarkdown from "./content/test-exercises.md?raw";
import testExercisesCh04Markdown from "./content/test-exercises-ch04.md?raw";
import testLecture05Markdown from "./content/test-lecture-05.md?raw";
import testLecture06Markdown from "./content/test-lecture-06.md?raw";
import testLecture07Markdown from "./content/test-lecture-07.md?raw";
import pmDrawingMarkdown from "./content/pm-drawing.md?raw";
import pmDrillBankMarkdown from "./content/pm-drill-bank.md?raw";
import pmExercisesMarkdown from "./content/pm-exercises.md?raw";
import pmFinalReviewMarkdown from "./content/pm-final-review.md?raw";
import pmMockExamsMarkdown from "./content/pm-mock-exams.md?raw";
import pmLecture01Markdown from "./content/pm-lecture-01.md?raw";
import pmLecture02Markdown from "./content/pm-lecture-02.md?raw";
import pmLecture03Markdown from "./content/pm-lecture-03.md?raw";
import pmLecture04Markdown from "./content/pm-lecture-04.md?raw";
import pmLecture05Markdown from "./content/pm-lecture-05.md?raw";
import pmLecture06Markdown from "./content/pm-lecture-06.md?raw";
import pmLecture07Markdown from "./content/pm-lecture-07.md?raw";
import pmLecture08Markdown from "./content/pm-lecture-08.md?raw";
import pmLecture09Markdown from "./content/pm-lecture-09.md?raw";
import pmLecture10Markdown from "./content/pm-lecture-10.md?raw";
import pmLecture11Markdown from "./content/pm-lecture-11.md?raw";

const STORAGE_KEY = "review-site-courses-v12";
const ACTIVE_KEY = "review-site-active-chapter-v12";
const EXPANDED_KEY = "review-site-expanded-courses-v12";
const READER_SIZE_KEY = "review-site-reader-size-v1";
const THEME_KEY = "review-site-theme-v1";
const DEFAULT_CHAPTER_ID = "pm-mock-exams";
const COURSE_STORAGE_PATTERN = /^review-site-courses-v(\d+)$/;
const ACTIVE_STORAGE_PATTERN = /^review-site-active-chapter-v(\d+)$/;
const EXPANDED_STORAGE_PATTERN = /^review-site-expanded-courses-v(\d+)$/;
const CLOUD_CONTENT_URL = "https://raw.githubusercontent.com/Ziwen-Lii/pique-review-site/main/public/user-content.json";
const DEFAULT_SYNC_API_URL =
  typeof window !== "undefined" && window.location.hostname.endsWith("vercel.app")
    ? "/api/review-content"
    : "https://pique-review-site.vercel.app/api/review-content";
const CLOUD_API_URL = import.meta.env.VITE_SYNC_API_URL || DEFAULT_SYNC_API_URL;
const CLOUD_PUBLISH_DELAY = 1400;
const CLOUD_POLL_INTERVAL = 12000;
const EXPORT_VERSION = 1;
let mermaidRenderQueue = Promise.resolve();
let mermaidRenderCount = 0;

const starterCourses = [
  {
    id: "course-sad",
    title: "系统分析与设计",
    chapters: [
      {
        id: "sad-01",
        title: "第一章：系统需求分析与用例建模",
        markdown: `# 第一章：系统需求分析与用例建模

## 复习重点

- 系统需求分为功能需求、非功能需求和约束条件。
- 用例图重点看参与者、用例、系统边界和关系。
- 需求分析的目标不是写得多，而是让用户目标、系统责任、验收标准变清楚。

## 高频考点

1. 用例与功能模块的区别。
2. 包含、扩展、泛化关系的使用场景。
3. 需求规格说明书中可验证性的重要性。

## 速记

> 好需求 = 明确对象 + 明确行为 + 明确约束 + 可验证结果。

## 自测

- 一个在线选课系统至少有哪些参与者？
- “登录失败三次锁定账号”属于什么类型的需求？
- 如何判断一个描述是否适合作为用例？`,
      },
      {
        id: "sad-02",
        title: "第二章：面向对象设计与 GRASP",
        markdown: `# 第二章：面向对象设计与 GRASP

## 复习重点

- 面向对象设计关注职责分配、对象协作和边界清晰。
- 类图要区分类、属性、方法、关联、多重性和继承关系。
- GRASP 原则用于回答“这个职责应该放在哪个类里”。

## GRASP 快速表

- **信息专家**：谁拥有完成职责所需信息，谁承担职责。
- **创建者**：谁包含、聚合或频繁使用某对象，谁更适合创建它。
- **低耦合**：减少类之间不必要依赖。
- **高内聚**：让一个类保持清晰、集中、稳定的职责。
- **控制器**：接收系统事件，并协调领域对象完成任务。

## 考前提醒

不要把所有业务逻辑塞进界面类。界面负责交互，领域对象负责业务规则，控制器负责协调流程。`,
      },
      {
        id: "sad-03",
        title: "第三章：经典软件架构风格",
        markdown: `# 第三章：经典软件架构风格

## 复习重点

- 分层架构强调职责分离，常见于业务系统。
- 管道-过滤器适合数据流处理，每个过滤器独立转换数据。
- 客户端-服务器关注服务提供方与请求方的分工。
- MVC 将模型、视图、控制器分离，降低界面和业务逻辑耦合。

## 对比记忆

| 风格 | 适合场景 | 关注点 |
| --- | --- | --- |
| 分层架构 | 企业应用 | 层次职责 |
| MVC | 交互式应用 | 表现与模型分离 |
| 管道-过滤器 | 编译器、数据处理 | 数据转换链 |
| 微服务 | 大型复杂系统 | 独立部署与扩展 |

## 自测

- 分层架构为什么可能带来性能损耗？
- MVC 中 Controller 的核心职责是什么？`,
      },
      {
        id: "sad-04",
        title: "第四章：系统高可用、高扩展设计",
        markdown: `# 第四章：系统高可用、高扩展设计

## 核心概念

- 高可用关注系统持续提供服务的能力。
- 高扩展关注系统随业务增长而增加处理能力的能力。
- 常见手段包括负载均衡、缓存、限流、熔断、降级、异步队列和数据分片。

## 常考组合

1. **缓存 + 数据库**：降低数据库压力，但要处理缓存一致性。
2. **消息队列 + 异步处理**：削峰填谷，但要考虑重复消费和失败重试。
3. **限流 + 降级**：保护核心链路，牺牲非核心体验。

## 速记

> 高可用先保活，高扩展再变强。`,
      },
      {
        id: "sad-05",
        title: "第五章：高分期末大题特训",
        markdown: `# 第五章：高分期末大题特训

## 答题框架

### 需求分析题

1. 识别参与者。
2. 列出核心用例。
3. 画出系统边界。
4. 写出关键非功能需求。

### 类图设计题

1. 找名词，抽候选类。
2. 找动词，抽职责和方法。
3. 判断关联、多重性、继承。
4. 用低耦合、高内聚检查设计。

### 架构设计题

- 先说明业务特征。
- 再选择架构风格。
- 最后解释优点、代价和风险。`,
      },
      {
        id: "sad-drawing",
        title: "画图专项教程",
        markdown: `# 画图专项教程

## 用例图

- 先画系统边界。
- 参与者放边界外，用例放边界内。
- 每个用例用动宾短语命名。
- include 表示必然复用，extend 表示条件扩展。

## 类图

- 类名使用名词。
- 属性写清类型，方法写清参数和返回值。
- 关联线旁边标多重性。

## 时序图

1. 先放参与对象。
2. 从用户触发事件开始。
3. 按时间顺序写消息。
4. 注意返回消息和对象生命周期。`,
      },
    ],
  },
  {
    id: "course-test",
    title: "软件测试",
    chapters: [
      {
        id: "test-exercises",
        title: "软件测试总题库：选择题与答案",
        markdown: testExercisesMarkdown,
      },
      {
        id: "test-l01",
        title: "第1章：引论",
        markdown: testLecture01Markdown,
      },
      {
        id: "test-l02",
        title: "第2章：软件测试基本概念",
        markdown: testLecture02Markdown,
      },
      {
        id: "test-l03",
        title: "第3章：软件测试流程和规范",
        markdown: testLecture03Markdown,
      },
      {
        id: "test-l04",
        title: "第4章：软件测试方法",
        markdown: testLecture04Markdown,
      },
      {
        id: "test-exercises-ch04",
        title: "第4章专项题库：软件测试方法",
        markdown: testExercisesCh04Markdown,
      },
      {
        id: "test-l05",
        title: "第5章：单元测试与集成测试",
        markdown: testLecture05Markdown,
      },
      {
        id: "test-l06",
        title: "第6章：系统测试",
        markdown: testLecture06Markdown,
      },
      {
        id: "test-l07",
        title: "第7章：专项测试",
        markdown: testLecture07Markdown,
      },
    ],
  },
  {
    id: "course-pm",
    title: "软件项目管理",
    chapters: [
      {
        id: "pm-mock-exams",
        title: "三套模拟试卷：翻面答案版",
        markdown: pmMockExamsMarkdown,
      },
      {
        id: "pm-drill-bank",
        title: "刷题大章：选择题与简答题",
        markdown: pmDrillBankMarkdown,
      },
      {
        id: "pm-final-review",
        title: "最后总复习：框架与高频词",
        markdown: pmFinalReviewMarkdown,
      },
      {
        id: "pm-exercises",
        title: "课后题与样题：过程与答案",
        markdown: pmExercisesMarkdown,
      },
      {
        id: "pm-drawing",
        title: "画图大章：高频图表专项",
        markdown: pmDrawingMarkdown,
      },
      {
        id: "pm-l01",
        title: "Lecture 1：项目与项目管理",
        markdown: pmLecture01Markdown,
      },
      {
        id: "pm-l02",
        title: "Lecture 2：整合管理、项目选择与启动",
        markdown: pmLecture02Markdown,
      },
      {
        id: "pm-l03",
        title: "Lecture 3：范围管理",
        markdown: pmLecture03Markdown,
      },
      {
        id: "pm-l04",
        title: "Lecture 4：进度管理 Part 1",
        markdown: pmLecture04Markdown,
      },
      {
        id: "pm-l05",
        title: "Lecture 5：进度管理 Part 2",
        markdown: pmLecture05Markdown,
      },
      {
        id: "pm-l06",
        title: "Lecture 6：成本管理",
        markdown: pmLecture06Markdown,
      },
      {
        id: "pm-l07",
        title: "Lecture 7：风险管理",
        markdown: pmLecture07Markdown,
      },
      {
        id: "pm-l08",
        title: "Lecture 8：HR、干系人与沟通管理",
        markdown: pmLecture08Markdown,
      },
      {
        id: "pm-l09",
        title: "Lecture 9：采购与质量管理",
        markdown: pmLecture09Markdown,
      },
      {
        id: "pm-l10",
        title: "Lecture 10：Agile 与博弈视角",
        markdown: pmLecture10Markdown,
      },
      {
        id: "pm-l11",
        title: "Lecture 11：执行、收尾与全课程复习",
        markdown: pmLecture11Markdown,
      },
    ],
  },
];

function createId(prefix) {
  return `${prefix}-${Date.now().toString(36)}-${Math.random()
    .toString(36)
    .slice(2, 7)}`;
}

function getAllCourseIds(courses) {
  return courses.map((course) => course.id);
}

function findChapter(courses, chapterId) {
  for (const course of courses) {
    const chapterIndex = course.chapters.findIndex((item) => item.id === chapterId);
    if (chapterIndex !== -1) {
      return {
        course,
        chapter: course.chapters[chapterIndex],
        chapterIndex,
      };
    }
  }
  return null;
}

function getFirstChapterId(courses) {
  return courses.find((course) => course.chapters.length)?.chapters[0]?.id ?? "";
}

function getDefaultChapterId(courses) {
  return findChapter(courses, DEFAULT_CHAPTER_ID) ? DEFAULT_CHAPTER_ID : getFirstChapterId(courses);
}

function templateFor(title, courseTitle) {
  return `# ${title}

## 复习重点

- 
- 
- 

## 高频考点

1. 
2. 
3. 

## 易错提醒

> ${courseTitle} 这一节最容易丢分的地方是：

## 自测

- 
- 
- `;
}

function readJson(key, fallback) {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch {
    return fallback;
  }
}

function isCourseList(value) {
  return (
    Array.isArray(value) &&
    value.every(
      (course) =>
        course &&
        typeof course.id === "string" &&
        typeof course.title === "string" &&
        Array.isArray(course.chapters),
    )
  );
}

function getVersionedStorageKeys(pattern) {
  try {
    return Object.keys(localStorage)
      .map((key) => {
        const match = key.match(pattern);
        return match ? { key, version: Number(match[1]) } : null;
      })
      .filter(Boolean)
      .sort((a, b) => b.version - a.version);
  } catch {
    return [];
  }
}

function cloneCourses(courses) {
  return courses.map((course) => ({
    ...course,
    chapters: course.chapters.map((chapter) => ({ ...chapter })),
  }));
}

function getCustomCourses(courses) {
  const starterByCourseId = new Map(starterCourses.map((course) => [course.id, course]));

  return courses
    .map((course) => {
      const starterCourse = starterByCourseId.get(course.id);
      if (!starterCourse) {
        return {
          ...course,
          chapters: course.chapters.map((chapter) => ({ ...chapter })),
        };
      }

      const starterChapterIds = new Set(starterCourse.chapters.map((chapter) => chapter.id));
      const customChapters = course.chapters
        .filter((chapter) => !starterChapterIds.has(chapter.id))
        .map((chapter) => ({ ...chapter }));

      return customChapters.length
        ? {
            id: course.id,
            title: course.title,
            chapters: customChapters,
          }
        : null;
    })
    .filter(Boolean);
}

function isCustomChapter(courseId, chapterId) {
  const starterCourse = starterCourses.find((course) => course.id === courseId);
  return !starterCourse || !starterCourse.chapters.some((chapter) => chapter.id === chapterId);
}

function mergeCustomCourses(baseCourses, customCourses) {
  if (!isCourseList(customCourses)) return cloneCourses(baseCourses);

  const merged = cloneCourses(baseCourses);
  const courseIndex = new Map(merged.map((course, index) => [course.id, index]));

  for (const customCourse of customCourses) {
    const cleanCourse = {
      ...customCourse,
      chapters: customCourse.chapters.map((chapter) => ({ ...chapter })),
    };
    const existingIndex = courseIndex.get(cleanCourse.id);

    if (existingIndex === undefined) {
      courseIndex.set(cleanCourse.id, merged.length);
      merged.push(cleanCourse);
      continue;
    }

    const existingCourse = merged[existingIndex];
    const chapterIndex = new Map(existingCourse.chapters.map((chapter, index) => [chapter.id, index]));
    const nextChapters = [...existingCourse.chapters];

    for (const customChapter of cleanCourse.chapters) {
      const existingChapterIndex = chapterIndex.get(customChapter.id);
      if (existingChapterIndex === undefined) {
        chapterIndex.set(customChapter.id, nextChapters.length);
        nextChapters.push({ ...customChapter });
      } else {
        nextChapters[existingChapterIndex] = { ...customChapter };
      }
    }

    merged[existingIndex] = {
      ...existingCourse,
      chapters: nextChapters,
    };
  }

  return merged;
}

function parseCloudPayload(raw) {
  try {
    const parsed = typeof raw === "string" ? JSON.parse(raw) : raw;
    const courses = Array.isArray(parsed) ? parsed : parsed?.courses;
    return {
      version: Number(parsed?.version) || EXPORT_VERSION,
      updatedAt: typeof parsed?.updatedAt === "string" ? parsed.updatedAt : null,
      courses: isCourseList(courses) ? courses : [],
    };
  } catch {
    return {
      version: EXPORT_VERSION,
      updatedAt: null,
      courses: [],
    };
  }
}

async function fetchCloudData() {
  try {
    const response = await fetch(`${CLOUD_API_URL}?t=${Date.now()}`, {
      cache: "no-store",
    });
    if (response.ok) {
      return parseCloudPayload(await response.json());
    }
  } catch {
    // Keep the static GitHub file as a read-only fallback if the sync API is not reachable.
  }

  const response = await fetch(`${CLOUD_CONTENT_URL}?t=${Date.now()}`, {
    cache: "no-store",
  });
  if (!response.ok) {
    if (response.status === 404) {
      return {
        version: EXPORT_VERSION,
        updatedAt: null,
        courses: [],
      };
    }
    throw new Error(`云端读取失败：${response.status}`);
  }
  return parseCloudPayload(await response.text());
}

async function publishCloudMutation(mutation) {
  const response = await fetch(CLOUD_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(mutation),
  });

  if (!response.ok) {
    let detail = "";
    try {
      detail = (await response.json()).error;
    } catch {
      detail = await response.text();
    }
    throw new Error(detail || `云端同步失败：${response.status}`);
  }

  return parseCloudPayload(await response.json());
}

function readInitialCourses() {
  const current = readJson(STORAGE_KEY, null);
  if (isCourseList(current)) {
    return mergeCustomCourses(starterCourses, getCustomCourses(current));
  }

  for (const { key } of getVersionedStorageKeys(COURSE_STORAGE_PATTERN)) {
    const saved = readJson(key, null);
    if (isCourseList(saved)) {
      return mergeCustomCourses(starterCourses, getCustomCourses(saved));
    }
  }

  return starterCourses;
}

function useStoredCourses() {
  const [courses, setCourses] = useState(readInitialCourses);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(courses));
  }, [courses]);

  return [courses, setCourses];
}

function isBlockStart(line) {
  const trimmed = line.trim();
  return (
    /^#{1,4}\s/.test(trimmed) ||
    /^[-*]\s+/.test(trimmed) ||
    /^\d+\.\s+/.test(trimmed) ||
    isTableStart(trimmed, "") ||
    trimmed.startsWith("> ") ||
    trimmed.startsWith(":::answer") ||
    trimmed.startsWith("```")
  );
}

function isTableSeparator(line) {
  return /^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/.test(line.trim());
}

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-+|-+$/g, "");
}

function getHeadingId(text, lineIndex) {
  return `heading-${lineIndex}-${slugify(text) || "section"}`;
}

function isTableStart(line, nextLine) {
  return line.includes("|") && isTableSeparator(nextLine);
}

function splitTableRow(line) {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

function renderInline(text, onChapterLink) {
  const parts = [];
  const pattern = /(==[^=]+==|\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
  let lastIndex = 0;
  let match;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    const token = match[0];
    if (token.startsWith("==")) {
      parts.push(
        <span className="term-highlight" key={`${token}-${match.index}`}>
          {token.slice(2, -2)}
        </span>,
      );
    } else if (token.startsWith("**")) {
      parts.push(<strong key={`${token}-${match.index}`}>{token.slice(2, -2)}</strong>);
    } else if (token.startsWith("`")) {
      parts.push(<code key={`${token}-${match.index}`}>{token.slice(1, -1)}</code>);
    } else {
      const link = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (link[2].startsWith("chapter:")) {
        parts.push(
          <button
            className="chapter-inline-link"
            key={`${token}-${match.index}`}
            onClick={() => onChapterLink?.(link[2].replace("chapter:", ""))}
            type="button"
          >
            {link[1]}
          </button>,
        );
        lastIndex = pattern.lastIndex;
        continue;
      }
      parts.push(
        <a key={`${token}-${match.index}`} href={link[2]} target="_blank" rel="noreferrer">
          {link[1]}
        </a>,
      );
    }
    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}

function extractHeadings(markdown) {
  return markdown
    .split("\n")
    .map((line, lineIndex) => {
      const match = line.trim().match(/^(#{2,4})\s+(.*)$/);
      if (!match) return null;
      return {
        id: getHeadingId(match[2], lineIndex),
        level: match[1].length,
        text: match[2],
      };
    })
    .filter(Boolean);
}

function stripLeadingH1(markdown) {
  const lines = markdown.split("\n");
  if (lines[0]?.trim().startsWith("# ")) {
    const [, ...rest] = lines;
    return rest.join("\n").replace(/^\s+/, "");
  }
  return markdown;
}

function renderMermaidChart(chart, theme) {
  const renderId = `mermaid-${Date.now().toString(36)}-${mermaidRenderCount++}`;
  const task = mermaidRenderQueue
    .catch(() => undefined)
    .then(async () => {
      const { default: mermaid } = await import("mermaid");
      mermaid.initialize({
        startOnLoad: false,
        securityLevel: "strict",
        theme: theme === "dark" ? "dark" : "base",
        themeVariables:
          theme === "dark"
            ? {
                primaryColor: "#26213b",
                primaryTextColor: "#f6f6f7",
                primaryBorderColor: "#6f55d9",
                lineColor: "#8f7ef2",
                secondaryColor: "#191b1f",
                tertiaryColor: "#101113",
              }
            : {
                primaryColor: "#f6f3ff",
                primaryTextColor: "#202326",
                primaryBorderColor: "#b8abf4",
                lineColor: "#6f55d9",
                secondaryColor: "#ffffff",
                tertiaryColor: "#f7f7f8",
              },
      });

      return mermaid.render(renderId, chart);
    });

  mermaidRenderQueue = task.catch(() => undefined);
  return task;
}

function MermaidDiagram({ chart, theme }) {
  const containerRef = useRef(null);

  useEffect(() => {
    let active = true;

    if (containerRef.current) {
      containerRef.current.replaceChildren();
    }

    renderMermaidChart(chart, theme)
      .then(({ svg }) => {
        if (active && containerRef.current) {
          containerRef.current.innerHTML = svg;
        }
      })
      .catch((error) => {
        if (active && containerRef.current) {
          containerRef.current.textContent = `Diagram render failed: ${error.message}`;
        }
      });

    return () => {
      active = false;
    };
  }, [chart, theme]);

  return <div className="diagram-panel" ref={containerRef} />;
}

function AnswerFlip({ children, title }) {
  const [open, setOpen] = useState(false);
  const label = title || "答案与解析 / Answer & Explanation";

  return (
    <section className={`answer-flip ${open ? "open" : ""}`}>
      <button
        className="answer-flip-toggle"
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        <span>{open ? "收起答案 / Hide answer" : "点击翻开答案 / Flip answer"}</span>
        <Eye size={16} />
      </button>
      <div className="answer-flip-stage" aria-hidden={!open}>
        <div className="answer-flip-card">
          <div className="answer-flip-face answer-flip-front">
            <span>答案隐藏中，先自己做一遍。</span>
            <span>Answer hidden. Try it first.</span>
          </div>
          <div className="answer-flip-face answer-flip-back">
            <p className="answer-flip-label">{label}</p>
            <div className="answer-flip-content">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function renderMarkdown(markdown, theme, onChapterLink) {
  const lines = markdown.split("\n");
  const blocks = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];
    const trimmed = line.trim();

    if (!trimmed) {
      index += 1;
      continue;
    }

    if (trimmed.startsWith(":::answer")) {
      const title = trimmed.replace(/^:::answer\s*/, "").trim();
      const answerLines = [];
      index += 1;
      while (index < lines.length && lines[index].trim() !== ":::") {
        answerLines.push(lines[index]);
        index += 1;
      }
      index += 1;
      blocks.push(
        <AnswerFlip key={`answer-${index}`} title={title}>
          {renderMarkdown(answerLines.join("\n"), theme, onChapterLink)}
        </AnswerFlip>,
      );
      continue;
    }

    if (trimmed.startsWith("```")) {
      const language = trimmed.slice(3).trim().toLowerCase();
      const codeLines = [];
      index += 1;
      while (index < lines.length && !lines[index].trim().startsWith("```")) {
        codeLines.push(lines[index]);
        index += 1;
      }
      index += 1;
      if (language === "mermaid" || language === "uml") {
        blocks.push(<MermaidDiagram chart={codeLines.join("\n")} key={`diagram-${index}`} theme={theme} />);
        continue;
      }
      blocks.push(
        <pre key={`code-${index}`}>
          <code>{codeLines.join("\n")}</code>
        </pre>,
      );
      continue;
    }

    const heading = trimmed.match(/^(#{1,4})\s+(.*)$/);
    if (heading) {
      const level = heading[1].length;
      const content = renderInline(heading[2], onChapterLink);
      const Tag = `h${level}`;
      blocks.push(
        <Tag id={getHeadingId(heading[2], index)} key={`heading-${index}`}>
          {content}
        </Tag>,
      );
      index += 1;
      continue;
    }

    if (trimmed.startsWith("> ")) {
      const quoteLines = [];
      while (index < lines.length && lines[index].trim().startsWith("> ")) {
        quoteLines.push(lines[index].trim().slice(2));
        index += 1;
      }
      blocks.push(
        <blockquote key={`quote-${index}`}>
          <p>{renderInline(quoteLines.join(" "), onChapterLink)}</p>
        </blockquote>,
      );
      continue;
    }

    if (isTableStart(trimmed, lines[index + 1] ?? "")) {
      const headers = splitTableRow(trimmed);
      const rows = [];
      index += 2;

      while (index < lines.length && lines[index].includes("|") && lines[index].trim()) {
        rows.push(splitTableRow(lines[index]));
        index += 1;
      }

      blocks.push(
        <div className="table-wrap" key={`table-${index}`}>
          <table>
            <thead>
              <tr>
                {headers.map((header, headerIndex) => (
                  <th key={`${header}-${headerIndex}`}>{renderInline(header, onChapterLink)}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={`row-${rowIndex}`}>
                  {headers.map((_, cellIndex) => (
                    <td key={`cell-${rowIndex}-${cellIndex}`}>{renderInline(row[cellIndex] ?? "", onChapterLink)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      );
      continue;
    }

    if (/^[-*]\s+/.test(trimmed)) {
      const items = [];
      while (index < lines.length && /^[-*]\s+/.test(lines[index].trim())) {
        items.push(lines[index].trim().replace(/^[-*]\s+/, ""));
        index += 1;
      }
      blocks.push(
        <ul key={`ul-${index}`}>
          {items.map((item, itemIndex) => (
            <li key={`${item}-${itemIndex}`}>{renderInline(item, onChapterLink)}</li>
          ))}
        </ul>,
      );
      continue;
    }

    if (/^\d+\.\s+/.test(trimmed)) {
      const items = [];
      while (index < lines.length && /^\d+\.\s+/.test(lines[index].trim())) {
        items.push(lines[index].trim().replace(/^\d+\.\s+/, ""));
        index += 1;
      }
      blocks.push(
        <ol key={`ol-${index}`}>
          {items.map((item, itemIndex) => (
            <li key={`${item}-${itemIndex}`}>{renderInline(item, onChapterLink)}</li>
          ))}
        </ol>,
      );
      continue;
    }

    const paragraph = [trimmed];
    index += 1;
    while (index < lines.length && lines[index].trim() && !isBlockStart(lines[index])) {
      paragraph.push(lines[index].trim());
      index += 1;
    }
    blocks.push(<p key={`p-${index}`}>{renderInline(paragraph.join(" "), onChapterLink)}</p>);
  }

  return blocks;
}

function ChapterTree({
  courses,
  expanded,
  activeChapterId,
  query,
  sidebarCollapsed,
  onToggleCourse,
  onSelectChapter,
}) {
  const normalizedQuery = query.trim().toLowerCase();

  return (
    <nav className="course-tree" aria-label="课程目录">
      {courses.map((course) => {
        const matchingChapters = normalizedQuery
          ? course.chapters.filter((chapter) =>
              `${chapter.title} ${chapter.markdown}`.toLowerCase().includes(normalizedQuery),
            )
          : course.chapters;
        const isExpanded = expanded.has(course.id) || Boolean(normalizedQuery);
        const isCourseActive = course.chapters.some((chapter) => chapter.id === activeChapterId);

        if (normalizedQuery && matchingChapters.length === 0) {
          return null;
        }

        if (sidebarCollapsed) {
          return (
            <button
              className={`rail-course ${isCourseActive ? "active" : ""}`}
              key={course.id}
              onClick={() => onSelectChapter(matchingChapters[0]?.id ?? course.chapters[0]?.id)}
              title={course.title}
              type="button"
            >
              <BookOpen size={20} />
            </button>
          );
        }

        return (
          <section className="course-block" key={course.id}>
            <button className="course-row" onClick={() => onToggleCourse(course.id)} type="button">
              <span className="course-title">
                <BookOpen size={16} />
                <span>{course.title}</span>
              </span>
              {isExpanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
            </button>

            {isExpanded ? (
              <div className="chapter-list">
                {matchingChapters.map((chapter) => (
                  <button
                    className={`chapter-row ${chapter.id === activeChapterId ? "active" : ""}`}
                    key={chapter.id}
                    onClick={() => onSelectChapter(chapter.id)}
                    title={chapter.title}
                    type="button"
                  >
                    <FileText className="chapter-icon" size={14} />
                    <span className="chapter-title">{chapter.title}</span>
                  </button>
                ))}
              </div>
            ) : null}
          </section>
        );
      })}
    </nav>
  );
}

function AddDrawer({ courses, activeCourseId, open, onClose, onAddCourse, onAddChapter }) {
  const [type, setType] = useState("chapter");
  const [courseId, setCourseId] = useState(activeCourseId || courses[0]?.id || "");
  const [courseTitle, setCourseTitle] = useState("");
  const [chapterTitle, setChapterTitle] = useState("");
  const selectedCourse = courses.find((course) => course.id === courseId) ?? courses[0];
  const [chapterMarkdown, setChapterMarkdown] = useState("");

  useEffect(() => {
    if (open) {
      setCourseId(activeCourseId || courses[0]?.id || "");
    }
  }, [activeCourseId, courses, open]);

  if (!open) return null;

  const fillTemplate = () => {
    const title = chapterTitle.trim() || "新章节";
    setChapterMarkdown(templateFor(title, selectedCourse?.title ?? "课程"));
  };

  const submit = (event) => {
    event.preventDefault();

    if (type === "course") {
      const title = courseTitle.trim();
      if (!title) return;
      if (onAddCourse(title) === false) return;
      setCourseTitle("");
      onClose();
      return;
    }

    const title = chapterTitle.trim();
    if (!title || !selectedCourse) return;
    if (
      onAddChapter(selectedCourse.id, {
        title,
        markdown: chapterMarkdown.trim() || templateFor(title, selectedCourse.title),
      }) === false
    ) {
      return;
    }
    setChapterTitle("");
    setChapterMarkdown("");
    onClose();
  };

  return (
    <div className="drawer-layer" role="presentation">
      <button className="drawer-scrim" onClick={onClose} type="button" aria-label="关闭添加面板" />
      <aside className="drawer" aria-label="添加资料">
        <div className="drawer-header">
          <div>
            <p className="eyebrow">New material</p>
            <h2>添加资料</h2>
          </div>
          <button className="icon-button" onClick={onClose} title="关闭" type="button">
            <X size={18} />
          </button>
        </div>

        <div className="segmented wide">
          <button className={type === "chapter" ? "selected" : ""} onClick={() => setType("chapter")} type="button">
            <ListPlus size={17} />
            章节
          </button>
          <button className={type === "course" ? "selected" : ""} onClick={() => setType("course")} type="button">
            <FolderPlus size={17} />
            课程
          </button>
        </div>
        <p className="form-note">新增资料会自动同步，其他设备稍后会读取到。</p>

        <form className="drawer-form" onSubmit={submit}>
          {type === "chapter" ? (
            <>
              <label>
                所属课程
                <select value={courseId} onChange={(event) => setCourseId(event.target.value)}>
                  {courses.map((course) => (
                    <option key={course.id} value={course.id}>
                      {course.title}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                章节标题
                <input
                  value={chapterTitle}
                  onChange={(event) => setChapterTitle(event.target.value)}
                  placeholder="例如：第六章：设计模式总复习"
                />
              </label>

              <label>
                Markdown
                <textarea
                  value={chapterMarkdown}
                  onChange={(event) => setChapterMarkdown(event.target.value)}
                  placeholder="# 新章节&#10;&#10;## 复习重点&#10;&#10;- "
                  rows={10}
                />
              </label>

              <button className="secondary-button" onClick={fillTemplate} type="button">
                <Sparkles size={17} />
                使用复习模板
              </button>
            </>
          ) : (
            <label>
              课程名称
              <input
                value={courseTitle}
                onChange={(event) => setCourseTitle(event.target.value)}
                placeholder="例如：计算机网络"
              />
            </label>
          )}

          <button className="primary-button" type="submit">
            <Plus size={17} />
            添加{type === "chapter" ? "章节" : "课程"}
          </button>
        </form>
      </aside>
    </div>
  );
}

function readVersionedString(currentKey, pattern) {
  const current = localStorage.getItem(currentKey);
  if (current) return current;

  for (const { key } of getVersionedStorageKeys(pattern)) {
    const saved = localStorage.getItem(key);
    if (saved) return saved;
  }

  return "";
}

function readInitialActiveChapterId(courses) {
  const saved = localStorage.getItem(ACTIVE_KEY);
  return saved && findChapter(courses, saved) ? saved : getDefaultChapterId(courses);
}

function readInitialExpandedCourses(courses) {
  const saved = readJson(EXPANDED_KEY, null);
  if (Array.isArray(saved) && saved.length) {
    return new Set(saved);
  }

  for (const { key } of getVersionedStorageKeys(EXPANDED_STORAGE_PATTERN)) {
    const legacy = readJson(key, null);
    if (Array.isArray(legacy) && legacy.length) {
      return new Set(legacy);
    }
  }

  return new Set(getAllCourseIds(courses));
}

export function App() {
  const [courses, setCourses] = useStoredCourses();
  const contentRef = useRef(null);
  const searchRef = useRef(null);
  const publishTimerRef = useRef(null);
  const [activeChapterId, setActiveChapterId] = useState(() => {
    return readInitialActiveChapterId(courses);
  });
  const [expanded, setExpanded] = useState(() => {
    return readInitialExpandedCourses(courses);
  });
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mode, setMode] = useState("preview");
  const [query, setQuery] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [readerSize, setReaderSize] = useState(() => Number(localStorage.getItem(READER_SIZE_KEY)) || 17);
  const [theme, setTheme] = useState(() => localStorage.getItem(THEME_KEY) || "light");
  const syncingRef = useRef(false);
  const [syncStatus, setSyncStatus] = useState("");
  const [syncBusy, setSyncBusy] = useState(false);

  const active = useMemo(() => findChapter(courses, activeChapterId), [courses, activeChapterId]);
  const visibleMarkdown = useMemo(() => stripLeadingH1(active?.chapter.markdown ?? ""), [active?.chapter.markdown]);
  const outline = useMemo(() => extractHeadings(visibleMarkdown), [visibleMarkdown]);
  const totalChapters = courses.reduce((sum, course) => sum + course.chapters.length, 0);

  function applyCloudData(cloudData, { silent = false } = {}) {
    const hasCloudSource = Boolean(cloudData.updatedAt) || cloudData.courses.length > 0;
    if (!hasCloudSource) return false;

    const nextCourses = mergeCustomCourses(starterCourses, cloudData.courses);
    setCourses(nextCourses);
    setExpanded((current) => new Set([...current, ...getAllCourseIds(nextCourses)]));
    if (!silent) {
      setSyncStatus(cloudData.courses.length ? "已读取云端资料。" : "云端自建章节为空，本机已同步清理。");
    }
    return true;
  }

  async function publishNow(mutation, successMessage = "已同步到云端。其他设备会自动读取。") {
    setSyncBusy(true);
    syncingRef.current = true;
    setSyncStatus("正在同步到云端...");
    let published = false;
    try {
      const cloudData = await publishCloudMutation(mutation);
      published = true;
      applyCloudData(cloudData, { silent: true });
      setSyncStatus(successMessage);
    } catch (error) {
      setSyncStatus(`${error.message} 本机内容已保留，稍后请再编辑一次触发同步。`);
    } finally {
      setSyncBusy(false);
      if (published) {
        syncingRef.current = false;
      }
    }
  }

  function scheduleCloudPublish(mutation, successMessage) {
    window.clearTimeout(publishTimerRef.current);
    syncingRef.current = true;
    setSyncStatus("已保存，正在准备同步...");
    publishTimerRef.current = window.setTimeout(() => {
      publishTimerRef.current = null;
      publishNow(mutation, successMessage);
    }, CLOUD_PUBLISH_DELAY);
  }

  async function pullCloud({ silent = false } = {}) {
    setSyncBusy(true);
    if (!silent) setSyncStatus("正在读取云端资料...");
    try {
      const cloudData = await fetchCloudData();
      if (!applyCloudData(cloudData, { silent }) && !silent) setSyncStatus("云端暂无自建章节。");
    } catch (error) {
      if (!silent) setSyncStatus(error.message);
    } finally {
      setSyncBusy(false);
    }
  }

  useEffect(() => {
    if (!active && courses.length) {
      setActiveChapterId(getDefaultChapterId(courses));
    }
  }, [active, courses]);

  useEffect(() => {
    if (activeChapterId) {
      localStorage.setItem(ACTIVE_KEY, activeChapterId);
      contentRef.current?.scrollTo({ top: 0 });
    }
  }, [activeChapterId]);

  useEffect(() => {
    localStorage.setItem(EXPANDED_KEY, JSON.stringify([...expanded]));
  }, [expanded]);

  useEffect(() => {
    localStorage.setItem(READER_SIZE_KEY, String(readerSize));
  }, [readerSize]);

  useEffect(() => {
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  useEffect(() => {
    let cancelled = false;

    const syncFromCloud = (silent = false) => {
      if (silent && syncingRef.current) return;
      fetchCloudData()
        .then((cloudData) => {
          if (cancelled) return;
          const changed = applyCloudData(cloudData, { silent });
          if (changed && !silent) {
            setSyncStatus(cloudData.courses.length ? "已自动读取云端自建资料。" : "云端自建章节为空，本机已同步清理。");
          }
        })
        .catch((error) => {
          if (!cancelled && !silent) {
            setSyncStatus(error.message);
          }
        });
    };

    syncFromCloud(false);
    const pollTimer = window.setInterval(() => syncFromCloud(true), CLOUD_POLL_INTERVAL);

    return () => {
      cancelled = true;
      window.clearInterval(pollTimer);
      window.clearTimeout(publishTimerRef.current);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const target = event.target;
      const isTyping =
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target instanceof HTMLSelectElement;

      if (event.key === "/" && !isTyping) {
        event.preventDefault();
        searchRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const updateChapter = (patch) => {
    if (!active) return;
    setCourses((current) => {
      let updatedChapter = null;
      const nextCourses = current.map((course) =>
        course.id === active.course.id
          ? {
              ...course,
              chapters: course.chapters.map((chapter) =>
                chapter.id === active.chapter.id
                  ? (updatedChapter = { ...chapter, ...patch })
                  : chapter,
              ),
            }
          : course,
      );
      if (updatedChapter && isCustomChapter(active.course.id, active.chapter.id)) {
        scheduleCloudPublish(
          {
            action: "upsertChapter",
            course: {
              id: active.course.id,
              title: active.course.title,
            },
            chapter: updatedChapter,
          },
          "章节修改已同步到云端。",
        );
      } else {
        setSyncStatus("已自动保存到本机。");
      }
      return nextCourses;
    });
  };

  const addCourse = (title) => {
    const courseId = createId("course");
    const chapterId = createId("chapter");
    const newCourse = {
      id: courseId,
      title,
      chapters: [
        {
          id: chapterId,
          title: "第一章：复习提纲",
          markdown: templateFor("第一章：复习提纲", title),
        },
      ],
    };

    setCourses((current) => [...current, newCourse]);
    scheduleCloudPublish(
      {
        action: "upsertCourse",
        course: newCourse,
      },
      "新课程已同步到云端。",
    );
    setExpanded((current) => new Set([...current, courseId]));
    setActiveChapterId(chapterId);
    setMode("preview");
    return true;
  };

  const addChapter = (courseId, chapter) => {
    const targetCourse = courses.find((course) => course.id === courseId);
    if (!targetCourse) return false;
    const chapterId = createId("chapter");
    const newChapter = { id: chapterId, ...chapter };
    setCourses((current) => {
      return current.map((course) =>
        course.id === courseId
          ? {
              ...course,
              chapters: [...course.chapters, newChapter],
            }
          : course,
      );
    });
    scheduleCloudPublish(
      {
        action: "upsertChapter",
        course: {
          id: targetCourse.id,
          title: targetCourse.title,
        },
        chapter: newChapter,
      },
      "新章节已同步到云端。",
    );
    setExpanded((current) => new Set([...current, courseId]));
    setActiveChapterId(chapterId);
    setMode("preview");
    return true;
  };

  const deleteActiveChapter = () => {
    if (!active || totalChapters <= 1) return;
    const shouldSyncDelete = isCustomChapter(active.course.id, active.chapter.id);
    const nextCourses = courses.map((course) =>
      course.id === active.course.id
        ? {
            ...course,
            chapters: course.chapters.filter((chapter) => chapter.id !== active.chapter.id),
          }
        : course,
    );
    const nextChapterId =
      active.course.chapters[active.chapterIndex + 1]?.id ||
      active.course.chapters[active.chapterIndex - 1]?.id ||
      getFirstChapterId(nextCourses);
    if (shouldSyncDelete) {
      scheduleCloudPublish(
        {
          action: "deleteChapter",
          courseId: active.course.id,
          chapterId: active.chapter.id,
        },
        "章节已从云端删除。",
      );
    } else {
      setSyncStatus("内置章节已从本机删除，不会影响其他设备。");
    }
    setCourses(nextCourses);
    setActiveChapterId(nextChapterId);
  };

  const toggleCourse = (courseId) => {
    setExpanded((current) => {
      const next = new Set(current);
      if (next.has(courseId)) {
        next.delete(courseId);
      } else {
        next.add(courseId);
      }
      return next;
    });
  };

  return (
    <main
      className={`app-shell ${sidebarCollapsed ? "nav-collapsed" : ""} theme-${theme}`}
      style={{
        "--reader-size": `${readerSize}px`,
        "--sidebar-size": `${Math.max(14, readerSize - 1)}px`,
        "--outline-size": `${Math.max(13, readerSize - 1)}px`,
      }}
    >
      <header className="site-header">
        <div className="header-left">
          <button
            className="icon-button plain"
            onClick={() => setSidebarCollapsed((current) => !current)}
            title={sidebarCollapsed ? "展开目录" : "收起目录"}
            type="button"
          >
            {sidebarCollapsed ? <PanelLeftOpen size={20} /> : <PanelLeftClose size={20} />}
          </button>
          <span className="site-mark" aria-hidden="true">
            <Sparkles size={15} />
          </span>
          <strong className="site-brand">Pique&apos;s Website</strong>
        </div>

        <label className="header-search">
          <Search size={18} />
          <input
            ref={searchRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="搜索"
          />
          <kbd>/</kbd>
        </label>

        <div className="header-actions">
          <div className="type-control" title="阅读字号">
            <Type size={17} />
            <button
              onClick={() => setReaderSize((size) => Math.max(14, size - 1))}
              type="button"
              aria-label="减小字号"
            >
              A-
            </button>
            <input
              aria-label="阅读字号"
              max="22"
              min="14"
              onChange={(event) => setReaderSize(Number(event.target.value))}
              type="range"
              value={readerSize}
            />
            <button
              onClick={() => setReaderSize((size) => Math.min(22, size + 1))}
              type="button"
              aria-label="增大字号"
            >
              A+
            </button>
          </div>
          <div className="segmented">
            <button className={mode === "preview" ? "selected" : ""} onClick={() => setMode("preview")} type="button">
              <Eye size={17} />
              阅读
            </button>
            <button className={mode === "markdown" ? "selected" : ""} onClick={() => setMode("markdown")} type="button">
              <FileText size={17} />
              Markdown
            </button>
          </div>
          <button className="icon-button" onClick={() => setDrawerOpen(true)} title="添加资料" type="button">
            <Plus size={19} />
          </button>
          <button
            className="icon-button"
            onClick={() => setTheme((current) => (current === "light" ? "dark" : "light"))}
            title="外观"
            type="button"
          >
            <Moon size={18} />
          </button>
        </div>
      </header>

      <aside className={`sidebar ${sidebarCollapsed ? "collapsed" : ""}`}>
        <div className="sidebar-head">
          <p>
            <ListPlus size={16} />
            目录
          </p>
          <span>{totalChapters} 个章节</span>
        </div>

        <ChapterTree
          courses={courses}
          expanded={expanded}
          activeChapterId={activeChapterId}
          query={query}
          sidebarCollapsed={sidebarCollapsed}
          onToggleCourse={toggleCourse}
          onSelectChapter={(chapterId) => {
            if (chapterId) {
              setActiveChapterId(chapterId);
              setMode("preview");
            }
          }}
        />

        <div className="sidebar-footer">
          <button className="primary-button compact" onClick={() => setDrawerOpen(true)} title="添加资料" type="button">
            <Plus size={18} />
            <span>添加资料</span>
          </button>
        </div>
      </aside>

      <section className="workspace">
        <div className="content-scroll" ref={contentRef}>
          {active ? (
            <article className="study-page">
              <div className="chapter-hero">
                <p className="eyebrow">{active.course.title}</p>
                {mode === "markdown" ? (
                  <input
                    className="title-input"
                    value={active.chapter.title}
                    onChange={(event) => updateChapter({ title: event.target.value })}
                  />
                ) : (
                  <h1>{active.chapter.title}</h1>
                )}
                <div className="chapter-meta">
                  <span>
                    <BookOpen size={14} />
                    第 {active.chapterIndex + 1} 节
                  </span>
                  <span>
                    <FileText size={14} />
                    {active.chapter.markdown.length} 字符
                  </span>
                  <span>
                    <Sparkles size={14} />
                    {syncBusy ? "同步中" : "云端同步"}
                  </span>
                </div>
                {syncStatus ? <p className="chapter-sync-status">{syncStatus}</p> : null}
              </div>

              {mode === "markdown" ? (
                <section className="editor-panel" aria-label="Markdown 编辑器">
                  <div className="editor-toolbar">
                    <span>Markdown 源码</span>
                    <button
                      className="danger-button"
                      disabled={totalChapters <= 1}
                      onClick={deleteActiveChapter}
                      title="删除当前章节"
                      type="button"
                    >
                      <Trash2 size={17} />
                      删除章节
                    </button>
                  </div>
                  <textarea
                    className="markdown-editor"
                    value={active.chapter.markdown}
                    onChange={(event) => updateChapter({ markdown: event.target.value })}
                    spellCheck={false}
                  />
                </section>
              ) : (
                <section className="reader-panel" aria-label="章节内容">
                  <div className="markdown-body">
                    {renderMarkdown(visibleMarkdown, theme, (chapterId) => {
                      setActiveChapterId(chapterId);
                      setMode("preview");
                    })}
                  </div>
                </section>
              )}
            </article>
          ) : (
            <div className="empty-state">
              <BookOpen size={30} />
              <h1>还没有章节</h1>
              <button className="primary-button" onClick={() => setDrawerOpen(true)} type="button">
                <Plus size={17} />
                添加资料
              </button>
            </div>
          )}
        </div>

        <aside className="outline-panel" aria-label="该页内容">
          <p>
            <Sparkles size={15} />
            该页内容
          </p>
          <nav>
            {outline.length ? (
              outline.map((heading, index) => (
                <a
                  className={`outline-link level-${heading.level} ${index === 0 ? "active" : ""}`}
                  href={`#${heading.id}`}
                  key={heading.id}
                >
                  {heading.text}
                </a>
              ))
            ) : (
              <span className="outline-empty">当前章节暂无小标题</span>
            )}
          </nav>
        </aside>
      </section>

      <AddDrawer
        courses={courses}
        activeCourseId={active?.course.id}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onAddCourse={addCourse}
        onAddChapter={addChapter}
      />
    </main>
  );
}
