import Image from 'next/image';
import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center" aria-label="Moving Partner — home">
              <Image
                src="/logo.png"
                alt="Moving Partner"
                width={4500}
                height={1419}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600">
              Free moving website and ad management for U.S. moving companies.
              We earn only when you get booked moves. No retainer. No hourly
              fees.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Site
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><Link href="/how-it-works" className="hover:text-slate-900">How it works</Link></li>
              <li><Link href="/for-movers" className="hover:text-slate-900">For movers</Link></li>
              <li><Link href="/locations" className="hover:text-slate-900">Locations</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Cities
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><Link href="/miami-movers" className="hover:text-slate-900">Miami</Link></li>
              <li><Link href="/locations" className="hover:text-slate-900">Orlando, Tampa &amp; more</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Moving Partner. All rights reserved.</p>
          <a
            href="https://movingpartner.net"
            className="font-medium text-slate-600 hover:text-slate-900"
          >
            movingpartner.net
          </a>
        </div>
      </div>
    </footer>
  );
}
