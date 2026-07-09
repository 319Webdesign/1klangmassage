import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata = {
  title: 'Cookie-Richtlinien | 1klang massage',
  description:
    'Informationen zur Verwendung von Cookies auf der Website von 1klang massage – Stefan Klemm, Wellness & Entspannungsmassage Darmstadt.',
}

export default function CookieRichtlinienPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-sage-100 px-4 py-16 md:px-8 md:py-24 lg:px-12 xl:px-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-site-heading text-brown-600">
            Cookie-Richtlinien
          </h1>
          <p className="text-site-body mt-2 text-brown-500/70">
            Stand: März 2026
          </p>
          <div className="text-site-prose mt-8 space-y-8">
            <section>
              <h2>Was sind Cookies?</h2>
              <p className="mt-2 leading-relaxed">
                Cookies sind kleine Textdateien, die von Websites auf Ihrem Gerät (Computer, Smartphone, Tablet) gespeichert werden. Sie ermöglichen es der Website, Ihre Aktionen und Einstellungen (z. B. Anmeldung, Sprache, Schriftgröße und andere Anzeigepräferenzen) über einen bestimmten Zeitraum zu speichern, sodass Sie diese nicht bei jedem erneuten Besuch der Website oder beim Navigieren zwischen den Seiten erneut eingeben müssen.
              </p>
            </section>
            <section>
              <h2>Welche Cookies verwenden wir?</h2>
              <p className="mt-2 leading-relaxed">
                Auf unserer Website setzen wir verschiedene Arten von Cookies ein:
              </p>
              <ul className="mt-3 list-inside list-disc space-y-1 pl-2">
                <li>
                  <strong>Notwendige Cookies:</strong> Diese Cookies sind für den Betrieb der Website unerlässlich. Sie ermöglichen grundlegende Funktionen wie die Navigation und den Zugang zu geschützten Bereichen. Ohne diese Cookies kann die Website nicht ordnungsgemäß funktionieren.
                </li>
                <li>
                  <strong>Funktionale Cookies:</strong> Diese Cookies ermöglichen erweiterte Funktionalität und Personalisierung, z. B. zur Abwehr von Spam und missbräuchlichen Eingaben (z. B. Google reCAPTCHA im Kontakt- und Newsletter-Formular).
                </li>
                <li>
                  <strong>Externe Inhalte:</strong> Für die Anzeige von Google Maps (z. B. auf unserer Kontaktseite) können von Drittanbietern Cookies gesetzt werden.
                </li>
              </ul>
            </section>
            <section>
              <h2>Details zu verwendeten Diensten</h2>
              <h3 className="mt-4 font-medium text-brown-600">Google reCAPTCHA</h3>
              <p className="mt-2 leading-relaxed">
                Wir nutzen Google reCAPTCHA, um zu erkennen, ob Eingaben in unseren Formularen von einem Menschen oder einem automatisierten Programm stammen. Dadurch schützen wir unsere Website vor Spam und Missbrauch. Bei der Nutzung von reCAPTCHA können Cookies von Google gesetzt werden. Weitere Informationen finden Sie in der{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:underline"
                >
                  Datenschutzerklärung von Google
                </a>
                .
              </p>
              <h3 className="mt-4 font-medium text-brown-600">Google Maps</h3>
              <p className="mt-2 leading-relaxed">
                Für die Standortanzeige auf unserer Kontaktseite binden wir Google Maps ein. Beim Aufruf der Karte können Cookies von Google gesetzt werden. Informationen zur Datenverarbeitung durch Google Maps entnehmen Sie der{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:underline"
                >
                  Google-Datenschutzerklärung
                </a>
                .
              </p>
            </section>
            <section>
              <h2>Rechtsgrundlage</h2>
              <p className="mt-2 leading-relaxed">
                Die Verwendung von notwendigen Cookies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der technischen Bereitstellung und Sicherheit der Website). Die Verwendung weiterer Cookies erfolgt nur mit Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), die Sie über unser Cookie-Banner erteilen können.
              </p>
            </section>
            <section>
              <h2>Wie können Sie Cookies verwalten?</h2>
              <p className="mt-2 leading-relaxed">
                Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und diese einzeln erlauben oder ablehnen oder die Annahme von Cookies für bestimmte Fälle oder generell ausschließen. Bei der Deaktivierung von Cookies kann die Funktionalität unserer Website eingeschränkt sein.
              </p>
              <p className="mt-3 leading-relaxed">
                Die Einstellungen finden Sie in den meisten Browsern unter „Einstellungen“ oder „Datenschutz“. Dort können Sie verwalten, welche Cookies gespeichert werden.
              </p>
            </section>
            <section>
              <h2>Kontakt</h2>
              <p className="mt-2 leading-relaxed">
                Bei Fragen zu unseren Cookie-Richtlinien können Sie sich gerne an uns wenden:
              </p>
              <p className="mt-2">
                Stefan Klemm
                <br />
                Carsonweg 1, 64289 Darmstadt
                <br />
                E-Mail:{' '}
                <a href="mailto:stefan@1klang-massage.de" className="text-orange-500 hover:underline">
                  stefan@1klang-massage.de
                </a>
              </p>
            </section>
            <p className="text-site-body text-brown-500/70">
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
