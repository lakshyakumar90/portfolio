# AI Agent Guidelines for chanhdai.com

This guide provides essential information for AI agents working with the chanhdai.com codebase - a Next.js dev portfolio, blog, and component registry website.

## Project Overview

Next.js portfolio, blog website with:

- Blog with MDX content

### Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Package Manager**: pnpm
- **Language**: TypeScript
- **Content**: MDX for blog posts
- **Deployment**: Vercel

## Project Structure

### Key Directories

- `src/app/` - Next.js App Router pages (routes, layouts, API routes)
- `src/components/` - Shared UI components
- `src/features/` - Feature-based modules (doc, blog, portfolio, sponsor)
- `src/config/` - Site and registry configuration
- `src/hooks/` - Custom React hooks
- `src/lib/` - Utility libraries and helpers
- `src/styles/` - Global styles and CSS
- `src/assets/` - Static assets (fonts, metadata)
- `src/scripts/` - Build and utility scripts
- `src/types/` - TypeScript type definitions
- `src/utils/` - Utility functions

### Important Files

- `src/config/site.ts` - Site configuration and navigation
- `src/features/portfolio/data/user.ts` - User portfolio data
- `src/registry/index.ts` - Registry entry point
- `components.json` - shadcn/ui configuration

## Development Guidelines

### Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev  # Runs on port 1408

# Build for production
pnpm build
```

### Code Standards

- **TypeScript**: Strict mode enabled
- **ESLint**: Next.js configuration
- **Prettier**: Code formatting
- **File naming**: kebab-case for files and component files

### Coding Guidelines

When writing code for this project, follow these principles:

- Write type-safe TypeScript code with explicit types when necessary
- Use descriptive variable and function names that make code self-documenting
- Add comments only for complex logic or non-obvious behavior (focus on "why" not "what")
- No emojis in code, comments, or commit messages
- Use JSDoc for public APIs when the signature alone isn't clear
- Follow SOLID principles: keep functions small, focused, and easy to understand

## Working with Content

### Document System (`src/features/doc/`)

The `doc` feature is the centralized content and data layer used by both Blog and Components pages:

- `types/document.ts` - Shared types: `Doc`, `DocMetadata`, `DocPreview`
- `data/documents.ts` - Data fetching: `getAllDocs`, `getDocBySlug`, `getDocsByCategory`, `findNeighbour`
- `lib/get-llm-text.ts` - MDX processing for LLM consumption
- `content/` - All MDX content files (blog posts and component docs)

The `blog` feature (`src/features/blog/`) contains only UI components and hooks for rendering (e.g., `PostItem`, `PostList`, `PostListWithSearch`, `PostKeyboardShortcuts`). It imports types and data from `features/doc`.

### Blog Posts

- Location: `src/features/doc/content/`
- Format: MDX files
- Supports: Custom components, code blocks, metadata
- Blog posts and component docs are distinguished by the `category` field in frontmatter

### User Portfolio

**Portfolio Data Files** (`src/features/portfolio/data/`):

- `user.ts` - Core personal information, bio, contact details, job history
- `experiences.ts` - Detailed work experience, education, company information
- `projects.ts` - Portfolio projects with descriptions, links, skills, logos
- `tech-stack.ts` - Technology stack, programming languages, tools, frameworks
- `certifications.ts` - Professional certifications, course completions, credentials
- `social-links.ts` - Social media profiles, professional networks, contact links

## Environment & Configuration

### Environment Variables

See `.env.example` for required variables:

**Core Application**:

- `APP_URL` - Application base URL (e.g., `https://acme.com`)

**External Services**:

- `GITHUB_API_TOKEN` - GitHub Personal Access Token for API calls ([Get token](https://github.com/settings/tokens))
- `NEXT_PUBLIC_DMCA_URL` - DMCA Protection badge URL ([DMCA ProtectionPro](https://www.dmca.com/ProtectionPro.aspx))

**Analytics & Tracking**:

- `NEXT_PUBLIC_POSTHOG_KEY` - PostHog project API key for analytics ([Get key](https://posthog.com))
- `NEXT_PUBLIC_POSTHOG_HOST` - PostHog API host URL (e.g., `https://ph.acme.com`)
- `NEXT_PUBLIC_POSTHOG_UI_HOST` - PostHog UI host URL (e.g., `https://us.i.posthog.com`)

### Analytics Events

The project uses PostHog for analytics tracking. Events are defined in `src/lib/events.ts` with Zod schema validation. PostHog is initialized in `src/instrumentation-client.ts` (production only) with consent management via `@c15t/nextjs` package.

### Site Configuration

- Navigation: `MAIN_NAV` in `src/config/site.ts`
- Theme colors: `META_THEME_COLORS`
- GitHub repo: `SOURCE_CODE_GITHUB_REPO`

## Common Tasks

### Updating User Information

Edit `src/features/portfolio/data/user.ts` with new:

- Personal information
- Job details
- Project descriptions
- Contact information

### Adding Blog Posts

1. Create MDX file in `src/features/doc/content/`
2. Include frontmatter metadata
3. Use custom components for enhanced content

### Adding Component Docs

1. Create MDX file in `src/features/doc/content/`
2. Include frontmatter metadata with `category: "components"`
3. Use custom components for enhanced content

### Styling Guidelines

- Use Tailwind CSS v4 syntax
- Follow existing color scheme (zinc-based)
- Support dark/light modes
- Use CSS variables for theme colors

## Important Notes

### Registry Dependencies

- Components may depend on external packages

### Auto-generated Files

**NEVER EDIT** these files directly:

- Files in `public/r/`

### Performance Considerations

- Components use React.lazy() for code splitting
- Images optimized with Next.js Image component
- MDX content is statically generated

### Personal Information

When adapting this codebase, ensure ALL personal information is replaced. See **User Portfolio** section above for data file locations. Also update `src/config/site.ts`, blog posts, and asset URLs throughout the codebase.

## Build Commands

```bash
pnpm build          # Production build
pnpm start          # Start production server
pnpm preview        # Build and preview locally
pnpm lint           # Run ESLint
pnpm format:write   # Format code with Prettier
pnpm check-types    # TypeScript type checking
```
