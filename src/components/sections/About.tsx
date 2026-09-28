import { path, profile } from '../../data/profile'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'

export function About() {
  return (
    <Section id="about" label="about" title="A developer journey in progress.">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <div className="space-y-5">
          {profile.about.map((para, i) => (
            <Reveal key={i} delay={i * 80}>
              <p className={`max-w-[62ch] leading-relaxed ${i === 0 ? 'text-lg text-fg md:text-xl' : 'text-muted md:text-lg'}`}>
                {para}
              </p>
            </Reveal>
          ))}

          <Reveal delay={260}>
            <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-4">
              {profile.facts.map((f) => (
                <div key={f.label} className="bg-surface px-4 py-4">
                  <dt className="font-mono text-[11px] tracking-[0.12em] text-faint uppercase">{f.label}</dt>
                  <dd className="mt-1.5 text-sm text-fg">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="rounded-2xl border border-line bg-surface/60 p-5 sm:p-6">
            <p className="mb-5 font-mono text-xs tracking-[0.14em] text-faint uppercase">the path so far</p>
            <ol className="relative">
              {path.map((step, i) => {
                const last = i === path.length - 1
                return (
                  <li key={step} className="relative flex gap-4 pb-4 last:pb-0">
                    {!last && <span aria-hidden="true" className="absolute top-5 left-[7px] h-[calc(100%-12px)] w-px bg-line-strong" />}
                    <span
                      aria-hidden="true"
                      className={`relative mt-1.5 size-[15px] shrink-0 rounded-full border ${
                        last ? 'ping border-accent bg-accent' : 'border-line-strong bg-surface-2'
                      }`}
                    />
                    <span className={`text-sm leading-6 ${last ? 'font-medium text-accent' : 'text-muted'}`}>{step}</span>
                  </li>
                )
              })}
            </ol>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
