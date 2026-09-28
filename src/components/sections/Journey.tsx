import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { journey, type JourneyStep } from '../../data/profile'
import { useInView } from '../../hooks/useInView'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'

const pad = (n: number) => String(n + 1).padStart(2, '0')

function StepTitle({ step }: { step: JourneyStep }) {
  return (
    <>
      {step.title}
      {step.org && <span className="text-muted"> — {step.org}</span>}
    </>
  )
}

function StepDetails({ step }: { step: JourneyStep }) {
  return (
    <ul className="space-y-2.5">
      {step.details.map((line) => (
        <li key={line} className="flex gap-3 text-sm leading-relaxed text-muted md:text-base">
          <span aria-hidden="true" className="mt-[0.6em] size-1 shrink-0 rounded-full bg-accent" />
          {line}
        </li>
      ))}
    </ul>
  )
}

export function Journey() {
  const [active, setActive] = useState(0)
  const { ref: railRef, inView } = useInView<HTMLOListElement>('0px 0px -20% 0px')
  const current = journey[active]

  return (
    <Section
      id="journey"
      label="journey"
      title="How I got here."
      lead="Five steps from growth work to building. Select a step to see what it involved."
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <ol ref={railRef} className="relative">
          {/* Rail: fills top-to-bottom when the timeline enters view */}
          <span aria-hidden="true" className="absolute top-3 bottom-3 left-[19px] w-px bg-line" />
          <span
            aria-hidden="true"
            className="absolute top-3 left-[19px] w-px origin-top bg-gradient-to-b from-accent to-cyan transition-transform duration-[1600ms] ease-out"
            style={{ height: 'calc(100% - 24px)', transform: `scaleY(${inView ? 1 : 0})` }}
          />
          {journey.map((step, i) => {
            const isActive = i === active
            return (
              <li key={step.id} className="relative">
                <Reveal delay={i * 90}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    onMouseEnter={() => window.matchMedia('(hover: hover) and (min-width: 1024px)').matches && setActive(i)}
                    aria-expanded={isActive}
                    aria-controls={`journey-panel-${step.id}`}
                    className={`group flex w-full items-start gap-4 rounded-xl py-3 pr-3 text-left transition-colors ${
                      isActive ? 'bg-surface-2/70' : 'hover:bg-surface/60'
                    }`}
                  >
                    <span
                      className={`relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border font-mono text-xs transition-colors ${
                        isActive ? 'border-accent bg-accent text-[#0b0a14]' : 'border-line-strong bg-bg text-muted group-hover:border-accent/60'
                      }`}
                    >
                      {pad(i)}
                    </span>
                    <span className="min-w-0 flex-1 pt-0.5">
                      <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="font-mono text-[11px] tracking-[0.12em] text-accent uppercase">{step.tag}</span>
                        {step.period && <span className="font-mono text-[11px] text-faint">{step.period}</span>}
                      </span>
                      <span className="mt-1 block text-base font-medium text-fg md:text-lg">
                        <StepTitle step={step} />
                      </span>
                      <span className="mt-1 block text-sm text-muted">{step.summary}</span>
                    </span>
                    <ChevronDown
                      aria-hidden="true"
                      className={`mt-3 size-4 shrink-0 text-faint transition-transform lg:hidden ${isActive ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {/* Inline details on small screens */}
                  <div
                    id={`journey-panel-${step.id}`}
                    className={`grid transition-[grid-template-rows] duration-300 lg:hidden ${isActive ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                  >
                    <div className="overflow-hidden">
                      <div className="pt-2 pb-4 pl-14">
                        <StepDetails step={step} />
                      </div>
                    </div>
                  </div>
                </Reveal>
              </li>
            )
          })}
        </ol>

        {/* Detail panel on large screens */}
        <div className="hidden lg:block">
          <div className="sticky top-28" aria-live="polite">
            <div key={current.id} className="rise rounded-2xl border border-line-strong bg-surface p-8">
              <p className="font-mono text-xs text-faint">
                step {pad(active)} / {pad(journey.length - 1)}
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                <StepTitle step={current} />
              </h3>
              <p className="mt-3 text-lg leading-relaxed text-fg/90">{current.summary}</p>
              <div className="my-6 h-px bg-line" />
              <StepDetails step={current} />
              <div className="mt-8 flex gap-1.5" aria-hidden="true">
                {journey.map((s, i) => (
                  <span key={s.id} className={`h-1 flex-1 rounded-full transition-colors ${i <= active ? 'bg-accent' : 'bg-line'}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
