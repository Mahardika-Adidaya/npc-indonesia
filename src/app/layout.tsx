import '@/styles/globals.css';

import { Metadata } from 'next';
import dynamic from 'next/dynamic';

import Maintenance from '@/components/maintenance';
import Providers from '@/lib/react-query-provider';
import RenderIf from '@/lib/render-if';
import { isDevMode, isMaintenance } from '@/lib/utils';

const Navbar = dynamic(() => import('@/components/navbar'), {
  ssr: false
});

const Footer = dynamic(() => import('@/components/footer'), {
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
  const maintenance = isMaintenance();
  return (
    <html lang="en">
      <RenderIf isTrue={maintenance === false}>
        <body className={devMode ? 'debug-screens' : ''}>
          <Providers>
            <Navbar />
            {children}
            <Footer />
          </Providers>
        </body>
      </RenderIf>
      <RenderIf isTrue={maintenance === true}>
        <Maintenance />
      </RenderIf>
    </html>
  );
}
