import type { Metadata } from 'next';
import './globals.css';
import CalInit from './CalInit';

export const metadata: Metadata = {
  title: 'Moving Partner — Free Website + Ad Management for U.S. Movers',
  description:
    'Free moving website + ad management for U.S. moving companies. We only get paid when you get booked jobs. Commission-only partnership.',
  metadataBase: new URL('https://movingpartner.net'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-white text-slate-900">
        <CalInit />
        {children}
      </body>
    </html>
  );
}
