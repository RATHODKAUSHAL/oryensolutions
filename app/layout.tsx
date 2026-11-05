import type { Metadata } from "next";
import type { Viewport } from "next";
import { Roboto_Mono, Rubik } from "next/font/google";
import Script from "next/script";
import { PWAController } from "@/components/pwa/PWAController";
import { StructuredData } from "@/components/seo/StructuredData";
import { localBusinessSchema, organizationSchema, reviewSchema, siteConfig, websiteSchema } from "@/lib/site";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
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
    <html lang="en" suppressHydrationWarning>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-XEHZW4RXJZ" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XEHZW4RXJZ');
        `}
      </Script>
      <body className={`${rubik.variable} ${robotoMono.variable} antialiased`}>
        <StructuredData data={[organizationSchema(), localBusinessSchema(), websiteSchema(), reviewSchema()]} />
        {children}
        <PWAController />
      </body>
    </html>
  );
}
