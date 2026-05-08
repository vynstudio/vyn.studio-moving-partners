export function CheckIcon({ className = 'text-emerald-600' }: { className?: string }) {
  return (
    <svg
      className={`mt-0.5 h-5 w-5 shrink-0 ${className}`}
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

export function DashIcon({ className = 'text-slate-400' }: { className?: string }) {
  return (
    <svg
      className={`mt-0.5 h-5 w-5 shrink-0 ${className}`}
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

export function BulletList({
  items,
  muted = false,
}: {
  items: string[];
  muted?: boolean;
}) {
  return (
    <ul className="space-y-3">
      {items.map((text, i) => (
        <li key={i} className="flex items-start gap-3">
          {muted ? <DashIcon /> : <CheckIcon />}
          <span
            className={`text-base ${muted ? 'text-slate-500' : 'text-slate-700'}`}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </li>
      ))}
    </ul>
  );
}
