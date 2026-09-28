import type { ReactNode } from 'react'
import { ArrowUpRight, FolderGit2, Globe } from 'lucide-react'
import type { Project } from '../../data/profile'
import { isEmpty, shouldShow } from '../../lib/content'
import { ButtonLink, PendingButton } from '../ui/Button'
import { Missing } from '../ui/Placeholder'

function Row({ label, value, children }: { label: string; value: unknown; children: ReactNode }) {
  if (!shouldShow(value)) return null
  return (
    <div className="grid grid-cols-[6.5rem_1fr] items-baseline gap-4 border-t border-line py-3.5 sm:grid-cols-[8rem_1fr]">
      <dt className="font-mono text-[11px] tracking-[0.12em] text-faint uppercase">{label}</dt>
      <dd className="text-sm text-fg">{isEmpty(value) ? <Missing /> : children}</dd>
    </div>
  )
}

/** Generated cover used until a real screenshot is added. */
function Cover({ project }: { project: Project }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.imageAlt}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover"
      />
    )
  }
  return (
    <div className="relative flex h-full min-h-56 w-full flex-col justify-between overflow-hidden p-6" aria-hidden="true">
      <div className="bg-grid absolute inset-0 opacity-80 [mask-image:none]" />
      <div
        className="absolute -right-16 -bottom-20 size-72 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgb(143 123 255 / .35), transparent)' }}
      />
      <span className="relative font-mono text-xs text-faint">~/projects/{project.slug}</span>
      <div className="relative">
        <p className="font-mono text-xs text-accent">❯ run {project.slug}</p>
        <p className="mt-2 text-4xl font-semibold tracking-tight text-fg sm:text-5xl">{project.name}</p>
      </div>
    </div>
  )
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group grid overflow-hidden rounded-2xl border border-line bg-surface transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-line-strong lg:grid-cols-[0.95fr_1.05fr]">
      <div className="border-b border-line bg-surface-2 lg:border-r lg:border-b-0">
        <Cover project={project} />
      </div>

      <div className="p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-2">
          {project.event && (
            <span className="rounded-full border border-accent/40 bg-accent/10 px-2.5 py-1 font-mono text-[11px] tracking-wide text-accent-strong">
              {project.event}
            </span>
          )}
          <span className="rounded-full border border-line-strong px-2.5 py-1 font-mono text-[11px] text-muted">Personal project</span>
        </div>

        <h3 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">{project.name}</h3>
        <p className="mt-3 leading-relaxed text-muted">{project.description}</p>

        <dl className="mt-6">
          <Row label="Role" value={project.role}>
            {project.role}
          </Row>
          <Row label="Stack" value={project.stack}>
            <ul className="flex flex-wrap gap-1.5">
              {project.stack.map((t) => (
                <li key={t} className="rounded-md border border-line-strong px-2 py-0.5 font-mono text-xs text-muted">
                  {t}
                </li>
              ))}
            </ul>
          </Row>
          <Row label="Event" value={project.event}>
            {project.event}
          </Row>
          <Row label="Learned" value={project.learned}>
            <span className="leading-relaxed text-muted">{project.learned}</span>
          </Row>
        </dl>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.github ? (
            <ButtonLink href={project.github} external variant="secondary" ariaLabel={`${project.name} source code on GitHub`}>
              <FolderGit2 className="size-4" aria-hidden="true" /> GitHub
              <ArrowUpRight className="size-3.5 text-faint" aria-hidden="true" />
            </ButtonLink>
          ) : (
            <PendingButton>
              <FolderGit2 className="size-4" aria-hidden="true" /> GitHub · Coming soon
            </PendingButton>
          )}
          {project.demo ? (
            <ButtonLink href={project.demo} external variant="secondary" ariaLabel={`${project.name} live demo`}>
              <Globe className="size-4" aria-hidden="true" /> Live demo
              <ArrowUpRight className="size-3.5 text-faint" aria-hidden="true" />
            </ButtonLink>
          ) : (
            <PendingButton>
              <Globe className="size-4" aria-hidden="true" /> Demo · Coming soon
            </PendingButton>
          )}
        </div>
      </div>
    </article>
  )
}
