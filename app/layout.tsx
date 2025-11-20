import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Video Maker',
  description: 'Create simple slideshow videos in your browser',
  metadataBase: new URL('https://agentic-a0c246b9.vercel.app')
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className="container py-8">{children}</main>
      </body>
    </html>
  );
}

