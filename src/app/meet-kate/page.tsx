import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import Image from "next/image";

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
              <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/kate-profile.jpg"
                  alt="Kate Edelstein - Founder of SERPRANA"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center mt-4 font-display text-cream-100">Owner</p>
            </div>

            {/* Bio */}
            <div className="space-y-6">
              <h2 className="text-4xl font-display text-cream-100">Kate Edelstein</h2>

              <div className="space-y-4 text-cream-200 leading-relaxed">
                <p>
                  I'm <em className="italic font-bold">Kate Edelstein</em>, founder of SERPRANA.
                </p>

                <p>
                  My path in holistic wellness began in 2015, guided by my strong intuition, a deep connection to Nature, and a devotion to living from the <span className="font-bold">HEART</span>.
                </p>

                <p>
                  Trained in Sound Healing, Reiki, Herbalism, and Spiritual Response Therapy and Energy Clearing from the Universidad de la Alqvimia, I weave these foundations with my unwavering intuition to support deep emotional and energetic transformation.
                </p>

                <p>
                  As a <em className="italic font-bold">Holistic Alchemist</em>, I combine sound, energy, intuition, and plant wisdom to clear distorted emotions, dissolve density, and reconnect people to clarity, confidence, and their true essence.
                </p>

                <p>
                  My relationship with Nature is shaped by my time with the Kogi and Wiwa Tribes of the Sierra Nevada and my permaculture studies in Guatemala—showing me how to partner with and deeply connect with the Earth, in the healing work I do.
                </p>

                <p>
                  I've shared Sound Medicine and plant wisdom at retreats and festivals across <em className="italic font-bold">Panama</em>, including Radio Venao, Reactor Venao, and Yoga Gathering Venao, and continue to expand into retreats <em className="italic">around the world</em>.
                </p>

                <p>
                  <em className="italic font-bold">My vision:</em> to help elevate consciousness and guide others back to the <span className="font-bold">HEART</span>—so you remember who you are, embody your gifts, and support the creation of a more aligned, connected New Earth.
                </p>

                <p>
                  <em className="italic font-bold">This is the work:</em> returning to the <span className="font-bold">HEART</span>, expanding awareness, and becoming the medicine you came here to be.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Holistic Alchemist Definition */}
      <section className="py-16 px-4 bg-sage-600">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display mb-8 text-cream-100">
            <em className="italic font-bold">What it means to be a <em className="italic font-bold underline">Holistic Alchemist</em>:</em>
          </h2>

          <div className="space-y-6 text-cream-200 leading-relaxed text-lg">
            <p>
              An <em className="italic font-bold">Alchemist</em> transforms something from one state into a more refined, aligned state.
            </p>

            <p>
              As a <em className="italic font-bold underline">Holistic Alchemist</em>, I bridge intuition with different tools to support the transformation of your energy, emotions, and patterns—shifting heaviness, confusion, and emotional distortions into clarity, alignment, and empowerment.
            </p>

            <p>
              I shine LIGHT on the darkness—the patterns and emotions that keep you stuck—so they can be understood and released. My work helps you feel lighter, clearer, more grounded, and brings you back to the <span className="font-bold">HEART</span>, so you can embody who you're meant to be.
            </p>
          </div>
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
            className="inline-block px-8 py-3 bg-white text-sage-700 rounded-md hover:bg-cream-100 transition-colors font-medium shadow-md hover:shadow-lg"
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
