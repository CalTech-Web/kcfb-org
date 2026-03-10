import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "eNewsletter Signup",
  description:
    "Subscribe to the Kings County Farm Bureau bi-weekly eNewsletter for agricultural news, event announcements and advocacy updates.",
};

export default function NewsletterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
