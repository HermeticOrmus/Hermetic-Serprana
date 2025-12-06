import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Energy Offerings - SERPRANA",
  description: "Explore our transformative energy healing services including sound healing, vibrational alchemy, and sacred immersions.",
};

const offerings = [
  {
    title: "Sound Healing",
    type: "1:1, Group, Retreat",
    description:
      "Vibrational healing with crystal bowls and sacred instruments. Releases tension, clears emotions, rebalances energy.",
    forWhom:
      "For anyone feeling overwhelmed, blocked, stressed, or disconnected—craving peace, clarity, and a full-body reset."
  },
  {
    title: "Energy Clearing Online",
    type: "Virtual Sessions Available",
    description:
      "Remote energy clearing sessions that work with your energetic field to release blockages, transmute distorted emotions, and restore balance—no matter where you are in the world.",
    forWhom:
      "For anyone seeking energetic support and healing from the comfort of their own space."
  },
  {
    title: "Herbal Consultation",
    type: "Personalized Remedies",
    description:
      "Focused assessment of symptoms, health concerns, and goals. Personalized herbal remedies—tinctures, teas, plant preparations.",
    forWhom:
      "For anyone seeking natural support made specifically for their unique needs."
  },
  {
    title: "Guided Medicine Journeys",
    type: "Private 1:1",
    description:
      "Deep sound-and-energy ceremony. Therapeutic instruments and frequencies release stagnant energy, elevate vibration, recalibrate your system. With sacred medicine.",
    forWhom:
      "For those seeking profound energetic release, emotional healing, spiritual activation, or a powerful shift into higher alignment."
  },
];

export default function EnergyOfferings() {
  return (
    <div className="bg-sage-500">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-sage-600 to-sage-500">
        <div className="max-w-4xl mx-auto text-center">
          <div className="h-64 rounded-lg mb-8 overflow-hidden">
            <img
              src="/images/energy-offerings-hero.jpg"
              alt="Energy Offerings"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-display mb-6 text-cream-100">
            Energy Offerings
          </h1>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-16">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className="bg-sage-600 rounded-lg p-8 md:p-12 border border-sage-700"
            >
              <h2 className="text-3xl md:text-4xl font-display text-cream-100 mb-2">
                {offering.title}
              </h2>
              <p className="text-cream-200 font-medium mb-6 italic">{offering.type}</p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-cream-100 mb-2 italic">What it is:</h3>
                  <p className="text-cream-200 leading-relaxed">{offering.description}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-cream-100 mb-2 italic">Who it's for:</h3>
                  <p className="text-cream-200 leading-relaxed">{offering.forWhom}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-sage-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display mb-6 text-cream-100">
            Have Questions?
          </h2>
          <p className="text-xl text-cream-100 mb-8 italic">
            BEFORE you book a session contact me!
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-cream-100 text-sage-900 rounded-md hover:bg-cream-200 transition-colors font-medium shadow-md hover:shadow-lg"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-sage-500">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-display text-center mb-12 text-cream-100">
            Get In Touch
          </h2>
          <ContactForm />
          <p className="text-center mt-8 text-cream-100">
            <a
              href="mailto:serpranahealing@gmail.com"
              className="hover:text-cream-200 transition-colors"
            >
              serpranahealing@gmail.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
