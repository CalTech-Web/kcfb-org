import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Excelsior-Kings River Resource Conservation District",
  description:
    "Learn about the Excelsior/Kings River Resource Conservation District (EKRCD) and its role in Kings County agricultural resource management.",
};

export default function EKRCDPage() {
  return (
    <>
      <PageHero
        title="Excelsior-Kings River RCD"
        subtitle="The Excelsior/Kings River Resource Conservation District works to protect and conserve natural resources in Kings County."
        badge="Resources"
        bgImage="/images/gallery/mid-kings-river-gsa-boundary.jpg"
      />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                About EKRCD
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Excelsior/Kings River Resource Conservation District (EKRCD) is a
                special district focused on the conservation and sustainable use of
                natural resources in Kings County, with particular emphasis on water and
                agricultural land resources.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                KCFB Executive Director Dusty Ference serves as General Manager of
                EKRCD, ensuring close coordination between Kings County Farm Bureau
                advocacy efforts and local resource conservation management.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                EKRCD plays an important role in the SGMA groundwater management
                framework in Kings County, working with local Groundwater Sustainability
                Agencies to ensure sustainable and locally-governed water management.
              </p>

              <div className="rounded-xl p-6 border-2 border-[#A0422A]/20 bg-[#A0422A]/5 mb-6">
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  Visit the EKRCD Website
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  For full information about programs, meetings, board members and resources,
                  visit the official EKRCD website at ekrcd.org.
                </p>
                <a
                  href="https://www.ekrcd.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-white text-sm transition-all hover:opacity-90 bg-[#A0422A]"
                >
                  Go to ekrcd.org &rarr;
                </a>
              </div>

              <div className="rounded-xl p-6 border border-gray-100 bg-gray-50">
                <h3 className="font-bold text-lg mb-3 text-gray-900">
                  EKRCD Focus Areas
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {[
                    "Groundwater sustainability and conservation",
                    "Agricultural land and soil health",
                    "Water quality monitoring and protection",
                    "Natural resource education and outreach",
                    "Coordination with Groundwater Sustainability Agencies",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-gray-400 font-bold mt-0.5">-</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <Image
                src="/images/gallery/mid-kings-river-gsa-boundary.jpg"
                alt="Kings River area"
                width={600}
                height={500}
                className="rounded-2xl shadow-lg w-full object-cover"
                style={{ maxHeight: "450px" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-[#5C6A22]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Questions About EKRCD?
          </h2>
          <p className="text-green-200 mb-6">
            Contact Kings County Farm Bureau for more information about the
            Excelsior/Kings River Resource Conservation District and its programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact/"
              className="px-6 py-3 rounded-lg font-bold text-[#1a1a1a] transition-all hover:opacity-90 bg-[#F6B330]"
            >
              Contact Us
            </Link>
            <Link
              href="/sgma/"
              className="px-6 py-3 rounded-lg font-bold border border-white/30 text-white hover:bg-white/10 transition-all"
            >
              Learn About SGMA
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
