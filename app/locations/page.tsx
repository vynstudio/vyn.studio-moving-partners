import type { Metadata } from 'next';
import Link from 'next/link';
import BookCallButton from '../_components/BookCallButton';
import SiteHeader from '../_components/SiteHeader';
import SiteFooter from '../_components/SiteFooter';
import Section from '../_components/Section';

export const metadata: Metadata = {
  title: 'Locations — Marketing for Moving Companies Across the U.S. | Moving Partner',
  description:
    'Free websites and Meta/Google ad management for moving companies in Miami, Orlando, Tampa, Atlanta, Houston, Nashville, Los Angeles, San Diego, and more. Commission-only on booked moves.',
  alternates: { canonical: '/locations' },
};

const cities: { name: string; state: string; href?: string; live: boolean }[] = [
  { name: 'Miami', state: 'FL', href: '/miami-movers', live: true },
  { name: 'Orlando', state: 'FL', live: false },
  { name: 'Tampa', state: 'FL', live: false },
  { name: 'Atlanta', state: 'GA', live: false },
  { name: 'Houston', state: 'TX', live: false },
  { name: 'Nashville', state: 'TN', live: false },
  { name: 'Los Angeles', state: 'CA', live: false },
  { name: 'San Diego', state: 'CA', live: false },
];

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 [&_section]:scroll-mt-20">
      <SiteHeader />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Locations
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Marketing for moving companies{' '}
            <span className="text-blue-700">across the U.S.</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 lg:text-xl">
            We onboard moving companies in markets where the offer actually
            works — high lead volume, real demand, and ad costs that pencil
            out. Pick your city below or book a call and we will tell you
            straight if your area is a fit.
          </p>
        </div>
      </section>

      <Section eyebrow="Where we work" title="Cities we onboard movers in">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((c) => (
            <CityCard key={c.name} {...c} />
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-white p-6 sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-lg font-bold text-slate-900">
                Don&apos;t see your city?
              </p>
              <p className="mt-1 text-slate-600">
                We are expanding. Book a call and we will tell you straight if
                your market is a fit for the commission-only model.
              </p>
            </div>
            <BookCallButton source="locations-not-listed">
              Book a strategy call
            </BookCallButton>
          </div>
        </div>
      </Section>

      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-700 to-blue-800">
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-24 hidden h-96 w-96 rounded-full bg-blue-500/20 blur-3xl lg:block"
        />
        <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              One call to map the offer to your market.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-blue-100 sm:text-lg">
              30 minutes, real numbers, clear next step. No retainer. No long
              contracts.
            </p>
            <div className="mt-8 flex justify-center">
              <BookCallButton source="locations-footer" fullWidth>
                Book a strategy call
              </BookCallButton>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function CityCard({
  name,
  state,
  href,
  live,
}: {
  name: string;
  state: string;
  href?: string;
  live: boolean;
}) {
  const inner = (
    <>
      <div className="flex items-baseline justify-between">
        <p className="text-2xl font-bold text-slate-900">{name}</p>
        <span className="text-sm font-semibold text-slate-500">{state}</span>
      </div>
      <p className="mt-2 text-sm text-slate-600">
        Marketing &amp; websites for moving companies in {name}.
      </p>
      <p className="mt-4 text-sm font-semibold text-blue-700">
        {live ? 'See the offer →' : 'Coming soon — book a call to discuss →'}
      </p>
    </>
  );

  const baseClasses =
    'block rounded-2xl border border-slate-200 bg-white p-6 transition-colors';

  if (live && href) {
    return (
      <Link href={href} className={`${baseClasses} hover:border-blue-200 hover:bg-blue-50`}>
        {inner}
      </Link>
    );
  }

  return (
    <div className={`${baseClasses} opacity-90 hover:border-slate-300`}>
      {inner}
    </div>
  );
}
