import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Lakshya",
  lastName: "Kumar",
  displayName: "Lakshya Kumar",
  username: "lakshyakumar90",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code. Scalable Products.",
  flipSentences: [
    "Creating with code. Scalable Products.",
    "Full Stack Developer Intern",
    "Software Engineer",
  ],
  address: "India",
  phoneNumber: "KzkxOTY3NTc2MTAxNg==", // E.164 format, base64 encoded
  email: "bGFrc2h5YWt1bWFyNTAyM0BnbWFpbC5jb20=", // base64 encoded
  website: "https://lakshyakumar.in",
  jobTitle: "Full Stack Developer Intern",
  jobs: [
    {
      title: "Full Stack Developer Intern",
      company: "Ophanim Technologies Pvt. Ltd.",
      website: "https://ophanimtechnologies.com",
      experienceId: "ophanim-technologies",
    },
  ],
  about: `
- **Full-Stack Developer** focused on building scalable web applications with modern technologies and clean architecture.
- Experienced in **Next.js**, **React**, **Node.js**, **TypeScript**, and the **MERN** stack for high-performance web platforms.
- Passionate about creating interactive, real-time applications using technologies like **WebRTC**, **WebSockets**, and modern collaboration tools.
- Strong interest in performance optimization, SEO, and scalable deployments using **AWS**, **Vercel**, and workflows.
- Enjoy building developer-focused products, innovative tools, and open-source projects that improve productivity and user experience.
`,
  avatar: "/images/lakshya-avatar.webp",
  ogImage:
    "/images/screenshot-og-image-dark.png?v=7",
  namePronunciationUrl: "/audio/lakshya.mp3",
  timeZone: "Asia/Kolkata",
  keywords: [
    "lakshya",
    "lakshya kumar",
    "lakshyakumar90",
    "full stack developer",
    "next.js",
    "react",
  ],
  dateCreated: "2023-10-20", // YYYY-MM-DD
}
