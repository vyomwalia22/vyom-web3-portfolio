import type { LucideIcon } from 'lucide-react'
import { Sparkles, Trophy, Timer, Users } from 'lucide-react'
import { ecosystem, type EcosystemItem } from '../../data/profile'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { StellarFeature } from './StellarFeature'

const icons: Record<EcosystemItem['id'], LucideIcon> = {
  stellar: Sparkles,
  ethglobal: Trophy,
  hackathons: Timer,
  communities: Users,
}

export function Ecosystem() {
  return (
    <Section
      id="ecosystem"
      label="ecosystem"
      title="Inside the ecosystem"
      lead="Code is one part of it. The rest is showing up: events, hackathons, communities and the builders in them."
    >
      <StellarFeature />

      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {ecosystem.map((item, i) => {
          const Icon = icons[item.id]
          return (
            <li key={item.id}>
              <Reveal delay={i * 70} className="h-full">
                <article className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-line-strong">
                  <span className="flex size-9 items-center justify-center rounded-lg border border-line-strong bg-surface-2 text-accent">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-medium text-fg">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{item.body}</p>
                  <p className="mt-5 border-t border-line pt-4 font-mono text-[11px] leading-relaxed text-faint">{item.involvement}</p>
                </article>
              </Reveal>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
