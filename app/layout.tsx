import type { Metadata } from 'next'
import { Playfair_Display } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Wellness & Entspannungsmassage Darmstadt | 1klang massage',
  icons: {
    icon: '/img/logo.svg',
  },
  description:
    'Ihre Auszeit in Darmstadt: Professionelle Entspannungsmassagen, Klangmassagen und Wellness-Anwendungen bei Stefan Klemm. Jetzt Termin vereinbaren!',
  openGraph: {
    title: 'Wellness & Entspannungsmassage Darmstadt | 1klang massage',
    description:
      'Ihre Auszeit in Darmstadt: Professionelle Entspannungsmassagen, Klangmassagen und Wellness-Anwendungen bei Stefan Klemm. Jetzt Termin vereinbaren!',
    locale: 'de_DE',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${playfair.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans text-sm text-brown-500 antialiased">{children}</body>
    </html>
  )
}
