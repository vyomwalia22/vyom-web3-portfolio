import { FolderGit2, Mail } from 'lucide-react'
import { socials } from '../../data/profile'
import { XLogo } from '../icons/XLogo'
import { ButtonLink } from '../ui/Button'
import { Container } from '../ui/Section'
import { Reveal } from '../ui/Reveal'

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-line-strong bg-surface px-6 py-14 sm:px-12 md:py-20">
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{ background: 'radial-gradient(70% 90% at 0% 100%, rgb(143 123 255 / .16), transparent 60%)' }}
            />
            <div className="relative max-w-2xl">
              <p className="font-mono text-xs tracking-[0.14em] text-accent uppercase">// contact</p>
              <h2 id="contact-title" className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-6xl">
                Let’s build something.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
                If you're building in Web3, working on an interesting protocol, organizing a hackathon, or just want to talk
                about building, reach out.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href={socials.x.href} external>
                  <XLogo className="size-3.5" /> Connect on X
                </ButtonLink>
                {socials.github && (
                  <ButtonLink href={socials.github} external variant="secondary">
                    <FolderGit2 className="size-4" aria-hidden="true" /> GitHub
                  </ButtonLink>
                )}
                {socials.email && (
                  <ButtonLink href={`mailto:${socials.email}`} variant="secondary">
                    <Mail className="size-4" aria-hidden="true" /> Email
                  </ButtonLink>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
