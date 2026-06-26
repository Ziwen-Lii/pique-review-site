**Source Visual Truth**
- Sidebar reference: `/var/folders/v3/x57hn__d6r5_h8q1yt3lt7_h0000gn/T/TemporaryItems/NSIRD_screencaptureui_8ipvq3/截屏2026-06-26 20.50.14.png`
- Document-site reference: `/var/folders/v3/x57hn__d6r5_h8q1yt3lt7_h0000gn/T/TemporaryItems/NSIRD_screencaptureui_1aQpma/截屏2026-06-26 21.10.02.png`

**Implementation Evidence**
- Local URL: `http://127.0.0.1:5173/`
- Viewport: desktop Chrome
- State: reading mode, left course tree expanded, right outline visible
- Full-view comparison evidence: inspected in Chrome with the Product Design reference visible in the conversation and adjusted to the document-site direction.
- Focused region comparison evidence: checked left tree hierarchy, top toolbar, reader content, table rendering, and right outline.

**Findings**
- No remaining P0/P1/P2 issues after changing from card-style UI to the requested document-site layout.
- Font size was reduced after review and is now user-adjustable from the top toolbar.
- Brand label changed from generic course copy to `Pique's Website`; subtle icons were added to navigation, outline, and metadata.

**Patches Made Since Previous QA Pass**
- Added reading-size control with local persistence.
- Added `/` keyboard shortcut for search focus.
- Added light/dark appearance toggle.
- Added GitHub Pages workflow and Pages-aware Vite base path.

**Follow-up Polish**
- Optional later: import real course Markdown files instead of seed data.

final result: passed
