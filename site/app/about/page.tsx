import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About - Board of Directors & Staff",
  description:
    "Meet the Kings County Farm Bureau board of directors, officers and staff who lead agricultural advocacy in Kings County since 1918.",
};

const officers = [
  { role: "President", name: "Garrett Gilcrease" },
  { role: "Vice President", name: "Chad Souza" },
  { role: "Secretary/Treasurer", name: "Zach Bickner" },
  { role: "Past President", name: "Shane Bickner" },
];

const boardMembers = [
  "John Ellis",
  "Brian Medeiros",
  "Eddie Esajian",
  "Michael Miya",
  "Dino Giacomazzi",
  "Brian Potter",
  "Keith Grabow",
  "Kevin Robertson",
  "Pete Hanse",
  "Kevin Ruble",
  "Monty Hoggard",
  "Daniel Soares",
  "David Kahn",
  "Helen Sullivan",
  "Julie Martella",
  "Frank Zonneveld",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Board of Directors & Staff"
        subtitle="The leaders of Kings County Farm Bureau represent the farming families and agricultural businesses of Kings County."
        badge="About KCFB"
        bgImage="/images/gallery/wheat-field.jpg"
      />

      {/* Executive Director - Dusty Ference */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 bg-[#5C6A22]/10 text-[#5C6A22]">
                EXECUTIVE DIRECTOR
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
                Dusty Ference
              </h2>
              <div className="text-sm font-semibold mb-6 text-[#A0422A]">
                Executive Director, Kings County Farm Bureau | General Manager, Excelsior/Kings River RCD
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Dusty serves as Executive Director of Kings County Farm Bureau and General
                Manager of the Excelsior/Kings River Resource Conservation District. His
                background includes citrus farming alongside management experience with
                both organizations, providing diverse perspectives on California
                agricultural issues.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Beyond his Farm Bureau role, Dusty chairs the Kings County Ag Advisory
                Committee, serves as Vice President of the Kings Economic Development
                Corporation, and participates in the Lemoore College Ag Advisory Committee
                and local Hanford Rotary Club.
              </p>
              <p className="text-gray-600 leading-relaxed">
                He brings valuable advocacy experience from lobbying in Sacramento and
                Washington, D.C., and remains committed to representing member interests
                across government levels.
              </p>
            </div>
            <div>
              <Image
                src="/images/gallery/dusty-ference.jpg"
                alt="Dusty Ference - Executive Director"
                width={500}
                height={600}
                className="rounded-2xl shadow-xl w-full object-cover"
                style={{ maxHeight: "500px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Office Manager - Tiffany Flores */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/gallery/tiffany-flores.jpg"
                alt="Tiffany Flores - Office Manager"
                width={500}
                height={600}
                className="rounded-2xl shadow-xl w-full object-cover"
                style={{ maxHeight: "500px" }}
              />
            </div>
            <div>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 bg-[#A0422A]/10 text-[#A0422A]">
                OFFICE MANAGER
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
                Tiffany Flores
              </h2>
              <div className="text-sm font-semibold mb-6 text-[#A0422A]">
                Office Manager, Kings County Farm Bureau
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Tiffany, a Lemoore native, brings over 18 years of administrative support
                and customer relations experience from private and government sectors. She
                keeps KCFB operations running smoothly and ensures members receive
                excellent service.
              </p>
              <p className="text-gray-600 leading-relaxed">
                She actively participates in her community through Lions Club International
                membership, serves as an associate board member of the Sarah A. Mooney
                Memorial Museum, and has hosted international exchange students through the
                World Link Organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Officers */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 bg-[#F6B330]/20 text-[#A0422A]">
              LEADERSHIP
            </div>
            <h2 className="text-3xl font-bold mb-3 text-gray-900">
              Officers
            </h2>
            <p className="text-gray-600">
              Elected officers who lead Kings County Farm Bureau&apos;s mission and governance.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {officers.map((officer) => (
              <div
                key={officer.role}
                className="bg-gray-50 rounded-xl p-6 text-center border border-gray-100 hover:shadow-sm transition-all"
              >
                <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden bg-white border-2 border-[#5C6A22]/20 flex items-center justify-center p-2">
                  <Image
                    src="/images/logos/kcfb-color-logo.png"
                    alt="KCFB"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-bold text-lg mb-1 text-gray-900">
                  {officer.name}
                </h3>
                <p className="text-sm font-semibold text-[#5C6A22]">
                  {officer.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 bg-[#5C6A22]/10 text-[#5C6A22]">
              GOVERNANCE
            </div>
            <h2 className="text-3xl font-bold mb-3 text-gray-900">
              Board of Directors
            </h2>
            <p className="text-gray-600">
              Our 16-member board represents the diverse agricultural interests of Kings County.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            {boardMembers.map((member) => (
              <div
                key={member}
                className="bg-white rounded-xl p-5 text-center border border-gray-100 hover:shadow-sm transition-all"
              >
                <div className="w-14 h-14 rounded-full mx-auto mb-3 overflow-hidden bg-gray-50 border-2 border-[#5C6A22]/15 flex items-center justify-center p-1.5">
                  <Image
                    src="/images/logos/kcfb-color-logo.png"
                    alt="KCFB"
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                </div>
                <span className="text-sm font-semibold text-gray-800">{member}</span>
                <p className="text-xs text-gray-500 mt-1">Director</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="relative py-24 px-4 overflow-hidden">
        <Image
          src="/images/gallery/wheat-field.jpg"
          alt="Kings County farmland"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-5 bg-[#F6B330] text-[#1a1a1a]">
            SINCE 1918
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Our Mission</h2>
          <p className="text-xl text-white/90 leading-relaxed mb-6">
            At Kings County Farm Bureau, our mission is to provide education, promotion
            and representation of agriculture.
          </p>
          <p className="text-white/70 leading-relaxed mb-8 max-w-3xl mx-auto">
            During challenging times marked by complex regulations, water scarcity and
            high taxation, we are committed to supporting family farms through
            educational programs, training, workshops, political engagement and community
            involvement. We are not politicians - we are farmers.
          </p>
          <Link
            href="/membership/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-lg transition-all hover:opacity-90 bg-[#F6B330] text-[#1a1a1a]"
          >
            Join Us Today <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
