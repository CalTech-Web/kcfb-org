"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import { Phone, MapPin, Clock, Mail, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

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
          message: `Phone: ${form.phone}\nSubject: ${form.subject}\n\n${form.message}`,
          source: "contact-page",
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
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
        title="Contact Us"
        subtitle="Reach out to Kings County Farm Bureau with questions, membership inquiries or to learn more about what we do."
        badge="Get in Touch"
        bgImage="/images/gallery/casey-horner-6tzGnotyesY-unsplash.jpg"
      />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                Kings County Farm Bureau
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our office is located in Hanford and serves farmers, ranchers and
                agribusiness professionals throughout Kings County. We are here to
                help with membership inquiries, event information, advocacy questions
                and more.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-gray-100">
                    <MapPin size={18} className="text-gray-700" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm mb-1 text-gray-900">
                      Address
                    </div>
                    <div className="text-gray-600 text-sm">
                      870 Greenfield Avenue<br />
                      Hanford, CA 93230
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-gray-100">
                    <Phone size={18} className="text-gray-700" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm mb-1 text-gray-900">
                      Phone
                    </div>
                    <a
                      href="tel:5595843557"
                      className="text-gray-600 text-sm hover:text-[#A0422A] transition-colors"
                    >
                      559-584-3557
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-gray-100">
                    <Mail size={18} className="text-gray-700" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm mb-1 text-gray-900">
                      Email
                    </div>
                    <a
                      href="mailto:kcfb@kcfb.org"
                      className="text-gray-600 text-sm hover:text-[#A0422A] transition-colors"
                    >
                      kcfb@kcfb.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-gray-100">
                    <Clock size={18} className="text-gray-700" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm mb-1 text-gray-900">
                      Office Hours
                    </div>
                    <div className="text-gray-600 text-sm">
                      Monday - Friday<br />
                      8:00 AM - 5:00 PM
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-8 rounded-xl overflow-hidden h-48 flex items-center justify-center bg-gray-100">
                <div className="text-center">
                  <MapPin size={32} className="text-gray-400 mx-auto mb-2" />
                  <div className="text-sm font-medium text-gray-500">
                    870 Greenfield Avenue, Hanford, CA
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              {status === "success" ? (
                <div className="bg-gray-50 rounded-2xl p-10 text-center border border-gray-100">
                  <CheckCircle
                    size={56}
                    className="mx-auto mb-4 text-[#5C6A22]"
                  />
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Thank you for contacting Kings County Farm Bureau. We will respond
                    to your inquiry within one business day.
                  </p>
                </div>
              ) : (
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                  <h3 className="text-xl font-bold mb-6 text-gray-900">
                    Send Us a Message
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2"
                          placeholder="559-555-0000"
                        />
                      </div>
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
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <select
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 bg-white"
                      >
                        <option value="">Select a subject</option>
                        <option value="Membership Inquiry">Membership Inquiry</option>
                        <option value="SGMA Defense / Donation">SGMA Defense / Donation</option>
                        <option value="Event Information">Event Information</option>
                        <option value="Farm Life Advertising">Farm Life Advertising</option>
                        <option value="Scholarship Information">Scholarship Information</option>
                        <option value="General Question">General Question</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        required
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        rows={5}
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 resize-none"
                        placeholder="How can we help you?"
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-red-600 text-sm">
                        Something went wrong. Please try again or call us at 559-584-3557.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full py-3 rounded-lg font-bold text-white transition-all hover:opacity-90 disabled:opacity-60 bg-[#1a1a1a]"
                    >
                      {status === "loading" ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
