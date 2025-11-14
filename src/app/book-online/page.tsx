import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Book Online - SERPRANA",
  description: "Book your transformative healing session with Kate. Contact us to schedule your sound healing, energy clearing, or vibrational alchemy journey.",
};

export default function BookOnline() {
  return (
    <div className="bg-sage-500">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-sage-600 to-sage-500">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-display mb-6 text-cream-100">
            Book Your Session
          </h1>
          <p className="text-xl text-cream-100 leading-relaxed italic">
            Ready to begin your <em className="not-italic font-medium">transformative journey</em>? Contact me to schedule your session.
          </p>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 px-4 bg-sage-600">
        <div className="max-w-3xl mx-auto">
          <div className="bg-sage-700 border-2 border-sage-700 rounded-lg p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-display mb-4 text-cream-100">
              Please Contact Me First
            </h2>
            <p className="text-cream-100 leading-relaxed">
              Before booking any services, I'd love to connect with you to ensure we find the
              <em className="italic">perfect offering for your unique needs and intentions</em>. Please fill out the form
              below or email me directly.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display text-center mb-12 text-cream-100">
            Available Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Sound Healing */}
            <div className="bg-sage-600 p-6 rounded-lg border border-sage-700">
              <h3 className="text-2xl font-display mb-2 text-cream-100">Sound Healing</h3>
              <p className="text-sm text-cream-200 mb-4 italic">1:1, Group, Retreat</p>
              <p className="text-cream-100 leading-relaxed">
                Vibrational healing with crystal bowls and sacred instruments.
              </p>
            </div>

            {/* Herbal Consultation */}
            <div className="bg-sage-600 p-6 rounded-lg border border-sage-700">
              <h3 className="text-2xl font-display mb-2 text-cream-100">
                Herbal Consultation
              </h3>
              <p className="text-sm text-cream-200 mb-4 italic">Personalized Remedies</p>
              <p className="text-cream-100 leading-relaxed">
                Personalized herbal remedies—tinctures, teas, plant preparations.
              </p>
            </div>

            {/* Psilocybin Journeys */}
            <div className="bg-sage-600 p-6 rounded-lg border border-sage-700">
              <h3 className="text-2xl font-display mb-2 text-cream-100">
                Psilocybin Journeys
              </h3>
              <p className="text-sm text-cream-200 mb-4 italic">Private 1:1</p>
              <p className="text-cream-100 leading-relaxed">
                Deep sound-and-energy ceremony with sacred medicine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-sage-500 border-t border-sage-700">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-display text-center mb-4 text-cream-100">
            Book Your Session
          </h2>
          <p className="text-center text-cream-100 mb-12 italic">
            Fill out the form below and I'll get back to you within 24-48 hours.
          </p>
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

      {/* Payment Info */}
      <section className="py-12 px-4 bg-sage-600">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-display mb-4 text-cream-100">Payment Methods</h3>
          <p className="text-cream-100">
            I accept Yappy, Cash, Direct Bank Transfer, and PayPal
          </p>
        </div>
      </section>
    </div>
  );
}
