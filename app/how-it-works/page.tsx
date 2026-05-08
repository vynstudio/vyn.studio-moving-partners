import type { Metadata } from 'next';
import Link from 'next/link';
import BookCallButton from '../_components/BookCallButton';
import SiteHeader from '../_components/SiteHeader';
import SiteFooter from '../_components/SiteFooter';
import Section from '../_components/Section';
import { CheckIcon } from '../_components/icons';

export const metadata: Metadata = {
  title: 'How It Works — Commission-Only Marketing for Moving Companies | Moving Partner',
  description:
    'How our commission-only model works for U.S. moving companies: we build your website and run your Meta and Google ads. You pay the ad spend. We earn a commission only when you get booked moves.',
  alternates: { canonical: '/how-it-works' },
};

const steps = [
  {
    n: 1,
    title: 'We build your moving funnel',
    body:
      'Custom moving website (or focused landing page) tailored to your services and service area. Lead capture, click-to-call flows, and conversion tracking installed and tested before any ad spend hits the account.',
    points: [
      'Mobile-first design tuned for fast quotes and calls',
      'Lead forms wired to your phone, inbox, or CRM',
      'Pixel and conversion tracking installed end to end',
    ],
  },
  {
    n: 2,
    title: 'You pay Meta/Google directly. We run and optimize the ads',
    body:
      'Ad accounts stay in your name and the budget is yours — Meta and Google bill you directly. We manage campaigns, creatives, audiences, and bidding inside those accounts so you keep full ownership of the data.',
    points: [
      'Meta Ads (and optionally Google Ads) campaigns set up and run for you',
      'Creative production and ongoing creative testing for your market',
      'Optimization based on booked moves — not clicks or vanity metrics',
    ],
  },
  {
    n: 3,
    title: 'When a customer books a move and pays a deposit, that is our commission',
    body:
      'You only owe us when bookings actually happen. The deposit (or a portion of it) is our commission. You keep the rest of the profit on the move. No bookings, no payment to us — that is the whole point of the model.',
    points: [
      'Performance-based: we win when you win',
      'No retainers, no hourly fees, no percentage of ad spend',
      'You keep the rest of the job profit and the customer relationship',
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 [&_section]:scroll-mt-20">
      <SiteHeader />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            How it works
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Free website. Free ad management.{' '}
            <span className="text-blue-700">Paid only on booked moves.</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 lg:text-xl">
            Three steps, in plain English. We build your moving funnel, run the
            ads, and earn a commission only when bookings actually come in.
          </p>
        </div>
      </section>

      <Section eyebrow="The three steps" title="From zero to booked moves">
        <div className="space-y-8">
          {steps.map((step) => (
            <div
              key={step.n}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
                <div className="lg:w-1/3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                    {step.n}
                  </span>
                  <h3 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl">
                    {step.title}
                  </h3>
                </div>
                <div className="lg:flex-1">
                  <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
                    {step.body}
                  </p>
                  <ul className="mt-5 space-y-3">
                    {step.points.map((p, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckIcon />
                        <span className="text-base text-slate-700">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="The 1:1 part"
        title="Exact commission &amp; deposit structure — discussed on your call"
        background="white"
      >
        <div className="rounded-2xl border border-blue-100 bg-blue-50/40 p-6 sm:p-8 lg:p-10">
          <p className="text-lg leading-relaxed text-slate-700 sm:text-xl">
            We walk you through the exact commission and deposit structure 1:1
            on your strategy call so it fits your margins, your service area,
            and the way you already run jobs. Different markets and average
            ticket sizes need different splits — we will not pretend one
            template fits every mover.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              'We review your average job size and current monthly volume.',
              'We map the model to your margins so the numbers actually make sense.',
              'You walk away with a clear picture of how, when, and how much we get paid.',
            ].map((p, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-base text-slate-700">{p}</span>
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <BookCallButton source="how-it-works-1to1">
              Book a strategy call
            </BookCallButton>
            <Link
              href="/for-movers"
              className="inline-flex items-center justify-center text-base font-semibold text-blue-700 hover:text-blue-800"
            >
              See the offer for movers →
            </Link>
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
              Ready to walk through the model on a 30-minute call?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-blue-100 sm:text-lg">
              We&apos;ll cover your service area, your current funnel, and the
              exact commission structure for your market.
            </p>
            <div className="mt-8 flex justify-center">
              <BookCallButton source="how-it-works-footer" fullWidth>
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
