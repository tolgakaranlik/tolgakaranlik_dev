import type { Metadata } from "next";
import "../globals.css";
import { inter } from '@/components/ui/fonts';

export const metadata: Metadata = {
  title: 'Tolga Karanlikoglu',
  description: 'Developer Portfolio - Blog Section',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body
        className={`${inter.variable} bg-white text-gray-900 dark:bg-gray-900 dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
