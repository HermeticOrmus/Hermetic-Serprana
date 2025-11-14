import ContactForm from "@/components/ContactForm";
import Link from "next/link";

export const metadata = {
  title: "Meet Kate - SERPRANA",
  description: "Meet Kate Edelstein, founder of SERPRANA and Alchemist of Sound, Energy, and Herbal Medicine based in Playa Venao, Panama.",
};

export default function MeetKate() {
  return (
    <div className="bg-sage-900">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-sage-800 to-sage-900">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-display mb-6 text-sage-100 italic">
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
              <div className="aspect-square bg-sage-700 rounded-lg flex items-center justify-center text-sage-300">
                [Kate's Photo]
              </div>
              <p className="text-center mt-4 font-display text-sage-200">Owner</p>
            </div>

            {/* Bio */}
            <div className="space-y-6">
              <h2 className="text-4xl font-display text-sage-100">Kate Edelstein</h2>

              <div className="space-y-4 text-sage-200 leading-relaxed">
                <p>
                  Welcome to my world of <em className="italic">holistic wellness and vibrant energy</em>! I embarked on my
                  journey in the Holistic Wellness space back in 2015, and since then, my path
                  has been illuminated by my deep connection to <em className="italic">the Earth, plants, and the cosmic
                  energies</em> that surround us.
                </p>

                <p>
                  I'm Kate Edelstein, the founder of SERPRANA and an <em className="italic">Alchemist of Sound, Energy,
                  and Herbal Medicine</em> based in Playa Venao, Panama. Through my work, I empower
                  individuals on their healing and transformation journeys. Using my intuition
                  <em className="italic">(clairvoyance, clairaudience, and clairsentience)</em>, deep connection to Nature,
                  and ability to conduct energy, I guide others in <em className="italic">aligning with their highest
                  potential</em>. I'm certified in Reiki 1 & 2, Herbalism, Permaculture, and Spiritual
                  Release Therapy (SRT), blending <em className="italic">ancient wisdom with modern practices</em> to create
                  profound, transformative experiences.
                </p>

                <p>
                  My work spans festivals, retreats, and community collaborations. I have
                  performed at Radio Venao, Reactor Venao, and Yoga Gathering Venao for the past
                  three years, including the <em className="italic">Opening Ceremony Sound Bath for Radio Venao</em>. I also
                  facilitate sound journeys and sound workshops for retreats across Panama.
                </p>

                <p>
                  Deeply influenced by time spent with the <em className="italic">Kogi and Wiwa Tribes of the Sierra
                  Nevada</em>, I honor their ancestral teachings through ongoing <em className="italic">Pagamentos</em> and monthly
                  meetings. Rooted in these practices, I align my work with my vision for <em className="italic">"New
                  Earth,"</em> fostering harmony between humanity and nature while inspiring
                  sustainable and regenerative ways of living.
                </p>

                <p>
                  Through my work, I empower others to <em className="italic">embrace their unique gifts, deepen their
                  connection to nature and themselves</em>, and align with their highest potential,
                  creating a <em className="italic">ripple effect of healing and transformation</em>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 px-4 bg-sage-800">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-display italic text-sage-200 leading-relaxed">
            "Intention guides thought, and our thoughts create our reality. The ability to set
            clear intentions that are aligned with our highest purpose unfolds with healing."
          </blockquote>
        </div>
      </section>

      {/* My Offerings CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display mb-8 text-sage-100">
            My Offerings
          </h2>
          <Link
            href="/energy-offerings"
            className="inline-block px-8 py-3 bg-sage-600 text-sage-50 rounded-md hover:bg-sage-500 transition-colors font-medium"
          >
            Explore Energy Offerings
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-sage-900 border-t border-sage-700">
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
