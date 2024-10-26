import { ReactNode } from 'react';
import type { Metadata } from 'next';

import { Inter, Space_Mono } from 'next/font/google';
import localFont from 'next/font/local';

import Navbar from '@/components/nav-bar';

import StarsCanvas from '@/components/star-canvas';

import '../styles/globals.css';

const instrument = Inter({
  display: 'swap',
  subsets: ['latin'],
  adjustFontFallback: false,
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
});

const orbitron = Space_Mono({
  display: 'swap',
  subsets: ['latin'],
  adjustFontFallback: false,
  variable: '--font-orbitron',
  weight: ['400', '700'],
});

const futurism = localFont({
  src: [
    {
      path: '../../public/fonts/Futurism.otf',
    },
  ],
  variable: '--font-futurism',
});

const clash = localFont({
  src: [
    {
      path: '../../public/fonts/ClashDisplay-Regular.ttf',
      weight: '400',
    },
    {
      path: '../../public/fonts/ClashDisplay-Semibold.ttf',
      weight: '600',
    },
  ],
  variable: '--font-clash',
});

export const metadata: Metadata = {
  title: `Portfolio | @vagnereix.dev`,
  description: `Software Engineer, Computer Science student and Front-end Lead portfolio.`,
  icons: {
    icon: 'favicon.ico',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang='en'
      className={`${instrument.variable} ${orbitron.variable} ${futurism.variable} ${clash.variable} scroll-smooth select-none `}
    >
      <body className='bg-dark-900 overflow-y-scroll overflow-x-hidden'>
        <StarsCanvas />
        <Navbar />

        {children}
      </body>
    </html>
  );
}
