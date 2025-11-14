import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Energy Offerings - SERPRANA",
  description: "Explore our transformative energy healing services including sound healing, vibrational alchemy, and sacred immersions.",
};

const offerings = [
  {
    title: "Sound Healing",
    type: "Private Group or 1:1",
    description:
      "A vibrational healing experience using crystal bowls and other high vibrational instruments to release stored tension, clear emotions, and rebalance your energy.",
    forWhom:
      "For anyone feeling overwhelmed, blocked, stressed, or disconnected—and craving peace, clarity, and a full-body reset.",
    emphasis: "peace, clarity, and a full-body reset"
  },
  {
    title: "Alchemy Energy Clearing",
    type: "Online or In-Person",
    description:
      "A multi-layered energetic purification that removes densities, distortions, and blockages from your physical, emotional, mental, spiritual, and ancestral fields.",
    forWhom:
      "For anyone feeling heavy, stuck, drained, or affected by old patterns, attachments, or energies—and wanting to feel lighter, clearer, and more aligned in their body and life.",
    emphasis: "lighter, clearer, and more aligned"
  },
  {
    title: "Vibrational Alchemy Medicine Journey",
    type: "Private 1:1",
    description:
      "A deep sound-and-energy ceremony using therapeutic instruments and frequencies to release stagnant energy, elevate your vibration, and recalibrate your entire system. With or without Earth Medicine.",
    forWhom:
      "For those seeking profound energetic release, emotional healing, spiritual activation, or a powerful shift into a higher state of alignment.",
    emphasis: "profound energetic release, emotional healing, spiritual activation"
  },
  {
    title: "Rooted Radiance Immersion",
    type: "Private 1:1",
    description:
      "A private, personalized 3-night healing immersion with Earth medicine, vibrational alchemy, rituals, ceremonies, movement, nourishing meals, and pampering treatments—held in nature.",
    forWhom:
      "For those craving a deep reset, a sacred container to heal and transform, or a guided journey to remember who they are, awaken their gifts, and step fully into their power.",
    emphasis: "remember who they are, awaken their gifts, and step fully into their power"
  },
  {
    title: "Inner Alchemy Guidance",
    type: "(Mentorship) Opportunities",
    description:
      "A personalized transformational journey through conversation and reflections to clear energetic and emotional blocks, strengthen intuition, and align with your soul's truth and purpose.",
    forWhom:
      "For those ready to step into their power, do the inner work, face their shadows, and create a life that feels authentic, grounded, and aligned.",
    emphasis: "step into their power, do the inner work, face their shadows"
  },
];

export default function EnergyOfferings() {
  return (
    <div className="bg-sage-900">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-sage-800 to-sage-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="h-64 bg-sage-700 rounded-lg mb-8 flex items-center justify-center text-sage-300">
            [Crystal Healing Image]
          </div>
          <h1 className="text-5xl md:text-6xl font-display mb-6 text-sage-100">
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
              className="bg-sage-800 rounded-lg p-8 md:p-12 border border-sage-700"
            >
              <h2 className="text-3xl md:text-4xl font-display text-sage-100 mb-2">
                {offering.title}
              </h2>
              <p className="text-sage-300 font-medium mb-6 italic">{offering.type}</p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-sage-200 mb-2 italic">What it is:</h3>
                  <p className="text-sage-300 leading-relaxed">{offering.description}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-sage-200 mb-2 italic">Who it's for:</h3>
                  <p className="text-sage-300 leading-relaxed">{offering.forWhom}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-sage-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display mb-6 text-sage-100">
            Have Questions?
          </h2>
          <p className="text-xl text-sage-200 mb-8 italic">
            BEFORE you book a session contact me!
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-sage-600 text-sage-50 rounded-md hover:bg-sage-500 transition-colors font-medium"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-sage-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-display text-center mb-12 text-sage-100">
            Get In Touch
          </h2>
          <ContactForm />
          <p className="text-center mt-8 text-sage-200">
            <a
              href="mailto:serpranahealing@gmail.com"
              className="hover:text-sage-100 transition-colors"
            >
              serpranahealing@gmail.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
