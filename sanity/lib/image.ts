import { createImageUrlBuilder, type SanityImageSource } from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

// https://www.sanity.io/docs/image-url
const builder =
  projectId && dataset
    ? createImageUrlBuilder({ projectId, dataset })
    : null

export const urlFor = (source: SanityImageSource) => {
  if (!builder) {
    throw new Error(
      'Sanity image builder is not configured. Missing NEXT_PUBLIC_SANITY_PROJECT_ID or NEXT_PUBLIC_SANITY_DATASET.'
    )
  }

  return builder.image(source)
}
