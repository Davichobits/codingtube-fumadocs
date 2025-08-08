import '@/app/global.css';
// import { RootProvider } from 'fumadocs-ui/provider';
import { Provider } from './provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import { metadata } from './metada';

const inter = Inter({
  subsets: ['latin'],
});

export { metadata };

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
