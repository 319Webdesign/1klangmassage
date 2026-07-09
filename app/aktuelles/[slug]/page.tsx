import Image from 'next/image'
import { notFound } from 'next/navigation'
import { PortableText, type PortableTextBlock } from '@portabletext/react'
import { groq } from 'next-sanity'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { isSanityConfigured, sanityClient } from '@/lib/sanity.client'
import { urlFor } from '@/sanity/lib/image'

export const revalidate = 60

type PostSlug = {
  slug: string
}

type PostDetail = {
  title: string
  publishedAt: string
  body: PortableTextBlock[]
  mainImage?: unknown
  alt?: string
}

type SanityImageLike = {
  asset?: {
    _ref?: string
  }
}

const slugsQuery = groq`*[_type == "post" && defined(slug.current)]{
  "slug": slug.current
}`

const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  publishedAt,
  body,
  mainImage,
  "alt": mainImage.alt
}`

function formatDate(dateString: string) {
  return new Intl.DateTimeFormat('de-DE', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(dateString))
}

function getImageUrl(image: unknown, width: number, height: number) {
  const candidate = image as SanityImageLike | null
  if (!candidate?.asset?._ref) {
    return null
  }

  return urlFor(candidate).width(width).height(height).url()
}

export async function generateStaticParams() {
  if (!isSanityConfigured || !sanityClient) {
    return []
  }

  const posts = await sanityClient.fetch<PostSlug[]>(slugsQuery)
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function AktuellesDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  if (!isSanityConfigured || !sanityClient) {
    notFound()
  }

  const post = await sanityClient.fetch<PostDetail | null>(postBySlugQuery, { slug })

  if (!post) {
    notFound()
  }

  const imageUrl = getImageUrl(post.mainImage, 1600, 800)

  return (
    <div className="flex min-h-screen flex-col bg-sage-100">
      <Header />
      <main className="flex-1 px-4 py-12 md:px-8 md:py-16 lg:px-12 xl:px-24">
        <article className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-sage-200 bg-white/85 shadow-sm">
          {imageUrl ? (
            <div className="relative aspect-[16/8] w-full bg-sage-200">
              <Image
                src={imageUrl}
                alt={post.alt || post.title}
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
            </div>
          ) : null}

          <div className="px-6 py-8 md:px-10 md:py-12">
            <p className="text-site-body font-medium uppercase tracking-wide text-sage-700">
              {formatDate(post.publishedAt)}
            </p>
            <h1 className="text-site-heading mt-3 text-brown-600">
              {post.title}
            </h1>

            <div className="text-site-prose mt-8 max-w-none">
              <PortableText value={post.body} />
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
