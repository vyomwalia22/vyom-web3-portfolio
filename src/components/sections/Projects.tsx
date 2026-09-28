import { ArrowUpRight } from 'lucide-react'
import { projects, socials } from '../../data/profile'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { ProjectCard } from './ProjectCard'

export function Projects() {
  return (
    <Section
      id="projects"
      label="projects"
      title="Things I’m building."
      lead="Proof of work, starting with my first personal build. New projects land here as they ship."
    >
      <div className="space-y-6">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={i * 80}>
            <ProjectCard project={p} />
          </Reveal>
        ))}

        <Reveal delay={120}>
          <a
            href={socials.x.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-3 rounded-2xl border border-dashed border-line-strong px-6 py-6 transition-colors hover:border-accent/60 sm:flex-row sm:items-center sm:justify-between sm:px-8"
          >
            <span>
              <span className="font-mono text-xs text-faint">~/projects/next</span>
              <span className="mt-1 block text-lg font-medium text-fg">Next build: in progress.</span>
              <span className="mt-1 block text-sm text-muted">I post what I'm working on as I go.</span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm text-accent">
              Follow along on X
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </span>
          </a>
        </Reveal>
      </div>
    </Section>
  )
}
