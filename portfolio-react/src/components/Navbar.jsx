import { useEffect, useState } from 'react'
import { useActiveSection } from '../hooks/useActiveSection'
import Button from './Button'

const links = [
  { id: 'work', label: 'Work' },
  { id: 'stack', label: 'Stack' },
  { id: 'about', label: 'About' },
]

const sectionIds = [...links.map((l) => l.id), 'contact']

export default function Navbar() {
  const active = useActiveSection(sectionIds)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-bg/85 backdrop-blur transition-colors ${
        scrolled ? 'border-line-soft' : 'border-transparent'
      }`}
    >
      <div className="wrap flex flex-wrap items-center justify-between gap-x-4 gap-y-2 py-3">
        <a href="#top" className="inline-flex min-h-11 items-center font-mono text-lg font-bold">
          rek<span className="text-accent">.dev</span>
        </a>

        <nav aria-label="Main navigation">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-1 sm:gap-x-7">
            {links.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`inline-flex min-h-11 items-center text-[15px] transition-colors hover:text-ink ${
                    active === id ? 'text-accent' : 'text-muted'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <Button href="#contact" variant="outline" size="sm">
                Contact
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
