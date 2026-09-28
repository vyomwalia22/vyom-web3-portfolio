export function Logo({ className = 'size-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <rect x="1" y="1" width="30" height="30" rx="8" fill="#0a0b0f" stroke="#2c3242" strokeWidth="2" />
      <path d="M9 10.5 16 22l7-11.5" fill="none" stroke="#8f7bff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="23" cy="10.5" r="2" fill="#54d2e6" />
    </svg>
  )
}
