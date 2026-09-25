export function Mark({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className={className} fill="currentColor">
      <rect x="1" y="5" width="30" height="2.4" />
      <rect x="1" y="14.8" width="19" height="2.4" />
      <rect x="12" y="24.6" width="19" height="2.4" />
    </svg>
  );
}
