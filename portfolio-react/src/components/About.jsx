import { site } from '../data/site'
import { timeline } from '../data/timeline'
import Section, { SectionHead } from './Section'
import Reveal from './Reveal'

export default function About() {
  return (
    <Section id="about">
      <div className="flex flex-wrap gap-10 sm:gap-14">
        <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-6">
          <SectionHead eyebrow="03 / about" title="A bit about me" className="" />
          {site.about.map((paragraph) => (
            <p key={paragraph} className="text-[17px] text-muted">
              {paragraph}
            </p>
          ))}
        </div>

        <Reveal className="min-w-0 flex-[1_1_380px]">
          <div className="flex flex-col gap-5 rounded-xl border border-line bg-panel p-7">
            <p className="font-mono text-[13px] text-muted">$ git log --oneline</p>
            <ul className="flex flex-col gap-5">
              {timeline.map((item, i) => (
                <li key={i} className="flex items-baseline gap-4 font-mono text-sm">
                  <span className="text-accent">{item.year}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
