import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import Link from "next/link";
import { Scale, DollarSign, AlertCircle, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "SGMA Defense",
  description:
    "Kings County Farm Bureau is challenging the State Water Resources Control Board's probationary designation of the Tulare Lake Subbasin under SGMA. Learn about the case and donate to the defense fund.",
};

const timeline = [
  {
    date: "May 2024",
    title: "SWRCB Imposes Probation",
    description:
      "The State Water Resources Control Board places the Tulare Lake Subbasin on probation, imposing metering requirements, well registration and extraction fees.",
    status: "past",
  },
  {
    date: "2024",
    title: "Temporary Restraining Order",
    description:
      "KCFB and partners win a temporary restraining order blocking SWRCB requirements from taking effect while the case is heard.",
    status: "past",
  },
  {
    date: "2024",
    title: "Preliminary Injunction",
    description:
      "A preliminary injunction is granted, further blocking the SWRCB requirements while litigation continues.",
    status: "past",
  },
  {
    date: "Ongoing",
    title: "Case Continues",
    description:
      "The legal challenge continues through the California court system. KCFB is committed to fighting this case to the California Supreme Court if necessary.",
    status: "active",
  },
];

const logos = [
  { src: "/images/logos/El-Rico-GSA-Image-Logo.jpg", alt: "El Rico GSA" },
  { src: "/images/logos/Greater-Kawaeh-Image-Logo.jpg", alt: "Greater Kaweah GSA" },
  { src: "/images/logos/KCFB-SWK-Image-Logo.jpg", alt: "SWK" },
  { src: "/images/logos/KCFB-Tri-County-Log.jpg", alt: "Tri-County" },
  { src: "/images/logos/MidKings-River-Image-Logo.jpg", alt: "Mid-Kings River" },
  { src: "/images/logos/South-Fork-Kings-Image-Logo.jpg", alt: "South Fork Kings" },
];

export default function SGMAPage() {
  return (
    <>
      <PageHero
        title="SGMA Defense"
        subtitle="Kings County Farm Bureau is fighting to protect local water rights against the State Water Resources Control Board's unprecedented overreach."
        badge="Active Litigation"
        bgImage="/images/gallery/mid-kings-river-gsa-boundary.jpg"
      />

      {/* Overview */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 bg-amber-50 text-amber-800">
                ACTIVE LEGAL CHALLENGE
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                What Is the SGMA Case?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Kings County Farm Bureau is challenging the State Water Resources Control
                Board&apos;s (SWRCB) decision to place the Tulare Lake Subbasin on probation
                under the Sustainable Groundwater Management Act (SGMA).
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We believe the SWRCB exceeded its authority by imposing metering
                requirements, well registration and extraction fees on local farmers
                without proper legal basis.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Local farmers, ranchers and agricultural operations deserve the right
                to manage their own water resources through locally governed Groundwater
                Sustainability Agencies - not through state-imposed probation with
                heavy-handed fee requirements.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl p-4 text-center bg-[#5C6A22]/10">
                  <div className="text-2xl font-bold text-[#5C6A22]">
                    $336,372
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    Legal defense in 2024
                  </div>
                </div>
                <div className="rounded-xl p-4 text-center bg-[#5C6A22]/10">
                  <div className="text-2xl font-bold text-[#5C6A22]">
                    $288,517
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    Legal defense in 2025
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/images/logos/SGMA-Defense-Logo.png"
                alt="SGMA Defense"
                width={500}
                height={400}
                className="rounded-2xl w-full object-contain bg-gray-50 p-8"
                style={{ maxHeight: "400px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Points */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              What We Are Fighting Against
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: AlertCircle,
                title: "State Overreach",
                description:
                  "The SWRCB has imposed probation on the Tulare Lake Subbasin, giving state agencies direct control over local groundwater management that should remain with local Groundwater Sustainability Agencies.",
              },
              {
                icon: DollarSign,
                title: "Unreasonable Fees",
                description:
                  "The probation comes with metering requirements, well registration mandates and extraction fees that impose significant financial burdens on Kings County farmers and ranchers.",
              },
              {
                icon: Scale,
                title: "Legal Authority Challenge",
                description:
                  "We believe the SWRCB exceeded its legal authority under SGMA. The court agreed - granting both a temporary restraining order and a preliminary injunction blocking the requirements.",
              },
            ].map((point) => (
              <div
                key={point.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-[#A0422A]/10">
                  <point.icon size={24} className="text-[#A0422A]" />
                </div>
                <h3 className="font-bold text-lg mb-3 text-gray-900">
                  {point.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Timeline */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Case Timeline
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#5C6A22]/20" />
            <div className="space-y-8">
              {timeline.map((item) => (
                <div key={item.title} className="relative flex gap-6">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 z-10 border-4 border-white"
                    style={{
                      backgroundColor:
                        item.status === "active" ? "#F6B330" : "#5C6A22",
                    }}
                  >
                    <CheckCircle size={16} className="text-white" />
                  </div>
                  <div className="flex-1 pb-2">
                    <div className="text-xs font-semibold mb-1 text-[#A0422A]">
                      {item.date}
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GSA Partners */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-3 text-gray-900">
              Groundwater Sustainability Agencies
            </h2>
            <p className="text-gray-600">
              KCFB works alongside local Groundwater Sustainability Agencies in the SGMA defense.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {logos.map((logo) => (
              <div
                key={logo.alt}
                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center justify-center h-24"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={60}
                  className="object-contain max-h-16"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donate CTA */}
      <section className="py-16 px-4 bg-[#A0422A]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Support the SGMA Defense</h2>
          <p className="text-white/80 text-lg leading-relaxed mb-4">
            The legal defense has cost over $600,000 across 2024 and 2025. We rely on
            donations from farmers, ranchers and community members who believe in
            protecting local water rights.
          </p>
          <p className="text-white/60 mb-8">
            Every contribution helps fund the legal battle to protect Kings County
            agriculture&apos;s future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact/"
              className="px-8 py-4 rounded-lg font-bold text-lg transition-all hover:opacity-90 bg-[#F6B330] text-[#1a1a1a]"
            >
              Donate to the Defense Fund
            </Link>
            <a
              href="tel:5595843557"
              className="px-8 py-4 rounded-lg font-bold text-lg border border-white/30 text-white hover:bg-white/10 transition-all"
            >
              Call 559-584-3557
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">
            SGMA FAQ
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "What is the SGMA case about?",
                a: "We are challenging the State Water Resources Control Board's decision to place the Tulare Lake Subbasin on probation under the Sustainable Groundwater Management Act. We believe the board exceeded its authority by imposing metering requirements, well registration and extraction fees on local farmers.",
              },
              {
                q: "How can I support the SGMA defense?",
                a: "You can donate directly through our contact page or by calling our office at 559-584-3557. The legal defense has cost over $600,000 across 2024 and 2025, and we rely on donations from farmers and community members who believe in protecting local water rights.",
              },
              {
                q: "What is the current status of the case?",
                a: "We won a temporary restraining order and preliminary injunction blocking the SWRCB requirements. The legal challenge continues through the California court system. KCFB is committed to fighting this case to the California Supreme Court if necessary.",
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
    </>
  );
}
