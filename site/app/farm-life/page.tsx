import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import Link from "next/link";
import { Download, Mail, Phone, Newspaper } from "lucide-react";

export const metadata: Metadata = {
  title: "Farm Life - Monthly Newspaper",
  description:
    "Farm Life is Kings County Farm Bureau's monthly newspaper covering agricultural news, events and issues affecting Kings County farmers and ranchers.",
};

const currentIssue = {
  title: "Farm Life - March 2026",
  image: "/images/gallery/FarmLife March 2026 FINAL cvr.jpg",
  date: "March 2026",
  pdf: "/pdfs/FarmLife-March-2026-FINAL-sml.pdf",
};

const recentIssues = [
  {
    title: "February 2026",
    image: "/images/gallery/FarmLife-Feb-2026-cover.jpg",
    pdf: "/pdfs/FarmLife-Feb-2026-sml.pdf",
  },
  {
    title: "January 2026",
    image: "/images/gallery/FarmLife Jan 2026 FINAL.cover.jpg",
    pdf: "/pdfs/FarmLife-Jan-2026-FINALsmall.pdf",
  },
];

const archiveYears = [
  { year: "2025", url: "https://www.kcfb.org/farm-life-2025" },
  { year: "2024", url: "https://www.kcfb.org/farm-life-2024" },
  { year: "2023", url: "https://www.kcfb.org/farm-life-2023" },
  { year: "2022", url: "https://www.kcfb.org/farm-life-2022" },
  { year: "2021", url: "https://www.kcfb.org/farm-life-2021" },
  { year: "2020", url: "https://www.kcfb.org/farm-life-2020" },
];

export default function FarmLifePage() {
  return (
    <>
      <PageHero
        title="Farm Life"
        subtitle="The official monthly publication of the Kings County Farm Bureau - keeping members and the community informed on agricultural news and issues."
        badge="Monthly Newspaper"
        bgImage="/images/gallery/FarmLife.jpg"
      />

      {/* Featured Latest Issue */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Cover Image */}
            <div className="relative">
              <div className="bg-gray-50 rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <Image
                  src={currentIssue.image}
                  alt={currentIssue.title}
                  width={600}
                  height={800}
                  className="w-full object-contain"
                />
              </div>
              <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-full text-xs font-bold bg-[#F6B330] text-[#1a1a1a] shadow-md">
                Latest Issue
              </div>
            </div>

            {/* Description */}
            <div className="lg:sticky lg:top-8">
              <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 bg-[#A0422A]/10 text-[#A0422A]">
                {currentIssue.date.toUpperCase()}
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                {currentIssue.title}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Farm Life is Kings County Farm Bureau&apos;s monthly newspaper covering the
                agricultural news, events and policy issues that matter most to Kings
                County farmers, ranchers and dairymen.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Each issue features local agricultural news, legislative updates, event
                coverage, member spotlights and advertising opportunities for
                agribusinesses serving the Kings County community.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Farm Life is included with your KCFB membership. To advertise in Farm
                Life, contact our office at{" "}
                <a
                  href="mailto:kcfb@kcfb.org"
                  className="font-medium text-[#A0422A] hover:underline"
                >
                  kcfb@kcfb.org
                </a>{" "}
                or call{" "}
                <a
                  href="tel:5595843557"
                  className="font-medium text-[#A0422A] hover:underline"
                >
                  559-584-3557
                </a>
                .
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <a
                  href={currentIssue.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg font-bold text-white text-center transition-all hover:opacity-90 bg-[#A0422A] inline-flex items-center justify-center gap-2"
                >
                  <Download size={18} />
                  Read This Issue (PDF)
                </a>
                <Link
                  href="/membership/"
                  className="px-6 py-3 rounded-lg font-bold text-center border border-[#5C6A22] text-[#5C6A22] transition-all hover:bg-[#5C6A22]/10"
                >
                  Become a Member
                </Link>
              </div>

              {/* Quick Info */}
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-bold text-sm text-gray-900 mb-3">About Farm Life</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>Published monthly by Kings County Farm Bureau</p>
                  <p>Included free with KCFB membership</p>
                  <p>Covering Kings County agriculture since 1918</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Issues Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3 text-gray-900">
              2026 Issues
            </h2>
            <p className="text-gray-600">
              Browse and download past editions of Farm Life.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[currentIssue, ...recentIssues.map((i) => ({ ...i, image: i.image, pdf: i.pdf }))].map((issue) => (
              <a
                key={issue.title}
                href={issue.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="relative aspect-[3/4] bg-gray-100">
                  <Image
                    src={issue.image}
                    alt={issue.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-full p-3 shadow-lg">
                      <Download size={20} className="text-[#A0422A]" />
                    </div>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-sm text-gray-900">
                    {issue.title}
                  </h3>
                  <p className="text-xs text-[#A0422A] font-medium mt-1">Download PDF</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Archive Years */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-3 text-gray-900">
              Past Years Archive
            </h2>
            <p className="text-gray-600">
              Browse Farm Life editions from previous years on our archive.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {archiveYears.map((archive) => (
              <a
                key={archive.year}
                href={archive.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-50 rounded-xl p-5 border border-gray-100 text-center hover:border-[#5C6A22]/30 hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-[#5C6A22]/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-[#5C6A22]/20 transition-colors">
                  <Newspaper size={18} className="text-[#5C6A22]" />
                </div>
                <p className="font-bold text-lg text-gray-900">{archive.year}</p>
                <p className="text-xs text-gray-500 mt-1">View Archive</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Advertising CTA */}
      <section className="py-14 px-4 bg-[#5C6A22]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">Advertise in Farm Life</h2>
          <p className="text-green-200 mb-6 leading-relaxed">
            Reach Kings County agricultural professionals, farmers, ranchers and
            agribusiness leaders through Farm Life. Contact us to learn about
            advertising rates and opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kcfb@kcfb.org"
              className="px-6 py-3 rounded-lg font-bold transition-all hover:opacity-90 bg-[#F6B330] text-[#1a1a1a] inline-flex items-center justify-center gap-2"
            >
              <Mail size={18} />
              Email kcfb@kcfb.org
            </a>
            <a
              href="tel:5595843557"
              className="px-6 py-3 rounded-lg font-bold border border-white/30 text-white hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              Call 559-584-3557
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
