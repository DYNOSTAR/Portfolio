import { Section } from '@/components/Section';
import { Tag } from '@/components/Tag';
import {
  aboutParagraphs,
  education,
  experiences,
  profile,
  projects,
  skillGroups
} from '@/data/portfolio';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-20 border-b border-slate-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="text-lg font-semibold text-navy" aria-label="Go to homepage section">
            {profile.name}
          </a>
          <nav aria-label="Primary navigation" className="hidden gap-5 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-navy">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="home" className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <section className="rounded-3xl bg-gradient-to-br from-navy to-[#14325E] px-6 py-10 text-white shadow-soft sm:px-10 sm:py-14">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">Open to Internship & Graduate Opportunities</p>
          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-5xl">{profile.headline}</h1>
          <p className="mt-4 max-w-2xl text-base text-blue-100 sm:text-lg">{profile.subheadline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-navy transition hover:bg-[#a4d8ff]">
              View Projects
            </a>
            <a href={`mailto:${profile.email}`} className="rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10">
              Contact Me
            </a>
          </div>
        </section>

        <Section id="about" title="About">
          <div className="space-y-4 text-base leading-relaxed text-slate-700">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Section>

        <Section id="education" title="Education">
          <article className="rounded-2xl border border-accent-light bg-[#F8FCFF] p-6">
            <h3 className="text-xl font-semibold text-navy">{education.degree}</h3>
            <p className="mt-1 text-slate-700">{education.institution}</p>
            <p className="mt-3 text-sm font-medium text-slate-600">
              {education.start} — {education.graduation}
            </p>
          </article>
        </Section>

        <Section id="skills" title="Skills">
          <div className="grid gap-4 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <article key={group.category} className="rounded-2xl border border-slate-100 p-5">
                <h3 className="text-lg font-semibold text-navy">{group.category}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Tag key={skill} label={skill} />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <div className="relative space-y-5 before:absolute before:left-4 before:top-2 before:h-[calc(100%-16px)] before:w-0.5 before:bg-accent-light">
            {experiences.map((experience) => (
              <article key={experience.company} className="relative rounded-2xl border border-slate-100 bg-white p-5 pl-10">
                <span className="absolute left-2 top-6 h-4 w-4 rounded-full border-4 border-white bg-accent shadow"></span>
                <p className="text-sm font-medium text-slate-500">{experience.duration}</p>
                <h3 className="mt-1 text-lg font-semibold text-navy">{experience.role}</h3>
                <p className="text-slate-700">{experience.company}</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700">
                  {experience.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="rounded-2xl border border-slate-100 p-5 transition hover:-translate-y-0.5 hover:shadow-soft">
                <h3 className="text-lg font-semibold text-navy">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Tag key={`${project.title}-${tech}`} label={tech} />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <div className="grid gap-3 text-slate-700 sm:grid-cols-2">
            <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className="rounded-xl border border-slate-100 p-4 transition hover:border-accent-light hover:bg-[#F8FCFF]" aria-label="Call Muhoro Ndirangu">
              <p className="text-sm text-slate-500">Phone</p>
              <p className="font-medium text-navy">{profile.phone}</p>
            </a>
            <a href={`mailto:${profile.email}`} className="rounded-xl border border-slate-100 p-4 transition hover:border-accent-light hover:bg-[#F8FCFF]" aria-label="Email Muhoro Ndirangu">
              <p className="text-sm text-slate-500">Email</p>
              <p className="font-medium text-navy break-all">{profile.email}</p>
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="rounded-xl border border-slate-100 p-4 transition hover:border-accent-light hover:bg-[#F8FCFF]" aria-label="Visit GitHub profile">
              <p className="text-sm text-slate-500">GitHub</p>
              <p className="font-medium text-navy break-all">github.com/DYNOSTAR</p>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="rounded-xl border border-slate-100 p-4 transition hover:border-accent-light hover:bg-[#F8FCFF]" aria-label="Visit LinkedIn profile">
              <p className="text-sm text-slate-500">LinkedIn</p>
              <p className="font-medium text-navy break-all">muhoro-ndirangu-378031270</p>
            </a>
          </div>
        </Section>
      </main>
    </div>
  );
}
