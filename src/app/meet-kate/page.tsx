import ContactForm from "@/components/ContactForm";
import Link from "next/link";

export const metadata = {
  title: "Meet Kate - SERPRANA",
  description: "Meet Kate Edelstein, founder of SERPRANA and Alchemist of Sound, Energy, and Herbal Medicine based in Playa Venao, Panama.",
};

export default function MeetKate() {
  return (
    <div className="bg-sage-500">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-sage-600 to-sage-500">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-display mb-6 text-cream-100 italic">
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
              <div className="aspect-square bg-sage-700 rounded-lg flex items-center justify-center text-cream-300">
                [Kate's Photo]
              </div>
              <p className="text-center mt-4 font-display text-cream-100">Owner</p>
            </div>

            {/* Bio */}
            <div className="space-y-6">
              <h2 className="text-4xl font-display text-cream-100">Kate Edelstein</h2>

              <div className="space-y-4 text-cream-200 leading-relaxed">
                <p>
                  I started my holistic wellness journey in 2015. The Earth, plants, and cosmic energies guide me.
                </p>

                <p>
                  I'm Kate Edelstein, founder of SERPRANA. <em className="italic">Alchemist of Sound, Energy, and Herbal Medicine</em>.
                </p>

                <p>
                  I use intuition—<em className="italic">clairvoyance, clairaudience, clairsentience</em>—and energy work to guide you to your highest potential.
                  Certified in Reiki 1 & 2, Herbalism, Permaculture, and SRT.
                </p>

                <p>
                  I perform at festivals and retreats across Panama. Radio Venao, Reactor Venao, Yoga Gathering Venao.
                  Sound baths, sound journeys, workshops.
                </p>

                <p>
                  The <em className="italic">Kogi and Wiwa Tribes</em> of the Sierra Nevada shaped my practice.
                  I honor their teachings through <em className="italic">Pagamentos</em> and monthly meetings.
                </p>

                <p>
                  My vision: <em className="italic">New Earth</em>. Harmony between humanity and nature. Sustainable, regenerative living.
                </p>

                <p>
                  Let's embrace your gifts, deepen your connection, and create transformation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 px-4 bg-sage-600">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-display italic text-cream-100 leading-relaxed">
            "Intention guides thought, and our thoughts create our reality. The ability to set
            clear intentions that are aligned with our highest purpose unfolds with healing."
          </blockquote>
        </div>
      </section>

      {/* My Offerings CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display mb-8 text-cream-100">
            My Offerings
          </h2>
          <Link
            href="/energy-offerings"
            className="inline-block px-8 py-3 bg-terracotta-500 text-cream-50 rounded-md hover:bg-terracotta-400 transition-colors font-medium"
          >
            Explore Energy Offerings
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-sage-500 border-t border-sage-700">
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
