"use client";

import { useState } from "react";
import ContactForm from "@/components/ContactForm";

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
    title: "Virtual Support Session",
    type: "Online",
    description:
      "A focused virtual session tailored to your needs. This time can be used for intuitive guidance, a consultation, an energy clearing, or general support.",
    forWhom:
      "For anyone wanting personalized support or clarity without needing to commit to a specific type of session."
  },
  {
    title: "Energy Clearing",
    type: "Online, In-person",
    description:
      "Energy clearing sessions that work with your energetic field to release blockages, transmute distorted emotions, and restore balance.",
    forWhom:
      "For anyone seeking energetic support and healing, whether in person or from the comfort of their own space."
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

const virtualPackages = [
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

const inPersonPackages = [
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
  const [packagesOpen, setPackagesOpen] = useState(false);

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
                  <h3 className="font-semibold text-cream-100 mb-2 italic">Who it&apos;s for:</h3>
                  <p className="text-cream-200 leading-relaxed">{offering.forWhom}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Packages Toggle */}
      <section className="py-16 px-4 bg-sage-600">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <button
              onClick={() => setPackagesOpen(!packagesOpen)}
              className="inline-flex items-center gap-3 px-8 py-4 bg-cream-100 text-sage-900 rounded-md hover:bg-cream-200 transition-colors font-medium shadow-md hover:shadow-lg text-xl"
            >
              <span>Packages</span>
              <svg
                className={`w-5 h-5 transition-transform ${packagesOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {packagesOpen && (
            <div className="space-y-12 animate-in fade-in duration-300">
              {/* Virtual Packages */}
              <div>
                <h3 className="text-3xl md:text-4xl font-display text-center mb-8 text-cream-100">
                  Virtual Packages
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {virtualPackages.map((pkg, index) => (
                    <div
                      key={index}
                      className="bg-sage-700 rounded-lg p-8 border border-sage-800"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="text-2xl md:text-3xl font-display text-cream-100">
                            {pkg.title}
                          </h4>
                          <p className="text-cream-200 italic">{pkg.subtitle}</p>
                        </div>
                        <span className="text-2xl font-display text-cream-100">{pkg.price}</span>
                      </div>
                      <div className="mt-6">
                        <h5 className="font-semibold text-cream-100 mb-3 italic">Includes:</h5>
                        <ul className="space-y-2">
                          {pkg.includes.map((item, i) => (
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

              {/* In-Person Packages */}
              <div>
                <h3 className="text-3xl md:text-4xl font-display text-center mb-8 text-cream-100">
                  In-Person Packages
                </h3>
                <div className="space-y-8">
                  {inPersonPackages.map((pkg, index) => (
                    <div
                      key={index}
                      className="bg-sage-700 rounded-lg p-8 md:p-12 border border-sage-800"
                    >
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                        <div>
                          <h4 className="text-3xl md:text-4xl font-display text-cream-100">
                            {pkg.title}
                          </h4>
                          <p className="text-cream-200 italic">{pkg.subtitle}</p>
                        </div>
                        <span className="text-3xl font-display text-cream-100 mt-2 md:mt-0">{pkg.price}</span>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h5 className="font-semibold text-cream-100 mb-3 italic">Includes:</h5>
                          <ul className="space-y-2">
                            {pkg.includes.map((item, i) => (
                              <li key={i} className="text-cream-200 flex items-start">
                                <span className="text-cream-100 mr-2">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h5 className="font-semibold text-cream-100 mb-2 italic">Perfect for:</h5>
                          <p className="text-cream-200 leading-relaxed">{pkg.perfectFor}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add-Ons */}
              <div>
                <h3 className="text-3xl md:text-4xl font-display text-center mb-8 text-cream-100">
                  Add-Ons
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {addOns.map((addon, index) => (
                    <div
                      key={index}
                      className="bg-sage-700 rounded-lg p-6 border border-sage-800 text-center"
                    >
                      <h4 className="text-xl font-display text-cream-100 mb-2">
                        {addon.title}
                      </h4>
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
            </div>
          )}
        </div>
      </section>

      {/* Retreats CTA */}
      <section className="py-16 px-4 bg-sage-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display mb-6 text-cream-100">
            Retreats
          </h2>
          <p className="text-xl text-cream-200 mb-8 leading-relaxed max-w-2xl mx-auto">
            I&apos;d love to be a part of your retreat! Please contact me to receive my <em className="italic font-bold">Retreat Packages</em>.
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
