'use client';

import { MouseEvent, ReactNode } from 'react';

type Variant = 'primary' | 'secondary';

interface BookCallButtonProps {
  children: ReactNode;
  variant?: Variant;
  fullWidth?: boolean;
  className?: string;
  source?: string;
}

export default function BookCallButton({
  children,
  variant = 'primary',
  fullWidth = false,
  className = '',
  source = 'unknown',
}: BookCallButtonProps) {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // TODO: integrate with Calendly / booking form
    console.log('[moving-commission] book a strategy call clicked', { source });
  };

  const base =
    'inline-flex items-center justify-center rounded-xl font-semibold transition-colors duration-150 focus:outline-none focus-visible:ring-4';
  const size = 'px-6 py-4 text-base sm:text-lg';
  const width = fullWidth ? 'w-full' : 'w-full sm:w-auto';

  const styles =
    variant === 'primary'
      ? 'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-200 shadow-sm'
      : 'bg-white text-blue-700 border border-blue-200 hover:bg-blue-50 focus-visible:ring-blue-100';

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${base} ${size} ${width} ${styles} ${className}`}
    >
      {children}
    </button>
  );
}
