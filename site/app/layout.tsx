import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kings County Farm Bureau - Agricultural Advocates Since 1918",
    template: "%s | Kings County Farm Bureau",
  },
  description:
    "Kings County Farm Bureau is an independent, non-governmental, grassroots organization committed to providing education, promotion and representation of agriculture since 1918.",
  keywords: [
    "Kings County Farm Bureau",
    "KCFB",
    "agriculture",
    "farming",
    "Kings County",
    "California",
    "farm bureau",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kcfb.org",
    siteName: "Kings County Farm Bureau",
    images: [
      {
        url: "https://kcfb.org/images/gallery/new-membership.jpg",
        width: 1200,
        height: 630,
        alt: "Kings County Farm Bureau",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Kings County Farm Bureau",
  alternateName: "KCFB",
  url: "https://kcfb.org",
  logo: "https://kcfb.org/images/logos/kcfb-color-logo.png",
  foundingDate: "1918",
  description:
    "Kings County Farm Bureau is an independent, non-governmental, grassroots organization committed to providing education, promotion and representation of agriculture since 1918.",
  telephone: "+1-559-584-3557",
  address: {
    "@type": "PostalAddress",
    streetAddress: "870 Greenfield Avenue",
    addressLocality: "Hanford",
    addressRegion: "CA",
    postalCode: "93230",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.instagram.com/kingsfarmbureau/",
    "https://www.youtube.com/@KingsCountyFarmBureau",
    "https://www.linkedin.com/company/kings-county-farm-bureau",
    "https://x.com/kingsfarmbureau",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
