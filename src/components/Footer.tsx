import { profile, site, socials } from '../data/profile'
import { Container } from './ui/Section'

export function Footer() {
  const links = [
    { label: 'X', href: socials.x.href },
    ...(socials.github ? [{ label: 'GitHub', href: socials.github }] : []),
  ]
  return (
    <footer className="border-t border-line py-10">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-medium">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">{profile.eyebrow.join(' • ')}</p>
          <p className="mt-4 font-mono text-xs text-faint">Built while exploring Web3.</p>
        </div>
        <div className="flex flex-col gap-3 sm:items-end">
          <ul className="flex gap-5 text-sm">
            {links.map((l) => (
              <li key={l.label}>
                <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-muted transition-colors hover:text-fg">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-xs text-faint">
            © {site.year} {profile.name}
          </p>
        </div>
      </Container>
    </footer>
  )
}
