import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type SectionProps = {
  id: string
  /** Short mono label above the title, e.g. "journey" */
  label: string
  title: string
  lead?: string
  children: ReactNode
  className?: string
}

export function Section({ id, label, title, lead, children, className = '' }: SectionProps) {
  const headingId = `${id}-title`
  return (
    <section id={id} aria-labelledby={headingId} className={`py-20 md:py-28 ${className}`}>
      <Container>
        <Reveal className="mb-10 max-w-2xl md:mb-14">
          <p className="mb-4 font-mono text-xs tracking-[0.14em] text-accent uppercase">// {label}</p>
          <h2 id={headingId} className="text-3xl leading-tight font-semibold tracking-tight md:text-5xl">
            {title}
          </h2>
          {lead && <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">{lead}</p>}
        </Reveal>
        {children}
      </Container>
    </section>
  )
}

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>
}
