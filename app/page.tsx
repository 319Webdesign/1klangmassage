import Image from 'next/image'
import { Header } from '@/components/Header'
import { LocalBusinessJsonLd } from '@/components/JsonLd'
import { HeroTestimonial } from '@/components/HeroTestimonial'
import { FeatureSection } from '@/components/FeatureSection'
import { Services } from '@/components/Services'
import { CtaSection } from '@/components/CtaSection'
import { NewsletterSection } from '@/components/NewsletterSection'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import { FaqSection } from '@/components/FaqSection'
import { Footer } from '@/components/Footer'
import { ContactForm } from '@/components/ContactForm'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <LocalBusinessJsonLd />
      <Header />
      <main className="flex-1 bg-sage-100">
        {/* Hero */}
        <section className="relative flex min-h-screen flex-col-reverse items-center gap-10 overflow-hidden px-4 pt-8 pb-24 md:gap-12 md:px-8 md:pt-10 md:pb-32 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 lg:pt-12 lg:px-12 xl:px-24">
          <div className="w-full max-w-xl text-center lg:max-w-3xl lg:justify-self-start lg:text-left">
            <h1 className="text-site-heading text-brown-600">
              Entspannungs- & Wellnessmassagen in Darmstadt
            </h1>
            <p className="text-site-lead mt-4 text-sage-600">
              Ihr Experte für Entspannung und Wohlbefinden in Darmstadt
            </p>
            <p className="text-site-body mt-6 text-brown-500/90">
              Erleben Sie individuelle Massagen, die Körper und Geist sanft in Balance bringen – persönlich auf Ihre Bedürfnisse abgestimmt.
            </p>
          <a
            href="#kontakt"
            className="text-site-body animate-breathe mt-8 inline-block rounded-full bg-orange-500 px-8 py-4 font-medium text-white shadow-sm transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
          >
              Termin vereinbaren
            </a>
<HeroTestimonial />
          </div>
          <div className="relative mx-auto mt-12 aspect-[4/5] w-full max-w-[320px] overflow-hidden rounded-2xl shadow-2xl md:max-w-[400px] md:mt-16 lg:mt-12 lg:max-w-[420px]">
            <Image
              src="/img/Klemm_Stefan.jpg"
              alt="Wellness Massage in Darmstadt bei 1klang – Stefan Klemm, Ihr Experte für Entspannungsmassage"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </section>

      <FeatureSection />

      <Services />

      <CtaSection />

      {/* Über Mich */}
      <section
        id="ueber-mich"
        className="min-h-screen bg-sage-100 px-4 py-16 md:px-8 md:py-24 lg:px-12 xl:px-24"
      >
        <div className="mx-auto max-w-6xl">
<h2 className="text-site-heading text-brown-600">
          Über mich
        </h2>
          <div className="text-site-body mt-6 grid gap-8 text-brown-500/90 lg:grid-cols-2 lg:items-center lg:gap-12">
            <div className="space-y-4">
              <p>
                Seit über 15 Jahren massiere ich bereits mit Leidenschaft und bilde
                mich regelmäßig fort – für tiefenwirksame Entspannung in Südhessen.
                Im Dezember 2015 habe ich vertiefend die Rücken-Nacken-Massage-Ausbildung
                bei Satyadevi Bretz im Yoga Vidya-Zentrum in Bad Meinberg absolviert,
                im April 2016 und im Februar 2017 die Kalifornische Massage-Ausbildung
                bei Eric vis Dieperink und Sabine Goldbach im Yoga Vidya-Zentrum Westerwald.
              </p>
              <p>
                Im Frühjahr 2020 war ich Assistent bei der Kalifornischen
                Massage- und Triggerpunktmassageausbildung. Im April 2022 war ich
                Assistent bei der Fünf-Elemente-Massage und habe im April 2023
                meine Kenntnisse der Kalifornischen Massage aufgefrischt.
              </p>
              <blockquote className="mt-6 rounded-xl border-l-4 border-orange-500 bg-white/60 p-5 italic text-brown-600 shadow-sm">
                „Mein Ziel bei 1klang massage ist es,
                Ihnen durch achtsame Massage zu Wohlbefinden zu verhelfen und
                Sie in Einklang zu bringen."
              </blockquote>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/img/Klemm_Stefan.jpg"
                alt="Wellness Massage in Darmstadt bei 1klang – Stefan Klemm, Ihr Experte für Entspannungsmassage"
                width={600}
                height={400}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <NewsletterSection />

      {/* Kontakt */}
      <section
        id="kontakt"
        className="min-h-0 bg-sage-100 px-4 py-12 md:min-h-screen md:px-8 md:py-24 lg:px-12 xl:px-24"
      >
        <h2 className="text-site-heading text-brown-600">
          Kontakt
        </h2>
        <div className="mt-5 grid gap-12 lg:grid-cols-2">
          <ContactForm />

          <div>
            <div className="aspect-video overflow-hidden rounded-xl shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2569.9863744658833!2d8.669361676025952!3d49.89905912691229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd71b8e92621cb%3A0x94de1bc7109166c8!2s1klang%20massage%20Stefan%20Klemm!5e0!3m2!1sde!2sde!4v1770842813517!5m2!1sde!2sde"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="1klang massage Stefan Klemm – Standort auf Google Maps"
                className="h-full min-h-[250px] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <FaqSection />
      </main>

      <Footer />
    </div>
  )
}
