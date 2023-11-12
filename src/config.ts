import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://davidaw.ad",
  author: "David Awad",
  desc: "David Awad's personal blog site.",
  title: "David Awad",
  ogImage: "davidawad-banner.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

const siteTitleTag = "David Awad | Lawyer, Investor, Engineer"

// set to [] to use the environment default
export const LOCALE = ["en-EN", "ar-EG"];

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Twitter",
    href: "https://twitter.com/realdavidawad/",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "Github",
    href: "https://github.com/davidawad/",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/realdavidawad/",
    linkTitle: `${SITE.title} on Instagram`,
    active: false,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/davidaawad/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:me@davidaw.ad",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  }
];
