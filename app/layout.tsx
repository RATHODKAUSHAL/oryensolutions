import type { Metadata } from "next";
import type { Viewport } from "next";
import { Roboto_Mono, Rubik } from "next/font/google";
import { PWAController } from "@/components/pwa/PWAController";
import { StructuredData } from "@/components/seo/StructuredData";
import { localBusinessSchema, organizationSchema, reviewSchema, siteConfig, websiteSchema } from "@/lib/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

// Handwritten accent used sparingly, e.g. the footer headline.
const caveat = Caveat({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  manifest: "/manifest.webmanifest",
  title: {
    default: "OryenSolutions | Web Development, BIM Automation & Custom Software",
    template: "%s | OryenSolutions",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: siteConfig.keywords,
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  alternates: {
    canonical: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "OryenSolutions | Web Development, BIM Automation & Custom Software",
    description: siteConfig.description,
    images: [
      {
        url: "/Assets/Oryen_Solutions.png",
        width: 1320,
        height: 752,
        alt: "Oryen Solutions logo and brand graphic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OryenSolutions | Web Development, BIM Automation & Custom Software",
    description: siteConfig.description,
    images: ["/Assets/Oryen_Solutions.png"],
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/favicon.ico" }],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: siteConfig.name,
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#0077b6",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} ${robotoMono.variable} antialiased`}>
        <StructuredData data={[organizationSchema(), websiteSchema()]} />
        {children}
        <PWAController />
      </body>
    </html>
  );
}
