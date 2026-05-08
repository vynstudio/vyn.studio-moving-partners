'use client';

import { ReactNode } from 'react';
import { CAL_LINK, CAL_NAMESPACE } from './cal-config';

type Variant = 'primary' | 'secondary';
type Size = 'default' | 'compact';

interface BookCallButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  className?: string;
  source?: string;
}

export default function BookCallButton({
  children,
  variant = 'primary',
  size = 'default',
  fullWidth = false,
  className = '',
  source,
}: BookCallButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-xl font-semibold transition-colors duration-150 focus:outline-none focus-visible:ring-4';
  const sizeClasses =
    size === 'compact'
      ? 'px-4 py-2 text-sm sm:text-sm'
      : 'px-6 py-4 text-base sm:text-lg';
  const width =
    size === 'compact'
      ? 'w-auto'
      : fullWidth
      ? 'w-full'
      : 'w-full sm:w-auto';

  const styles =
    variant === 'primary'
      ? 'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-200 shadow-sm'
      : 'bg-white text-blue-700 border border-blue-200 hover:bg-blue-50 focus-visible:ring-blue-100';

  return (
    <button
      type="button"
      data-cal-namespace={CAL_NAMESPACE}
      data-cal-link={CAL_LINK}
      data-cal-config='{"layout":"month_view"}'
      data-cta-source={source}
      className={`${base} ${sizeClasses} ${width} ${styles} ${className}`}
    >
      {children}
    </button>
  );
}
