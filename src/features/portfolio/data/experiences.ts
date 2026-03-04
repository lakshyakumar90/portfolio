import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "ophanim-technologies",
    companyName: "Ophanim Technologies Pvt. Ltd.",
    positions: [
      {
        id: "1",
        title: "Full Stack Developer Intern",
        employmentPeriod: {
          start: "01.2026",
        },
        employmentType: "Internship",
        icon: "code",
        description: `- Working on the development and maintenance of the company’s official website using Next.js for the frontend and Node.js with Express.js for backend services.
- Contributing to building and enhancing the company’s internal CRM system, implementing scalable backend APIs and responsive user interfaces using Next.js, Node.js, and Express.js.`,
        skills: [
          "Next.js",
          "Node.js",
          "Express.js",
          "TypeScript",
          "CRM",
          "REST API",
          "Supabase",
          "Vercel"
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
]
