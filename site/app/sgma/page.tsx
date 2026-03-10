import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Scale, DollarSign, AlertCircle, CheckCircle, FileText, Newspaper } from "lucide-react";

export const metadata: Metadata = {
  title: "SGMA Defense",
  description:
    "Kings County Farm Bureau is challenging the State Water Resources Control Board's probationary designation of the Tulare Lake Subbasin under SGMA. Learn about the case and donate to the defense fund.",
};

const timeline = [
  {
    date: "May 2024",
    title: "Writ Filed in Kings County Superior Court",
    description:
      "Kings County Farm Bureau files a legal challenge against the State Water Resources Control Board's probationary designation of the Tulare Lake Subbasin, which required growers to meter groundwater pumping, register wells and pay extraction fees.",
    status: "past",
  },
  {
    date: "July 2024",
    title: "Temporary Restraining Order Issued",
    description:
      "The court grants a temporary restraining order blocking SWRCB requirements from taking effect while the case is heard.",
    status: "past",
  },
  {
    date: "September 2024",
    title: "Preliminary Injunction Granted",
    description:
      "A preliminary injunction is granted, further blocking the SWRCB requirements while litigation continues.",
    status: "past",
  },
  {
    date: "June 2025",
    title: "Appeal Filed with Fifth District",
    description:
      "KCFB files an appeal with the Fifth District Court of Appeal, escalating the legal challenge.",
    status: "past",
  },
  {
    date: "October 2025",
    title: "Oral Arguments and Appellate Opinion",
    description:
      "Oral arguments are held before the Fifth District. The Appellate Court issues its opinion on the case.",
    status: "past",
  },
  {
    date: "December 2025",
    title: "Petition Filed with California Supreme Court",
    description:
      "KCFB files a petition with the California Supreme Court to further challenge the SWRCB's authority.",
    status: "past",
  },
  {
    date: "January 2026",
    title: "Trial Court Status Hearing",
    description:
      "A status hearing is held in Kings County Superior Court to assess the case following appellate proceedings.",
    status: "past",
  },
  {
    date: "March 2026",
    title: "Court Hearing After Remittitur",
    description:
      "Status conference held after remittitur. The case continues through the California court system.",
    status: "active",
  },
];

