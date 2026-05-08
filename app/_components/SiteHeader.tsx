import Link from 'next/link';
import BookCallButton from './BookCallButton';

const navLinks = [
  { href: '/how-it-works', label: 'How it works' },
  { href: '/for-movers', label: 'For movers' },
  { href: '/locations', label: 'Locations' },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:py-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold tracking-tight text-slate-900"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm sm:h-9 sm:w-9">
            M
          </span>
          <span className="text-base sm:text-lg">Moving Partner</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-slate-900">
              {link.label}
            </Link>
          ))}
        </nav>
        <BookCallButton source="header" size="compact">
          Book consultation
        </BookCallButton>
      </div>
    </header>
  );
}
