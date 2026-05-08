import type { Metadata } from 'next';
import BookCallButton from './BookCallButton';
import FAQAccordion, { FAQItem } from './FAQAccordion';

export const metadata: Metadata = {
  title: 'Moving Partner — Free Moving Website + Ad Management, Pay Only on Booked Jobs',
  description:
    'We build the website and run the ads for U.S. moving companies. No retainers, no hourly fees. We only get paid when you get booked jobs.',
};

const steps = [
  {
    label: 'Step 1',
    title: 'We design your moving funnel',
    body: 'Custom website or landing page tailored to your moving company, your services, and your service area — wired with the tracking we need to run paid traffic.',
  },
  {
    label: 'Step 2',
    title: 'We run and optimize your ads',
    body: 'You pay Meta and Google directly for the ad spend. We handle campaigns, creatives, audiences, and ongoing optimization so the funnel keeps producing leads.',
  },
  {
    label: 'Step 3',
    title: 'You get booked jobs — we earn a commission',
    body: 'When a customer books a move and pays an upfront deposit, that deposit (or a portion of it) is our commission. You keep the rest of the profit from the job.',
  },
];

const websiteIncludes = [
  'Custom moving website or high-converting landing page tailored to your services and city.',
  'Mobile-first design, fast loading, and clear calls to action — call, quote, book.',
  'Lead capture forms and direct-to-call flows wired to your phone and inbox.',
  'Conversion tracking installed and tested before we spend a dollar on ads.',
];

const adsIncludes = [
  'Meta Ads (and optionally Google Ads) campaign setup and daily management.',
  'Creative production and ongoing creative testing for your market.',
  'Audience and bidding optimization based on booked-job data, not just clicks.',
  'Simple weekly reporting on leads, qualified leads, and booked jobs.',
];

const fitFor = [
  'Local moving companies in the U.S. — local moves or long-distance.',
  'Owners (or ops leads) who answer the phone fast and follow up the same day.',
  'Teams that want more booked jobs, not just traffic or vanity metrics.',
  'Companies willing to fund their own ad spend and share upside on booked moves.',
];

const notFitFor = [
  'Movers looking for a "set and forget" lead gen vendor.',
  'Companies unwilling to pay for their own ad spend on Meta and Google.',
  'Operators who can\'t respond to leads within minutes during business hours.',
];

const caseStudies = [
  {
    company: 'Local Mover, Florida',
    headline: '+24 booked jobs / month',
    body: 'Replaced an outdated site, launched a focused Meta funnel, and tightened the lead-to-booking flow. Bookings became the metric — not clicks.',
  },
  {
    company: 'Long-Distance Mover, Texas',
    headline: '3.4× lead-to-booking rate',
    body: 'Rebuilt the quote flow around fast call-back + same-day deposit. Same ad spend, materially more revenue per lead.',
  },
  {
    company: 'Two-Truck Operator, Georgia',
    headline: 'Profitable in week 2',
    body: 'Started from zero website and zero ads. New landing + Meta campaign hit positive ROAS on week two. Owner kept answering the phone.',
  },
];

