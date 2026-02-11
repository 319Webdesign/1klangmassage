import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function DatenschutzPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-sage-100 px-4 py-16 md:px-8 md:py-24 lg:px-12 xl:px-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-serif text-3xl font-semibold text-brown-600 md:text-4xl">
            Datenschutzerklärung
          </h1>
          <div className="mt-8 space-y-6 text-brown-500/90">
            <section>
              <h2 className="font-semibold text-brown-600">1. Verantwortlicher</h2>
              <p className="mt-2">
                1klang massage – Stefan Klemm
                <br />
                Carsonweg 1
                <br />
                64289 Darmstadt
                <br />
                E-Mail: info@1klangmassage.de
              </p>
            </section>
            <section>
              <h2 className="font-semibold text-brown-600">2. Erhebung und Speicherung personenbezogener Daten</h2>
              <p className="mt-2">
                Wir erheben personenbezogene Daten nur, soweit Sie uns diese
                mitteilen oder wir sie zur Abwicklung von Verträgen und
                Dienstleistungen benötigen. Die Verarbeitung erfolgt auf Grundlage
                der DSGVO.
              </p>
            </section>
            <section>
              <h2 className="font-semibold text-brown-600">3. Ihre Rechte</h2>
              <p className="mt-2">
                Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
                Einschränkung der Verarbeitung sowie auf Datenübertragbarkeit.
                Wenden Sie sich dafür an obige Kontaktdaten.
              </p>
            </section>
            <section>
              <h2 className="font-semibold text-brown-600">4. Beschwerderecht</h2>
              <p className="mt-2">
                Sie haben das Recht, sich bei einer Aufsichtsbehörde zu beschweren,
                wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Daten gegen
                die DSGVO verstößt.
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
