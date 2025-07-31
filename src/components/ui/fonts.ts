import { Lusitana, Inter, Roboto_Mono } from 'next/font/google';
import { Geist, Geist_Mono } from "next/font/google";

export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lusitana',
});

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto-mono',
});