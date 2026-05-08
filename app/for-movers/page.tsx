import type { Metadata } from 'next';
import Link from 'next/link';
import BookCallButton from '../_components/BookCallButton';
import SiteHeader from '../_components/SiteHeader';
import SiteFooter from '../_components/SiteFooter';
import Section from '../_components/Section';
import FAQAccordion, { FAQItem } from '../_components/FAQAccordion';
import { CheckIcon } from '../_components/icons';

export const metadata: Metadata = {
  title: 'For Movers — Commission-Only Marketing Plan for Moving Companies | Moving Partner',
  description:
    'A single commission-only plan for U.S. moving companies. Free moving website, free Meta and Google ad management, performance-based pricing. We earn only when you get booked moves.',
  alternates: { canonical: '/for-movers' },
};

const planIncludes = [
  'Custom moving website or high-converting landing page',
  'Meta and (optionally) Google Ads campaigns set up and managed',
  'Creative production and ongoing creative testing',
  'Conversion tracking, lead routing, and weekly reporting',
  'Optimization based on booked moves — not clicks',
  'Direct support during onboarding and after launch',
];

const planExcludes = [
  'No agency retainer — zero monthly fee for our work',
  'No setup fees for the website or the ad accounts',
  'No hourly billing, ever',
  'No percentage of ad spend cut',
];

const faqItems: FAQItem[] = [
  {
    question: 'Who pays for the ad spend?',
    answer:
      'You do, directly to Meta and Google. The ad accounts stay in your name, the budget is yours, and we never touch the card. We manage the campaigns inside your accounts so you keep full ownership of the data and the ad history.',
  },
  {
    question: 'How do you get paid?',
    answer:
      'When a customer books a move and pays a deposit, that deposit (or a portion of it) is our commission. You keep the rest of the profit on the job. No bookings = no payment to us. The exact structure is something we walk through 1:1 on the strategy call so we can align with your margins and your market.',
  },
  {
    question: 'Is there any long-term contract?',
    answer:
      'No long lock-ins. The partnership is meant to keep working because it produces booked moves, not because you are stuck. We will cover the exact terms on the call so there are no surprises on either side.',
  },
  {
    question: 'Can I leave and keep the website?',
    answer:
      'We discuss handover terms 1:1 on the call. Generally we want the website to keep producing for you — that is the whole point of the model. We will be straight with you about how it works in your specific situation before you sign anything.',
  },
  {
    question: 'Do you work with more than one mover per city?',
    answer:
      'Exclusivity by city or service area is something we discuss case by case on the strategy call. In some markets we keep it to one partner, in others it depends on service mix. We will be straight with you about the situation in your area before you commit to anything.',
  },
];

export default function ForMoversPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 [&_section]:scroll-mt-20">
      <SiteHeader />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            For moving companies
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            One plan. Performance-based.{' '}
            <span className="text-blue-700">Built for movers.</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 lg:text-xl">
            We do not have tiers, packages, or upsells. There is one
            partnership: we build, we run the ads, and we earn only when you
            get booked moves.
          </p>
        </div>
      </section>

      <Section eyebrow="The plan" title="Commission-only partner">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
              What you get
            </p>
            <p className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
              Everything you need to book more moves
            </p>
            <ul className="mt-6 space-y-3">
              {planIncludes.map((line, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-base text-slate-700">{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-emerald-200 bg-emerald-50/60 p-7 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
              What you don&apos;t pay
            </p>
            <p className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
              Zero up-front. Zero monthly. Zero hourly.
            </p>
            <ul className="mt-6 space-y-3">
              {planExcludes.map((line, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckIcon className="text-emerald-600" />
                  <span className="text-base text-slate-700">{line}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-xl border border-blue-100 bg-white p-4 text-sm leading-relaxed text-blue-900">
              <strong>What you do pay:</strong> the ad spend on Meta and
              Google, billed directly by them — never through us. And our
              commission, only when bookings happen.
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <BookCallButton source="for-movers-plan">
            Book a strategy call
          </BookCallButton>
          <Link
            href="/how-it-works"
            className="inline-flex items-center justify-center text-base font-semibold text-blue-700 hover:text-blue-800"
          >
            See how it works →
          </Link>
        </div>
      </Section>

      <Section
        id="faq"
        eyebrow="FAQ"
        title="Common questions about the model"
        background="white"
      >
        <FAQAccordion items={faqItems} />
      </Section>

      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-700 to-blue-800">
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-24 hidden h-96 w-96 rounded-full bg-blue-500/20 blur-3xl lg:block"
        />
        <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              One call. One plan. Paid only on booked moves.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-blue-100 sm:text-lg">
              30-minute strategy call. We&apos;ll cover your service area,
              your current funnel, and the commission structure for your
              market.
            </p>
            <div className="mt-8 flex justify-center">
              <BookCallButton source="for-movers-footer" fullWidth>
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
