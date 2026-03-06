import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kcfb.org",
    siteName: "Kings County Farm Bureau",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
