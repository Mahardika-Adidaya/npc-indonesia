import '@/styles/globals.css';

import type { Metadata } from 'next';

import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { isDevMode } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'National Paralympic Committee of Indonesia',
  description:
    'Komite Paralimpiade Nasional Indonesia adalah organisasi pembina atlet penyandang disabilitas di Indonesia'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const devMode = isDevMode();
  return (
    <html lang="en">
      <body className={devMode ? 'debug-screens' : ''}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
