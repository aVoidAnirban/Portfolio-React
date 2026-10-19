import { site } from '../data/site'

export default function Footer() {
  return (
    <footer className="border-t border-line-soft">
      <div className="wrap flex flex-wrap justify-between gap-3 py-7 font-mono text-[13px] text-muted">
        <span>
          &copy; {new Date().getFullYear()} {site.name}
        </span>
        <span>built with React, Vite and Tailwind</span>
      </div>
    </footer>
  )
}