const newsArticles = [
  {
    title: "KCFB v. STATE: What the Appellate Ruling Means for Groundwater Rights in Kings County",
    author: "Dusty Ference",
    date: "November 1, 2025",
    summary:
      "An in-depth analysis of the Fifth District Court of Appeal ruling and its implications for groundwater management and farmers' rights in Kings County.",
  },
  {
    title: "Kings County Farm Bureau Responds to Appellate Ruling in Groundwater Oversight Case",
    author: "KCFB",
    date: "October 29, 2025",
    summary:
      "Official statement from Kings County Farm Bureau following the appellate court's decision on the SGMA probation challenge.",
  },
  {
    title: "Defending Local Control of Groundwater: Update on KCFB's SGMA Lawsuit",
    author: "Dusty Ference",
    date: "October 25, 2025",
    summary:
      "Executive Director Dusty Ference provides an update on the ongoing legal challenge to protect local groundwater management authority.",
  },
  {
    title: "KCFB v. STATE: Fifth District Court of Appeal",
    author: "Dusty Ference",
    date: "September 24, 2025",
    summary:
      "Coverage of the case as it moves to the Fifth District Court of Appeal, detailing the legal arguments and potential outcomes.",
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

const individualSupporters = [
  "Shane Bickner",
  "Zach Bickner",
  "John Ellis",
  "Dusty Ference",
  "Garrett Gilcrease",
  "Julie Martella",
  "Brian Medeiros",
  "Michael Miya",
  "Larry Peltzer",
  "Kevin Robertson",
  "Daniel Soares",
  "Chad Souza",
  "Helen Sullivan",
];

const institutionalSupporters = [
  "City of Lemoore",
  "City of Hanford",
  "Tulare County Farm Bureau",
  "Yuba-Sutter County Farm Bureau",
];

export default function SGMAPage() {
  return (
    <>
      {/* Expanded Hero - overlaps transparent header */}
      <section
        className="relative text-white"
        style={{
          minHeight: "85vh",
          paddingTop: "110px",
        }}
      >
        <Image
          src="/images/gallery/sgma-hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "bottom center" }}
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.55)" }}
        />
        <div className="relative z-10 flex items-center justify-center" style={{ minHeight: "calc(85vh - 110px)" }}>
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 bg-[#F6B330] text-[#1a1a1a]">
              Active Litigation
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight">
              SGMA Defense
            </h1>
            <p className="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Kings County Farm Bureau is fighting to protect local water rights
              against the State Water Resources Control Board&apos;s unprecedented
              overreach.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 bg-amber-50 text-amber-800">
                ACTIVE LEGAL CHALLENGE
              </div>
              <h2 className="text-3xl font-bold mb-2 text-gray-900">
                Kings County Farm Bureau vs. State Water Resources Control Board
              </h2>
              <p className="text-lg text-[#A0422A] font-semibold mb-4 italic">
                Defending our water rights. Protecting our agricultural future.
              </p>
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
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
                <div className="rounded-xl p-4 text-center bg-[#5C6A22]/10">
                  <div className="text-2xl font-bold text-[#5C6A22]">
                    $80,585
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    Legal defense in 2026
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
                sizes="(max-width: 1024px) 100vw, 50vw"
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

      {/* Latest News */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3 text-gray-900">
              SGMA Latest News
            </h2>
            <p className="text-gray-600">
              Updates on the SGMA defense case from Kings County Farm Bureau.
            </p>
          </div>
          <div className="space-y-4">
            {newsArticles.map((article) => (
              <div
                key={article.title}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#A0422A]/10">
                    <Newspaper size={18} className="text-[#A0422A]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-base mb-1 text-gray-900">
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                      <span>{article.date}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-300" />
                      <span>By {article.author}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {article.summary}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* White Paper Download */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#5C6A22]/10">
              <FileText size={32} className="text-[#5C6A22]" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-bold text-lg mb-2 text-gray-900">
                SGMA Defense White Paper
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Read the full legal background, causes of action, court rulings and
                timeline of KCFB&apos;s challenge to the State Water Resources Control
                Board&apos;s probation of the Tulare Lake Subbasin.
              </p>
            </div>
            <a
              href="/pdfs/SGMA-White-Paper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg font-bold text-white transition-all hover:opacity-90 bg-[#5C6A22] flex-shrink-0 inline-flex items-center gap-2"
            >
              <FileText size={16} />
              Download PDF
            </a>
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

      {/* Supporters */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-3 text-gray-900">
              Supporters
            </h2>
            <p className="text-gray-600">
              We are grateful to the individuals and organizations who have stood with Kings County Farm Bureau in this legal defense.
            </p>
          </div>

          {/* Individual Supporters */}
          <div className="mb-10">
            <h3 className="text-lg font-bold mb-5 text-gray-800">
              Individual Supporters
            </h3>
            <div className="flex flex-wrap gap-3">
              {individualSupporters.map((name) => (
                <span
                  key={name}
                  className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-[#5C6A22]/10 text-[#5C6A22] border border-[#5C6A22]/20"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>

          {/* Institutional Supporters */}
          <div>
            <h3 className="text-lg font-bold mb-5 text-gray-800">
              Institutional Supporters
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {institutionalSupporters.map((org) => (
                <div
                  key={org}
                  className="bg-gray-50 rounded-xl p-5 border border-gray-100 text-center"
                >
                  <div className="w-10 h-10 rounded-full bg-[#A0422A]/10 flex items-center justify-center mx-auto mb-3">
                    <Scale size={18} className="text-[#A0422A]" />
                  </div>
                  <p className="font-semibold text-gray-900 text-sm">{org}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Donate CTA */}
      <section className="py-16 px-4 bg-[#A0422A]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Support the SGMA Defense</h2>
          <p className="text-white/80 text-lg leading-relaxed mb-4">
            The legal defense has cost over $700,000 across 2024, 2025 and 2026. We rely on
            donations from farmers, ranchers and community members who believe in
            protecting local water rights.
          </p>
          <p className="text-white/60 mb-4">
            Every contribution helps fund the legal battle to protect Kings County
            agriculture&apos;s future.
          </p>
          <p className="text-white/70 mb-8 text-sm font-medium">
            Donate via our secure Square checkout to support the legal defense.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://checkout.square.site/merchant/4G1PSV9XWFP6G/checkout/AOWE5GPL3DW3NHAULGNN2AVT"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg font-bold text-lg transition-all hover:opacity-90 bg-[#F6B330] text-[#1a1a1a]"
            >
              Donate to the Defense Fund
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
                a: "You can donate directly through our contact page or by calling our office at 559-584-3557. Donate via our secure Square checkout to support the legal defense. The legal defense has cost over $700,000 across 2024, 2025 and 2026, and we rely on donations from farmers and community members who believe in protecting local water rights.",
              },
              {
                q: "What is the current status of the case?",
                a: "We won a temporary restraining order and preliminary injunction blocking the SWRCB requirements. KCFB has filed appeals through the Fifth District Court of Appeal and the California Supreme Court. A status conference was held after remittitur in March 2026, and the case continues through the California court system.",
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
