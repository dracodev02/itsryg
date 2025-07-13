import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "./views/share/header";
import Footer from "./views/share/footer";

const monumentExtendedBold = localFont({
  src: "./fonts/MonumentExtendedBold.ttf",
  variable: "--font-monument-extended",
  weight: "800",
});

const sfProDisplay = localFont({
  src: [
    {
      path: "./fonts/SFPRODISPLAYBLACKITALIC.otf",
      weight: "900",
      style: "italic",
    },
    {
      path: "./fonts/SFPRODISPLAYBOLD.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/SFPRODISPLAYHEAVYITALIC.otf",
      weight: "800",
      style: "italic",
    },
    {
      path: "./fonts/SFPRODISPLAYLIGHTITALIC.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/SFPRODISPLAYMEDIUM.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/SFPRODISPLAYREGULAR.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/SFPRODISPLAYSEMIBOLDITALIC.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./fonts/SFPRODISPLAYTHINITALIC.otf",
      weight: "200",
      style: "italic",
    },
    {
      path: "./fonts/SFPRODISPLAYULTRALIGHTITALIC.otf",
      weight: "100",
      style: "italic",
    },
  ],
  variable: "--font-sf-pro-display",
});

export const metadata: Metadata = {
  title: "RYG.LABS",
  description:
    "We are a collective of dynamic builders with a strong focus on building products. We specialize in providing solutions for parties who want to step in the Web3 world with ease.",
  icons: "/images/dlabslogo.svg",
  metadataBase: new URL("https://itsryg.com/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "RYG.LABS",
    description:
      "We are a collective of dynamic builders with a strong focus on building products. We specialize in providing solutions for parties who want to step in the Web3 world with ease.",
    url: "https://itsryg.com/",
    siteName: "RYG.LABS",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://itsryg.com/images/community1.jpeg",
        width: 768,
        height: 1024,
        alt: "RYG.LABS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RYG.LABS",
    description:
      "We are a collective of dynamic builders with a strong focus on building products. We specialize in providing solutions for parties who want to step in the Web3 world with ease.",
    images: [
      {
        url: "https://itsryg.com/images/community1.jpeg",
        width: 768,
        height: 1024,
        alt: "RYG.LABS",
      },
    ],
    creator: "@ryg.labs",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sfProDisplay.variable} ${monumentExtendedBold.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
