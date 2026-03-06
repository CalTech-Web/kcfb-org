import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import { FileCheck, CheckCircle, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Grower/Processor Checklist",
  description:
    "The Kings County Farm Bureau Grower/Processor Checklist - a resource to help agricultural operations stay compliant and organized.",
};

const checklistCategories = [
  {
    title: "Water Management",
    items: [
      "Groundwater well registration status",
      "Water use reporting compliance",
      "Irrigation system efficiency records",
      "Water rights documentation",
    ],
  },
  {
    title: "Regulatory Compliance",
    items: [
      "State and local permit status",
      "Environmental compliance documentation",
      "Labor law compliance",
      "CDFA licensing and registrations",
    ],
  },
  {
    title: "Operations",
    items: [
      "Pesticide use reporting",
      "Worker safety training records",
      "Equipment maintenance logs",
      "Food safety certifications",
    ],
  },
  {
    title: "Business Records",
    items: [
      "Business entity documentation",
      "Insurance coverage review",
      "Financial reporting",
      "Lease and contract documentation",
    ],
  },
];

export default function ChecklistPage() {
  return (
    <>
      <PageHero
        title="Grower/Processor Checklist"
        subtitle="A resource to help Kings County agricultural operations stay organized, informed and compliant."
        badge="Member Resource"
        bgImage="/images/gallery/casey-horner-6tzGnotyesY-unsplash.jpg"
      />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="rounded-2xl p-8 bg-white border border-gray-200 sticky top-24">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gray-100">
                  <FileCheck size={24} className="text-gray-700" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">
                  Grower/Processor Checklist
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  This checklist is a member resource designed to help Kings County
                  growers and processors keep track of key compliance areas, documentation
                  requirements and operational records.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  KCFB members receive access to the complete checklist and related
                  resources. Contact our office to access the full checklist.
                </p>
                <Link
                  href="/contact/"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold transition-all hover:opacity-90 bg-[#1a1a1a] text-white"
                >
                  <Download size={16} />
                  Request Full Checklist
                </Link>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-8 text-gray-900">
                Checklist Overview
              </h2>
              <div className="space-y-6">
                {checklistCategories.map((category) => (
                  <div
                    key={category.title}
                    className="bg-gray-50 rounded-xl p-6 border border-gray-100"
                  >
                    <h3 className="font-bold text-lg mb-4 text-gray-900">
                      {category.title}
                    </h3>
                    <ul className="space-y-2">
                      {category.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle
                            size={16}
                            className="mt-0.5 flex-shrink-0 text-gray-400"
                          />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-[#1a1a1a]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Access the Full Checklist
          </h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            The complete Grower/Processor Checklist is available to KCFB members.
            Join today for $500/year to access this and all other member resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/membership/"
              className="px-6 py-3 rounded-lg font-bold text-black transition-all hover:opacity-90 bg-[#F6B330]"
            >
              Join KCFB
            </Link>
            <Link
              href="/contact/"
              className="px-6 py-3 rounded-lg font-bold border border-white/30 text-white hover:bg-white/10 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
