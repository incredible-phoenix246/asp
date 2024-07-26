import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import StateContextProvider from "./appcontext";
import { SkeletonNavbar } from "./component/navbar";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Footer from "./component/navbar/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASEURL as string),
  title: {
    default: "Aspace Network and Technology Limited",
    template: `%s | Aspace`,
  },
  description: `Aspace Network and Technology Limited is a technology firm focused on delivering innovative solutions for academic institutions.`,
  openGraph: {
    title: "Aspace Network and Technology Limited",
    description:
      "Aspace Network and Technology Limited is a technology firm focused on delivering innovative solutions for academic institutions.",
    url: process.env.NEXT_PUBLIC_BASEURL,
    siteName: "Aspace",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Aspace Network and Technology Limited",
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const Navbar = dynamic(() => import("./component/navbar/index"), {
  ssr: false,
  loading: () => <SkeletonNavbar />,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StateContextProvider>
          <Suspense fallback={<SkeletonNavbar />}>
            <Navbar />
          </Suspense>
          {children}
          <Footer />
        </StateContextProvider>
      </body>
    </html>
  );
}
