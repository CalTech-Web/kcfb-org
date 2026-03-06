import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  Users,
  BookOpen,
  Newspaper,
  Calendar,
  Award,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

const stats = [
  { value: "100+", label: "Years of Advocacy" },
  { value: "2,400+", label: "Students Reached Annually" },
  { value: "16", label: "Board Members" },
  { value: "$600K+", label: "SGMA Defense Investment" },
];

const services = [
  {
    icon: Shield,
    title: "Agricultural Advocacy",
    description:
      "Legislative representation at local, state and federal levels. We fight for policies that support Kings County's number one industry.",
    href: "/about/",
  },
  {
    icon: Calendar,
    title: "Events & Education",
    description:
      "Farm Day, Wine vs. Beer Showdown, Harvest Classic Golf Tournament, First Friday lunches and more community events throughout the year.",
    href: "/events/",
  },
  {
    icon: Newspaper,
    title: "Farm Life Media",
    description:
      "Monthly Farm Life newspaper, bi-weekly eNewsletter and the Farm Life Podcast hosted by Executive Director Dusty Ference.",
    href: "/farm-life/",
  },
  {
    icon: Users,
    title: "Membership Benefits",
    description:
      "Join for $500/year and gain access to California Farm Bureau membership, advertising discounts and business directories.",
    href: "/membership/",
  },
  {
    icon: BookOpen,
    title: "SGMA Defense",
    description:
      "Actively challenging the State Water Resources Control Board's probationary designation of the Tulare Lake Subbasin.",
    href: "/sgma/",
  },
  {
    icon: Award,
    title: "Scholarship Program",
    description:
      "Supporting the next generation of agricultural leaders through scholarships for high school seniors pursuing agriculture studies.",
    href: "/scholarship/",
  },
];

const steps = [
  {
    step: "01",
    title: "Join",
    description:
      "Become a member for $500/year and gain access to all KCFB benefits and California Farm Bureau membership.",
  },
  {
    step: "02",
    title: "Stay Informed",
    description:
      "Receive the Farm Life newspaper, eNewsletter and podcast updates on agriculture issues affecting Kings County.",
  },
  {
    step: "03",
    title: "Get Connected",
    description:
      "Attend First Friday lunches, Wine vs. Beer Showdown, Harvest Classic and other networking events.",
  },
  {
    step: "04",
    title: "Be Represented",
    description:
      "KCFB advocates on your behalf at local, state and federal levels on water, land and regulatory issues.",
  },
];

