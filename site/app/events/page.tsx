import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Kings County Farm Bureau events including Farm Day, Harvest Classic Golf Tournament, First Friday Luncheon and Annual Meeting.",
};

type EventItem = {
  title: string;
  tag: string;
  description: string;
  highlight: string;
  image: string;
  logoOnly?: boolean;
  saveTheDate?: string;
};

const events: EventItem[] = [
  {
    title: "Annual Meeting",
    tag: "Annual",
    description:
      "Our yearly membership gathering celebrating another year of advocacy, education and community. The Annual Meeting brings members together to review the year, elect board members and celebrate the accomplishments of Kings County Farm Bureau.",
    highlight: "Yearly membership gathering",
    image: "/images/gallery/annual-meeting-logo.jpg",
    logoOnly: true,
    saveTheDate: "TBD",
  },
  {
    title: "Farm Day",
    tag: "Annual - March",
    description:
      "Our signature annual event held each March at Kings Fairgrounds. We partner with the Kings County Office of Education and Kings Fair to bring 2,400+ third graders for hands-on agricultural education experiences. Farm Day connects the next generation with where their food comes from and the importance of Kings County agriculture.",
    highlight: "2,400+ third graders participate annually",
    image: "/images/gallery/farm-day-harvest.jpg",
  },
  {
    title: "First Friday Luncheon",
    tag: "Next: April 3, 2026",
    description:
      "Monthly networking luncheons held on the first Friday of each month. First Friday Luncheons connect Kings County agricultural professionals, members and community leaders in an informal setting. A great opportunity to network, stay informed on current issues and support KCFB.",
    highlight: "Monthly networking opportunity",
    image: "/images/gallery/First Friday_v3.png",
  },
  {
    title: "Harvest Classic Golf Tournament",
    tag: "Annual Fundraiser",
    description:
      "Annual fundraiser held at Kings Country Club. The Harvest Classic Golf Tournament brings together agricultural professionals, business leaders and community members for a day on the links supporting Kings County Farm Bureau programs and advocacy.",
    highlight: "Annual event at Kings Country Club",
    image: "/images/gallery/harvest-classic-logo.webp",
    logoOnly: true,
    saveTheDate: "October 26, 2026",
  },
];

export default function EventsPage() {
  return (
    <>
      <PageHero
        title="Events"
        subtitle="From annual fundraisers to monthly networking lunches, KCFB brings the Kings County agricultural community together throughout the year."
        badge="Community Events"
        bgImage="/images/gallery/sunflower-field.jpg"
        bgPosition="center 70%"
      />

      {/* Events List */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {events.map((event, i) => (
              <div
                key={event.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 bg-[#5C6A22]/10 text-[#5C6A22]">
                    {event.tag}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                    {event.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">{event.description}</p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-[#F6B330]/10 text-[#A0422A]">
                    {event.highlight}
                  </div>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  {event.logoOnly ? (
                    <div
                      className="flex flex-col items-center justify-center rounded-2xl p-10 relative overflow-hidden"
                      style={{ minHeight: "300px", background: "#1E5C2B" }}
                    >
                      {/* Subtle radial glow for depth */}
                      <div
                        className="absolute inset-0 opacity-20 pointer-events-none"
                        style={{
                          background:
                            "radial-gradient(ellipse at 60% 40%, #D4A843 0%, transparent 70%)",
                        }}
                      />
                      <div className="bg-white rounded-xl p-6 shadow-lg relative z-10" style={{ maxWidth: "220px" }}>
                        <Image
                          src={event.image}
                          alt={event.title}
                          width={200}
                          height={200}
                          className="object-contain"
                        />
                      </div>
                      {event.saveTheDate && (
                        <div className="mt-7 relative z-10 text-center">
                          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-2 text-[#1a1a1a]" style={{ background: "#D4A843" }}>
                            Save the Date
                          </span>
                          <p className="text-xl font-bold text-white">
                            {event.saveTheDate === "TBD" ? "Date TBD" : event.saveTheDate}
                          </p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Image
                      src={event.image}
                      alt={event.title}
                      width={600}
                      height={400}
                      className="rounded-2xl shadow-lg w-full object-cover"
                      style={{ maxHeight: "380px" }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-14 px-4 bg-[#5C6A22]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Stay Up to Date on KCFB Events
          </h2>
          <p className="text-white/80 mb-6 leading-relaxed">
            Sign up for the bi-weekly eNewsletter to receive event announcements,
            agricultural news and KCFB updates directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/newsletter/"
              className="px-6 py-3 rounded-lg font-bold text-[#1a1a1a] transition-all hover:opacity-90 bg-[#F6B330]"
            >
              Subscribe to eNewsletter
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
