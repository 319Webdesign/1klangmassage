/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

import { NextStudio } from 'next-sanity/studio'

export const dynamic = 'force-static'

export { metadata, viewport } from 'next-sanity/studio'

export default async function StudioPage() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

  if (!projectId || !dataset) {
    return (
      <main className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="text-2xl font-semibold">Sanity Studio ist nicht konfiguriert</h1>
        <p className="mt-4 text-base">
          Fuer diese Umgebung fehlen die Variablen
          {' '}
          <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code>
          {' '}
          und/oder
          {' '}
          <code>NEXT_PUBLIC_SANITY_DATASET</code>.
        </p>
      </main>
    )
  }

  const config = (await import('../../../sanity.config')).default
  return <NextStudio config={config} />
}
