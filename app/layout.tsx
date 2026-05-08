import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vyn Studio — Moving Partners',
  description:
    'Free moving website + ad management for U.S. moving companies. We only get paid when you get booked jobs. Commission-only partnership.',
  metadataBase: new URL('https://vyn.studio'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-white text-slate-900">{children}</body>
    </html>
  );
}
