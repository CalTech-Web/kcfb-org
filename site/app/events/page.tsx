import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Kings County Farm Bureau events including Farm Day, Wine vs. Beer Showdown, Harvest Classic Golf Tournament and monthly First Friday lunches.",
};

const events = [
  {
    title: "Farm Day",
    tag: "Annual - March",
    description:
      "Our signature annual event held each March at Kings Fairgrounds. We partner with the Kings County Office of Education and Kings Fair to bring 2,400+ third graders for hands-on agricultural education experiences. Farm Day connects the next generation with where their food comes from and the importance of Kings County agriculture.",
    highlight: "2,400+ third graders participate annually",
    image: "/images/gallery/FarmLife.jpg",
  },
  {
    title: "Wine vs. Beer Showdown",
    tag: "Annual Fundraiser",
    description:
      "Our popular annual fundraiser held at the Hanford Civic Auditorium. Now in its 17th year, the Wine vs. Beer Showdown is a beloved community event that raises funds for agricultural education and advocacy programs. A night of fun, community and support for Kings County agriculture.",
    highlight: "17+ years of successful community fundraising",
    image: "/images/gallery/The-Zenith_10-15-2025.jpg",
  },
  {
    title: "Harvest Classic Golf Tournament",
    tag: "Annual Fundraiser",
    description:
      "Annual fundraiser held at Kings Country Club. The Harvest Classic Golf Tournament brings together agricultural professionals, business leaders and community members for a day on the links supporting Kings County Farm Bureau programs and advocacy.",
    highlight: "Annual event at Kings Country Club",
    image: "/images/gallery/Harvest Classic 2026.jpg",
  },
  {
    title: "First Friday Lunch",
    tag: "Monthly",
    description:
      "Monthly networking luncheons held on the first Friday of each month. First Friday Lunches connect Kings County agricultural professionals, members and community leaders in an informal setting. A great opportunity to network, stay informed on current issues and support KCFB.",
    highlight: "Monthly networking opportunity",
    image: "/images/gallery/First Friday_v3.png",
  },
  {
    title: "Annual Meeting",
    tag: "Annual",
    description:
      "Our yearly membership gathering celebrating another year of advocacy, education and community. The Annual Meeting brings members together to review the year, elect board members and celebrate the accomplishments of Kings County Farm Bureau.",
    highlight: "Yearly membership gathering",
    image: "/images/gallery/AM-Sold-Out-.jpg",
  },
];

export default function EventsPage() {
  return (
    <>
      <PageHero
        title="Events"
        subtitle="From annual fundraisers to monthly networking lunches, KCFB brings the Kings County agricultural community together throughout the year."
        badge="Community Events"
        bgImage="/images/gallery/Harvest Classic 2026.jpg"
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
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4"
                    style={{ backgroundColor: "#e8f5ea", color: "#1E5C2B" }}
                  >
                    {event.tag}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#1E5C2B" }}>
                    {event.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">{event.description}</p>
                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold"
                    style={{ backgroundColor: "#e8f5ea", color: "#1E5C2B" }}
                  >
                    {event.highlight}
                  </div>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-lg w-full object-cover"
                    style={{ maxHeight: "380px" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#1E5C2B" }}>
            Stay Up to Date on KCFB Events
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Sign up for the bi-weekly eNewsletter to receive event announcements,
            agricultural news and KCFB updates directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/newsletter/"
              className="px-6 py-3 rounded-lg font-bold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: "#1E5C2B" }}
            >
              Subscribe to eNewsletter
            </Link>
            <Link
              href="/contact/"
              className="px-6 py-3 rounded-lg font-bold border-2 transition-all hover:bg-gray-100"
              style={{ borderColor: "#1E5C2B", color: "#1E5C2B" }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
