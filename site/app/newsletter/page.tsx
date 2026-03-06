"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import { CheckCircle, Mail } from "lucide-react";

export default function NewsletterPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "" });

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
          message: "Newsletter signup request",
          source: "contact-page",
        }),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <PageHero
        title="eNewsletter Signup"
        subtitle="Stay informed on Kings County agriculture, KCFB events and advocacy updates with our bi-weekly eNewsletter."
        badge="Stay Informed"
        bgImage="/images/gallery/casey-horner-6tzGnotyesY-unsplash.jpg"
      />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gray-100">
                <Mail size={24} className="text-gray-700" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Subscribe to the eNewsletter
                </h2>
                <p className="text-gray-500 text-sm">Bi-weekly agricultural news and updates</p>
              </div>
            </div>

            {status === "success" ? (
              <div className="text-center py-8">
                <CheckCircle size={48} className="mx-auto mb-4 text-[#5C6A22]" />
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  You&apos;re Subscribed!
                </h3>
                <p className="text-gray-600">
                  Thank you for subscribing to the Kings County Farm Bureau eNewsletter.
                  You&apos;ll receive your first issue soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-600 text-sm">
                    Something went wrong. Please try again or contact us at 559-584-3557.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-3 rounded-lg font-bold text-white transition-all hover:opacity-90 disabled:opacity-60 bg-[#A0422A]"
                >
                  {status === "loading" ? "Subscribing..." : "Subscribe to eNewsletter"}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            )}
          </div>

          {/* What to expect */}
          <div className="mt-10">
            <h3 className="text-xl font-bold mb-4 text-center text-gray-900">
              What to Expect
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  title: "Bi-Weekly Updates",
                  description: "Receive news every two weeks on Kings County agricultural issues.",
                },
                {
                  title: "Event Announcements",
                  description: "Be the first to know about KCFB events, deadlines and registrations.",
                },
                {
                  title: "Advocacy News",
                  description: "Stay informed on SGMA litigation, water rights and legislative updates.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-xl p-5 border border-gray-100 text-center"
                >
                  <h4 className="font-bold text-sm mb-2 text-gray-900">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-xs leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways */}
      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 mb-4">
            Also stay connected through the Farm Life Podcast and monthly newspaper.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/farm-life/"
              className="px-5 py-2.5 rounded-lg font-semibold text-sm border border-gray-300 text-gray-700 transition-all hover:bg-gray-100"
            >
              Farm Life Newspaper
            </Link>
            <Link
              href="/podcast/"
              className="px-5 py-2.5 rounded-lg font-semibold text-sm border border-gray-300 text-gray-700 transition-all hover:bg-gray-100"
            >
              Farm Life Podcast
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
