import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://goodfruitcreative.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Good Fruit Creative | Web Design & Development in Worthing",
    template: "%s | Good Fruit Creative",
  },

  description:
    "Smart, professional websites for growing businesses. Independent web design and development based in Worthing, West Sussex.",

  applicationName: "Good Fruit Creative",

  authors: [
    {
      name: "Tom Dunham",
      url: siteUrl,
    },
  ],

  creator: "Tom Dunham",
  publisher: "Good Fruit Creative",

  keywords: [
    "web design Worthing",
    "web development Worthing",
    "small business websites",
    "freelance web designer",
    "web designer West Sussex",
    "Next.js developer",
    "Good Fruit Creative",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "Good Fruit Creative",
    title: "Good Fruit Creative | Smart websites for growing businesses",
    description:
      "Professional websites that help small businesses earn trust and generate enquiries.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Good Fruit Creative | Smart websites for growing businesses",
    description:
      "Professional websites that help small businesses earn trust and generate enquiries.",
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "Web design and development",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}