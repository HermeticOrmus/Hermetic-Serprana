import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-sage-900 to-sage-800">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-display mb-6 text-sage-100">
            SERPRANA
          </h1>
          <p className="text-2xl md:text-3xl mb-4 text-sage-200 font-display italic">
            To be a Life Force.
          </p>
          <p className="text-2xl md:text-3xl mb-8 text-sage-200 font-display italic">
            To be in the flow of life force.
          </p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-sage-300 leading-relaxed">
            Density dissolves into light through <em className="italic">sound, vibration, alchemy, and Earth wisdom</em>.
          </p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-sage-300 leading-relaxed mt-4">
            The alchemical journey back to the <em className="italic">HEART</em>.
          </p>
        </div>
      </section>

      {/* About Kate Section */}
      <section className="py-20 px-4 bg-sage-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-display text-sage-100">
                Hi My LoVEs!
              </h2>
              <p className="text-xl font-display text-sage-200">
                My name is Kate!
              </p>
              <div className="space-y-4 text-sage-300">
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
                className="inline-block px-8 py-3 bg-sage-600 text-sage-50 rounded-md hover:bg-sage-500 transition-colors font-medium shadow-md hover:shadow-lg"
              >
                Learn More
              </Link>
            </div>
            <div className="relative h-96 bg-sage-700 rounded-lg shadow-lg">
              {/* Image placeholder */}
              <div className="absolute inset-0 flex items-center justify-center text-sage-500">
                [Kate's Photo]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Energy Offerings Preview */}
      <section className="py-20 px-4 bg-sage-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display text-center mb-4 text-sage-100">
            ENERGY Offerings
          </h2>
          <p className="text-center text-sage-300 mb-12 italic">
            Contact me BEFORE you book any services!
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Sound Healing */}
            <div className="bg-sage-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-sage-700">
              <div className="h-48 bg-sage-700 rounded-md mb-4 flex items-center justify-center text-sage-500">
                [Sound Healing Image]
              </div>
              <h3 className="text-xl font-display mb-2 text-sage-100">Sound Healing</h3>
              <p className="text-sm text-sage-300 mb-4 italic">1:1, Group, Retreat</p>
            </div>

            {/* Herbal Consultation */}
            <div className="bg-sage-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-sage-700">
              <div className="h-48 bg-sage-700 rounded-md mb-4 flex items-center justify-center text-sage-500">
                [Herbal Medicine Image]
              </div>
              <h3 className="text-xl font-display mb-2 text-sage-100">Herbal Consultation</h3>
              <p className="text-sm text-sage-300 mb-4 italic">Personalized Remedies</p>
            </div>

            {/* Psilocybin Journeys */}
            <div className="bg-sage-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-sage-700">
              <div className="h-48 bg-sage-700 rounded-md mb-4 flex items-center justify-center text-sage-500">
                [Psilocybin Journey Image]
              </div>
              <h3 className="text-xl font-display mb-2 text-sage-100">Psilocybin Journeys</h3>
              <p className="text-sm text-sage-300 mb-4 italic">Private 1:1</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/energy-offerings"
              className="inline-block px-8 py-3 bg-sage-600 text-sage-50 rounded-md hover:bg-sage-500 transition-colors font-medium shadow-md hover:shadow-lg"
            >
              View All Offerings
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-sage-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display text-center mb-12 text-sage-100">
            Get In Touch
          </h2>
          <ContactForm />
          <p className="text-center mt-8 text-sage-300">
            <a href="mailto:serpranahealing@gmail.com" className="hover:text-sage-100 transition-colors font-medium">
              serpranahealing@gmail.com
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
