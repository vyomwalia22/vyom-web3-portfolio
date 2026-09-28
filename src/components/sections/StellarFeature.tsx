import type { CSSProperties } from 'react'
import { stellar } from '../../data/profile'
import { Reveal } from '../ui/Reveal'

/** Abstract orbit motif. Deliberately not the Stellar logo, so the page never reads as an official Stellar property. */
function Orbits() {
  const rings = [
    { r: 150, dur: '60s', dot: 0 },
    { r: 110, dur: '44s', dot: 120 },
    { r: 70, dur: '30s', dot: 240 },
  ]
  return (
    <svg viewBox="-180 -180 360 360" aria-hidden="true" className="h-full w-full">
      {rings.map((ring) => (
        <g key={ring.r} className="orbit" style={{ '--dur': ring.dur } as CSSProperties}>
          <circle r={ring.r} fill="none" stroke="rgb(84 210 230 / .38)" strokeDasharray="2 6" />
          <circle
            cx={ring.r * Math.cos((ring.dot * Math.PI) / 180)}
            cy={ring.r * Math.sin((ring.dot * Math.PI) / 180)}
            r="4"
            fill="#54d2e6"
          />
        </g>
      ))}
      <circle r="22" fill="rgb(84 210 230 / .10)" stroke="rgb(84 210 230 / .5)" />
      <circle r="5" fill="#eceef3" />
    </svg>
  )
}

export function StellarFeature() {
  return (
    <Reveal>
      <article
        aria-labelledby="stellar-title"
        className="relative overflow-hidden rounded-3xl border border-cyan/25 bg-surface"
        style={{ backgroundImage: 'radial-gradient(80% 90% at 100% 0%, rgb(84 210 230 / .10), transparent 60%)' }}
      >
        <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="font-mono text-xs tracking-[0.14em] text-cyan uppercase">Stellar · my ecosystem journey</p>
            <h3 id="stellar-title" className="mt-4 text-2xl leading-tight font-semibold tracking-tight sm:text-4xl">
              {stellar.heading}
            </h3>
            <p className="mt-4 max-w-[52ch] leading-relaxed text-muted">{stellar.body}</p>

            <ol className="mt-8 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
              {stellar.milestones.map((m) => (
                <li key={m.title} className="bg-bg/80 px-4 py-4">
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="text-sm font-medium text-fg">{m.title}</span>
                    <span className="shrink-0 font-mono text-[11px] text-cyan">{m.meta}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted">{m.note}</p>
                </li>
              ))}
            </ol>
            <p className="mt-5 text-xs text-faint">{stellar.disclaimer}</p>
          </div>

          <div className="mx-auto aspect-square w-full max-w-[220px] sm:max-w-[320px]">
            <Orbits />
          </div>
        </div>
      </article>
    </Reveal>
  )
}