const faqItems: FAQItem[] = [
  {
    question: 'Do I really get the website and ad management for free?',
    answer:
      'Yes. There is no retainer, no setup fee, and no hourly billing. We design the site, build the funnel, and run the campaigns on our side. The way we get paid is a commission on booked jobs — which only happens once you are actually getting moves on the calendar.',
  },
  {
    question: 'Who pays for the ad spend?',
    answer:
      'You do, directly to Meta and Google. The ad accounts are in your name, the budget is yours, and we never touch the card. We manage the campaigns inside your accounts so you keep full ownership of the data and the ad history.',
  },
  {
    question: 'How exactly do you get paid?',
    answer:
      'When a customer books a move and pays an upfront deposit, that deposit (or a portion of it) is our commission. You keep the rest of the profit on the job. We walk through the exact deposit and commission structure 1:1 on the strategy call so we can align with your margins and your market.',
  },
  {
    question: 'Are there long contracts? Can I stop anytime?',
    answer:
      'No long lock-ins. The partnership is meant to keep working because it produces booked jobs, not because you are stuck. We will cover the exact terms on the call so there are no surprises on either side.',
  },
  {
    question: 'Do you work with more than one moving company per city?',
    answer:
      'Exclusivity by city or service area is something we discuss case by case on the strategy call. In some markets we keep it to one partner, in others it depends on service mix. We will be straight with you about the situation in your area before you commit to anything.',
  },
  {
    question: 'How fast can we go live?',
    answer:
      'Most movers we onboard go from kickoff to live website + active campaigns in roughly 1 to 2 weeks, assuming we have the basics — service list, service area, phone, and assets. The strategy call is where we lock the timeline.',
  },
  {
    question: 'What do you need from me to make this work?',
    answer:
      'Three things. One: you fund the ad spend on Meta and Google. Two: you answer the phone fast and follow up on leads the same day. Three: you tell us when a job actually books so we can optimize for revenue, not for vanity metrics.',
  },
];

