import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Farm Life Podcast",
  description:
    "The Farm Life Podcast is hosted by Dusty Ference, Executive Director of Kings County Farm Bureau. Available on Apple Podcasts, Spotify and YouTube.",
};

export default function PodcastLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
