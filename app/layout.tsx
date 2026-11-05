import type { Metadata } from "next";
import type { Viewport } from "next";
import { Caveat, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import { IntroLoader } from "@/components/loading/IntroLoader";
import { RouteProgress } from "@/components/loading/RouteProgress";
import { PWAController } from "@/components/pwa/PWAController";
import { StructuredData } from "@/components/seo/StructuredData";
import { localBusinessSchema, organizationSchema, siteConfig, websiteSchema } from "@/lib/site";
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
    default: "OryenSolutions | Web, Mobile, AI Automation & Custom Software",
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
    title: "OryenSolutions | Web, Mobile, AI Automation & Custom Software",
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
    title: "OryenSolutions | Web, Mobile, AI Automation & Custom Software",
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${jakarta.variable} ${caveat.variable} antialiased`}>
        <IntroLoader />
        <RouteProgress />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-XEHZW4RXJZ" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XEHZW4RXJZ');
          `}
        </Script>
        <StructuredData data={[organizationSchema(), localBusinessSchema(), websiteSchema()]} />
        {children}
        <PWAController />
      </body>
    </html>
  );
}
