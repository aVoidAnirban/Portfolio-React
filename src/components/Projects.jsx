import { projects } from '../data/projects'
import Section, { SectionHead } from './Section'
import ProjectCard from './ProjectCard'
import Reveal from './Reveal'

export default function Projects() {
  return (
    <Section id="work">
      <SectionHead eyebrow="01 / work" title="Selected projects" />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,20rem),1fr))] gap-6">
        {projects.map((project, i) => (
          <Reveal key={`${project.title}-${i}`} delay={(i % 3) * 70} className="h-full">
            <ProjectCard project={project} index={i} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
