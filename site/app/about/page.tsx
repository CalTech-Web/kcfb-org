import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Image from "next/image";

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
        bgImage="/images/gallery/Cover-photo.jpg"
      />

      {/* Executive Director */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4"
                style={{ backgroundColor: "#e8f5ea", color: "#1E5C2B" }}
              >
                EXECUTIVE LEADERSHIP
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1E5C2B" }}>
                Dusty Ference
              </h2>
              <div className="text-lg font-semibold mb-1" style={{ color: "#D4A843" }}>
                Executive Director
              </div>
              <p className="text-gray-500 text-sm mb-6">
                General Manager, Excelsior/Kings River Resource Conservation District
              </p>
              <blockquote
                className="border-l-4 pl-5 mb-6 italic text-lg text-gray-700 leading-relaxed"
                style={{ borderColor: "#D4A843" }}
              >
                &ldquo;We fight for policies and legislation at the local, state and federal
                levels that support our county&apos;s number one industry - agriculture - for
                future generations.&rdquo;
              </blockquote>
              <p className="text-gray-600 leading-relaxed mb-4">
                Dusty Ference brings a citrus farming background and extensive experience
                as a former farm manager to his role leading Kings County Farm Bureau.
                Under his direction, KCFB has taken an active role in SGMA litigation,
                expanded the Farm Life media presence and continued to grow Farm Day into
                one of the region&apos;s premier agricultural education events.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Beyond his role at KCFB, Dusty serves as Chair of the Kings County Ag
                Advisory Committee and Vice President of the Kings Economic Development
                Corporation, making him a central figure in Kings County agricultural
                and economic leadership.
              </p>
            </div>
            <div>
              <Image
                src="/images/team/image001.jpg"
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

      {/* Officers */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#1E5C2B" }}>
              Officers
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {officers.map((officer) => (
              <div
                key={officer.role}
                className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100"
              >
                <div
                  className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold"
                  style={{ backgroundColor: "#1E5C2B" }}
                >
                  {officer.name.charAt(0)}
                </div>
                <h3 className="font-bold text-lg mb-1" style={{ color: "#1E5C2B" }}>
                  {officer.name}
                </h3>
                <p className="text-sm" style={{ color: "#D4A843" }}>
                  {officer.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#1E5C2B" }}>
              Board of Directors
            </h2>
            <p className="text-gray-600 text-lg">
              Our 16-member board represents the diverse agricultural interests of Kings County.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {boardMembers.map((member) => (
              <div
                key={member}
                className="bg-gray-50 rounded-lg p-4 text-center border border-gray-100"
              >
                <div
                  className="w-10 h-10 rounded-full mx-auto mb-2 flex items-center justify-center text-white text-sm font-bold"
                  style={{ backgroundColor: "#2D6A2F" }}
                >
                  {member.charAt(0)}
                </div>
                <span className="text-sm font-medium text-gray-700">{member}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#1E5C2B" }}>
              Staff
            </h2>
          </div>
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
              <div
                className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold"
                style={{ backgroundColor: "#1E5C2B" }}
              >
                TF
              </div>
              <h3 className="font-bold text-xl mb-1" style={{ color: "#1E5C2B" }}>
                Tiffany Flores
              </h3>
              <div className="text-sm font-semibold mb-3" style={{ color: "#D4A843" }}>
                Office Manager
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                A Lemoore native with 18+ years of experience in administrative support
                and customer relations, Tiffany keeps KCFB operations running smoothly
                and ensures our members receive excellent service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4" style={{ backgroundColor: "#1E5C2B" }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-green-100 leading-relaxed mb-6">
            Kings County Farm Bureau is an independent, non-governmental, grassroots
            organization committed to providing education, promotion and representation
            of agriculture since 1918.
          </p>
          <p className="text-green-200 leading-relaxed">
            We are not politicians - we are farmers. Our board and officers are working
            agricultural producers who understand firsthand the challenges facing Kings
            County farming families.
          </p>
        </div>
      </section>
    </>
  );
}
