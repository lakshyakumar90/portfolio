import { notFound } from "next/navigation"

import { isRegistryPublic } from "@/config/site"
import { getAllDocs } from "@/features/doc/data/documents"
import { getLLMText } from "@/features/doc/lib/get-llm-text"

export async function generateStaticParams() {
  const docs = getAllDocs()

  return docs.map((doc) => ({
    slug: doc.slug,
  }))
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params

  const allDocs = getAllDocs()
  const post = allDocs.find((doc) => doc.slug === slug)

  if (!post) {
    notFound()
  }

  if (!isRegistryPublic && post.metadata.category === "components") {
    notFound()
  }

  return new Response(await getLLMText(post), {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  })
}
