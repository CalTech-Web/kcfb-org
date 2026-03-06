import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Friends of Farm Bureau",
  description:
    "Friends of Farm Bureau - supporting businesses and organizations that stand with Kings County agriculture.",
};

const friends = [
  {
    name: "AgWest Farm Credit",
    image: "/images/gallery/AgWest.jpg",
    description: "Agricultural lending and financial services serving Kings County farmers.",
  },
  {
    name: "Golden State Credit",
    image: "/images/gallery/Golden-State-Credit.jpg",
    description: "Financial services supporting the agricultural community.",
  },
  {
    name: "Grabow Insurance",
    image: "/images/gallery/Grabow.jpg",
    description: "Agricultural and business insurance for Kings County operations.",
  },
];

export default function FriendsPage() {
  return (
    <>
      <PageHero
        title="Friends of Farm Bureau"
        subtitle="Businesses and organizations that stand alongside Kings County Farm Bureau in supporting Kings County agriculture."
        badge="Community Partners"
        bgImage="/images/gallery/new-membership.jpg"
      />

      {/* Intro */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Supporting Kings County Agriculture
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Friends of Farm Bureau are businesses, organizations and community partners
            who believe in the mission of Kings County Farm Bureau and support our
            efforts to protect, preserve and enhance agriculture in Kings County.
          </p>
          <p className="text-gray-600 leading-relaxed">
            These organizations invest in the future of Kings County agriculture
            by partnering with KCFB through sponsorships, event support and
            community involvement.
          </p>
        </div>
      </section>

      {/* Friends Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-3 text-gray-900">
              Our Partners
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {friends.map((friend) => (
              <div
                key={friend.name}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <div className="h-48 relative bg-gray-50">
                  <Image
                    src={friend.image}
                    alt={friend.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">
                    {friend.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {friend.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Friend */}
      <section className="py-16 px-4 bg-[#1a1a1a]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Become a Friend of Farm Bureau</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Show your support for Kings County agriculture by becoming a Friend of Farm
            Bureau. Your partnership helps fund advocacy, education and community programs
            that benefit all of Kings County.
          </p>
          <Link
            href="/contact/"
            className="inline-block px-8 py-4 rounded-lg font-bold text-lg transition-all hover:opacity-90 bg-[#F6B330] text-black"
          >
            Contact Us to Learn More
          </Link>
        </div>
      </section>
    </>
  );
}
