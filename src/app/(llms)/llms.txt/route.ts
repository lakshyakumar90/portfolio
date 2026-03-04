import { SITE_INFO } from "@/config/site"
import { getBlogDocs } from "@/features/doc/data/documents"
import { USER } from "@/features/portfolio/data/user"

const allPosts = getBlogDocs()

const content = `# lakshyakumar.in

> Personal site for ${USER.displayName}. ${USER.bio}

## LLM Files

- [llms.txt](${SITE_INFO.url}/llms.txt): Index of AI-readable sources on this website.
- [llms-full.txt](${SITE_INFO.url}/llms-full.txt): Full combined profile and blog content for LLM use.

## Profile Sources

- [About](${SITE_INFO.url}/about.md): Intro, contact context, social links, and stack.
- [Experience](${SITE_INFO.url}/experience.md): Roles, timelines, and responsibilities.
- [Projects](${SITE_INFO.url}/projects.md): Project summaries, links, and tech.
- [Awards](${SITE_INFO.url}/awards.md): Awards and achievements.
- [Certifications](${SITE_INFO.url}/certifications.md): Certifications and credentials.

## Blog

${allPosts.map((item) => `- [${item.metadata.title}](${SITE_INFO.url}/blog/${item.slug}.mdx): ${item.metadata.description}`).join("\n")}

## Feeds

- [RSS](${SITE_INFO.url}/rss): Latest blog posts in RSS format.
`

export const dynamic = "force-static"

export async function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  })
}
