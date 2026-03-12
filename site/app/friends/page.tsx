import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Friends of Farm Bureau",
  description:
    "Friends of Farm Bureau - an annual sponsorship program supporting Kings County Farm Bureau's educational programs, industry workshops, political activism and community involvement.",
};

const diamondSponsors = [
  {
    name: "Golden State Farm Credit",
    image: "/images/gallery/Golden-State-Credit.svg",
    url: "https://goldenstatefarmcredit.com/",
  },
  {
    name: "Grabow Well Drilling Inc.",
    image: "/images/gallery/Grabow.png",
    url: "https://grabowwelldrillinginc.com/",
  },
];

const platinumSponsors = [
  {
    name: "AgWest FC",
    image: "/images/gallery/AgWest.png",
    url: "https://agwestfc.com/",
  },
  {
    name: "The Zenith",
    image: "/images/gallery/The-Zenith.webp",
    url: "https://www.thezenith.com/",
  },
];

const goldSponsors = [
  { name: "James G. Parker Insurance Associates", url: "https://jgparker.com/team/tami-sanchez" },
  { name: "Dias Law Firm", url: "https://diaslaw.com/" },
  { name: "J.C. Lansdowne INC.", url: "" },
  { name: "M. Green and Company", url: "https://mgreencpas.com/" },
  { name: "OFI", url: "https://www.ofi.com" },
  { name: "Stone Land Company", url: "https://www.stonelandcompany.net/" },
  { name: "The Wonderful Company", url: "https://wonderful.com" },
];

const silverSponsors = [
  "All Valley Printing",
  "Billingsley Tire",
  "Danell Custom Harvesting",
  "Garton Tractor",
  "Laguna Irrigation District",
  "Les Schwab Tires",
  "Schuil Ag Real Estate",
  "Southern California Edison",
  "Trinkle Ag Flying",
  "Tulare Lake Compost",
  "Valley Strong Credit Union",
];

export default function FriendsPage() {
  return (
    <>
      <PageHero
        title="Friends of Farm Bureau"
        subtitle="Businesses and organizations that stand alongside Kings County Farm Bureau in supporting Kings County agriculture."
        badge="Community Partners"
        bgImage="/images/gallery/friends-hero.jpg"
      />

      {/* Program Description */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Supporting Kings County Agriculture
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Friends of Farm Bureau is an annual sponsorship program that allows businesses to
            demonstrate their commitment to supporting local farmers through educational programs,
            industry workshops, political activism and community involvement. As a nonprofit
            organization, Kings County Farm Bureau depends on the financial support of the
            agricultural community. All sponsors receive recognition on the KCFB website, in the
            Farm Life newspaper, in the e-newsletter and at KCFB-hosted events.
          </p>
        </div>
      </section>

      {/* Diamond Sponsors */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-bold mb-3 bg-sky-100 text-sky-800 tracking-widest uppercase">
              Diamond Level
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Diamond Sponsors</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {diamondSponsors.map((sponsor) => (
              <a
                key={sponsor.name}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl shadow-md border-2 border-sky-100 overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="h-72 relative bg-gray-50 flex items-center justify-center p-6">
                  <Image
                    src={sponsor.image}
                    alt={sponsor.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain p-3"
                  />
                </div>
                <div className="px-6 py-4 border-t border-gray-100">
                  <h3 className="font-bold text-lg text-gray-900 text-center">
                    {sponsor.name}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Platinum Sponsors */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-bold mb-3 bg-gray-100 text-gray-700 tracking-widest uppercase">
              Platinum Level
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Platinum Sponsors</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {platinumSponsors.map((sponsor) => (
              <a
                key={sponsor.name}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-50 rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all"
              >
                <div className="h-44 relative bg-white flex items-center justify-center p-6">
                  <Image
                    src={sponsor.image}
                    alt={sponsor.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain p-6"
                  />
                </div>
                <div className="px-5 py-3 border-t border-gray-100">
                  <h3 className="font-bold text-base text-gray-900 text-center">
                    {sponsor.name}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Gold Sponsors */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-bold mb-3 bg-amber-100 text-amber-800 tracking-widest uppercase">
              Gold Level
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Gold Sponsors</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {goldSponsors.map((sponsor) => {
              const content = (
                <>
                  <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center mx-auto mb-3 p-1.5">
                    <Image
                      src="/images/logos/kcfb-icon.png"
                      alt="KCFB"
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                  </div>
                  <p className="font-semibold text-gray-900 text-sm leading-snug">{sponsor.name}</p>
                </>
              );

              return sponsor.url ? (
                <a
                  key={sponsor.name}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-xl p-5 border border-amber-100 shadow-sm text-center hover:shadow-md transition-all w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.75rem)] lg:w-[calc(25%-0.75rem)]"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={sponsor.name}
                  className="bg-white rounded-xl p-5 border border-amber-100 shadow-sm text-center w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.75rem)] lg:w-[calc(25%-0.75rem)]"
                >
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Silver Sponsors */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-bold mb-3 bg-slate-100 text-slate-600 tracking-widest uppercase">
              Silver Level
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Silver Sponsors</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {silverSponsors.map((name) => (
              <span
                key={name}
                className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-slate-100 text-slate-700 border border-slate-200"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Friend */}
      <section className="py-16 px-4 bg-[#5C6A22]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Become a Friend of Farm Bureau</h2>
          <p className="text-white/80 text-lg leading-relaxed mb-4">
            Show your support for Kings County agriculture by becoming a Friend of Farm
            Bureau. Your partnership helps fund advocacy, education and community programs
            that benefit all of Kings County.
          </p>
          <p className="text-green-100 mb-8 font-medium">
            If you&apos;re interested in becoming a Friend of Farm Bureau, please call{" "}
            <a href="tel:5595843557" className="underline hover:text-white transition-colors">
              (559) 584-3557
            </a>
            .
          </p>
          <a
            href="tel:5595843557"
            className="inline-block px-8 py-4 rounded-lg font-bold text-lg transition-all hover:opacity-90 bg-[#F6B330] text-[#1a1a1a]"
          >
            Call (559) 584-3557
          </a>
        </div>
      </section>
    </>
  );
}
