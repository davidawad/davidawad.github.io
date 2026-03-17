import type { SocialIcons } from "../types";

const svgAttrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block h-6 w-6"`;

const socialIcons: SocialIcons = {
  Github: `<svg ${svgAttrs}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0c-2.4-1.6-3.5-1.3-3.5-1.3a4.2 4.2 0 0 0-.1 3.2a4.6 4.6 0 0 0-1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6.6-.6 1.2-.5 2v3.5"/>
  </svg>`,

  Gitlab: `<svg ${svgAttrs}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M21 14l-9 7l-9-7l3-11l3 7h6l3-7z"/>
  </svg>`,

  Farcaster: `<svg ${svgAttrs}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M3 21l18 0"/>
    <path d="M4 21v-15a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v15"/>
    <path d="M9 21v-8a3 3 0 0 1 6 0v8"/>
  </svg>`,

  Facebook: `<svg ${svgAttrs}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M7 10v4h3v7h4v-7h3l1-4h-4v-2a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2h-3"/>
  </svg>`,

  Instagram: `<svg ${svgAttrs}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <rect x="4" y="4" width="16" height="16" rx="4"/>
    <circle cx="12" cy="12" r="3"/>
    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501"/>
  </svg>`,

  GPGKey: `<svg ${svgAttrs}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M14 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0"/>
    <path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0z"/>
    <path d="M12.5 11.5l-4 4l1.5 1.5"/>
    <path d="M12 15l-1.5-1.5"/>
  </svg>`,

  LinkedIn: `<svg ${svgAttrs}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <rect x="4" y="4" width="16" height="16" rx="2"/>
    <line x1="8" y1="11" x2="8" y2="16"/>
    <line x1="8" y1="8" x2="8" y2="8.01"/>
    <line x1="12" y1="16" x2="12" y2="11"/>
    <path d="M16 16v-3a2 2 0 0 0-4 0"/>
  </svg>`,

  Mail: `<svg ${svgAttrs}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <rect x="3" y="5" width="18" height="14" rx="2"/>
    <polyline points="3 7 12 13 21 7"/>
  </svg>`,

  Twitter: `<svg ${svgAttrs}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M4 4l11.733 16h4.267l-11.733-16z"/>
    <path d="M4 20l6.768-6.768m2.46-2.46l6.772-6.772"/>
  </svg>`,

  Twitch: `<svg ${svgAttrs}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"/>
  </svg>`,

  YouTube: `<svg ${svgAttrs}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
  </svg>`,

  WhatsApp: `<svg ${svgAttrs}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9l-5.05.9"/>
    <path d="M9 10a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/>
  </svg>`,

  Snapchat: `<svg ${svgAttrs}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M16.882 7.842a4.882 4.882 0 0 0-9.764 0c0 4.273-.213 6.409-4.118 8.118c2 .882 2 .882 3 3c3 0 4 2 6 2s3-2 6-2c1-2.118 1-2.118 3-3c-3.906-1.709-4.118-3.845-4.118-8.118z"/>
  </svg>`,

  Pinterest: `<svg ${svgAttrs}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <line x1="8" y1="20" x2="12" y2="11"/>
    <path d="M10.7 14c.437 1.263 1.43 2 2.55 2c2.071 0 3.75-1.554 3.75-4a5 5 0 1 0-9.7 1.7"/>
    <circle cx="12" cy="12" r="9"/>
  </svg>`,

  TikTok: `<svg ${svgAttrs}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M9 12a4 4 0 1 0 4 4v-12a5 5 0 0 0 5 5"/>
  </svg>`,

  CodePen: `<svg ${svgAttrs}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M3 15l9 6l9-6l-9-6l-9 6"/>
    <path d="M3 9l9 6l9-6l-9-6l-9 6"/>
    <line x1="3" y1="9" x2="3" y2="15"/>
    <line x1="21" y1="9" x2="21" y2="15"/>
    <line x1="12" y1="3" x2="12" y2="9"/>
    <line x1="12" y1="15" x2="12" y2="21"/>
  </svg>`,

  Discord: `<svg ${svgAttrs}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <circle cx="9" cy="12" r="1"/>
    <circle cx="15" cy="12" r="1"/>
    <path d="M7.5 7.5c3.5-1 5.5-1 9 0"/>
    <path d="M7 16.5c3.5 1 6.5 1 10 0"/>
    <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833-1.667 3.5-3c.667-1.667.5-5.833-1.5-11.5c-1.457-1.015-3-1.34-4.5-1.5l-1 2.5"/>
    <path d="M8.5 17c0 1-1.356 3-1.832 3c-1.429 0-2.698-1.667-3.333-3c-.635-1.667-.476-5.833 1.428-11.5c1.388-1.015 2.782-1.34 4.237-1.5l1 2.5"/>
  </svg>`,

  GitLab: `<svg ${svgAttrs}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M21 14l-9 7l-9-7l3-11l3 7h6l3-7z"/>
  </svg>`,

  Reddit: `<svg ${svgAttrs}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M12 8c2.648 0 5.028.826 6.675 2.14a2.5 2.5 0 0 1 2.326 4.36c0 3.59-4.03 6.5-9 6.5c-4.875 0-8.845-2.8-9-6.294l-1-.206a2.5 2.5 0 0 1 2.326-4.36c1.646-1.313 4.026-2.14 6.674-2.14z"/>
    <path d="M12 8l1-5l6 1"/>
    <circle cx="19" cy="4" r="1"/>
    <circle cx="9" cy="13" r=".5" fill="currentColor"/>
    <circle cx="15" cy="13" r=".5" fill="currentColor"/>
    <path d="M10 17c.667.333 1.333.5 2 .5s1.333-.167 2-.5"/>
  </svg>`,

  Skype: `<svg ${svgAttrs}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M12 3a9 9 0 0 1 8.603 11.65a4.5 4.5 0 0 1-5.953 5.953a9 9 0 0 1-11.253-11.253a4.5 4.5 0 0 1 5.953-5.954a8.987 8.987 0 0 1 2.65-.396z"/>
    <path d="M8 14.5c.5 2 2.358 2.5 4 2.5c2.905 0 4-1.187 4-2.5c0-1.503-1.927-2.5-4-2.5s-4-.997-4-2.5c0-1.313 1.095-2.5 4-2.5c1.642 0 3.5.5 4 2.5"/>
  </svg>`,

  Steam: `<svg ${svgAttrs}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M16.5 5a4.5 4.5 0 1 1-.653 8.953l-4.347 3.009l0 .038a3 3 0 0 1-2.824 2.995l-.176.005a3 3 0 0 1-2.94-2.402l-2.56-1.098v-3.5l3.51 1.755a2.989 2.989 0 0 1 2.834-.635l2.727-3.818a4.5 4.5 0 0 1 4.429-5.302z"/>
    <circle fill="currentColor" cx="16.5" cy="9.5" r="1"/>
  </svg>`,

  Telegram: `<svg ${svgAttrs}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M15 10l-4 4l6 6l4-16l-18 7l4 2l2 6l3-4"/>
  </svg>`,

  Mastodon: `<svg ${svgAttrs} viewBox="0 0 24 24">
    <path fill="currentColor" stroke="none" d="M20.94 14c-.28 1.37-2.5 2.87-5.07 3.16c-1.34.16-2.66.31-4.07.24c-2.3-.1-4.1-.55-4.1-.55v.62c.33 2.46 2.49 2.61 4.54 2.68c2.07.07 3.91-.51 3.91-.51l.08 1.82s-1.44.77-4.02.92c-1.42.08-3.19-.04-5.25-.55c-4.47-1.18-5.24-5.94-5.37-10.77c-.04-1.43-.01-2.78-.01-3.91c0-4.93 3.23-6.37 3.23-6.37C6.4.62 9.13.14 12 .09h.07c2.87.05 5.6.53 7.22 1.18c0 0 3.23 1.44 3.23 6.37c0 0 .04 3.64-.58 6.36z"/>
    <path fill="white" stroke="none" d="M17.19 7.01v5.19h-2.06V7.18c0-1.06-.44-1.6-1.33-1.6c-.98 0-1.47.64-1.47 1.9v2.75H10.3V7.48c0-1.26-.49-1.9-1.47-1.9c-.89 0-1.33.54-1.33 1.6v5.02H5.44V6.98c0-1.06.27-1.9.81-2.51c.56-.61 1.29-.92 2.21-.92c1.06 0 1.86.41 2.38 1.22l.51.86l.51-.86c.53-.81 1.32-1.22 2.38-1.22c.92 0 1.65.31 2.21.92c.54.61.74 1.45.74 2.54z"/>
  </svg>`,
};

export default socialIcons;
