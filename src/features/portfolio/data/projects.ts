import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "aurora-ui",
    slug: "aurora-ui",
    title: "Aurora UI - A Modern, Scalable UI System",
    period: {
      start: "01.2026",
    },
    link: "https://github.com/lakshyakumar90/aurora-ui",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Zod",
      "React Hook Form",
      "Monaco Editor",
    ],
    description:
      "A modern, developer-focused component library and design system built for performance, scalability, and clean architecture.",
    logo: "/images/lakshya-mark.svg",
    heroImage: "/images/projects/aurora-ui-hero.png",
    videoUrl: "/videos/projects/aurora-ui.webm",
    role: "Full Stack",
    team: "Solo",
    status: "Completed",
    liveDemoUrl: "https://aurora-ui-opal.vercel.app",
    sourceCodeUrl: "https://github.com/lakshyakumar90/aurora-ui",
    overview:
      "Aurora UI is a modern, developer-focused component library and design system built with performance, scalability, and clean architecture in mind. It provides reusable, accessible, and beautifully designed UI components tailored for modern web applications, especially those built with Next.js and TypeScript.",
    offers: [
      "Reusable, production-ready component system for React and Next.js projects.",
      "Design system consistency with Tailwind CSS and shadcn UI.",
      "Type-safe development with TypeScript for better maintainability.",
      "Composable architecture with modular and extensible components.",
      "Form handling and validation with React Hook Form and Zod.",
      "Rich content support with custom UI blocks and Monaco-powered code blocks.",
    ],
    whyBuilt: [
      "UI components were being rewritten repeatedly across projects.",
      "Design consistency was difficult to maintain at scale.",
      "Projects became harder to scale without a structured design system.",
      "Performance suffered when components were not optimized early.",
      "Developer experience is as important as end-user experience.",
    ],
    learnings: [
      "Built a scalable component architecture from scratch.",
      "Improved performance optimization strategies in Next.js applications.",
      "Deepened focus on accessibility and clean code practices.",
      "Learned how design systems influence product scalability.",
      "Strengthened implementation of form validation, type safety, and modular architecture.",
    ],
    futurePlans: [
      "Expand the library with advanced data components like tables, charts, and filters.",
      "Improve documentation and developer onboarding experience.",
      "Add a full theme customization system.",
      "Grow Aurora UI into a broader open-source design system ecosystem.",
      "Implement payment gateway support.",
      "Publish as an installable npm package.",
    ],
    isExpanded: true,
  },
]

export function getProjectSlug(project: Project) {
  return project.slug ?? project.id
}

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((project) => getProjectSlug(project) === slug)
}
