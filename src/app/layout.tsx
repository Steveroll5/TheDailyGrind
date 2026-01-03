
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import CRTOverlay from './components/crt-overlay';

export const metadata: Metadata = {
  title: 'Apex Anomaly',
  description: 'By The Apex Signal',
  icons: {
    icon: '/favicon.ico?v=1',
    shortcut: '/favicon.ico?v=1',
    apple: '/favicon.ico?v=1',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display:wght@700&family=VT323&family=Nanum+Pen+Script&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <main className="relative min-h-screen bg-background text-foreground transition-colors duration-500">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
