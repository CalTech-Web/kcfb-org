"use client";

import { useEffect } from "react";
import PageHero from "@/components/PageHero";
import Link from "next/link";

export default function NewsletterPage() {
  useEffect(() => {
    // Load Constant Contact signup form script
    const existingScript = document.getElementById("signupScript");
    if (!existingScript) {
      const metaScript = document.createElement("script");
      metaScript.textContent = 'var _ctct_m = "fb1745fa5f27acfa3f20f7c817bd0aa7";';
      document.head.appendChild(metaScript);

      const script = document.createElement("script");
      script.id = "signupScript";
      script.src =
        "//static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js";
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
  }, []);

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
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Subscribe to the eNewsletter
              </h2>
              <p className="text-gray-500 text-sm mt-1">Bi-weekly agricultural news and updates</p>
            </div>

            {/* Constant Contact Inline Form */}
            <div
              className="ctct-inline-form"
              data-form-id="462f5d51-5b6b-435d-8f3e-c889af2f3c9c"
            />
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
