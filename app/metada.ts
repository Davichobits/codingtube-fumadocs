import { Metadata } from 'next/types';

const siteConfig = {
  name: 'CodingTube',
  description: 'Documentación oficial de CodingTube',
  url: 'https://codingtube.dev',
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: `${siteConfig.url}/icon.png`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/icon.png`],
  },
  icons: {
    icon: '/icon.png',
  },
};