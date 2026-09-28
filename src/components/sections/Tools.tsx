import { site, tools } from '../../data/profile'
import { Reveal } from '../ui/Reveal'
import { Missing } from '../ui/Placeholder'
import { Section } from '../ui/Section'

export function Tools() {
  const visible = site.showPlaceholders ? tools : tools.filter((c) => c.items.length > 0)
  if (!visible.length) return null

  return (
    <Section
      id="tools"
      label="stack"
      title="Tools I’m exploring"
      lead="What I'm learning and building with right now. A working list, not a claim of expertise."
      className="pt-0 md:pt-0"
    >
      <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {visible.map((cat, i) => (
          <Reveal key={cat.name} delay={i * 70} className="bg-surface p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-fg">{cat.name}</h3>
              <span className="font-mono text-[11px] text-faint uppercase">exploring</span>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2">
              {cat.items.length ? (
                cat.items.map((t) => (
                  <li key={t} className="rounded-md border border-line-strong bg-surface-2 px-2.5 py-1 font-mono text-xs text-muted">
                    {t}
                  </li>
                ))
              ) : (
                <li>
                  <Missing />
                </li>
              )}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
