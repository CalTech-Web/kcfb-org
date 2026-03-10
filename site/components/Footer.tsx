import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Clock, Instagram, Youtube, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#5C6A22] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logos/KCFB White@2x.png"
                alt="Kings County Farm Bureau"
                width={50}
                height={50}
              />
              <div>
                <div className="font-bold text-lg leading-tight text-white">Kings County</div>
                <div className="font-bold text-lg leading-tight text-white">Farm Bureau</div>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              Protecting, preserving and enhancing agriculture in Kings County since 1918.
            </p>
            <div className="space-y-2 text-sm text-white/80">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                <div>
                  870 Greenfield Avenue<br />
                  Hanford, CA 93230
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="flex-shrink-0" />
                <a href="tel:5595843557" className="hover:text-white transition-colors">
                  559-584-3557
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={14} className="mt-0.5 flex-shrink-0" />
                <div>
                  Mon - Thu: 9AM - 4PM<br />
                  Fri: By Appointment
                </div>
              </div>
            </div>
          </div>

          {/* Organization Links */}
          <div>
            <h3 className="font-bold text-base mb-4 border-b border-[#6B7A2C] pb-2 text-white">
              Organization
            </h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="/about/" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/membership/" className="hover:text-white transition-colors">
                  Membership
                </Link>
              </li>
              <li>
                <Link href="/events/" className="hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/farm-life/" className="hover:text-white transition-colors">
                  Farm Life
                </Link>
              </li>
              <li>
                <Link href="/friends/" className="hover:text-white transition-colors">
                  Friends of Farm Bureau
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-bold text-base mb-4 border-b border-[#6B7A2C] pb-2 text-white">
              Resources
            </h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="/sgma/" className="hover:text-white transition-colors">
                  SGMA Defense
                </Link>
              </li>
              <li>
                <Link href="/resources/checklist/" className="hover:text-white transition-colors">
                  Grower/Processor Checklist
                </Link>
              </li>
              <li>
                <Link href="/scholarship/" className="hover:text-white transition-colors">
                  Scholarship
                </Link>
              </li>
              <li>
                <Link href="/friends/" className="hover:text-white transition-colors">
                  Friends of Farm Bureau
                </Link>
              </li>
              <li>
                <Link href="/resources/ekrcd/" className="hover:text-white transition-colors">
                  Excelsior-Kings River RCD
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-bold text-base mb-4 border-b border-[#6B7A2C] pb-2 text-white">
              Connect
            </h3>
            <ul className="space-y-2 text-sm text-white/80 mb-6">
              <li>
                <Link href="/contact/" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/newsletter/" className="hover:text-white transition-colors">
                  eNewsletter Signup
                </Link>
              </li>
              <li>
                <Link href="/podcast/" className="hover:text-white transition-colors">
                  Farm Life Podcast
                </Link>
              </li>
            </ul>
            <div>
              <p className="text-sm text-white/80 mb-3">Follow Us</p>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/kingsfarmbureau/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white/15 hover:bg-white/25 text-white/80 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href="https://www.youtube.com/@KingsCountyFarmBureau"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white/15 hover:bg-white/25 text-white/80 hover:text-white transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/company/kings-county-farm-bureau"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white/15 hover:bg-white/25 text-white/80 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href="https://x.com/kingsfarmbureau"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white/15 hover:bg-white/25 text-white/80 hover:text-white transition-colors"
                  aria-label="X / Twitter"
                >
                  <Twitter size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#4A5A1B] py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-white/70">
          <div>
            &copy; 2018-{currentYear} Kings County Farm Bureau - All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy/" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service/" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <span>
              Built by:{" "}
              <a
                href="https://caltechweb.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:text-white transition-colors underline"
              >
                CalTech Web
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
