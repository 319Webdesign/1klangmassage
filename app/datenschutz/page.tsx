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
          <div className="mt-8 space-y-8 text-brown-500/90">
            <section>
              <h2 className="font-semibold text-brown-600">Datenschutz</h2>
              <p className="mt-2 leading-relaxed">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung. Die Nutzung unserer Website ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
              </p>
            </section>
            <section>
              <h2 className="font-semibold text-brown-600">Server-Log-Files</h2>
              <p className="mt-2 leading-relaxed">
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Files, die Ihr Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="mt-3 list-inside list-disc space-y-1 pl-2">
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
              </ul>
              <p className="mt-3 leading-relaxed">
                Diese Daten sind nicht bestimmten Personen zuordenbar. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Wir behalten uns vor, diese Daten nachträglich zu prüfen, wenn uns konkrete Anhaltspunkte für eine rechtswidrige Nutzung bekannt werden.
              </p>
            </section>
            <section>
              <h2 className="font-semibold text-brown-600">Google reCAPTCHA</h2>
              <p className="mt-2 leading-relaxed">
                Wir verwenden den Google-Dienst reCaptcha, um festzustellen, ob ein Mensch oder ein Computer eine bestimmte Eingabe in unserem Kontakt- oder Newsletter-Formular macht. Google prüft anhand folgender Daten, ob Sie ein Mensch oder ein Computer sind: IP-Adresse des verwendeten Endgeräts, die Webseite, die Sie bei uns besuchen und auf der das Captcha eingebunden ist, das Datum und die Dauer des Besuchs, die Erkennungsdaten des verwendeten Browser- und Betriebssystem-Typs, Google-Account, wenn Sie bei Google eingeloggt sind, Mausbewegungen auf den reCaptcha-Flächen sowie Aufgaben, bei denen Sie Bilder identifizieren müssen. Rechtsgrundlage für die beschriebene Datenverarbeitung ist Art. 6 Abs. 1 lit. f Datenschutz-Grundverordnung. Es besteht ein berechtigtes Interesse auf unserer Seite an dieser Datenverarbeitung, die Sicherheit unserer Webseite zu gewährleisten und uns vor automatisierten Eingaben (Angriffen) zu schützen.
              </p>
            </section>
            <section>
              <h2 className="font-semibold text-brown-600">Recht auf Auskunft, Löschung, Sperrung</h2>
              <p className="mt-2 leading-relaxed">
                Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
              </p>
            </section>
            <section>
              <h2 className="font-semibold text-brown-600">Widerspruch Werbe-Mails</h2>
              <p className="mt-2 leading-relaxed">
                Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
              </p>
            </section>
            <p className="text-sm text-brown-500/70">
              Quelle:{' '}
              <a
                href="https://www.e-recht24.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:underline"
              >
                https://www.e-recht24.de
              </a>
            </p>
            <p className="pt-4 text-sm text-brown-500/70">
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
