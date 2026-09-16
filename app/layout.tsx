import type { Metadata, Viewport } from "next";
import {
  Geist,
  Geist_Mono,
  Bricolage_Grotesque,
} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

const siteUrl = "https://www.parliaccess.org";
const siteName = "Parli Access";
const siteDescription =
  "Parli Access is a civic technology platform bridging citizens and the National Assembly of Cameroon — explore Parliament, find your MP, follow legislative news, and have your voice heard.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Parli Access — Understand Parliament. Know your MP.",
    template: "%s | Parli Access",
  },
  description: siteDescription,
  keywords: [
    "Cameroon National Assembly",
    "Cameroon Parliament",
    "civic technology Cameroon",
    "find your MP Cameroon",
    "parliamentary transparency",
    "The People's Parliament",
  ],
  authors: [{ name: "The People's Parliament" }],
  creator: "The People's Parliament",
  publisher: "The People's Parliament",
  alternates: {
    canonical: "/",
    // If/when you add a French version, e.g. /fr routes:
    // languages: { "en-US": "/", "fr-FR": "/fr" },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: "Parli Access — Understand Parliament. Know your MP.",
    description: siteDescription,
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg", // TODO: create a proper 1200x630 OG image
        width: 1200,
        height: 630,
        alt: "Parli Access — Civic technology platform for Cameroon's National Assembly",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Parli Access — Understand Parliament. Know your MP.",
    description: siteDescription,
    images: ["/og-image.jpg"],
    // site: "@YourTwitterHandle", // add if you have one
  },
  icons: { icon: "/parliicon.svg" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // verification: {
  //   google: "your-google-search-console-code",
  // },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B3B2E", // adjust to your actual brand color
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/parliicon.svg`,
  description: siteDescription,
  sameAs: [
    // "https://x.com/yourhandle",
    // "https://facebook.com/yourpage",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        bricolageGrotesque.className,
        "font-sans",
      )}
    >
      <body className="min-h-full">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}