import { SITE_INFO } from "@/config/site"
import { getBlogDocs } from "@/features/doc/data/documents"

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;")
}

export function buildBlogRssFeed() {
  const allPosts = getBlogDocs()
  const sortedPosts = allPosts.toSorted((a, b) => {
    const aDate = new Date(a.metadata.updatedAt ?? a.metadata.createdAt).getTime()
    const bDate = new Date(b.metadata.updatedAt ?? b.metadata.createdAt).getTime()
    return bDate - aDate
  })

  const itemsXml = sortedPosts
    .map((post) => {
      const title = escapeXml(post.metadata.title)
      const description = escapeXml(post.metadata.description ?? "")
      const link = `${SITE_INFO.url}/blog/${post.slug}`
      const guid = link
      const pubDate = new Date(
        post.metadata.updatedAt ?? post.metadata.createdAt
      ).toUTCString()

      return `<item>
  <title>${title}</title>
  <link>${link}</link>
  <guid>${guid}</guid>
  <description>${description}</description>
  <pubDate>${pubDate}</pubDate>
</item>`
    })
    .join("\n")

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(`Blog | ${SITE_INFO.name}`)}</title>
    <link>${SITE_INFO.url}</link>
    <description>${escapeXml(SITE_INFO.description)}</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${itemsXml}
  </channel>
</rss>`
}
