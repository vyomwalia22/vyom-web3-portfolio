import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

const base =
  'group inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium transition-[background-color,border-color,color,transform] duration-200 ease-out active:scale-[0.98] select-none'

const variants: Record<Variant, string> = {
  primary: 'h-11 px-5 bg-accent text-[#0b0a14] hover:bg-accent-strong',
  secondary: 'h-11 px-5 border border-line-strong bg-surface/60 text-fg hover:border-accent/60 hover:bg-surface-2',
  ghost: 'h-11 px-2 text-muted hover:text-fg',
}

type ButtonLinkProps = {
  href: string
  children: ReactNode
  variant?: Variant
  external?: boolean
  className?: string
  ariaLabel?: string
}

export function ButtonLink({ href, children, variant = 'primary', external, className = '', ariaLabel }: ButtonLinkProps) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={`${base} ${variants[variant]} ${className}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  )
}

/** Non-interactive stand-in for a link that doesn't exist yet. */
export function PendingButton({ children }: { children: ReactNode }) {
  return (
    <span
      className={`${base} ${variants.secondary} cursor-not-allowed border-dashed text-faint hover:border-line-strong hover:bg-surface/60`}
      aria-disabled="true"
    >
      {children}
    </span>
  )
}
