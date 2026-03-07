import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "Join Kings County Farm Bureau for $500/year. Access California Farm Bureau membership, advertising discounts, business directories and exclusive member benefits.",
};

const benefits = [
  "Complimentary California Farm Bureau membership",
  "Subscription to Farm Life monthly newspaper",
  "Bi-weekly eNewsletter subscription",
  "Advertising discounts",
  "California Farm Bureau discounts on goods and services",
  "Access to business directories (Farms & Ranches, Brokers & Commodities, Dairies, Professional Services, Labor, Food Service)",
  "Access to the Grower/Processor Checklist",
  "Networking at First Friday lunches and exclusive member events",
  "Legislative representation at local, state and federal levels",
  "Updates on water rights, land use and regulatory issues affecting Kings County",
];

const directories = [
  "Farms & Ranches",
  "Brokers & Commodities",
  "Dairies",
  "Professional Services",
  "Labor",
  "Food Service",
];

const steps = [
  {
    step: "01",
    title: "Join",
    description: "Become a member for $500/year and gain access to all KCFB benefits and California Farm Bureau membership.",
  },
  {
    step: "02",
    title: "Stay Informed",
    description: "Receive the Farm Life newspaper, eNewsletter and podcast updates on agriculture issues.",
  },
  {
    step: "03",
    title: "Get Connected",
    description: "Attend First Friday lunches, Wine vs. Beer Showdown, Harvest Classic and other networking events.",
  },
  {
    step: "04",
    title: "Be Represented",
    description: "KCFB advocates on your behalf at local, state and federal levels on water, land and regulatory issues.",
  },
];

export default function MembershipPage() {
  return (
    <>
      <PageHero
        title="Membership"
        subtitle="Join the only organization exclusively dedicated to protecting Kings County agriculture. $500/year. Member since 1918."
        badge="Join KCFB"
        bgImage="/images/gallery/membership-hero.jpg"
      />

      {/* Membership Card */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Agricultural Membership
              </h2>
              <div className="inline-flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-bold text-gray-900">
                  $500
                </span>
                <span className="text-gray-500 text-lg">/year</span>
              </div>
              <p className="text-gray-600 leading-relaxed mb-8">
                Your annual KCFB membership funds agricultural advocacy, legal defense of
                water rights, educational programs and community events that benefit all
                of Kings County agriculture.
              </p>

              <h3 className="font-bold text-lg mb-4 text-gray-900">
                Member Benefits Include:
              </h3>
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle
                      size={18}
                      className="mt-0.5 flex-shrink-0 text-[#5C6A22]"
                    />
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://connect.intuit.com/portal/app/CommerceNetwork/view/scs-v1-52cc8a801b0e47e7bcec9898fa6cea232f4ce0c4a5e047688160ab0cdaee3a542e1c932d3e8f40a195cd701d88b4896e?locale=EN_US"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-white transition-all hover:opacity-90 bg-[#A0422A]"
              >
                Apply for Membership <ArrowRight size={16} />
              </a>
            </div>

            <div className="space-y-6">
              <Image
                src="/images/gallery/new-membership.jpg"
                alt="KCFB Members"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg w-full object-cover"
                style={{ maxHeight: "350px" }}
              />

              {/* Business Directories */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-lg mb-4 text-gray-900">
                  Business Directories
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Members gain access to our agricultural business directories covering:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {directories.map((dir) => (
                    <div
                      key={dir}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[#F6B330]" />
                      {dir}
                    </div>
                  ))}
                </div>
              </div>

              {/* California Farm Bureau */}
              <div className="rounded-xl p-6 bg-[#5C6A22]">
                <h3 className="font-bold text-lg mb-3 text-white">
                  Includes California Farm Bureau Membership
                </h3>
                <p className="text-green-200 text-sm leading-relaxed">
                  Your KCFB membership includes a complimentary California Farm Bureau
                  Federation membership, connecting you to the statewide network of
                  agricultural advocates and extending your member discounts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              How Membership Works
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.step} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="text-4xl font-bold mb-3 text-amber-100">
                  {step.step}
                </div>
                <h3 className="font-bold text-lg mb-3 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">
            Membership FAQ
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "What is Kings County Farm Bureau?",
                a: "Kings County Farm Bureau is an independent, non-governmental, grassroots organization that has been advocating for farmers, ranchers and dairymen in Kings County since 1918. We provide education, promotion and representation of agriculture.",
              },
              {
                q: "How much does membership cost?",
                a: "Agricultural membership is $500 per year. This includes a complimentary California Farm Bureau membership, subscriptions to our Farm Life newspaper and eNewsletter, and access to advertising and member discounts.",
              },
              {
                q: "What industries do you serve?",
                a: "We serve all agricultural operations in Kings County including farming and crop production, ranching and livestock, dairy operations and agribusiness and professional services.",
              },
              {
                q: "How do I advertise in Farm Life?",
                a: "Contact our office at kcfb@kcfb.org or call 559-584-3557 to learn about advertising opportunities in our monthly Farm Life newspaper.",
              },
            ].map((faq) => (
              <div key={faq.q} className="border border-gray-100 rounded-xl p-6">
                <h3 className="font-bold text-base mb-3 text-gray-900">
                  {faq.q}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-4 bg-[#5C6A22]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Ready to Join Kings County Farm Bureau?
          </h2>
          <p className="text-green-200 text-lg mb-8 leading-relaxed">
            Contact our office to start your membership application. Our team will
            walk you through the process and answer any questions you have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://connect.intuit.com/portal/app/CommerceNetwork/view/scs-v1-52cc8a801b0e47e7bcec9898fa6cea232f4ce0c4a5e047688160ab0cdaee3a542e1c932d3e8f40a195cd701d88b4896e?locale=EN_US"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg font-bold text-lg transition-all hover:opacity-90 bg-[#F6B330] text-[#1a1a1a]"
            >
              Apply for Membership
            </a>
            <a
              href="tel:5595843557"
              className="px-8 py-4 rounded-lg font-bold text-lg border border-white/30 text-white hover:bg-white/10 transition-all"
            >
              Call 559-584-3557
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
