import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Energy Offerings - SERPRANA",
  description: "Explore our transformative energy healing packages including virtual sessions, in-person immersions, and sacred medicine journeys.",
};

const virtualOfferings = [
  {
    title: "Virtual Alignment",
    price: "$360",
    subtitle: "3-Session Container",
    includes: [
      "3 focused virtual support sessions",
      "3 Energy Clearings",
      "Voice-note or written integration support after each session",
    ],
  },
  {
    title: "Virtual Frequency",
    price: "$1,111",
    subtitle: "6-Week Container",
    includes: [
      "6 weekly focused virtual support sessions",
      "Daily energy clearing",
      "Personalized practices to support integration",
      "Unlimited Telegram messaging for personalized integration with intuitive, energetic guidance",
    ],
  },
];

const inPersonOfferings = [
  {
    title: "Harmonic Reset",
    price: "$555",
    subtitle: "3 Sessions",
    includes: [
      "2 Sound Healings",
      "2 Energy Clearings",
      "1 Coaching Session with energetic clearing",
      "25% off a Custom Herbal Formula",
      "Access to my intuition + energetic guidance during sessions",
    ],
    perfectFor: "Clarity, energetic release, emotional recalibration, and returning to center.",
  },
  {
    title: "Frequency Upgrade",
    price: "$1,700",
    subtitle: "6-Week Immersion",
    includes: [
      "Daily energetic clearing",
      "6 weekly sessions: 3 sound healings + 3 coaching/energetic guidance sessions",
      "1 custom herbal tincture based on your needs",
      "Unlimited Telegram messaging with access to my intuition + energetic guidance throughout the entire 6-week container",
      "Personalized integration resources to support your continued alignment (guided meditations, somatic tools, rituals, or practices — unique to each client)",
    ],
    perfectFor: "Those ready to stabilize their energy, receive consistent support, and integrate meaningful shifts into daily life.",
  },
  {
    title: "Alchemical Recalibration",
    price: "$3,000",
    subtitle: "3-Month Transformation",
    includes: [
      "Daily energetic clearing + harmonization",
      "12 sessions over 3 months: 5 deep sound journeys + 6 coaching/intuitive guidance sessions with energetic clearing + 1 full herbal consultation + custom tinctures based on your needs",
      "Unlimited Telegram messaging with access to my intuition + energetic guidance throughout the entire 3-month container",
      "Personalized integration resources to support your continued alignment (guided meditations, somatic tools, rituals, practices, or energetic anchors — unique to each client)",
    ],
    perfectFor: "Those ready for deep recalibration, sustained transformation, and embodiment of a new frequency.",
  },
];

const addOns = [
  {
    title: "Psilocybin Journey",
    duration: "4-5 hours",
    price: "+$777",
    normalPrice: "$1,111",
  },
  {
    title: "Additional Sound Sessions",
    price: "+$144 each",
    normalPrice: "$180",
  },
  {
    title: "Monthly Herbal Tincture Refills",
    price: "$20 per tincture",
    normalPrice: "$25",
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
          <p className="text-xl text-cream-200 max-w-2xl mx-auto leading-relaxed">
            Virtual sessions are held with the same presence, intuition, and energetic precision as in-person work.
          </p>
        </div>
      </section>

      {/* Virtual Offerings */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display text-center mb-12 text-cream-100">
            Virtual Offerings
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {virtualOfferings.map((offering, index) => (
              <div
                key={index}
                className="bg-sage-600 rounded-lg p-8 border border-sage-700"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-display text-cream-100">
                      {offering.title}
                    </h3>
                    <p className="text-cream-200 italic">{offering.subtitle}</p>
                  </div>
                  <span className="text-2xl font-display text-cream-100">{offering.price}</span>
                </div>
                <div className="mt-6">
                  <h4 className="font-semibold text-cream-100 mb-3 italic">Includes:</h4>
                  <ul className="space-y-2">
                    {offering.includes.map((item, i) => (
                      <li key={i} className="text-cream-200 flex items-start">
                        <span className="text-cream-100 mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In-Person Offerings */}
      <section className="py-16 px-4 bg-sage-600">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display text-center mb-12 text-cream-100">
            In-Person Offerings
          </h2>
          <div className="space-y-8">
            {inPersonOfferings.map((offering, index) => (
              <div
                key={index}
                className="bg-sage-700 rounded-lg p-8 md:p-12 border border-sage-800"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-display text-cream-100">
                      {offering.title}
                    </h3>
                    <p className="text-cream-200 italic">{offering.subtitle}</p>
                  </div>
                  <span className="text-3xl font-display text-cream-100 mt-2 md:mt-0">{offering.price}</span>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-cream-100 mb-3 italic">Includes:</h4>
                    <ul className="space-y-2">
                      {offering.includes.map((item, i) => (
                        <li key={i} className="text-cream-200 flex items-start">
                          <span className="text-cream-100 mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-cream-100 mb-2 italic">Perfect for:</h4>
                    <p className="text-cream-200 leading-relaxed">{offering.perfectFor}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display text-center mb-12 text-cream-100">
            Add-Ons
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <div
                key={index}
                className="bg-sage-600 rounded-lg p-6 border border-sage-700 text-center"
              >
                <h3 className="text-xl font-display text-cream-100 mb-2">
                  {addon.title}
                </h3>
                {addon.duration && (
                  <p className="text-cream-200 text-sm italic mb-2">{addon.duration}</p>
                )}
                <p className="text-2xl font-display text-cream-100 mb-1">{addon.price}</p>
                <p className="text-cream-300 text-sm">
                  <span className="line-through">normally {addon.normalPrice}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Retreats CTA */}
      <section className="py-16 px-4 bg-sage-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display mb-6 text-cream-100">
            Retreats
          </h2>
          <p className="text-xl text-cream-200 mb-8 leading-relaxed max-w-2xl mx-auto">
            I'd love to be a part of your retreat! Please contact me to receive my <em className="italic font-bold">Retreat Packages</em>.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-cream-100 text-sage-900 rounded-md hover:bg-cream-200 transition-colors font-medium shadow-md hover:shadow-lg"
          >
            Get Retreat Info
          </a>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 bg-sage-500">
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
      <section id="contact" className="py-20 px-4 bg-sage-600">
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
