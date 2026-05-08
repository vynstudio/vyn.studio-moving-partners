import { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  background?: 'slate' | 'white';
  children: ReactNode;
}

export default function Section({
  id,
  eyebrow,
  title,
  background = 'slate',
  children,
}: SectionProps) {
  const bg = background === 'white' ? 'bg-white' : 'bg-slate-50';
  return (
    <section id={id} className={`${bg} border-t border-slate-200`}>
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
            {eyebrow}
          </p>
        )}
        {title && (
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {title}
          </h2>
        )}
        <div className={title || eyebrow ? 'mt-10' : ''}>{children}</div>
      </div>
    </section>
  );
}
