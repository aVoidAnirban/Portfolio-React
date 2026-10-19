import { Fragment } from 'react'
import { ArrowRight } from 'lucide-react'
import { site } from '../data/site'
import Button from './Button'

function CodeWindow() {
  return (
    <div className="min-w-0 flex-[1_1_400px] overflow-hidden rounded-xl border border-line bg-panel">
      <div className="flex items-center gap-2 border-b border-line px-4 py-3.5">
        <span className="size-3 rounded-full bg-line" />
        <span className="size-3 rounded-full bg-line" />
        <span className="size-3 rounded-full bg-line" />
        <span className="ml-3 font-mono text-[13px] text-muted">portfolio.js</span>
      </div>

      <pre className="overflow-x-auto p-6 font-mono text-sm leading-[1.85]">
        <code>
          <span className="text-muted">{'// who am i'}</span>
          {'\n'}
          <span className="text-code-kw">const</span> dev = {'{'}
          {'\n'}
          {'  '}name: <span className="text-code-str">"{site.name}"</span>,{'\n'}
          {'  '}role: <span className="text-code-str">"{site.role}"</span>,{'\n'}
          {'  '}stack: [
          {site.stack.map((item, i) => (
            <Fragment key={item}>
              {i > 0 && ', '}
              <span className="text-code-str">"{item}"</span>
            </Fragment>
          ))}
          ],{'\n'}
          {'  '}learning: <span className="text-code-str">"{site.learning}"</span>,{'\n'}
          {'  '}openToWork: <span className="text-code-bool">{String(site.openToWork)}</span>,{'\n'}
          {'}'};{'\n'}
          {'\n'}
          dev.<span className="text-code-fn">build</span>(); <span className="text-muted">{'// ship it'}</span>
        </code>
      </pre>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="pt-10 pb-16 sm:pt-18 sm:pb-24">
      <div className="wrap flex flex-wrap items-center gap-10 sm:gap-14">
        <div className="flex min-w-0 flex-[1_1_460px] flex-col gap-7">
          <p className="font-mono text-sm text-accent">{'// student developer · web · backend · hardware'}</p>

          <h1 className="text-[clamp(2.5rem,6vw,4.75rem)] leading-[1.04] font-extrabold tracking-tight">
            I build things that run on the web and on the desk.
          </h1>

          <p className="max-w-135 text-lg text-muted">{site.tagline}</p>

          <div className="flex flex-wrap gap-3">
            <Button href="#work">
              View my work
              <ArrowRight size={18} strokeWidth={2.2} aria-hidden="true" />
            </Button>
            <Button href="#contact" variant="outline">
              Get in touch
            </Button>
          </div>
        </div>

        <CodeWindow />
      </div>
    </section>
  )
}
