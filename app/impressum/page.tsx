import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function ImpressumPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-sage-100 px-4 py-16 md:px-8 md:py-24 lg:px-12 xl:px-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-serif text-3xl font-semibold text-brown-600 md:text-4xl">
            Impressum
          </h1>
          <div className="mt-8 space-y-6 text-brown-500/90">
            <section>
              <h2 className="font-semibold text-brown-600">Angaben gemäß § 5 TMG</h2>
              <p className="mt-2">
                1klang massage
                <br />
                Stefan Klemm
                <br />
                Carsonweg 1
                <br />
                64289 Darmstadt
              </p>
            </section>
            <section>
              <h2 className="font-semibold text-brown-600">Kontakt</h2>
              <p className="mt-2">
                E-Mail: info@1klangmassage.de
                <br />
                Telefon: [Bitte ergänzen]
              </p>
            </section>
            <section>
              <h2 className="font-semibold text-brown-600">Verantwortlich für den Inhalt</h2>
              <p className="mt-2">
                Stefan Klemm
                <br />
                Carsonweg 1
                <br />
                64289 Darmstadt
              </p>
            </section>
            <p className="text-sm text-brown-500/70">
              <Link href="/" className="text-orange-500 hover:underline">
                ← Zurück zur Startseite
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
