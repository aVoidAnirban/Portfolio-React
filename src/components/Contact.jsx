import { site } from '../data/site'
import Section from './Section'
import Button from './Button'

const socials = [
  { label: 'GitHub', href: site.github },
  { label: 'LinkedIn', href: site.linkedin },
]

export default function Contact() {
  return (
    <Section id="contact" alt>
      <div className="flex flex-col items-start gap-8">
        <p className="font-mono text-sm text-accent">04 / contact</p>

        <h2 className="max-w-205 text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.05] font-extrabold tracking-tight">
          {site.openToWork ? <>Have something to build? Let&rsquo;s talk.</> : <>Like what you see? Say hello.</>}
        </h2>

        <Button href={`mailto:${site.email}`} size="lg">
          {site.email}
        </Button>

        <ul className="flex flex-wrap gap-x-7 gap-y-1">
          {socials.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center text-[15px] font-bold text-muted transition-colors hover:text-ink"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
