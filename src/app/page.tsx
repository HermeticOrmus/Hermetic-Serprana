import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-sage-500 to-sage-600">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-display mb-6 text-cream-100">
            SERPRANA
          </h1>
          <p className="text-2xl md:text-3xl mb-4 text-cream-100 font-display italic">
            To be a Life Force.
          </p>
          <p className="text-2xl md:text-3xl mb-8 text-cream-100 font-display italic">
            To be in the flow of life force.
          </p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-cream-200 leading-relaxed">
            Density dissolves into light through <em className="italic">sound, vibration, alchemy, and Earth wisdom</em>.
          </p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-cream-200 leading-relaxed mt-4">
            The alchemical journey back to the <em className="italic">heart</em>.
          </p>
        </div>
      </section>

      {/* About Kate Section */}
      <section className="py-20 px-4 bg-sage-600">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-display text-cream-100">
                Hi my loves!
              </h2>
              <p className="text-xl font-display text-cream-100">
                My name is Kate!
              </p>
              <div className="space-y-4 text-cream-200">
                <p>
                  I support individuals on their journey to the Heart.
                </p>
                <p>
                  Sound, intuition, herbalism—tools I've mastered to transmute and clear distorted emotions.
                </p>
                <p>
                  Let's awaken confidence, self-worth and return to the Heart.
                </p>
              </div>
              <Link
                href="/meet-kate"
                className="inline-block px-8 py-3 bg-terracotta-500 text-cream-50 rounded-md hover:bg-terracotta-400 transition-colors font-medium shadow-md hover:shadow-lg"
              >
                Learn More
              </Link>
            </div>
            <div className="relative h-96 bg-sage-700 rounded-lg shadow-lg">
              {/* Image placeholder */}
              <div className="absolute inset-0 flex items-center justify-center text-cream-300">
                [Kate's Photo]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Energy Offerings Preview */}
      <section className="py-20 px-4 bg-sage-500">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display text-center mb-4 text-cream-100">
            Energy Offerings
          </h2>
          <p className="text-center text-cream-200 mb-12 italic">
            Contact me before you book any services!
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Sound Healing */}
            <div className="bg-sage-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-sage-700">
              <div className="h-48 bg-sage-700 rounded-md mb-4 flex items-center justify-center text-cream-300">
                [Sound Healing Image]
              </div>
              <h3 className="text-xl font-display mb-2 text-cream-100">Sound Healing</h3>
              <p className="text-sm text-cream-200 mb-4 italic">1:1, Group, Retreat</p>
            </div>

            {/* Herbal Consultation */}
            <div className="bg-sage-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-sage-700">
              <div className="h-48 bg-sage-700 rounded-md mb-4 flex items-center justify-center text-cream-300">
                [Herbal Medicine Image]
              </div>
              <h3 className="text-xl font-display mb-2 text-cream-100">Herbal Consultation</h3>
              <p className="text-sm text-cream-200 mb-4 italic">Personalized Remedies</p>
            </div>

            {/* Psilocybin Journeys */}
            <div className="bg-sage-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-sage-700">
              <div className="h-48 bg-sage-700 rounded-md mb-4 flex items-center justify-center text-cream-300">
                [Psilocybin Journey Image]
              </div>
              <h3 className="text-xl font-display mb-2 text-cream-100">Psilocybin Journeys</h3>
              <p className="text-sm text-cream-200 mb-4 italic">Private 1:1</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/energy-offerings"
              className="inline-block px-8 py-3 bg-terracotta-500 text-cream-50 rounded-md hover:bg-terracotta-400 transition-colors font-medium shadow-md hover:shadow-lg"
            >
              View All Offerings
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-sage-600">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display text-center mb-12 text-cream-100">
            Get In Touch
          </h2>
          <ContactForm />
          <p className="text-center mt-8 text-cream-200">
            <a href="mailto:serpranahealing@gmail.com" className="hover:text-cream-100 transition-colors font-medium">
              serpranahealing@gmail.com
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
