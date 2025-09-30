import '@/app/global.css';
// import { RootProvider } from 'fumadocs-ui/provider';
import { Provider } from './provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import { metadata } from './metada';
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
});

export { metadata };

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-KH3JBESTXT"
              strategy="afterInteractive"
            />
            <Script
              id="gtag-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-KH3JBESTXT');
                `,
              }}
            />
            <Script
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1562465173055929"
              crossOrigin="anonymous"
              strategy="afterInteractive"
            />
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
