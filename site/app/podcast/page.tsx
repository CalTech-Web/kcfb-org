"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";


function GuestForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://forms.caltechweb.com/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          site: "kcfb.org",
          name: form.name,
          email: form.email,
          message: `Subject: Podcast Guest\nPhone: ${form.phone}`,
          source: "podcast-guest-inquiry",
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-gray-50 rounded-2xl p-10 text-center border border-gray-100">
        <CheckCircle size={56} className="mx-auto mb-4 text-[#5C6A22]" />
        <h3 className="text-2xl font-bold mb-3 text-gray-900">Message Sent!</h3>
        <p className="text-gray-600 leading-relaxed">
          Thank you for your interest in being a guest on the Farm Life Podcast.
          We will be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="guest-name" className="block text-sm font-medium text-gray-700 mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="guest-name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="guest-email" className="block text-sm font-medium text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="guest-email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2"
              placeholder="Your email"
            />
          </div>
        </div>
        <div>
          <label htmlFor="guest-phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone
          </label>
          <input
            type="tel"
            id="guest-phone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2"
            placeholder="559-555-0000"
          />
        </div>
        <div>
          <label htmlFor="guest-subject" className="block text-sm font-medium text-gray-700 mb-1">
            Subject
          </label>
          <input
            type="text"
            id="guest-subject"
            value="Podcast Guest"
            readOnly
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm bg-gray-100 text-gray-600 cursor-not-allowed"
          />
        </div>
        {status === "error" && (
          <p className="text-red-600 text-sm">
            Something went wrong. Please try again or email us at kcfb@kcfb.org.
          </p>
        )}
        <div className="text-center">
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-8 py-3 rounded-lg font-bold text-white transition-all hover:opacity-90 disabled:opacity-60 bg-[#5C6A22]"
          >
            {status === "loading" ? "Sending..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}

const episodes = [
  {
    number: 12,
    title: "SGMA Lawsuit Update: The Case Returns to Superior Court",
    date: "March 6, 2026",
    spotify: "https://open.spotify.com/episode/55AwNCJ3lWLiLl0AxmSgCP",
    apple: "https://podcasts.apple.com/us/podcast/sgma-lawsuit-update-the-case-returns-to-superior-court/id1764982980?i=1000753685954",
    youtube: "",
  },
  {
    number: 11,
    title: "David Stanfield, Kings County Water District Director",
    date: "May 7, 2025",
    spotify: "https://open.spotify.com/episode/71rL18jGjC0rPieP8V3Iqn",
    apple: "https://podcasts.apple.com/us/podcast/farm-life-podcast-episode-11/id1764982980?i=1000706718074",
    youtube: "https://youtu.be/STNMFL6T-RU",
  },
  {
    number: 10,
    title: "Brian Greathouse & Shane Bickner, Farm Bureau Board Presidents",
    date: "April 3, 2025",
    spotify: "https://open.spotify.com/episode/6XpNm0snwnPbieLcG0hyie",
    apple: "https://podcasts.apple.com/us/podcast/farm-life-podcast-episode-10/id1764982980?i=1000701955409",
    youtube: "https://youtu.be/Qy_7l-79Gc4",
  },
  {
    number: 9,
    title: "Steve Jackson, Next Gen Water Consulting Founder",
    date: "March 19, 2025",
    spotify: "https://open.spotify.com/episode/6ILsUkExj1yZCPS79F5Ga9",
    apple: "https://podcasts.apple.com/us/podcast/farm-life-podcast-episode-9/id1764982980?i=1000700018701",
    youtube: "",
  },
  {
    number: 8,
    title: "Kings County Ag Crimes Unit",
    date: "March 5, 2025",
    spotify: "https://open.spotify.com/episode/4hnqBWBfkgkH1sak8CbUG3",
    apple: "https://podcasts.apple.com/us/podcast/farm-life-podcast-episode-8/id1764982980?i=1000697980128",
    youtube: "https://youtu.be/nEo17Nyl6U0",
  },
  {
    number: 7,
    title: "Garrett Gilcrease, MKRGSA Stakeholder Advisory Chair",
    date: "February 19, 2025",
    spotify: "https://open.spotify.com/episode/5nSCUqvkV5qz9XOgDE7c6s",
    apple: "https://podcasts.apple.com/us/podcast/farm-life-podcast-episode-07-garrett-glicrease/id1764982980?i=1000694132084",
    youtube: "https://youtu.be/VSmQFInynrc",
  },
  {
    number: 6,
    title: "Chip Mello, Kings County Water District President",
    date: "February 5, 2025",
    spotify: "https://open.spotify.com/episode/7hLeGmxlUlZq7ET3StuUf7",
    apple: "https://podcasts.apple.com/us/podcast/farm-life-podcast-episode-6/id1764982980?i=1000689472287",
    youtube: "https://www.youtube.com/watch?v=n2Ul1zj8_n8",
  },
  {
    number: 5,
    title: "Robert Thayer, Newly Elected County Supervisor",
    date: "January 16, 2025",
    spotify: "https://open.spotify.com/episode/2wg6Ie3NpxvjwlMogGGGPP",
    apple: "https://podcasts.apple.com/us/podcast/farm-life-podcast-episode-5/id1764982980?i=1000684165547",
    youtube: "https://youtu.be/h7TjmsK51Ho",
  },
  {
    number: 4,
    title: "Paul Gillum & Andrew Brazil, Water District Candidates",
    date: "October 9, 2024",
    spotify: "https://open.spotify.com/episode/1fCQQ0JzjHNnz1LZpP2FoH",
    apple: "https://podcasts.apple.com/us/podcast/farm-life-podcast-episode-4/id1764982980?i=1000672433340",
    youtube: "https://youtu.be/DZbz4sgF9j8",
  },
  {
    number: 3,
    title: "David Kahn, KCFB Director & Attorney",
    date: "September 19, 2024",
    spotify: "https://open.spotify.com/episode/20o2JYAcGni19XgIvusCbu",
    apple: "https://podcasts.apple.com/us/podcast/farm-life-podcast-episode-3/id1764982980?i=1000670098330",
    youtube: "https://youtu.be/GhOxQpDUJ_g",
  },
  {
    number: 2,
    title: "Johnny Gailey, SFKGSA General Manager",
    date: "September 4, 2024",
    spotify: "https://open.spotify.com/episode/6yZ1Ofc1vaNtIQIxAgWGXT",
    apple: "https://podcasts.apple.com/us/podcast/farm-life-podcast-episode-2/id1764982980?i=1000668393070",
    youtube: "https://youtu.be/dBRAkqxHsVo",
  },
  {
    number: 1,
    title: "Garrett Gilcrease, KCFB Vice President",
    date: "August 23, 2024",
    spotify: "https://open.spotify.com/episode/4NFbe6fZJeZFoI39OVjIde",
    apple: "https://podcasts.apple.com/us/podcast/farm-life-podcast-episode-1/id1764982980?i=1000666686756",
    youtube: "https://youtu.be/p_jSJPyUdMc",
  },
];

export default function PodcastPage() {
  return (
    <>
      <PageHero
        title="Farm Life Podcast"
        subtitle="Conversations about Kings County agriculture, water rights, policy and the people who work the land."
        badge="Launched August 2024"
        bgImage="/images/gallery/podcast-hero.jpg"
      />

      {/* About Podcast */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 bg-[#5C6A22]/10 text-[#5C6A22]">
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
                  className="px-6 py-3 rounded-lg font-bold text-white text-center transition-all hover:opacity-90 bg-[#A0422A]"
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
                sizes="(max-width: 1024px) 100vw, 50vw"
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
              href="https://podcasts.apple.com/us/podcast/farm-life-podcast/id1764982980"
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
              href="https://open.spotify.com/show/6AxQvQZKH8bUlubGoFmWzE"
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

      {/* Episode List */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center items-center gap-6 mb-12">
            <Image
              src="/images/gallery/farm-life-podcast-2.png"
              alt="FarmLife Online"
              width={260}
              height={60}
              className="object-contain h-10 md:h-14 w-auto"
            />
            <Image
              src="/images/gallery/farm-life-podcast-1.png"
              alt="FarmLife Podcast"
              width={260}
              height={60}
              className="object-contain h-10 md:h-14 w-auto"
            />
          </div>
          <div className="space-y-3">
            {episodes.map((ep) => (
              <div
                key={ep.number}
                className="bg-gray-50 rounded-xl px-6 py-4 border border-gray-100 hover:border-[#5C6A22]/30 transition-colors"
              >
                <p className="text-xs text-gray-500">{ep.date}</p>
                <div className="flex flex-wrap items-center gap-3 mt-2">
                  {ep.spotify && (
                    <a
                      href={ep.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[#1DB954] hover:underline py-1"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
                      Spotify
                    </a>
                  )}
                  {ep.apple && (
                    <a
                      href={ep.apple}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[#9933CC] hover:underline py-1"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.87 19.66c-.57.85-1.2 1.7-2.15 1.72-.94.02-1.24-.56-2.31-.56-1.08 0-1.41.54-2.31.58-.92.04-1.63-.92-2.2-1.77C8.55 17.42 7.7 14.25 9.08 12.1c.69-1.07 1.91-1.74 3.24-1.76 .91-.02 1.77.61 2.32.61.56 0 1.6-.76 2.7-.65.46.02 1.75.19 2.58 1.4-.07.04-1.54.9-1.52 2.68.02 2.13 1.87 2.84 1.89 2.85-.02.05-.3 1.02-.92 2.03zM14.5 5.82c.58-.7.97-1.67.87-2.64-.84.03-1.85.56-2.46 1.27-.54.63-1.01 1.63-.88 2.59.93.07 1.88-.47 2.47-1.22z"/></svg>
                      iTunes
                    </a>
                  )}
                  {ep.youtube && (
                    <a
                      href={ep.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[#FF0000] hover:underline py-1"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                      YouTube
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
            The FarmLife Podcast is available on Spotify, Apple Podcast, and YouTube.
            Please Like and Subscribe on your favorite listening platform today!
          </h2>
        </div>
      </section>

      {/* Guest Contact */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Interested in becoming a guest?
            </h2>
            <p className="text-gray-600">
              Email us at{" "}
              <a
                href="mailto:kcfb@kcfb.org"
                className="text-[#5C6A22] font-semibold hover:underline"
              >
                kcfb@kcfb.org
              </a>{" "}
              or fill out the form below.
            </p>
          </div>
          <GuestForm />
        </div>
      </section>

      {/* Host Info */}
      <section className="py-14 px-4 bg-[#5C6A22]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">About Your Host</h2>
          <p className="text-white/80 leading-relaxed mb-6">
            Dusty Ference is the Executive Director of Kings County Farm Bureau and
            General Manager of the Excelsior/Kings River Resource Conservation District.
            With a citrus farming background and years of experience as a farm manager,
            Dusty brings real agricultural expertise and passion to every conversation.
          </p>
          <Link
            href="/about/"
            className="inline-block px-6 py-3 rounded-lg font-bold transition-all hover:opacity-90 bg-[#F6B330] text-[#1a1a1a]"
          >
            Learn About KCFB Leadership
          </Link>
        </div>
      </section>
    </>
  );
}
