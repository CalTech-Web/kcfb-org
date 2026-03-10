import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Kings County Farm Bureau at 559-584-3557 or kcfb@kcfb.org. Located at 870 Greenfield Avenue, Hanford, CA 93230.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
