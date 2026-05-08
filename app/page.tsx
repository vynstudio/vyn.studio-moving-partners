import type { Metadata } from 'next';
import Link from 'next/link';
import BookCallButton from './_components/BookCallButton';
import SiteHeader from './_components/SiteHeader';
import SiteFooter from './_components/SiteFooter';
import Section from './_components/Section';
import { CheckIcon } from './_components/icons';

export const metadata: Metadata = {
  title: 'Moving Partner — Free Moving Websites & Ad Management for U.S. Movers',
  description:
    'Free websites and Meta/Google ad management for U.S. moving companies. You pay the ad spend. We earn only when you get booked moves. No retainers, no setup fees.',
  alternates: { canonical: '/' },
};

const heroBullets = [
  'Done-for-you moving website built to convert.',
  'Meta &amp; Google ads managed end to end.',
  'You pay the ad spend. We earn only on booked moves.',
  'No retainers. No hourly fees. Commission-only.',
];

const stepSummaries = [
  {
    n: 1,
    title: 'We build your moving funnel',
    body: 'Website, lead capture, and tracking — wired and ready before any ad spend.',
  },
  {
    n: 2,
    title: 'We run and optimize your ads',
    body: 'Meta and Google campaigns managed end to end. You pay Meta and Google directly.',
  },
  {
    n: 3,
    title: 'You get booked moves — we earn a commission',
    body: 'When a customer books a move and pays a deposit, that is our commission. You keep the rest of the job profit.',
  },
];

const whyBlocks = [
  {
    title: 'No retainer, no setup fees',
    body: 'Website build and ad management are zero up-front. The only money out is the ad spend you pay Meta and Google directly.',
  },
  {
    title: 'Built specifically for movers',
    body: 'We do not run generic agency work. Funnels, copy, and creatives are tuned for local and long-distance moving companies in the U.S.',
  },
  {
    title: 'Aligned on outcomes',
    body: 'We get paid when you get paid. Our incentive is booked moves, not impressions, clicks, or vanity reports.',
  },
];

const cities = [
  { name: 'Miami', href: '/miami-movers' },
  { name: 'Orlando', href: '/locations' },
  { name: 'Tampa', href: '/locations' },
  { name: 'Atlanta', href: '/locations' },
  { name: 'Houston', href: '/locations' },
  { name: 'Nashville', href: '/locations' },
  { name: 'Los Angeles', href: '/locations' },
  { name: 'San Diego', href: '/locations' },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 [&_section]:scroll-mt-20">
      <SiteHeader />

      <section className="relative overflow-hidden bg-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-40 hidden h-[480px] bg-gradient-to-b from-blue-50/70 via-white to-transparent lg:block"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Commission-only partner for U.S. movers
              </span>
              <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl xl:text-[68px]">
                Free moving website &amp; ad management.{' '}
                <span className="text-blue-700">
                  You only pay when you get booked moves.
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 lg:text-xl">
                We design your moving website, build the funnel, and run your
                Meta and Google ads. You pay the ad spend directly. We earn
                only when a customer books a move with you. No retainers. No
                hourly fees. No percentage of ad spend.
              </p>

              <ul className="mt-7 grid max-w-2xl gap-3 sm:grid-cols-2">
                {heroBullets.map((line, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckIcon />
                    <span
                      className="text-base text-slate-700"
                      dangerouslySetInnerHTML={{ __html: line }}
                    />
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <BookCallButton source="home-hero">
                  Book a strategy call
                </BookCallButton>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center justify-center text-base font-semibold text-blue-700 hover:text-blue-800"
                >
                  See how it works →
                </Link>
              </div>
              <p className="mt-4 text-sm text-slate-500">
                30-minute call · No retainer · No long contracts
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 shadow-sm sm:p-8 lg:p-9">
                <div className="absolute -top-3 right-6 hidden rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-sm sm:inline-flex">
                  Pricing
                </div>
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  What you actually pay for
                </p>
                <div className="mt-5 grid grid-cols-1 gap-4">
                  <Stat label="Website build" value="$0" />
                  <Stat label="Ad management" value="$0" />
                  <Stat label="Our cut" value="On booked moves only" small />
                </div>
                <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50/60 p-4 text-sm leading-relaxed text-blue-900">
                  <strong>What you do pay:</strong> the ad spend on Meta and
                  Google, billed directly by them — never through us.
                </div>
                <div className="mt-5 flex items-center gap-3 text-xs text-slate-500">
                  <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500 ring-4 ring-emerald-100" />
                  Onboarding live in 1–2 weeks
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section eyebrow="The model" title="How it works in three steps">
        <div className="grid gap-6 md:grid-cols-3">
          {stepSummaries.map((step) => (
            <div
              key={step.n}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                {step.n}
              </span>
              <h3 className="mt-4 text-xl font-bold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-slate-600">{step.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/how-it-works"
            className="inline-flex items-center text-base font-semibold text-blue-700 hover:text-blue-800"
          >
            Read the full breakdown →
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="Why movers pick us"
        title="Built for moving companies, not generic agencies"
        background="white"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {whyBlocks.map((block) => (
            <div
              key={block.title}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <h3 className="text-xl font-bold text-slate-900">{block.title}</h3>
              <p className="mt-2 text-slate-600">{block.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/for-movers"
            className="inline-flex items-center text-base font-semibold text-blue-700 hover:text-blue-800"
          >
            See the full offer for movers →
          </Link>
        </div>
      </Section>

      <Section eyebrow="Locations" title="Where we work with movers">
        <p className="max-w-3xl text-base text-slate-600 sm:text-lg">
          We onboard moving companies across the U.S. — local moves, long
          distance, or both. Pick your city to see how the offer maps to your
          market.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {cities.map((c) => (
            <Link
              key={c.name}
              href={c.href}
              className="rounded-xl border border-slate-200 bg-white px-5 py-4 text-base font-semibold text-slate-900 transition-colors hover:border-blue-200 hover:bg-blue-50"
            >
              {c.name} →
            </Link>
          ))}
        </div>
        <div className="mt-6">
          <Link
            href="/locations"
            className="inline-flex items-center text-base font-semibold text-blue-700 hover:text-blue-800"
          >
            See all locations →
          </Link>
        </div>
      </Section>

      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-700 to-blue-800">
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-24 hidden h-96 w-96 rounded-full bg-blue-500/20 blur-3xl lg:block"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-24 -left-24 hidden h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl lg:block"
        />
        <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to get a free website, free ad management, and pay only on
              booked moves?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-blue-100 sm:text-lg">
              Book a 30-minute strategy call. We&apos;ll look at your service
              area, your current funnel, and walk you through the commission
              structure 1:1.
            </p>
            <div className="mt-8 flex justify-center">
              <BookCallButton source="home-footer-cta" fullWidth>
                Book a strategy call
              </BookCallButton>
            </div>
            <p className="mt-4 text-sm text-blue-200">
              No retainer. No hourly fees. We get paid when you get booked.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function Stat({
  label,
  value,
  small = false,
}: {
  label: string;
  value: string;
  small?: boolean;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </p>
      <p
        className={`mt-1 font-extrabold text-slate-900 ${
          small ? 'text-base' : 'text-2xl'
        }`}
      >
        {value}
      </p>
    </div>
  );
}
