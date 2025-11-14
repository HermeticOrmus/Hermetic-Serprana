import ContactForm from "@/components/ContactForm";
import Link from "next/link";

export const metadata = {
  title: "Meet Kate - SERPRANA",
  description: "Meet Kate Edelstein, founder of SERPRANA and Alchemist of Sound, Energy, and Herbal Medicine based in Playa Venao, Panama.",
};

export default function MeetKate() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-sage-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-display mb-6 text-earth-900">
            I look forward to knowing you
          </h1>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="relative">
              <div className="aspect-square bg-sage-100 rounded-lg flex items-center justify-center text-sage-400">
                [Kate's Photo]
              </div>
              <p className="text-center mt-4 font-display text-earth-700">Owner</p>
            </div>

            {/* Bio */}
            <div className="space-y-6">
              <h2 className="text-4xl font-display text-earth-900">Kate Edelstein</h2>

              <div className="space-y-4 text-earth-800 leading-relaxed">
                <p>
                  Welcome to my world of holistic wellness and vibrant energy! I embarked on my
                  journey in the Holistic Wellness space back in 2015, and since then, my path
                  has been illuminated by my deep connection to the Earth, plants, and the cosmic
                  energies that surround us.
                </p>

                <p>
                  I'm Kate Edelstein, the founder of SERPRANA and an Alchemist of Sound, Energy,
                  and Herbal Medicine based in Playa Venao, Panama. Through my work, I empower
                  individuals on their healing and transformation journeys. Using my intuition
                  (clairvoyance, clairaudience, and clairsentience), deep connection to Nature,
                  and ability to conduct energy, I guide others in aligning with their highest
                  potential. I'm certified in Reiki 1 & 2, Herbalism, Permaculture, and Spiritual
                  Release Therapy (SRT), blending ancient wisdom with modern practices to create
                  profound, transformative experiences.
                </p>

                <p>
                  My work spans festivals, retreats, and community collaborations. I have
                  performed at Radio Venao, Reactor Venao, and Yoga Gathering Venao for the past
                  three years, including the Opening Ceremony Sound Bath for Radio Venao. I also
                  facilitate sound journeys and sound workshops for retreats across Panama.
                </p>

                <p>
                  Deeply influenced by time spent with the Kogi and Wiwa Tribes of the Sierra
                  Nevada, I honor their ancestral teachings through ongoing Pagamentos and monthly
                  meetings. Rooted in these practices, I align my work with my vision for "New
                  Earth," fostering harmony between humanity and nature while inspiring
                  sustainable and regenerative ways of living.
                </p>

                <p>
                  Through my work, I empower others to embrace their unique gifts, deepen their
                  connection to nature and themselves, and align with their highest potential,
                  creating a ripple effect of healing and transformation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 px-4 bg-sage-50">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-display italic text-earth-800 leading-relaxed">
            "Intention guides thought, and our thoughts create our reality. The ability to set
            clear intentions that are aligned with our highest purpose unfolds with healing."
          </blockquote>
        </div>
      </section>

      {/* My Offerings CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display mb-8 text-earth-900">
            My Offerings
          </h2>
          <Link
            href="/energy-offerings"
            className="inline-block px-8 py-3 bg-earth-600 text-white rounded-md hover:bg-earth-700 transition-colors font-medium"
          >
            Explore Energy Offerings
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-white border-t border-earth-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-display text-center mb-12 text-earth-900">
            Get In Touch
          </h2>
          <ContactForm />
          <p className="text-center mt-8 text-earth-700">
            <a
              href="mailto:serpranahealing@gmail.com"
              className="hover:text-earth-900 transition-colors"
            >
              serpranahealing@gmail.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
