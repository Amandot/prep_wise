import type { Metadata } from "next";
import { Mona_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PrepWise",
  description: "An AI-POWERED  platform for preapring mock interview ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${monaSans.className} ${geistMono.variable} antialiased pattern`}
      >
        {children}
        <Toaster/>

      </body>
    </html>
  ); 
}
