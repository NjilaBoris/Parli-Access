import type { Metadata, Viewport } from "next";
import {
  Bricolage_Grotesque,
} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

const siteUrl = "https://www.parliaccess.org";
const siteName = "Parli Access";
const siteDescription =
  "Parli Access is a civic technology platform bridging citizens and the National Assembly of Cameroon. Explore how Parliament works, find your MP by region and constituency, follow bills, committees and parliamentary news, and write directly to your representative.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Parli Access — Understand Parliament. Know Your MP.",
    template: "%s | Parli Access",
  },
  description: siteDescription,
  keywords: [
    "Cameroon National Assembly",
    "Cameroon Parliament",
    "Assemblée Nationale du Cameroun",
    "civic technology Cameroon",
    "find your MP Cameroon",
    "write to your MP Cameroon",
    "Cameroon parliamentary committees",
    "Cameroon members of parliament",
    "Cameroon constituencies",
    "parliamentary transparency Cameroon",
    "Cameroon bills and laws",
    "The People's Parliament",
    "civic engagement Cameroon",
    "Cameroon governance",
  ],
  authors: [{ name: "The People's Parliament" }],
  creator: "The People's Parliament",
  publisher: "The People's Parliament",
  category: "Government & Civic Technology",
  alternates: {
    canonical: "/",
    // Site content notes it will run in English and French — add this once /fr exists:
    // languages: { "en-US": "/", "fr-FR": "/fr" },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: "Parli Access — Understand Parliament. Know Your MP.",
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
    title: "Parli Access — Understand Parliament. Know Your MP.",
    description: siteDescription,
    images: ["/og-image.jpg"],
    // site: "@YourTwitterHandle",
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
  themeColor: "#0B3B2E",
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/parliicon.svg`,
  description: siteDescription,
  parentOrganization: {
    "@type": "Organization",
    name: "The People's Parliament",
  },
  sameAs: [
    // "https://x.com/yourhandle",
    // "https://facebook.com/yourpage",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
  inLanguage: ["en", "fr"],
  publisher: { "@type": "Organization", name: "The People's Parliament" },
  // Wire this up once an on-site search route exists:
  // potentialAction: {
  //   "@type": "SearchAction",
  //   target: `${siteUrl}/search?q={search_term_string}`,
  //   "query-input": "required name=search_term_string",
  // },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        bricolageGrotesque.className,
      )}
    >
      <body className="min-h-full">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </body>
    </html>
  );
}