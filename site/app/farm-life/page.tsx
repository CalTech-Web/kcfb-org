import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Farm Life - Monthly Newspaper",
  description:
    "Farm Life is Kings County Farm Bureau's monthly newspaper covering agricultural news, events and issues affecting Kings County farmers and ranchers.",
};

const issues = [
  {
    title: "Farm Life - March 2026",
    image: "/images/gallery/FarmLife March 2026 FINAL cvr.jpg",
    date: "March 2026",
  },
  {
    title: "Farm Life - February 2026",
    image: "/images/gallery/FarmLife-Feb-2026-cover.jpg",
    date: "February 2026",
  },
  {
    title: "Farm Life - January 2026",
    image: "/images/gallery/FarmLife Jan 2026 FINAL.cover.jpg",
    date: "January 2026",
  },
];

export default function FarmLifePage() {
  return (
    <>
      <PageHero
        title="Farm Life"
        subtitle="Kings County Farm Bureau's monthly newspaper keeping members and the community informed on agricultural news and issues."
        badge="Monthly Newspaper"
        bgImage="/images/gallery/FarmLife.jpg"
      />

      {/* About Farm Life */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 bg-gray-100 text-gray-800">
                MONTHLY PUBLICATION
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                Your Agricultural News Source
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
              <p className="text-gray-600 leading-relaxed mb-6">
                Farm Life is included with your KCFB membership. To advertise in Farm
                Life, contact our office at{" "}
                <a
                  href="mailto:kcfb@kcfb.org"
                  className="font-medium text-gray-900 hover:text-[#A0422A] transition-colors"
                >
                  kcfb@kcfb.org
                </a>{" "}
                or call{" "}
                <a
                  href="tel:5595843557"
                  className="font-medium text-gray-900 hover:text-[#A0422A] transition-colors"
                >
                  559-584-3557
                </a>
                .
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/membership/"
                  className="px-6 py-3 rounded-lg font-bold text-white text-center transition-all hover:opacity-90 bg-[#1a1a1a]"
                >
                  Become a Member
                </Link>
                <Link
                  href="/newsletter/"
                  className="px-6 py-3 rounded-lg font-bold text-center border border-gray-300 text-gray-700 transition-all hover:bg-gray-50"
                >
                  Subscribe to eNewsletter
                </Link>
              </div>
            </div>
            <div>
              <Image
                src="/images/gallery/FarmLife.jpg"
                alt="Farm Life Newspaper"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl w-full object-cover"
                style={{ maxHeight: "450px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recent Issues */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Recent Issues
            </h2>
            <p className="text-gray-600">
              Browse recent editions of the Farm Life newspaper.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {issues.map((issue) => (
              <div
                key={issue.title}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all"
              >
                <div className="relative h-80 bg-gray-100">
                  <Image
                    src={issue.image}
                    alt={issue.title}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-5">
                  <div className="text-xs font-semibold mb-1 text-gray-400">
                    {issue.date}
                  </div>
                  <h3 className="font-bold text-gray-900">
                    {issue.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advertising CTA */}
      <section className="py-14 px-4 bg-[#1a1a1a]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">Advertise in Farm Life</h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Reach Kings County agricultural professionals, farmers, ranchers and
            agribusiness leaders through Farm Life. Contact us to learn about
            advertising rates and opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kcfb@kcfb.org"
              className="px-6 py-3 rounded-lg font-bold transition-all hover:opacity-90 bg-[#F6B330] text-black"
            >
              Email kcfb@kcfb.org
            </a>
            <a
              href="tel:5595843557"
              className="px-6 py-3 rounded-lg font-bold border border-white/30 text-white hover:bg-white/10 transition-all"
            >
              Call 559-584-3557
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
