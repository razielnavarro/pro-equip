import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const defaultFont = localFont({
  src: "./fonts/RethinkSans[wght].ttf",
  weight: "100-900",
});

export const metadata: Metadata = {
  title: "Raziel Portfolio",
  description: "Raziel Navarro personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${defaultFont.className} antialiased relative`}>
        {children}
      </body>
    </html>
  );
}
