import type { Metadata } from 'next';
import Link from 'next/link';
import BookCallButton from '../_components/BookCallButton';
import SiteHeader from '../_components/SiteHeader';
import SiteFooter from '../_components/SiteFooter';
import Section from '../_components/Section';
import { CheckIcon } from '../_components/icons';

export const metadata: Metadata = {
  title: 'Miami Movers — Free Website & Ad Management for Moving Companies in Miami | Moving Partner',
  description:
    'Marketing and websites for moving companies in Miami. Free website + free Meta and Google ad management. We earn only on booked moves in Miami. Built for high-rises, snowbird traffic, and South Florida demand.',
  alternates: { canonical: '/miami-movers' },
};

const whyMiami = [
  'High-rise apartments and condos with strict moving windows — booking the move-in/move-out slot matters more than price shopping.',
  'Heavy snowbird traffic in winter and constant out-of-state moves driven by Florida tax migration.',
  'Traffic in Brickell, Wynwood, and Downtown means logistics and timing are part of the sell — not just price.',
  'Multilingual market (English / Spanish) — ad creative and landing copy need to handle both.',
];

const miamiSteps = [
  {
    n: 1,
    title: 'We build your Miami moving funnel',
    body:
      'A website tuned for Miami movers — service area, building types, languages, and the offers your customers actually search for. Conversion tracking installed and tested before any ad goes live.',
  },
  {
    n: 2,
    title: 'We run Miami-targeted Meta &amp; Google ads',
    body:
      'Campaigns geo-targeted by neighborhood and zip code, in English and (optionally) Spanish. You pay Meta and Google directly. We manage everything inside your accounts.',
  },
  {
    n: 3,
    title: 'You get booked Miami moves — we earn a commission',
    body:
      'When a Miami customer books a move and pays a deposit, that is our commission. You keep the rest of the profit on the move. Exact structure walked through 1:1 on the call.',
  },
];

export default function MiamiMoversPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 [&_section]:scroll-mt-20">
      <SiteHeader />

      <section className="relative overflow-hidden bg-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-40 hidden h-[480px] bg-gradient-to-b from-blue-50/70 via-white to-transparent lg:block"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:py-28">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Miami, FL
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Marketing &amp; websites for{' '}
            <span className="text-blue-700">moving companies in Miami</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 lg:text-xl">
            Free website &amp; ad management, commission-only on booked moves
            in Miami. We build the funnel, run the Meta and Google ads, and
            earn only when your trucks actually move someone in.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <BookCallButton source="miami-hero">
              Book your Miami strategy call
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
      </section>

      <Section
        eyebrow="Why Miami"
        title="Why this works for Miami movers"
      >
        <p className="max-w-3xl text-base text-slate-600 sm:text-lg">
          Miami is not a generic moving market — it has its own demand
          patterns, building access rules, and seasonality. The funnel needs
          to be built for that, not for a national template.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {whyMiami.map((line, i) => (
            <li
              key={i}
              className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5"
            >
              <CheckIcon />
              <span className="text-base text-slate-700">{line}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        eyebrow="What we do"
        title="Website + Meta/Google ads + commission-only model"
        background="white"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
            <h3 className="text-xl font-bold text-slate-900">
              Miami-tuned moving website
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                'Service area and pricing structure built for Miami neighborhoods.',
                'Mobile-first, fast, with click-to-call and quote forms wired to your phone.',
                'English + optional Spanish landing copy.',
                'Tracking installed end-to-end before any ad spend.',
              ].map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-base text-slate-700">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
            <h3 className="text-xl font-bold text-slate-900">
              Meta &amp; Google ads, run for you
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                'Geo-targeted by Miami zip codes and neighborhoods — Brickell, Wynwood, Coral Gables, Doral, the Beaches.',
                'Creative tested for high-rise / condo moves vs. house moves vs. long-distance.',
                'You pay Meta and Google directly — accounts stay in your name.',
                'Optimization based on booked moves, not clicks.',
              ].map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-base text-slate-700">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 rounded-2xl bg-emerald-50 p-5 text-emerald-900 sm:p-6">
          <p className="text-base font-semibold sm:text-lg">
            All of this is included in the commission-only partnership.
          </p>
          <p className="mt-1 text-sm sm:text-base">
            Zero up-front. Zero monthly. We earn only when Miami customers
            actually book a move with you.
          </p>
        </div>
      </Section>

      <Section eyebrow="The model" title="How it works in Miami">
        <div className="grid gap-6 md:grid-cols-3">
          {miamiSteps.map((step) => (
            <div
              key={step.n}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                {step.n}
              </span>
              <h3 className="mt-4 text-xl font-bold text-slate-900">
                {step.title.replace(/&amp;/g, '&')}
              </h3>
              <p className="mt-2 text-slate-600">
                {step.body.replace(/&amp;/g, '&')}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 rounded-xl border border-slate-200 bg-white p-5 text-sm leading-relaxed text-slate-600 sm:text-base">
          The exact commission and deposit structure for Miami is explained
          1:1 on your strategy call so it fits your average ticket size,
          margins, and how you already run jobs.
        </p>
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
              Ready to book more Miami moves?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-blue-100 sm:text-lg">
              30-minute Miami strategy call. We&apos;ll map the offer to your
              service area and walk you through the commission structure 1:1.
            </p>
            <div className="mt-8 flex justify-center">
              <BookCallButton source="miami-footer" fullWidth>
                Book your Miami strategy call
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
