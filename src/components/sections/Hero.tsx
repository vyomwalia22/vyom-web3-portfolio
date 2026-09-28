import type { CSSProperties } from 'react'
import { ArrowDown, ArrowRight, MapPin } from 'lucide-react'
import { profile, socials } from '../../data/profile'
import { ButtonLink } from '../ui/Button'
import { Container } from '../ui/Section'
import { XLogo } from '../icons/XLogo'
import { HeroTerminal } from './HeroTerminal'

const d = (ms: number) => ({ '--delay': `${ms}ms` }) as CSSProperties

export function Hero() {
  const leadWords = profile.headline.lead.split(' ')
  const emphasisWords = profile.headline.emphasis.split(' ')

  return (
    <section id="home" aria-labelledby="home-title" className="relative pt-28 pb-16 md:pt-40 md:pb-28">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <p className="rise mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs tracking-[0.16em] text-muted uppercase" style={d(0)}>
            {profile.eyebrow.map((item, i) => (
              <span key={item} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden="true" className="text-accent">•</span>}
                {item}
              </span>
            ))}
          </p>

          <h1 id="home-title" className="text-[2.6rem] leading-[1.04] font-semibold tracking-[-0.035em] sm:text-6xl lg:text-7xl">
            {leadWords.map((w, i) => (
              <span key={`l${i}`} className="rise inline-block" style={d(80 + i * 60)}>
                {w}&nbsp;
              </span>
            ))}
            <span className="text-accent">
              {emphasisWords.map((w, i) => (
                <span key={`e${i}`} className="rise inline-block" style={d(80 + (leadWords.length + i) * 60)}>
                  {w}
                  {i < emphasisWords.length - 1 && <>&nbsp;</>}
                </span>
              ))}
            </span>
          </h1>

          <p className="rise mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg" style={d(500)}>
            {profile.intro}
          </p>

          <div className="rise mt-8 flex flex-wrap items-center gap-3" style={d(620)}>
            <ButtonLink href="#projects">
              View Projects
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href={socials.x.href} external variant="secondary">
              <XLogo className="size-3.5" />
              Connect on X
            </ButtonLink>
            <ButtonLink href="#journey" variant="ghost">
              Explore my journey
              <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
            </ButtonLink>
          </div>

          <p className="rise mt-10 flex items-center gap-2 font-mono text-xs text-faint" style={d(740)}>
            <MapPin className="size-3.5" aria-hidden="true" />
            Based in {profile.location}
            <span aria-hidden="true">·</span>
            <span className="relative inline-flex size-1.5 rounded-full bg-cyan ping" aria-hidden="true" />
            <span className="text-muted">{profile.status}</span>
          </p>
        </div>

        <HeroTerminal />
      </Container>
    </section>
  )
}
