import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GSA Information",
  description:
    "Information about Groundwater Sustainability Agencies (GSAs) operating in Kings County under the Sustainable Groundwater Management Act (SGMA).",
};

const gsas = [
  {
    name: "El Rico GSA",
    logo: "/images/logos/El-Rico-GSA-Image-Logo.jpg",
    url: "https://www.elricogsa.com/",
  },
  {
    name: "South Fork Kings GSA",
    logo: "/images/logos/South-Fork-Kings-Image-Logo.jpg",
    url: "https://southforkkings.org/",
  },
  {
    name: "Greater Kaweah GSA",
    logo: "/images/logos/Greater-Kawaeh-Image-Logo.jpg",
    url: "https://greaterkaweahgsa.org/en",
  },
  {
    name: "SWK GSA",
    logo: "/images/logos/KCFB-SWK-Image-Logo.jpg",
    url: "https://swkgsa.org/",
  },
  {
    name: "Mid Kings River GSA",
    logo: "/images/logos/MidKings-River-Image-Logo.jpg",
    url: "https://www.midkingsrivergsa.org/",
  },
  {
    name: "Tri-County Water Authority",
    logo: "/images/logos/KCFB-Tri-County-Log.jpg",
    url: "https://tcwater.org/",
  },
];

export default function GSAPage() {
  return (
    <>
      <PageHero
        title="GSA Information"
        subtitle="Groundwater Sustainability Agencies managing Kings County's groundwater resources under SGMA."
        badge="Resources"
        bgImage="/images/gallery/mid-kings-river-gsa-boundary.jpg"
      />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                What Are Groundwater Sustainability Agencies?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Groundwater Sustainability Agencies (GSAs) have been established to manage
                groundwater basins and develop sustainable groundwater management plans. These
                entities protect water supplies, reduce overdraft and preserve groundwater quality.
                Kings County Farm Bureau is committed to working collaboratively with GSAs for
                effective regional groundwater management.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Kings County has multiple GSAs covering different subbasins of the San Joaquin
                Valley groundwater basin, each working within the framework established by the
                Sustainable Groundwater Management Act (SGMA).
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                KCFB strongly supports locally-governed GSA management of Kings County
                groundwater. Our position is that local farmers, ranchers and community
                members - not state agencies - should control water management decisions
                that affect local agriculture.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                The SGMA legal defense is, in large part, a fight to keep groundwater
                management local - preventing the State Water Resources Control Board
                from imposing state control over what should be locally-governed resources.
              </p>

              <Image
                src="/images/gallery/mid-kings-river-gsa-boundary.jpg"
                alt="GSA boundary map"
                width={600}
                height={400}
                className="rounded-xl shadow-md w-full object-cover"
                style={{ maxHeight: "300px" }}
              />
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-gray-900">
                Kings County GSAs
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {gsas.map((gsa) => (
                  <div
                    key={gsa.name}
                    className="bg-gray-50 rounded-xl p-4 border border-gray-100 flex flex-col items-center justify-between h-40 gap-3"
                  >
                    <div className="flex-1 flex items-center justify-center w-full">
                      <Image
                        src={gsa.logo}
                        alt={gsa.name}
                        width={150}
                        height={80}
                        className="object-contain max-h-20"
                      />
                    </div>
                    <a
                      href={gsa.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-[#A0422A] hover:underline whitespace-nowrap"
                    >
                      Visit Website &rarr;
                    </a>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-xl p-6 bg-gray-50 border border-gray-100">
                <h3 className="font-bold text-lg mb-3 text-gray-900">SGMA and Local Control</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  KCFB is fighting to ensure groundwater management in Kings County
                  remains local. Learn more about our SGMA legal challenge against
                  state overreach.
                </p>
                <Link
                  href="/sgma/"
                  className="inline-block mt-4 px-4 py-2 rounded-lg text-sm font-bold transition-all hover:opacity-90 bg-[#A0422A] text-white"
                >
                  Learn About SGMA Defense
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            Questions About Groundwater Management?
          </h2>
          <p className="text-gray-600 mb-6">
            Contact Kings County Farm Bureau for information about GSAs, SGMA and
            local groundwater management in Kings County.
          </p>
          <Link
            href="/contact/"
            className="inline-block px-6 py-3 rounded-lg font-bold text-white transition-all hover:opacity-90 bg-[#5C6A22]"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
