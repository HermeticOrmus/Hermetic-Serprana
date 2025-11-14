import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-earth-50 to-sage-50">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-display mb-6 text-earth-900">
            SERPRANA
          </h1>
          <p className="text-2xl md:text-3xl mb-4 text-earth-700 font-display italic">
            To be a Life Force.
          </p>
          <p className="text-2xl md:text-3xl mb-8 text-earth-700 font-display italic">
            To be in the flow of life force.
          </p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-earth-800 leading-relaxed">
            A transformative space where density dissolves into light through sound,
            vibration, alchemy, and the wisdom of the Earth. This is the alchemical
            journey of coming back to the HEART.
          </p>
        </div>
      </section>

      {/* About Kate Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-display text-earth-900">
                Hi My LoVEs!
              </h2>
              <p className="text-xl font-display text-earth-700">
                My name is Kate!
              </p>
              <div className="space-y-4 text-earth-800">
                <p>
                  I'm a Holistic Therapist and Alchemist of Sound, Energy, and Herbal Medicine,
                  guiding individuals on their healing and empowerment journey to Come to the Heart.
                </p>
                <p>
                  Through sound, vibration, intuition, alchemy, and energy transmutation techniques,
                  I help clear stuck or distorted emotions and densities—whether from this life,
                  ancestral lines, or past lives—which often manifest as pain, dis-ease, anxiety,
                  depression, and other imbalances.
                </p>
                <p>
                  I support you in awakening confidence, embracing self-worth, feeling more embodied,
                  and rediscovering your unique magic. And most importantly, I guide you to Come to the Heart.
                </p>
              </div>
              <Link
                href="/meet-kate"
                className="inline-block px-8 py-3 bg-earth-600 text-white rounded-md hover:bg-earth-700 transition-colors"
              >
                Learn More
              </Link>
            </div>
            <div className="relative h-96 bg-sage-100 rounded-lg">
              {/* Image placeholder */}
              <div className="absolute inset-0 flex items-center justify-center text-sage-400">
                [Kate's Photo]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Energy Offerings Preview */}
      <section className="py-20 px-4 bg-sage-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display text-center mb-4 text-earth-900">
            ENERGY Offerings
          </h2>
          <p className="text-center text-earth-700 mb-12 italic">
            Contact me BEFORE you book any services!
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Sound Healing */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-earth-100 rounded-md mb-4 flex items-center justify-center text-earth-400">
                [Sound Healing Image]
              </div>
              <h3 className="text-xl font-display mb-2 text-earth-900">Sound Healing</h3>
              <p className="text-sm text-earth-600 mb-4">1:1, Group, Retreat</p>
            </div>

            {/* Inner Alchemy Guidance */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-earth-100 rounded-md mb-4 flex items-center justify-center text-earth-400">
                [Inner Alchemy Image]
              </div>
              <h3 className="text-xl font-display mb-2 text-earth-900">Inner Alchemy Guidance</h3>
              <p className="text-sm text-earth-600 mb-4">1:1</p>
            </div>

            {/* Vibrational Alchemy Journeys */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-earth-100 rounded-md mb-4 flex items-center justify-center text-earth-400">
                [Energy Healing Image]
              </div>
              <h3 className="text-xl font-display mb-2 text-earth-900">Vibrational Alchemy Journeys</h3>
              <p className="text-sm text-earth-600 mb-4">Private 1:1</p>
            </div>

            {/* Rooted Radiance */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-earth-100 rounded-md mb-4 flex items-center justify-center text-earth-400">
                [Nature Retreat Image]
              </div>
              <h3 className="text-xl font-display mb-2 text-earth-900">ROOTED RADIANCE Immersion</h3>
              <p className="text-sm text-earth-600 mb-4">Private 3-Night 1:1</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/energy-offerings"
              className="inline-block px-8 py-3 bg-earth-600 text-white rounded-md hover:bg-earth-700 transition-colors"
            >
              View All Offerings
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display text-center mb-12 text-earth-900">
            Get In Touch
          </h2>
          <ContactForm />
          <p className="text-center mt-8 text-earth-700">
            <a href="mailto:serpranahealing@gmail.com" className="hover:text-earth-900 transition-colors">
              serpranahealing@gmail.com
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
