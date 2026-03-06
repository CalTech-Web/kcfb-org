"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about/",
    children: [
      { label: "Board of Directors & Staff", href: "/about/" },
      { label: "Events", href: "/events/" },
      { label: "Friends of Farm Bureau", href: "/friends/" },
      { label: "Membership", href: "/membership/" },
    ],
  },
  {
    label: "Farm Life",
    href: "/farm-life/",
    children: [
      { label: "Monthly Newspaper", href: "/farm-life/" },
      { label: "Podcast", href: "/podcast/" },
      { label: "eNewsletter Signup", href: "/newsletter/" },
    ],
  },
  { label: "SGMA", href: "/sgma/" },
  {
    label: "Resources",
    href: "#",
    children: [
      { label: "Excelsior-Kings River RCD", href: "/resources/ekrcd/" },
      { label: "GSA Information", href: "/resources/gsa/" },
      { label: "Grower/Processor Checklist", href: "/resources/checklist/" },
      { label: "Scholarship", href: "/scholarship/" },
    ],
  },
  { label: "Contact Us", href: "/contact/" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top bar */}
      <div style={{ backgroundColor: "#1E5C2B" }} className="py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-white text-sm">
          <span>Protecting Kings County Agriculture Since 1918</span>
          <a
            href="tel:5595843557"
            className="flex items-center gap-1 hover:opacity-80 transition-opacity"
          >
            <Phone size={14} />
            <span>559-584-3557</span>
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logos/KCFB White@2x.png"
            alt="Kings County Farm Bureau"
            width={60}
            height={60}
            style={{ filter: "invert(1) sepia(1) saturate(3) hue-rotate(80deg) brightness(0.4)" }}
          />
          <div>
            <div className="font-bold text-lg leading-tight" style={{ color: "#1E5C2B" }}>
              Kings County
            </div>
            <div className="font-bold text-lg leading-tight" style={{ color: "#1E5C2B" }}>
              Farm Bureau
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="nav-item relative group">
                <button
                  className="flex items-center gap-1 px-3 py-2 text-gray-700 hover:text-green-800 font-medium rounded transition-colors text-sm"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                  style={{ color: "#1E5C2B" }}
                >
                  {item.label}
                  <ChevronDown size={14} />
                </button>
                <div
                  className="absolute top-full left-0 mt-1 w-56 bg-white shadow-xl rounded-lg border border-gray-100 z-50 dropdown-menu"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                  style={{ display: openDropdown === item.label ? "block" : undefined }}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-800 transition-colors first:rounded-t-lg last:rounded-b-lg"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="px-3 py-2 text-sm font-medium rounded transition-colors hover:bg-green-50"
                style={{ color: "#1E5C2B" }}
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href="/membership/"
            className="ml-3 px-4 py-2 rounded-lg text-white text-sm font-semibold transition-all hover:opacity-90"
            style={{ backgroundColor: "#D4A843" }}
          >
            Become a Member
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 rounded-lg text-gray-700"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white px-4 py-4">
          {navItems.map((item) => (
            <div key={item.label} className="mb-1">
              {item.children ? (
                <>
                  <button
                    className="w-full text-left px-3 py-2 font-medium flex items-center justify-between"
                    style={{ color: "#1E5C2B" }}
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === item.label ? null : item.label
                      )
                    }
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === item.label && (
                    <div className="pl-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-green-800"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className="block px-3 py-2 font-medium"
                  style={{ color: "#1E5C2B" }}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <Link
              href="/membership/"
              className="block text-center py-3 rounded-lg text-white font-semibold"
              style={{ backgroundColor: "#D4A843" }}
              onClick={() => setMobileOpen(false)}
            >
              Become a Member
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