export default function MovingCommissionPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="/" className="flex items-center gap-2 font-bold tracking-tight text-slate-900">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
              M
            </span>
            <span className="text-lg">Moving Partner</span>
          </a>
          <a
            href="#how-it-works"
            className="text-sm font-medium text-slate-600 hover:text-slate-900"
          >
            How it works
          </a>
        </div>
      </header>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Commission-only partnership
              </span>
              <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Free moving website &amp; ad management.{' '}
                <span className="text-blue-700">
                  We only get paid when you get booked.
                </span>
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                We design your moving website, build the funnel, and run your
                Meta and Google ads. You pay the ad spend directly. We earn only
                when a customer books a move and pays a deposit. No retainers.
                No hourly fees. No percentage of ad spend.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  'Done-for-you moving website built to convert.',
                  'Meta &amp; Google ads managed for you, end to end.',
                  'You pay the ad spend. We earn only on booked jobs.',
                  'No retainers. No hourly fees. Commission-only partnership.',
                ].map((line, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckIcon />
                    <span
                      className="text-base text-slate-700"
                      dangerouslySetInnerHTML={{ __html: line }}
                    />
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <BookCallButton source="hero">
                  Book a strategy call
                </BookCallButton>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center text-base font-semibold text-blue-700 hover:text-blue-800"
                >
                  See how it works →
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                What you actually pay for
              </p>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <Stat label="Website build" value="$0" />
                <Stat label="Ad management" value="$0" />
                <Stat label="Our cut" value="On booked jobs only" small />
              </div>
              <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50/60 p-4 text-sm text-blue-900">
                <strong>What you do pay:</strong> the ad spend on Meta and
                Google, billed directly by them — never through us.
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section id="how-it-works" eyebrow="The model" title="How our commission-only model works">
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  {i + 1}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {step.label}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-slate-600">{step.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 rounded-xl border border-slate-200 bg-white p-5 text-sm leading-relaxed text-slate-600 sm:text-base">
          The exact commission structure and deposit flow are explained 1:1 on
          your strategy call so we can align with your margins, your service
          area, and the way you already run jobs.
        </p>
      </Section>

      <Section
        eyebrow="What you get"
        title="Everything included — without paying agency fees"
        background="white"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Website &amp; funnel">
            <BulletList items={websiteIncludes} />
          </Card>
          <Card title="Ads &amp; optimization">
            <BulletList items={adsIncludes} />
          </Card>
        </div>
        <div className="mt-8 rounded-2xl bg-emerald-50 p-5 text-emerald-900 sm:p-6">
          <p className="text-base font-semibold sm:text-lg">
            All of this is included in our commission-only partnership.
          </p>
          <p className="mt-1 text-sm sm:text-base">
            You don&apos;t pay us a monthly retainer for any of it. Our upside
            is your upside: more booked jobs.
          </p>
        </div>
      </Section>

      <Section
        eyebrow="The fit"
        title="Who this commission-only offer is for"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="A good fit if…" tone="positive">
            <BulletList items={fitFor} />
          </Card>
          <Card title="Probably not a fit if…" tone="negative">
            <BulletList items={notFitFor} muted />
          </Card>
        </div>
      </Section>

      <Section
        eyebrow="Proof"
        title="Built by operators who actually run moving campaigns"
        background="white"
      >
        <p className="max-w-3xl text-base text-slate-600 sm:text-lg">
          We don&apos;t do generic agency work. We run paid traffic for moving
          companies — from local two-truck operators to long-distance teams —
          and we tie our pay to booked jobs, not impressions.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {caseStudies.map((cs, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {cs.company}
              </p>
              <p className="mt-2 text-2xl font-extrabold text-blue-700">
                {cs.headline}
              </p>
              <p className="mt-3 text-sm text-slate-600">{cs.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Trusted by moving companies across the U.S.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="flex h-14 items-center justify-center rounded-lg bg-white text-sm font-semibold text-slate-400 ring-1 ring-slate-200"
              >
                Logo
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Common questions about the commission model">
        <FAQAccordion items={faqItems} />
      </Section>

      <section className="bg-blue-700">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Ready to get a free website, free ad management, and pay only on
              booked jobs?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-blue-100 sm:text-lg">
              Book a 30-minute strategy call. We&apos;ll look at your service
              area, your current funnel, and walk you through the deposit and
              commission structure 1:1.
            </p>
            <div className="mt-8 flex justify-center">
              <BookCallButton source="footer-cta" fullWidth>
                Book a strategy call
              </BookCallButton>
            </div>
            <p className="mt-4 text-sm text-blue-200">
              No retainer. No hourly fees. We get paid when you get booked.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-slate-500 sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} Moving Partner. All rights reserved.</p>
          <a
            href="https://movingpartner.net"
            className="font-medium text-slate-600 hover:text-slate-900"
          >
            movingpartner.net
          </a>
        </div>
      </footer>
    </main>
  );
}

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  background?: 'slate' | 'white';
  children: React.ReactNode;
}

function Section({ id, eyebrow, title, background = 'slate', children }: SectionProps) {
  const bg = background === 'white' ? 'bg-white' : 'bg-slate-50';
  return (
    <section id={id} className={`${bg} border-t border-slate-200`}>
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
            {eyebrow}
          </p>
        )}
        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
          {title}
        </h2>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

interface CardProps {
  title: string;
  tone?: 'neutral' | 'positive' | 'negative';
  children: React.ReactNode;
}

function Card({ title, tone = 'neutral', children }: CardProps) {
  const toneStyles =
    tone === 'positive'
      ? 'border-emerald-200 bg-white'
      : tone === 'negative'
      ? 'border-slate-200 bg-white'
      : 'border-slate-200 bg-white';
  return (
    <div className={`rounded-2xl border ${toneStyles} p-6 sm:p-7`}>
      <h3
        className="text-xl font-bold text-slate-900"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <div className="mt-4">{children}</div>
    </div>
  );
}

interface BulletListProps {
  items: string[];
  muted?: boolean;
}

function BulletList({ items, muted = false }: BulletListProps) {
  return (
    <ul className="space-y-3">
      {items.map((text, i) => (
        <li key={i} className="flex items-start gap-3">
          {muted ? <DashIcon /> : <CheckIcon />}
          <span className={`text-base ${muted ? 'text-slate-500' : 'text-slate-700'}`}>
            {text}
          </span>
        </li>
      ))}
    </ul>
  );
}

interface StatProps {
  label: string;
  value: string;
  small?: boolean;
}

function Stat({ label, value, small = false }: StatProps) {
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

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.704 5.29a1 1 0 010 1.42l-7.5 7.5a1 1 0 01-1.42 0l-3.5-3.5a1 1 0 111.42-1.42L8.5 12.08l6.79-6.79a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function DashIcon() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 shrink-0 text-slate-400"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M4 10a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
}
