import Link from "next/link";
import Image from "next/image";
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
          <p className="text-2xl md:text-3xl mb-4 text-cream-100 font-display">
            <em className="italic font-bold">To be a Life Force.</em>
          </p>
          <p className="text-2xl md:text-3xl mb-8 text-cream-100 font-display">
            To be in the flow of Life Force.
          </p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-cream-200 leading-relaxed">
            Density dissolves into light through <em className="italic font-bold">sound, vibration, alchemy</em>, and <em className="italic font-bold">Earth wisdom</em>.
          </p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-cream-200 leading-relaxed mt-4">
            The alchemical journey back to the <em className="italic font-bold">HEART</em>.
          </p>
        </div>
      </section>

      {/* About Kate Section */}
      <section className="py-20 px-4 bg-sage-600">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-display text-cream-100">
                <em className="italic font-bold">Hi My Loves!</em>
              </h2>
              <p className="text-xl font-display text-cream-100">
                My name is <em className="italic font-bold">Kate</em>!
              </p>
              <div className="space-y-4 text-cream-200">
                <p>
                  As a <em className="italic font-bold">Holistic Alchemist</em>, I support and guide individuals back to the <span className="font-bold">HEART</span>. Using sound, intuition, and plant wisdom—tools I've refined over the years—I help transmute distorted emotions, clear density, and reconnect you to confidence, clarity, and embodied self-worth—aligning you with your truth, your essence, your <span className="font-bold">HEART</span>.
                </p>
              </div>
              <Link
                href="/meet-kate"
                className="inline-block px-8 py-3 bg-sage-50 text-sage-800 rounded-md hover:bg-cream-100 transition-colors font-medium shadow-md hover:shadow-lg"
              >
                Learn More
              </Link>
            </div>
            <div className="relative h-96 rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/kate-profile.jpg"
                alt="Kate Edelstein"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Energy Offerings Preview */}
      <section className="py-20 px-4 bg-sage-500">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display text-center mb-4 text-cream-100">
            ENERGY Offerings
          </h2>
          <p className="text-center text-cream-200 mb-12 italic">
            Contact me BEFORE you book any services!
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Sound Healing */}
            <div className="bg-sage-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-sage-700">
              <div className="h-48 rounded-md mb-4 overflow-hidden">
                <Image
                  src="/images/sound-healing.jpg"
                  alt="Sound Healing"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-display mb-2 text-cream-100">Sound Healing</h3>
              <p className="text-sm text-cream-200 mb-4 italic">1:1, Group, Retreat</p>
            </div>

            {/* Herbal Consultation */}
            <div className="bg-sage-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-sage-700">
              <div className="h-48 rounded-md mb-4 overflow-hidden">
                <Image
                  src="/images/herbal-consultation.jpg"
                  alt="Herbal Consultation"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-display mb-2 text-cream-100">Herbal Consultation</h3>
              <p className="text-sm text-cream-200 mb-4 italic">Personalized Remedies</p>
            </div>

            {/* Psilocybin Journeys */}
            <div className="bg-sage-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-sage-700">
              <div className="h-48 rounded-md mb-4 overflow-hidden">
                <Image
                  src="/images/psilocybin-journey.png"
                  alt="Psilocybin Journey"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-display mb-2 text-cream-100">Psilocybin Journeys</h3>
              <p className="text-sm text-cream-200 mb-4 italic">Private 1:1</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/energy-offerings"
              className="inline-block px-8 py-3 bg-sage-50 text-sage-800 rounded-md hover:bg-cream-100 transition-colors font-medium shadow-md hover:shadow-lg"
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
