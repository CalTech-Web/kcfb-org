import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import { GraduationCap, CheckCircle, BookOpen, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Scholarship",
  description:
    "The Kings County Farm Bureau Scholarship supports high school seniors planning to study agriculture at accredited colleges. Requires a 2.5 GPA or higher.",
};

const requirements = [
  "Current high school senior in Kings County",
  "Planning to study agriculture at an accredited college or university",
  "Minimum GPA of 2.5",
  "Demonstrated interest in agriculture and community involvement",
  "Letter of recommendation from an agricultural professional",
  "Personal essay on your goals in agriculture",
];

export default function ScholarshipPage() {
  return (
    <>
      <PageHero
        title="Scholarship Program"
        subtitle="Investing in the next generation of Kings County agricultural leaders through education and opportunity."
        badge="For High School Seniors"
        bgImage="/images/gallery/casey-horner-6tzGnotyesY-unsplash.jpg"
      />

      {/* About */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 bg-gray-100 text-gray-800">
                ANNUAL SCHOLARSHIP
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                Kings County Farm Bureau Scholarship
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Kings County Farm Bureau is committed to investing in the future of
                Kings County agriculture by supporting the next generation of agricultural
                leaders through our annual scholarship program.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                The KCFB Scholarship is awarded to high school seniors who are planning
                to study agriculture at accredited colleges and universities. We believe
                that supporting agricultural education today is an investment in the
                future of Kings County&apos;s number one industry.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Contact our office to learn about the current scholarship cycle,
                application deadlines and requirements.
              </p>
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-white transition-all hover:opacity-90 bg-[#1a1a1a]"
              >
                <GraduationCap size={18} />
                Request Application Information
              </Link>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="font-bold text-xl mb-6 text-gray-900">
                  Scholarship Requirements
                </h3>
                <ul className="space-y-3">
                  {requirements.map((req) => (
                    <li key={req} className="flex items-start gap-3">
                      <CheckCircle
                        size={18}
                        className="mt-0.5 flex-shrink-0 text-gray-400"
                      />
                      <span className="text-gray-700 text-sm">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Agriculture */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Why Agricultural Education Matters
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Agriculture is Kings County&apos;s number one industry. The next generation of
              farmers, researchers and agricultural professionals will shape its future.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: BookOpen,
                title: "Agricultural Studies",
                description:
                  "From agronomy and farm management to agricultural business and environmental science, there are many pathways to a career in agriculture.",
              },
              {
                icon: Award,
                title: "Kings County Legacy",
                description:
                  "Kings County has a rich agricultural heritage going back over a century. Supporting young agricultural students ensures that legacy continues.",
              },
              {
                icon: GraduationCap,
                title: "Invest in the Future",
                description:
                  "Every dollar invested in agricultural education today creates future farmers, ranchers and agricultural professionals who will lead Kings County forward.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-gray-100">
                  <item.icon size={24} className="text-gray-700" />
                </div>
                <h3 className="font-bold text-lg mb-3 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-4 bg-[#1a1a1a]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">Apply for the KCFB Scholarship</h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            Contact Kings County Farm Bureau to learn about the current scholarship cycle,
            application requirements and deadlines. Our office is here to help you apply.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact/"
              className="px-6 py-3 rounded-lg font-bold transition-all hover:opacity-90 bg-[#F6B330] text-black"
            >
              Contact Us
            </Link>
            <a
              href="tel:5595843557"
              className="px-6 py-3 rounded-lg font-bold border border-white/30 text-white hover:bg-white/10 transition-all"
            >
              Call 559-584-3557
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
