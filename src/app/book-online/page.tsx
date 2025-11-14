import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Book Online - SERPRANA",
  description: "Book your transformative healing session with Kate. Contact us to schedule your sound healing, energy clearing, or vibrational alchemy journey.",
};

export default function BookOnline() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-sage-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-display mb-6 text-earth-900">
            Book Your Session
          </h1>
          <p className="text-xl text-earth-700 leading-relaxed italic">
            Ready to begin your <em className="not-italic font-medium">transformative journey</em>? Contact me to schedule your session.
          </p>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 px-4 bg-earth-50">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border-2 border-earth-600 rounded-lg p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-display mb-4 text-earth-900">
              Please Contact Me First
            </h2>
            <p className="text-earth-700 leading-relaxed">
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
          <h2 className="text-3xl md:text-4xl font-display text-center mb-12 text-earth-900">
            Available Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Sound Healing */}
            <div className="bg-sage-50 p-6 rounded-lg border border-earth-200">
              <h3 className="text-2xl font-display mb-2 text-earth-900">Sound Healing</h3>
              <p className="text-sm text-earth-600 mb-4 italic">Private Group or 1:1</p>
              <p className="text-earth-700 leading-relaxed">
                Vibrational healing using crystal bowls and high vibrational instruments.
              </p>
            </div>

            {/* Alchemy Energy Clearing */}
            <div className="bg-sage-50 p-6 rounded-lg border border-earth-200">
              <h3 className="text-2xl font-display mb-2 text-earth-900">
                Alchemy Energy Clearing
              </h3>
              <p className="text-sm text-earth-600 mb-4 italic">Online or In-Person</p>
              <p className="text-earth-700 leading-relaxed">
                Multi-layered energetic purification removing densities and blockages.
              </p>
            </div>

            {/* Vibrational Alchemy Medicine Journey */}
            <div className="bg-sage-50 p-6 rounded-lg border border-earth-200">
              <h3 className="text-2xl font-display mb-2 text-earth-900">
                Vibrational Alchemy Medicine Journey
              </h3>
              <p className="text-sm text-earth-600 mb-4 italic">Private 1:1</p>
              <p className="text-earth-700 leading-relaxed">
                Deep sound-and-energy ceremony to elevate your vibration.
              </p>
            </div>

            {/* Rooted Radiance Immersion */}
            <div className="bg-sage-50 p-6 rounded-lg border border-earth-200">
              <h3 className="text-2xl font-display mb-2 text-earth-900">
                Rooted Radiance Immersion
              </h3>
              <p className="text-sm text-earth-600 mb-4 italic">Private 3-Night 1:1</p>
              <p className="text-earth-700 leading-relaxed">
                Personalized healing immersion in nature with ceremonies and treatments.
              </p>
            </div>

            {/* Inner Alchemy Guidance */}
            <div className="bg-sage-50 p-6 rounded-lg border border-earth-200">
              <h3 className="text-2xl font-display mb-2 text-earth-900">
                Inner Alchemy Guidance
              </h3>
              <p className="text-sm text-earth-600 mb-4 italic">Mentorship Opportunities</p>
              <p className="text-earth-700 leading-relaxed">
                Personalized transformational journey to align with your soul's purpose.
              </p>
            </div>

            {/* Discovery Call */}
            <div className="bg-sage-50 p-6 rounded-lg border border-earth-200">
              <h3 className="text-2xl font-display mb-2 text-earth-900">Discovery Call</h3>
              <p className="text-sm text-earth-600 mb-4 italic">Complimentary</p>
              <p className="text-earth-700 leading-relaxed">
                Connect with me to discuss which service is right for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-white border-t border-earth-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-display text-center mb-4 text-earth-900">
            Book Your Session
          </h2>
          <p className="text-center text-earth-700 mb-12 italic">
            Fill out the form below and I'll get back to you within 24-48 hours.
          </p>
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

      {/* Payment Info */}
      <section className="py-12 px-4 bg-earth-50">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-display mb-4 text-earth-900">Payment Methods</h3>
          <p className="text-earth-700">
            I accept Yappy, Cash, Direct Bank Transfer, and PayPal
          </p>
        </div>
      </section>
    </div>
  );
}
