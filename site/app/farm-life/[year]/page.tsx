import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import Link from "next/link";
import { Download, ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const monthKeys = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];

const validYears = ["2020", "2021", "2022", "2023", "2024", "2025"];

// 2020 has no April issue
const skipIssues: Record<string, string[]> = {
  "2020": ["apr"],
};

function getIssues(year: string) {
  const skip = skipIssues[year] || [];
  return monthKeys
    .map((key, i) => ({
      month: months[i],
      key,
      image: `/images/farm-life/${year}/${key}.jpg`,
      pdf: `/pdfs/farm-life/${year}/${key}.pdf`,
    }))
    .filter((issue) => !skip.includes(issue.key))
    .reverse(); // Most recent month first
}

export function generateStaticParams() {
  return validYears.map((year) => ({ year }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ year: string }>;
}): Promise<Metadata> {
  const { year } = await params;
  return {
    title: `Farm Life ${year} Archive`,
    description: `Browse all ${year} editions of Farm Life, the monthly newspaper of Kings County Farm Bureau.`,
  };
}

export default async function FarmLifeYearPage({
  params,
}: {
  params: Promise<{ year: string }>;
}) {
  const { year } = await params;

  if (!validYears.includes(year)) {
    notFound();
  }

  const issues = getIssues(year);

  return (
    <>
      <PageHero
        title={`Farm Life ${year}`}
        subtitle={`Browse all ${year} editions of Farm Life - the monthly newspaper of Kings County Farm Bureau.`}
        badge="Archive"
        bgImage="/images/gallery/farm-life-hero.jpg"
      />

      {/* Back Navigation */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link
            href="/farm-life/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#5C6A22] hover:text-[#4a5619] transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Farm Life
          </Link>
        </div>
      </div>

      {/* Year Navigation */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 overflow-x-auto">
            {validYears
              .slice()
              .reverse()
              .map((y) => (
                <Link
                  key={y}
                  href={`/farm-life/${y}/`}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap ${
                    y === year
                      ? "bg-[#5C6A22] text-white"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-[#5C6A22]/30 hover:text-[#5C6A22]"
                  }`}
                >
                  {y}
                </Link>
              ))}
          </div>
        </div>
      </div>

      {/* Issues Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3 text-gray-900">
              {year} Issues
            </h2>
            <p className="text-gray-600">
              {issues.length} editions published in {year}. Click any issue to
              download the PDF.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {issues.map((issue) => (
              <a
                key={issue.key}
                href={issue.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="relative aspect-[3/4] bg-gray-100">
                  <Image
                    src={issue.image}
                    alt={`Farm Life ${issue.month} ${year}`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                    className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-full p-3 shadow-lg">
                      <Download size={20} className="text-[#A0422A]" />
                    </div>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-sm text-gray-900">
                    {issue.month} {year}
                  </h3>
                  <p className="text-xs text-[#A0422A] font-medium mt-1">
                    Download PDF
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-4 bg-[#5C6A22]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Subscribe to Farm Life
          </h2>
          <p className="text-white/80 mb-6 leading-relaxed">
            Farm Life is included with your Kings County Farm Bureau membership.
            Join today to receive every issue.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/membership/"
              className="px-6 py-3 rounded-lg font-bold text-[#1a1a1a] transition-all hover:opacity-90 bg-[#F6B330]"
            >
              Become a Member
            </Link>
            <Link
              href="/farm-life/"
              className="px-6 py-3 rounded-lg font-bold border border-white/30 text-white hover:bg-white/10 transition-all"
            >
              Current Issue
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
