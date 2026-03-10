import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { TrendingUp, DollarSign, Droplets, ShieldCheck, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Regulatory Costs",
  description:
    "California farmers face unsustainable regulatory cost increases. Learn about the impact on Kings County agriculture from labor, water and food safety regulations.",
};

const costDrivers = [
  {
    icon: DollarSign,
    title: "Labor Regulations",
    stat: "627%",
    period: "since 2006",
    description:
      "Workers' compensation, minimum wage increases and overtime requirements have dramatically increased labor costs for California farmers.",
  },
  {
    icon: Droplets,
    title: "Water Compliance",
    stat: "60%",
    period: "since 2017",
    description:
      "SGMA monitoring, reporting requirements and groundwater sustainability compliance have added significant costs to farming operations.",
  },
  {
    icon: ShieldCheck,
    title: "Food Safety Standards",
    stat: "35%",
    period: "since 2017",
    description:
      "Leafy Green Marketing Agreement compliance, audits, equipment upgrades and dedicated staff have increased food safety costs.",
  },
];

export default function RegulatoryCostsPage() {
  return (
    <>
      <PageHero
        title="Regulatory Costs"
        subtitle="Understanding the impact of regulatory costs on California agriculture and Kings County farmers."
        badge="Resources"
        bgImage="/images/gallery/gsa-hero.jpg"
      />

      {/* Overview */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#A0422A]/10">
              <TrendingUp size={24} className="text-[#A0422A]" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                The Rising Cost of Farming in California
              </h2>
              <p className="text-sm text-gray-500">By Jesse Collier</p>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed mb-6">
            California farmers are facing an unsustainable increase in regulatory costs
            that threatens the viability of agriculture across the state. A study by Cal
            Poly San Luis Obispo found that regulatory costs for a Salinas Valley lettuce
            grower have increased by a staggering 1,366% since 2006.
          </p>

          <div className="bg-[#A0422A]/5 border border-[#A0422A]/20 rounded-xl p-6 mb-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#A0422A] mb-2">1,366%</div>
              <p className="text-gray-700 font-medium">
                Increase in regulatory costs since 2006
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Cal Poly San Luis Obispo Study - Salinas Valley lettuce grower
              </p>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed mb-6">
            Three major cost drivers have been identified as the primary contributors
            to this dramatic increase: labor regulations, water compliance and food
            safety standards. These costs affect every agricultural operation in Kings
            County and throughout the Central Valley.
          </p>
        </div>
      </section>

      {/* Cost Drivers */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center text-gray-900">
            Major Cost Drivers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {costDrivers.map((driver) => (
              <div
                key={driver.title}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-[#5C6A22]/10">
                  <driver.icon size={20} className="text-[#5C6A22]" />
                </div>
                <h3 className="font-bold text-lg mb-1 text-gray-900">
                  {driver.title}
                </h3>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-3xl font-bold text-[#A0422A]">
                    {driver.stat}
                  </span>
                  <span className="text-sm text-gray-500">{driver.period}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {driver.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kings County Impact */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Impact on Kings County
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Kings County&apos;s gross crop value decreased 16.9% in 2023, reflecting the
            growing pressure of regulatory costs on local agriculture. Despite this,
            Kings County continues to rank among the top agricultural counties in
            California.
          </p>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 mb-8">
            <h3 className="font-bold text-base mb-4 text-gray-900">
              Kings County Agricultural Rankings
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="font-semibold text-[#5C6A22] mb-1">1st in California</div>
                <p className="text-gray-600">Cotton lint, cottonseed, wheat</p>
              </div>
              <div>
                <div className="font-semibold text-[#5C6A22] mb-1">3rd in California</div>
                <p className="text-gray-600">Corn, nectarines, plums, tomatoes</p>
              </div>
              <div>
                <div className="font-semibold text-[#5C6A22] mb-1">4th in California</div>
                <p className="text-gray-600">Milk, pistachios, peaches</p>
              </div>
            </div>
          </div>

          <blockquote className="border-l-4 border-[#5C6A22] pl-6 py-2 mb-8">
            <p className="text-gray-700 italic leading-relaxed">
              &quot;This study is exactly what we need right now, as there is hard,
              empirical data to show those in power that California agriculture is
              seriously threatened.&quot;
            </p>
            <cite className="text-sm text-gray-500 mt-2 block">
              - Dusty Ference, KCFB Executive Director
            </cite>
          </blockquote>

          <a
            href="https://digitalcommons.calpoly.edu/cgi/viewcontent.cgi?article=1164&context=agb_fac"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-white transition-all hover:opacity-90 bg-[#A0422A]"
          >
            <ExternalLink size={18} />
            Read the Cal Poly Study
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-4 bg-[#5C6A22]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Stand Up for Agriculture
          </h2>
          <p className="text-white/80 mb-6 leading-relaxed">
            Kings County Farm Bureau advocates for responsible regulation that
            protects agriculture while ensuring sustainability. Join us in defending
            the future of Kings County farming.
          </p>
          <a
            href="/membership/"
            className="inline-block px-8 py-4 rounded-lg font-bold text-lg transition-all hover:opacity-90 bg-[#F6B330] text-[#1a1a1a]"
          >
            Become a Member
          </a>
        </div>
      </section>
    </>
  );
}
