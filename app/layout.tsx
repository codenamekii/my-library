import type { Metadata } from "next";
import localFont from "next/font/local";
import { ReactNode } from "react";
import "./globals.css";

const ibmPlexSans = localFont({
  src: [
    { path: "/fonts/ibmPlexSans-Regular.ttf", weight: '400', style: 'normal' },
    { path: "/fonts/ibmPlexSans-Medium.ttf", weight: '500', style: 'normal' },
    { path: "/fonts/ibmPlexSans-semiBold.ttf", weight: '600', style: 'normal' },
    { path: "/fonts/ibmPlexSans-Bold.ttf", weight: '700', style: 'normal' },
  ],
});

const bebasNeue = localFont( {
  src: [
    {  path: "/fonts/bebasNeue-Regular.ttf", weight: '400', style: 'normal' },
  ],
  variable: "--bebasNeue",
});

export const metadata: Metadata = {
  title: "My Library",
  description: "Book Collection",
};

const RootLayout = ({ children }:{ children: ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexSans.className} ${bebasNeue.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

export default RootLayout;