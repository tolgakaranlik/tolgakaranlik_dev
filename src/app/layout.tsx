import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { inter } from '../components/ui/fonts';

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Tolga Karanlikoglu',
  description: 'Developer Portfolio and Blog',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body
        className={`${geistSans.variable} bg-white text-gray-900 dark:bg-gray-900 dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
