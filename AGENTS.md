# Pique Review Site Instructions

This repo is the user's personal revision website. Keep it practical, polished, and optimized for exam review rather than marketing copy.

## Working Style

- Run the local server yourself and open/verify the preview when UI behavior matters. Do not give the user server-start instructions when you can run it.
- Use Node 22 for local commands: `. "$HOME/.nvm/nvm.sh" && nvm use 22`.
- When network access or GitHub push is needed, the user prefers proxy port 7890:
  `export http_proxy=http://127.0.0.1:7890 https_proxy=http://127.0.0.1:7890 all_proxy=socks5://127.0.0.1:7890`.
- Build checks:
  - Local: `npm run build`
  - GitHub Pages path: `GITHUB_PAGES=true npm run build`
- GitHub Pages deploys from `main` through `.github/workflows/deploy.yml`.
- Live site: `https://ziwenli.cn/pique-review-site/`.

## App Structure

- Main app file: `src/App.jsx`.
- Course Markdown files live in `src/content/`.
- Built-in course data is the `starterCourses` array in `src/App.jsx`.
- To add a new durable course/chapter:
  1. Create a Markdown file under `src/content/`.
  2. Import it in `src/App.jsx` with `?raw`.
  3. Add it to the relevant course in `starterCourses`, or create a new course group.
  4. If changing built-in starter content that existing browsers should reload, bump `STORAGE_KEY`, `ACTIVE_KEY`, and `EXPANDED_KEY` version suffixes.
  5. Set `DEFAULT_CHAPTER_ID` only when the new chapter should open first.
- Internal chapter links use `[text](chapter:chapter-id)`.
- Mermaid/UML code fences are rendered visually in reading mode. The Mermaid renderer is queued to avoid multi-diagram race issues; preserve that behavior.

## Review Content Convention

- Content should be detailed enough for exam preparation, not just summaries.
- Use Chinese and English together. Prefer short Chinese explanation followed by the English equivalent/translation when useful.
- Mark important exam vocabulary, formulas, and high-risk distinctions visually:
  - `==term==` for purple emphasis.
  - `**term**` for plain bold emphasis.
- Use tables for comparisons, formulas, vocabulary, and answer frameworks.
- Use rendered Mermaid/UML-style diagrams when a diagram helps understanding. Do not leave important diagrams only as raw code or ASCII art.
- Self-test sections must include:
  - question,
  - process or thinking steps when relevant,
  - answer,
  - Chinese and English.
- If a topic was already explained in detail in another chapter, link to it instead of duplicating everything.

## Course-Material Workflow

- When the user provides PDFs, PPTs, or pasted GPT conversations, use both:
  - the original course files for accuracy and examples,
  - the pasted conversations for the user's preferred explanation style and exam focus.
- Do not copy conversational filler such as "你说得对" or "上次我..." into study notes.
- Preserve useful bilingual teaching content from the conversations.
- Extract PDF/PPT after-class activities, sample questions, calculation questions, and in-slide questions into a dedicated exercise chapter when requested.
- Exercise chapters should have questions, process, and answers, in Chinese and English.

## Current Software Project Management Course

- Course group id/title: `course-pm` / `软件项目管理`.
- Key chapters:
  - `pm-final-review`: final framework and high-frequency vocabulary.
  - `pm-exercises`: after-class questions, sample questions, process, and answers.
  - `pm-drawing`: high-frequency diagrams and calculation/drawing practice.
  - `pm-l01` to `pm-l11`: lecture-by-lecture detailed notes.
- Keep the same style for future courses: final review chapter, lecture/detail chapters, drawing/tool chapter if relevant, and exercise chapter if the source material contains questions.

## Visual Design

- Keep the Apple-like simple study style: clean spacing, restrained color, readable typography, useful icons, and no loud decorative layout.
- The user prefers compact text. Do not make body text or sidebar text oversized.
- The user can adjust reading text size through the header control; preserve this feature.
- Left sidebar must remain collapsible and hierarchical.
- Markdown editing mode must remain available for every chapter.

## Product Design Notes

- Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal.
- When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in this file.
- When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.
