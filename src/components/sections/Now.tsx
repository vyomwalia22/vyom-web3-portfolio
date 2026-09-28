import { ArrowUpRight } from 'lucide-react'
import { buildLog, currently, socials, updates } from '../../data/profile'
import { XLogo } from '../icons/XLogo'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'

const pad = (n: number) => String(n + 1).padStart(2, '0')

function BuildLog() {
  return (
    <div className="h-full overflow-hidden rounded-2xl border border-line bg-surface">
      <div className="flex items-center justify-between border-b border-line px-5 py-3">
        <h3 className="font-mono text-xs text-muted">build.log</h3>
        <span className="font-mono text-[11px] text-faint">newest first</span>
      </div>
      <div className="space-y-6 px-5 py-6 font-mono text-sm">
        {buildLog.map((entry) => (
          <section key={entry.period} aria-label={entry.period}>
            <p className="text-xs tracking-[0.14em] text-accent uppercase">{entry.period}</p>
            <ul className="mt-2.5 space-y-1.5">
              {entry.items.map((item) => (
                <li key={item} className="flex gap-3 text-muted">
                  <span aria-hidden="true" className="text-faint">→</span>
                  <span className="text-fg/90">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  )
}

function XPanel() {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6">
      <div className="flex items-center gap-3">
        <span className="flex size-10 items-center justify-center rounded-full border border-line-strong bg-surface-2">
          <XLogo className="size-4" />
        </span>
        <div>
          <p className="text-sm font-medium">Latest updates</p>
          <p className="font-mono text-xs text-faint">{socials.x.handle}</p>
        </div>
      </div>

      {updates.length > 0 ? (
        <ul className="mt-6 flex-1 space-y-3">
          {updates.map((u) => (
            <li key={u.href}>
              <a
                href={u.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg border border-line px-4 py-3 transition-colors hover:border-line-strong"
              >
                <span className="font-mono text-[11px] text-faint">{u.date}</span>
                <span className="mt-1 block text-sm text-fg/90">{u.text}</span>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-6 flex-1 text-sm leading-relaxed text-muted">
          I share what I'm building, the events I'm at and what I'm learning on X. That's the most up-to-date place to follow along.
        </p>
      )}

      <a
        href={socials.x.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent"
      >
        Follow my Web3 journey on X
        <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
      </a>
    </div>
  )
}

export function Now() {
  return (
    <Section id="now" label="now" title="Currently building / exploring" lead="A live view of where my time goes right now.">
      <div className="mb-4 flex items-center gap-2.5 font-mono text-xs text-muted">
        <span className="ping relative inline-flex size-2 rounded-full bg-cyan" aria-hidden="true" />
        status: active
      </div>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {currently.map((c, i) => (
          <li key={c.title}>
            <Reveal delay={i * 70} className="h-full">
              <article className="h-full rounded-2xl border border-line bg-surface p-6 transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-accent/40">
                <p className="font-mono text-xs text-faint">{pad(i)}</p>
                <h3 className="mt-4 font-medium text-fg">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{c.body}</p>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <Reveal className="h-full">
          <BuildLog />
        </Reveal>
        <Reveal delay={100} className="h-full">
          <XPanel />
        </Reveal>
      </div>
    </Section>
  )
}
