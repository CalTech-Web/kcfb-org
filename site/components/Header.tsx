"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

type NavChild = { label: string; href: string; external?: boolean };
type NavItem = { label: string; href: string; children?: NavChild[] };

const navItems: NavItem[] = [
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
      { label: "Regulatory Costs", href: "/resources/regulatory-costs/" },
      { label: "Kings County Ag Commissioner", href: "https://www.countyofkingsca.gov/departments/general-services/agriculture-department-measurement-standards/about-us", external: true },
      { label: "Water District Map (PDF)", href: "/pdfs/Kings-County-Water-District-Map.pdf", external: true },
      { label: "Spray Days California", href: "https://spraydays.cdpr.ca.gov/", external: true },
    ],
  },
  { label: "Contact Us", href: "/contact/" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  const isTransparent = pathname === "/sgma" || pathname === "/sgma/" || pathname === "/podcast" || pathname === "/podcast/";

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (mobileOpen) return;
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileOpen]);

  useEffect(() => {
    if (!isTransparent) {
      setScrolled(false);
      return;
    }
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isTransparent]);

  return (
    <header
      className={`${isTransparent ? "fixed" : "sticky"} top-0 left-0 w-full z-50 transition-all duration-300 ${
        isTransparent && !scrolled && !mobileOpen
          ? "bg-transparent shadow-none"
          : "bg-white shadow-sm"
      }`}
    >
      {/* Top bar */}
      <div
        className={`py-2 px-4 transition-colors duration-300 ${
          isTransparent && !scrolled && !mobileOpen
            ? "bg-transparent"
            : "bg-[#5C6A22]"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs sm:text-sm text-white">
          <span className="hidden sm:inline">Protecting Kings County Agriculture Since 1918</span>
          <span className="sm:hidden">Kings County Farm Bureau</span>
          <a
            href="tel:5595843557"
            className="flex items-center gap-1 hover:opacity-70 transition-opacity text-white"
          >
            <Phone size={14} />
            <span>559-584-3557</span>
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={
              isTransparent && !scrolled && !mobileOpen
                ? "/images/logos/kcfb-white-logo.png"
                : "/images/logos/kcfb-color-logo.png"
            }
            alt="Kings County Farm Bureau"
            width={160}
            height={60}
            style={{ objectFit: "contain" }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav ref={navRef} className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className={`flex items-center gap-1 px-3 py-2 font-medium rounded transition-colors text-sm ${
                    isTransparent && !scrolled
                      ? "text-white hover:text-white/80"
                      : "text-gray-700 hover:text-black"
                  }`}
                  aria-expanded={openDropdown === item.label}
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${
                      openDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-xl rounded-lg border border-gray-100 z-50 max-h-[70vh] overflow-y-auto">
                    {item.children.map((child) =>
                      child.external ? (
                        <a
                          key={child.href}
                          href={child.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors first:rounded-t-lg last:rounded-b-lg"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {child.label}
                        </a>
                      ) : (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors first:rounded-t-lg last:rounded-b-lg"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {child.label}
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium rounded transition-colors ${
                  isTransparent && !scrolled
                    ? "text-white hover:text-white/80"
                    : "text-gray-700 hover:text-black hover:bg-gray-50"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href="/membership/"
            className={`ml-3 px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:opacity-90 ${
              isTransparent && !scrolled
                ? "bg-white/20 text-white border border-white/30"
                : "bg-[#A0422A] text-white"
            }`}
          >
            Become a Member
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className={`lg:hidden p-2.5 rounded-lg ${
            isTransparent && !scrolled && !mobileOpen
              ? "text-white"
              : "text-gray-700"
          }`}
          onClick={() => {
            setMobileOpen(!mobileOpen);
            if (mobileOpen) setOpenDropdown(null);
          }}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white px-4 py-4 max-h-[calc(100vh-120px)] overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.label} className="mb-1">
              {item.children ? (
                <>
                  <button
                    className="w-full text-left px-3 py-2 font-medium flex items-center justify-between text-gray-700"
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
                      {item.children.map((child) =>
                        child.external ? (
                          <a
                            key={child.href}
                            href={child.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-black"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </a>
                        ) : (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-black"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className="block px-3 py-2 font-medium text-gray-700"
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
              className="block text-center py-3 rounded-lg font-semibold bg-[#A0422A] text-white"
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
