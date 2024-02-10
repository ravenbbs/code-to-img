
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Code To Image App',
  description: 'Convierte tu código en imágenes de forma rápida y sencilla con Code To Image App. Ideal para compartir tus proyectos en redes sociales y presentaciones.',
  // Favicons - Icons
  icons: {
    icon: '/icon.png',
    shortcut: '/shortcut-icon.png',
    apple: '/apple-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },

  referrer: 'origin-when-cross-origin',
  keywords: ['code', 'código', 'image', 'imagen', 'conversor', 'converter', 'desarrollo', 'programación', 'compartir', 'redes sociales', 'presentaciones'],
  authors: { name: 'Julio Condor', url: 'https://github.com/ravenbbs' },
  creator: 'Julio Condor',
  category: 'technology',

  // Open Graph Tags
  openGraph: {
    title: 'Code To Image App',
    description: 'Convierte tu código en imágenes de forma rápida y sencilla con Code To Image App. Ideal para compartir tus proyectos en redes sociales y presentaciones.',
    url: 'https://code-to-img-project.vercel.app/',
    siteName: 'Code To Image App',
    images: [
      {
        url: '/code-to-image-converter.png', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'Image of code',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },

// twitter Tags
  twitter: {
    card: 'app',
    title: 'Code To Image App',
    description: 'Convierte tu código en imágenes de forma rápida y sencilla con Code To Image App. Ideal para compartir tus proyectos en redes sociales y presentaciones.',
    //siteId: '1467726470533754880',
    creator: '@ravenbbs',
    //creatorId: '1467726470533754880',
    images: {
      url: '/code-to-image-converter.png',
      alt: 'Image of code',
    },
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
