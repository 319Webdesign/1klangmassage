import type { MetadataRoute } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://1klang-massage.de'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '', priority: 1, changeFrequency: 'weekly' as const },
    { path: '/impressum', priority: 0.5, changeFrequency: 'yearly' as const },
    { path: '/datenschutz', priority: 0.5, changeFrequency: 'yearly' as const },
    { path: '/cookie-richtlinien', priority: 0.5, changeFrequency: 'yearly' as const },
  ]

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))
}
