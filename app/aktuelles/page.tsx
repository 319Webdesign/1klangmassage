import Link from 'next/link'
import { groq } from 'next-sanity'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { isSanityConfigured, sanityClient } from '@/lib/sanity.client'

export const revalidate = 60

type PostListItem = {
  _id: string
  title: string
  slug: string
  publishedAt: string
}

const postsQuery = groq`*[_type == "post"] | order(publishedAt desc){
  _id,
  title,
  "slug": slug.current,
  publishedAt
}`

function formatDate(dateString: string) {
  return new Intl.DateTimeFormat('de-DE', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(dateString))
}

export default async function AktuellesPage() {
  const posts =
    isSanityConfigured && sanityClient
      ? await sanityClient.fetch<PostListItem[]>(postsQuery)
      : []

  return (
    <div className="flex min-h-screen flex-col bg-sage-100">
      <Header />
      <main className="flex-1 px-4 py-12 md:px-8 md:py-16 lg:px-12 xl:px-24">
        <section className="mx-auto max-w-6xl">
          <h1 className="text-site-heading text-brown-600">
            Aktuelles
          </h1>
          <p className="text-site-body mt-4 max-w-3xl text-brown-500/90">
            Neuigkeiten, Impulse und Einblicke rund um Massage, Entspannung und
            Wohlbefinden.
          </p>

          {posts.length === 0 ? (
            <div className="mt-10 rounded-2xl border border-sage-300 bg-white/70 p-8 text-center shadow-sm">
              <p className="text-site-body text-brown-500">
                Aktuell sind noch keine Beitraege veroefentlicht.
              </p>
            </div>
          ) : (
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {posts.map((post) => (
                <article
                  key={post._id}
                  className="rounded-2xl border border-sage-200 bg-white/80 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <Link href={`/aktuelles/${post.slug}`} className="block">
                    <div className="p-6">
                      <p className="text-site-body font-medium uppercase tracking-wide text-sage-700">
                        {formatDate(post.publishedAt)}
                      </p>
                      <h2 className="text-site-lead mt-2 font-serif text-brown-600">
                        {post.title}
                      </h2>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  )
}
