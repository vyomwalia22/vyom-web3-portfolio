import type { CSSProperties } from 'react'
import { loop, terminal, type TerminalLine } from '../../data/profile'

const stateMark: Record<TerminalLine['state'], { glyph: string; className: string; label: string }> = {
  done: { glyph: '✓', className: 'text-cyan', label: 'done' },
  active: { glyph: '●', className: 'text-accent', label: 'active' },
  pending: { glyph: '›', className: 'text-faint', label: 'next' },
}

const d = (ms: number) => ({ '--delay': `${ms}ms` }) as CSSProperties

/** The hero visual: the journey rendered as a build log, plus the learn → build → ship → connect loop. */
export function HeroTerminal() {
  const start = 700
  return (
    <figure className="rise relative" style={d(350)} aria-label="Vyom's journey shown as a terminal build log">
      <div
        aria-hidden="true"
        className="absolute -inset-px -z-10 rounded-2xl opacity-70 blur-2xl"
        style={{ background: 'radial-gradient(60% 60% at 70% 20%, rgb(143 123 255 / .22), transparent 70%)' }}
      />
      <div className="overflow-hidden rounded-2xl border border-line-strong bg-surface/90 shadow-[0_30px_80px_-30px_rgb(0_0_0/0.8)]">
        <div className="flex items-center gap-2 border-b border-line px-4 py-3">
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="ml-3 font-mono text-xs text-faint">~/vyom — build</span>
        </div>

        <div className="space-y-1.5 px-4 py-5 font-mono text-[13px] leading-relaxed sm:px-5 sm:text-sm">
          <p className="term-line" style={d(start)}>
            <span className="text-accent">❯</span> vyom.build()
          </p>
          <p className="term-line text-faint" style={d(start + 250)}>
            compiling journey…
          </p>
          <ul className="space-y-1.5 pt-1">
            {terminal.map((line, i) => {
              const mark = stateMark[line.state]
              return (
                <li key={line.key} className="term-line flex gap-3" style={d(start + 500 + i * 180)}>
                  <span className={`w-3 shrink-0 ${mark.className}`} aria-label={mark.label}>
                    {mark.glyph}
                  </span>
                  <span className="w-20 shrink-0 text-muted sm:w-24">{line.key}</span>
                  <span className={line.state === 'pending' ? 'text-faint' : 'text-fg'}>
                    {line.value}
                    {line.state === 'pending' && <span className="caret ml-0.5 text-accent">▍</span>}
                  </span>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="border-t border-line px-4 py-4 sm:px-5">
          <p className="mb-3 font-mono text-[11px] tracking-[0.14em] text-faint uppercase">loop</p>
          <ol className="flex flex-wrap items-center gap-2" aria-label="Learn, build, ship, connect, repeat">
            {loop.map((step, i) => (
              <li key={step} className="flex items-center gap-2">
                <span
                  className="loop-node rounded-md border border-line px-2.5 py-1 font-mono text-xs text-muted"
                  style={d(i * 1500)}
                >
                  {step.toUpperCase()}
                </span>
                <span aria-hidden="true" className="text-faint">
                  {i < loop.length - 1 ? '→' : '↺'}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </figure>
  )
}
