import { FAQ_ITEMS } from '@/lib/faq-data'

export function LocalBusinessJsonLd() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: '1klang massage',
    description:
      'Wellness & Entspannungsmassage in Darmstadt. Professionelle Klangmassagen, Entspannungsmassagen und Wellness-Anwendungen bei Stefan Klemm.',
    url: 'https://1klang-massage.de',
    telephone: '+491637293772',
    email: 'stefan@1klang-massage.de',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Carsonweg 1',
      addressLocality: 'Darmstadt',
      postalCode: '64289',
      addressCountry: 'DE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 49.899059,
      longitude: 8.669361,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '00:00',
      closes: '23:59',
      validFrom: '2024-01-01',
      validThrough: '2026-12-31',
      description: 'Termine nach Vereinbarung',
    },
    priceRange: '€€',
    areaServed: {
      '@type': 'City',
      name: 'Darmstadt',
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: 'Südhessen',
      },
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
