import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Farm Life Podcast",
  description:
    "The Farm Life Podcast is hosted by Dusty Ference, Executive Director of Kings County Farm Bureau. Available on Apple Podcasts, Spotify and YouTube.",
};

const platforms = [
  {
    name: "Apple Podcasts",
    icon: "/images/gallery/farm life podcast.png",
    url: "https://podcasts.apple.com",
    description: "Listen on Apple Podcasts",
  },
  {
    name: "Spotify",
    icon: "/images/gallery/farm life podcast.png",
    url: "https://spotify.com",
    description: "Listen on Spotify",
  },
  {
    name: "YouTube",
    icon: "/images/gallery/farm life podcast.png",
    url: "https://www.youtube.com/@KingsCountyFarmBureau",
    description: "Watch on YouTube",
  },
];

export default function PodcastPage() {
  return (
    <>
      <PageHero
        title="Farm Life Podcast"
        subtitle="Conversations about Kings County agriculture, water rights, policy and the people who work the land."
        badge="Launched August 2024"
        bgImage="/images/gallery/FarmLife.jpg"
      />

      {/* About Podcast */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 bg-gray-100 text-gray-800">
                HOSTED BY DUSTY FERENCE
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                The Farm Life Podcast
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Launched in August 2024, the Farm Life Podcast is hosted by Kings County
                Farm Bureau Executive Director Dusty Ference. The podcast brings listeners
                in-depth conversations about the issues, people and events shaping
                Kings County agriculture.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                From SGMA water rights battles to Farm Day education, Dusty talks with
                farmers, ranchers, legislators and agricultural leaders about what matters
                most to Kings County&apos;s number one industry.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                The Farm Life Podcast is available on Apple Podcasts, Spotify and
                YouTube - wherever you listen to podcasts.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://www.youtube.com/@KingsCountyFarmBureau"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg font-bold text-white text-center transition-all hover:opacity-90 bg-[#1a1a1a]"
                >
                  Watch on YouTube
                </a>
                <Link
                  href="/newsletter/"
                  className="px-6 py-3 rounded-lg font-bold text-center border border-gray-300 text-gray-700 transition-all hover:bg-gray-50"
                >
                  Get Updates
                </Link>
              </div>
            </div>
            <div>
              <Image
                src="/images/gallery/farm life podcast.png"
                alt="Farm Life Podcast"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl w-full object-contain bg-gray-50"
                style={{ maxHeight: "450px", padding: "2rem" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Listen On */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Listen &amp; Subscribe
          </h2>
          <p className="text-gray-600 mb-10 leading-relaxed">
            The Farm Life Podcast is available on all major podcast platforms.
            Subscribe to never miss an episode.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="https://podcasts.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all group"
            >
              <div className="text-4xl mb-4">🎙️</div>
              <div className="font-bold text-lg mb-2 text-gray-900">
                Apple Podcasts
              </div>
              <div className="text-sm text-gray-500">Listen on Apple Podcasts</div>
            </a>
            <a
              href="https://spotify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all group"
            >
              <div className="text-4xl mb-4">🎵</div>
              <div className="font-bold text-lg mb-2 text-gray-900">
                Spotify
              </div>
              <div className="text-sm text-gray-500">Listen on Spotify</div>
            </a>
            <a
              href="https://www.youtube.com/@KingsCountyFarmBureau"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all group"
            >
              <div className="text-4xl mb-4">▶️</div>
              <div className="font-bold text-lg mb-2 text-gray-900">
                YouTube
              </div>
              <div className="text-sm text-gray-500">Watch on YouTube</div>
            </a>
          </div>
        </div>
      </section>

      {/* Host Info */}
      <section className="py-14 px-4 bg-[#1a1a1a]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">About Your Host</h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            Dusty Ference is the Executive Director of Kings County Farm Bureau and
            General Manager of the Excelsior/Kings River Resource Conservation District.
            With a citrus farming background and years of experience as a farm manager,
            Dusty brings real agricultural expertise and passion to every conversation.
          </p>
          <Link
            href="/about/"
            className="inline-block px-6 py-3 rounded-lg font-bold transition-all hover:opacity-90 bg-[#F6B330] text-black"
          >
            Learn About KCFB Leadership
          </Link>
        </div>
      </section>
    </>
  );
}
