/**
 * src/data/engineering.ts
 *
 * Single source of truth for the Engineering page project list. Imported by
 * both the page (src/pages/engineering.astro) and the LLM-text endpoint
 * (src/pages/engineering/llms.txt.ts) so the two never drift.
 */

export type Project = {
  name: string;
  img: string;
  url: string | null;
  category: string;
  year: number;
  blurb: string;
};

export const projects: Project[] = [
  { name: "Contract Variable Highlighter", img: "/assets/img/posts/contract-highlighter/contract_post.png", url: null, category: "legal-tech", year: 2024, blurb: "VS Code-style highlighter that finds and color-codes every defined term in a contract so lawyers can spot drafting errors." },
  { name: "teamlab", img: "/assets/img/projects/teamlab.png", url: "https://teamlab.wtf", category: "web", year: 2023, blurb: "A hub for hackathon teams to find each other." },
  { name: "thoth", img: "/assets/img/projects/thoth.mp4", url: "https://github.com/DavidAwad/thoth", category: "tool", year: 2020, blurb: "Terminal-based note-taking with markdown-rendered preview." },
  { name: "TISLA Student Loan FAQ", img: "/assets/img/projects/sloan.png", url: "https://github.com/davidawad/TISLA_FAQ", category: "legal-tech", year: 2021, blurb: "Open-source student loan FAQ for the Institute of Student Loan Advisors." },
  { name: "pebbledex", img: "/assets/img/projects/pebbledex.jpg", url: "https://github.com/DavidAwad/pebbledex", category: "embedded", year: 2014, blurb: "Pokedex for the Pebble smartwatch — every Pokemon, on your wrist." },
  { name: "traffic-sign-classifier", img: "/assets/img/projects/traffic-sign.jpg", url: "https://github.com/DavidAwad/traffic-sign-classifier", category: "ml", year: 2017, blurb: "Deep CNN that classifies German traffic signs — Udacity self-driving car nanodegree." },
  { name: "lane-detection", img: "/assets/img/projects/lane-detection.jpg", url: "https://github.com/DavidAwad/lane-detection", category: "ml", year: 2017, blurb: "OpenCV pipeline that detects lane lines from a forward-facing dashcam feed." },
  { name: "Behavioral-Cloning", img: "/assets/img/projects/self-driving.mp4", url: "https://github.com/DavidAwad/Behavioral-Cloning", category: "ml", year: 2017, blurb: "End-to-end neural net that learns to steer a car from front-camera frames alone." },
  { name: "insightweets", img: "/assets/img/projects/insightweets.png", url: "https://github.com/DavidAwad/insightweets", category: "web", year: 2016, blurb: "Sentiment analysis dashboard for a Twitter user's timeline." },
  { name: "Read-Between-The-Lines", img: "/assets/img/projects/read between the lines.png", url: "https://github.com/DavidAwad/Read-Between-The-Lines", category: "legal-tech", year: 2018, blurb: "NLP tool that diffs two versions of a contract and surfaces the meaningful changes." },
  { name: "Archangel Raphael's Mission", img: "/assets/img/projects/ARM.png", url: "http://armnewbrunswick.org", category: "nonprofit", year: 2016, blurb: "Site + ops backbone for the 501(c)(3) David co-founded — mobile showers, meals, and hygiene services for the homeless." },
  { name: "capstone", img: "/assets/img/projects/capstone.mp4", url: "https://github.com/DavidAwad/capstone", category: "ml", year: 2018, blurb: "Self-driving car capstone — full ROS stack, perception + planning + control." },
  { name: "hi.rd", img: "/assets/img/projects/Hi.rd.png", url: "https://github.com/DavidAwad/hi.rd", category: "web", year: 2017, blurb: "Tiny URL shortener with click analytics." },
  { name: "blocky", img: "/assets/img/projects/blocky.png", url: "https://github.com/DavidAwad/blocky", category: "web", year: 2016, blurb: "Browser-based block-pushing puzzle game." },
  { name: "kinectsentrygun", img: "/assets/img/projects/sentrygun.jpg", url: "https://github.com/DavidAwad/kinectsentrygun", category: "embedded", year: 2015, blurb: "Kinect-driven motion-tracking sentry gun that follows a person around the room." },
  { name: "vehicle-detection", img: "/assets/img/projects/vehicle-detection.jpg", url: "https://github.com/DavidAwad/vehicle-detection", category: "ml", year: 2017, blurb: "SVM + HOG features pipeline that boxes every car in a dashcam frame." },
  { name: "spaceshare", img: "/assets/img/projects/spaceshare.png", url: "https://github.com/DavidAwad/spaceshare", category: "web", year: 2015, blurb: "Airbnb-style platform for sharing unused office space, built at a hackathon." },
  { name: "ironmyo", img: "/assets/img/projects/ironmyo.jpg", url: "https://github.com/DavidAwad/ironmyo", category: "embedded", year: 2016, blurb: "Myo armband interface that lets you control Iron Man-style HUD elements with hand gestures." },
  { name: "advanced-lane-detection", img: "/assets/img/projects/advanced-lane-detection.jpg", url: "https://github.com/DavidAwad/advanced-lane-detection", category: "ml", year: 2017, blurb: "Perspective-warp + polynomial fit that tracks curved lane lines under shadow and glare." },
  { name: "Waves", img: "/assets/img/projects/waves.png", url: "https://github.com/DavidAwad/Waves", category: "physics", year: 2016, blurb: "Numerical simulation of the 2D wave equation, written for an undergrad PDE course." },
];
