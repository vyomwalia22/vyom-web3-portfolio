import { site } from '../../data/profile'

/** Subtle "Add details" marker for fields you haven't filled in yet. Hidden when placeholders are off. */
export function Missing() {
  if (!site.showPlaceholders) return null
  return (
    <span className="inline-flex items-center rounded-md border border-dashed border-line-strong px-2 py-0.5 font-mono text-xs text-muted">
      {site.placeholderText}
    </span>
  )
}
