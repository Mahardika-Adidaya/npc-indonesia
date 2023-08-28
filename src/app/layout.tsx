import '@/styles/globals.css';

import { Metadata } from 'next';
import dynamic from 'next/dynamic';

import Footer from '@/components/footer';
import Providers from '@/lib/react-query-provider';
import { isDevMode } from '@/lib/utils';

const Navbar = dynamic(() => import('@/components/navbar'), {
  ssr: false
});

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
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
