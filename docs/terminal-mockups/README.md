# Terminal site mockups

Three self-contained interactive prototypes explore how much of davidaw.ad should behave like a shell. Each HTML file embeds its styles, sample data, and command behavior; it makes no network requests. The prototypes demonstrate `help`, `ls`, `cd`, `grep`, `open`, `cat README`, `tree`, history, completion, and project detail output.

| Option | Interaction | Effort | Bundle size | Accessibility | SEO impact |
| --- | --- | --- | --- | --- | --- |
| [A — xterm-style](a/index.html) | Full viewport terminal, ANSI-like color roles, project manual and inline image placeholder. | Medium to high; a real xterm.js integration adds terminal lifecycle, adapters and sizing work. | Highest if xterm.js ships; mockup itself is dependency-free. | Terminal conventions are familiar to shell users; screen-reader output and mobile input need careful handling. | Project content is client-rendered in the prototype, so weaker without SSR. |
| [B — document terminal](b/index.html) | Hand-rolled DOM output styled like a readable manual page. | Low to medium; commands and HTML output are owned directly. | Lowest; no terminal library. | Semantic, selectable text and standard input are straightforward; command metaphors still need discoverable help. | Moderate to strong when command output is server-rendered as normal HTML. |
| [C — hybrid](c/index.html) | Conventional portfolio content beside a terminal panel. | Medium; shell state and normal navigation must stay in sync. | Low to medium; no terminal library required. | Normal links remain available while terminal actions have a keyboard path. | Strongest: primary content remains visible as ordinary page content. |

Effort and SEO notes describe likely production work, not a benchmark. Screenshots use desktop (1440×1000) and mobile (390×844) viewports and capture the full page; the mobile exports are taller where content requires scrolling.

## Screenshots

- A: [desktop](a/desktop.png), [mobile](a/mobile.png)
- B: [desktop](b/desktop.png), [mobile](b/mobile.png)
- C: [desktop](c/desktop.png), [mobile](c/mobile.png)