const differentiators = [
  "Independent, non-governmental grassroots organization - not tied to any political party",
  "Over 100 years of continuous agricultural advocacy since 1918",
  "Only organization dedicated exclusively to protecting Kings County agriculture",
  "Active litigation defending farmer water rights - SGMA case to California Supreme Court",
  "Direct connection to California Farm Bureau Federation statewide network",
  "Monthly Farm Life newspaper and podcast keeping members informed",
  "Farm Day reaches 2,400+ students annually - investing in agriculture's future",
  "Local leadership by working farmers who understand the industry firsthand",
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[600px] flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('/images/gallery/casey-horner-6tzGnotyesY-unsplash.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(18, 50, 22, 0.72)" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center py-24">
          <div
            className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6"
            style={{ backgroundColor: "#D4A843", color: "#1a1a1a" }}
          >
            Agricultural Advocates Since 1918
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Protecting Kings County
            <br />
            <span style={{ color: "#D4A843" }}>Agriculture</span>
          </h1>
          <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-2xl mx-auto">
            Protect, preserve and enhance agriculture in Kings County
          </p>
          <p className="text-lg text-green-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            Kings County Farm Bureau is an independent, non-governmental, grassroots
            organization committed to providing education, promotion and representation
            of agriculture since 1918.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/membership/"
              className="px-8 py-4 rounded-lg font-bold text-lg transition-all hover:opacity-90 hover:scale-105"
              style={{ backgroundColor: "#D4A843", color: "#1a1a1a" }}
            >
              Become a Member
            </Link>
            <Link
              href="/sgma/"
              className="px-8 py-4 rounded-lg font-bold text-lg border-2 border-white text-white hover:bg-white hover:text-green-900 transition-all"
            >
              Donate to SGMA Defense
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ backgroundColor: "#1E5C2B" }} className="py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-3xl md:text-4xl font-bold mb-1"
                  style={{ color: "#D4A843" }}
                >
                  {stat.value}
                </div>
                <div className="text-green-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1E5C2B" }}>
              How We Serve Kings County Agriculture
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From advocacy and legal defense to education and community events, KCFB
              works every day to protect the farming families of Kings County.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-green-200 transition-all"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#e8f5ea" }}
                >
                  <service.icon size={24} style={{ color: "#1E5C2B" }} />
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "#1E5C2B" }}>
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div
                  className="flex items-center text-sm font-semibold"
                  style={{ color: "#D4A843" }}
                >
                  Learn More <ArrowRight size={14} className="ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Director Quote */}
      <section
        className="py-16 px-4"
        style={{ backgroundColor: "#1E5C2B" }}
      >
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="rounded-2xl p-10 border border-green-700" style={{ backgroundColor: "rgba(45, 106, 47, 0.6)" }}>
            <div className="text-5xl font-serif mb-4" style={{ color: "#D4A843" }}>&ldquo;</div>
            <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-6 text-green-100">
              We fight for policies and legislation at the local, state and federal levels
              that support our county&apos;s number one industry - agriculture - for future
              generations.
            </blockquote>
            <div>
              <div className="font-bold text-lg">Dusty Ference</div>
              <div className="text-green-300 text-sm">Executive Director, Kings County Farm Bureau</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1E5C2B" }}>
              How KCFB Works For You
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From membership to representation, here&apos;s how we support Kings County farmers and ranchers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.step} className="relative">
                <div
                  className="text-5xl font-bold mb-3 leading-none"
                  style={{ color: "#e8f5ea" }}
                >
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: "#1E5C2B" }}>
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SGMA Callout */}
      <section style={{ backgroundColor: "#2D6A2F" }} className="py-14 px-4">
        <div className="max-w-5xl mx-auto text-center text-white">
          <div
            className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4"
            style={{ backgroundColor: "#D4A843", color: "#1a1a1a" }}
          >
            ACTIVE LITIGATION
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            SGMA Defense - Fighting for Water Rights
          </h2>
          <p className="text-green-200 text-lg mb-6 max-w-3xl mx-auto leading-relaxed">
            We are challenging the State Water Resources Control Board&apos;s decision to
            place the Tulare Lake Subbasin on probation. We won a temporary restraining
            order and preliminary injunction - and we are continuing to fight. Over
            $600,000 invested in legal defense in 2024 and 2025.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sgma/"
              className="px-6 py-3 rounded-lg font-bold border-2 border-white text-white hover:bg-white hover:text-green-900 transition-all"
            >
              Learn About the SGMA Case
            </Link>
            <Link
              href="/sgma/"
              className="px-6 py-3 rounded-lg font-bold transition-all hover:opacity-90"
              style={{ backgroundColor: "#D4A843", color: "#1a1a1a" }}
            >
              Donate to the Defense Fund
            </Link>
          </div>
        </div>
      </section>

      {/* Why KCFB */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#1E5C2B" }}>
                Why Kings County Farm Bureau?
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                For over 100 years, KCFB has been the only organization dedicated exclusively
                to protecting Kings County agriculture. We are not politicians - we are farmers
                advocating for farmers.
              </p>
              <ul className="space-y-3">
                {differentiators.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <ChevronRight
                      size={18}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: "#D4A843" }}
                    />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <Image
                src="/images/gallery/new-membership.jpg"
                alt="Kings County Farm Bureau members"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl w-full object-cover"
                style={{ maxHeight: "500px" }}
              />
              <div
                className="absolute -bottom-4 -left-4 rounded-xl p-5 text-white"
                style={{ backgroundColor: "#1E5C2B" }}
              >
                <div className="text-3xl font-bold" style={{ color: "#D4A843" }}>
                  1918
                </div>
                <div className="text-sm text-green-200">Founded in Kings County</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Preview */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-2" style={{ color: "#1E5C2B" }}>
                Upcoming Events
              </h2>
              <p className="text-gray-600">
                Join us at these annual community events throughout the year.
              </p>
            </div>
            <Link
              href="/events/"
              className="mt-4 md:mt-0 flex items-center gap-2 font-semibold hover:gap-3 transition-all"
              style={{ color: "#D4A843" }}
            >
              View All Events <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                image: "/images/gallery/Harvest Classic 2026.jpg",
                title: "Harvest Classic Golf Tournament",
                description:
                  "Annual fundraiser at Kings Country Club. A premier event for the agricultural community.",
                tag: "Annual Fundraiser",
              },
              {
                image: "/images/gallery/AM-Sold-Out-.jpg",
                title: "Annual Meeting",
                description:
                  "Our yearly membership gathering celebrating another year of advocacy and community.",
                tag: "Annual Event",
              },
              {
                image: "/images/gallery/First Friday_v3.png",
                title: "First Friday Lunch",
                description:
                  "Monthly networking luncheons connecting Kings County agricultural professionals.",
                tag: "Monthly",
              },
            ].map((event) => (
              <Link
                key={event.title}
                href="/events/"
                className="group rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span
                      className="px-2 py-1 rounded text-xs font-bold text-white"
                      style={{ backgroundColor: "#1E5C2B" }}
                    >
                      {event.tag}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-base mb-2" style={{ color: "#1E5C2B" }}>
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Farm Day Highlight */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="/images/gallery/FarmLife.jpg"
                alt="Farm Day education event"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl w-full object-cover"
                style={{ maxHeight: "400px" }}
              />
            </div>
            <div className="order-1 lg:order-2">
              <div
                className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4"
                style={{ backgroundColor: "#e8f5ea", color: "#1E5C2B" }}
              >
                ANNUAL EVENT
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1E5C2B" }}>
                Farm Day - Investing in Agriculture&apos;s Future
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Every year, KCFB partners with the Kings County Office of Education and
                Kings Fair to bring 2,400+ third graders to Kings Fairgrounds for
                hands-on agricultural education experiences.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                In an increasingly urban world, Farm Day connects the next generation
                with where their food comes from and the importance of Kings County
                agriculture to California and the nation.
              </p>
              <Link
                href="/events/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-white transition-all hover:opacity-90"
                style={{ backgroundColor: "#1E5C2B" }}
              >
                Learn About Our Events <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 px-4 text-center text-white"
        style={{ backgroundColor: "#1E5C2B" }}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join Kings County Farm Bureau?
          </h2>
          <p className="text-green-200 text-lg mb-8 leading-relaxed">
            For $500/year, become part of the only organization exclusively dedicated
            to protecting Kings County agriculture. Your membership funds advocacy,
            education and the future of farming in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/membership/"
              className="px-8 py-4 rounded-lg font-bold text-lg transition-all hover:opacity-90"
              style={{ backgroundColor: "#D4A843", color: "#1a1a1a" }}
            >
              Become a Member - $500/Year
            </Link>
            <Link
              href="/contact/"
              className="px-8 py-4 rounded-lg font-bold text-lg border-2 border-white hover:bg-white hover:text-green-900 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
