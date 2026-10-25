import NavBar from "@/components/NavBar";
import {
  Button,
  Container,
  ProjectCard,
  SectionHeading,
} from "@/components/ui";
import Link from "next/link";

// ─── Data ────────────────────────────────────────────────────────────────────

const PROJECTS = [
  {
    title: "JUMP",
    subtitle: "Revenue Intelligence Platform",
    role: "Software Developer",
    company: "Tech Sierra Pvt Ltd",
    period: "June 2025 – May 2026",
    framework: "Next.js",
    statusLabel: "Professional Project",
    description:
      "Contributed to a SaaS revenue intelligence platform delivering sales pipeline metrics and analytics dashboards for business teams.",
    contributions: [
      "Engineered data-driven dashboards and responsive analytics interfaces using Next.js and TypeScript.",
      "Integrated REST APIs with TanStack Query to manage server-side caching, pagination, and data synchronization.",
      "Implemented secure authentication and session management flows using Clerk.",
      "Collaborated within an agile team through sprint planning, task estimation, and peer code reviews.",
    ],
    technologies: [
      "Next.js",
      "React.js",
      "TypeScript",
      "TanStack Query",
      "Clerk",
      "Tailwind CSS",
      "REST APIs",
    ],
  },
  {
    title: "Hoshi HRMS",
    subtitle: "Human Resource Management System",
    role: "Frontend Developer",
    company: "Neural IT Pvt Ltd",
    period: "June 2026 – Present",
    framework: "React.js",
    statusLabel: "Professional Project",
    description:
      "Developing frontend modules for an enterprise human resource management system supporting internal personnel operations.",
    contributions: [
      "Built a reusable library of modular React components and custom hooks to standardize UI patterns.",
      "Optimized client-side rendering performance through memoization and code-splitting across heavy views.",
      "Integrated WebSocket connections to enable real-time notifications and live status updates.",
      "Delivered ongoing production support, defect triaging, and iterative UI enhancements.",
    ],
    technologies: [
      "React.js",
      "TypeScript",
      "Custom Hooks",
      "WebSockets",
      "Performance Optimization",
      "Node.js",
      "Tailwind CSS",
    ],
  },
] as const;

const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    skills: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST API Integration"],
  },
  {
    title: "State Management & Authentication",
    skills: ["TanStack Query", "Clerk Authentication"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "SQL", "MySQL", "PostgreSQL"],
  },
  {
    title: "Tools & Workflow",
    skills: ["Git", "GitHub", "Postman", "Docker", "CI/CD"],
  },
  {
    title: "Additional & Practices",
    skills: [
      "Python",
      "Java",
      "Code Reviews",
      "Performance Optimization",
      "Testing",
      "Debugging",
      "Sprint Planning",
    ],
  },
] as const;

const EXPERIENCES = [
  {
    role: "Frontend Developer",
    company: "Neural IT Pvt Ltd",
    period: "June 2026 – Present",
    project: "Hoshi HRMS — Human Resource Management System",
    framework: "React.js",
    isCurrent: true,
    responsibilities: [
      "Developed reusable UI components and custom hooks to standardize front-end patterns.",
      "Worked on runtime performance optimization and WebSocket-based real-time functionality.",
      "Provided continuous production support and resolved live application defects.",
      "Translated complex business requirements into maintainable, production-ready software features.",
    ],
  },
  {
    role: "Software Developer",
    company: "Tech Sierra Pvt Ltd",
    period: "June 2025 – May 2026",
    project: "JUMP — Revenue Intelligence Platform",
    framework: "Next.js",
    isCurrent: false,
    responsibilities: [
      "Developed data-driven analytics dashboards and core responsive frontend features.",
      "Integrated backend REST APIs using TanStack Query for caching and state synchronization.",
      "Implemented secure authentication and session management using Clerk.",
      "Collaborated actively across engineering teams through code reviews, CI/CD, and sprint planning.",
    ],
  },
] as const;

// ─── Inline icon helpers (no icon library needed) ─────────────────────────────

function GitHubIcon() {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function DocumentTextIcon() {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
    </svg>
  );
}

function ComponentIcon() {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );
}

function GlobeWindowIcon() {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="M2 10h20" />
      <path d="M6 7h.01" />
      <path d="M10 7h.01" />
    </svg>
  );
}

function NetworkPlugIcon() {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m18 16 4-4-4-4" />
      <path d="m6 8-4 4 4 4" />
      <path d="m14.5 4-5 16" />
    </svg>
  );
}

function ServerStackIcon() {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="8" x="2" y="2" rx="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>
  );
}

const SERVICES = [
  {
    title: "React UI Development",
    description:
      "Build reusable React components and responsive user interfaces.",
    icon: ComponentIcon,
  },
  {
    title: "Next.js Website Development",
    description:
      "Develop responsive, maintainable websites using Next.js and TypeScript.",
    icon: GlobeWindowIcon,
  },
  {
    title: "API Integration",
    description:
      "Integrate REST APIs and authentication services into web applications.",
    icon: NetworkPlugIcon,
  },
  {
    title: "Full-Stack Web Applications",
    description:
      "Develop frontend and backend features using React, Node.js, Express.js, and databases.",
    icon: ServerStackIcon,
  },
] as const;

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <NavBar />

      <main id="home" className="flex flex-col">
        {/* ── Hero ── */}
        <Container as="section" aria-labelledby="hero-heading" className="py-24 sm:py-32">
          <div className="flex flex-col gap-8 max-w-2xl">
            {/* Eyebrow */}
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-mint">
              Available for new opportunities
            </span>

            {/* Name + headline */}
            <div className="flex flex-col gap-3">
              <h1
                id="hero-heading"
                className="font-heading text-4xl font-bold leading-tight text-text-primary sm:text-5xl lg:text-6xl"
              >
                Dinesh Padhi
              </h1>
              <p className="font-heading text-xl font-medium text-text-secondary sm:text-2xl">
                Software Developer{" "}
                <span className="text-mint">/</span>{" "}
                Frontend &amp; Full Stack
              </p>
            </div>

            {/* Introduction */}
            <p className="font-sans text-base leading-relaxed text-text-secondary sm:text-lg max-w-xl">
              I build clean, performant web applications with around 1.5 years of
              professional experience. My focus is on React and Next.js frontends backed
              by Node.js APIs — delivered with accessible UI and maintainable code.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Button href="#projects">View Projects</Button>
              <Button
                href="/Dinesh-Padhi-Resume.pdf"
                external
                variant="secondary"
              >
                <DocumentTextIcon />
                Resume
              </Button>
              <Button
                href="https://github.com/Dinesh-171"
                external
                variant="secondary"
              >
                <GitHubIcon />
                GitHub
              </Button>
              <Button
                href="https://www.linkedin.com/in/dineshpadhi17/"
                external
                variant="secondary"
              >
                <LinkedInIcon />
                LinkedIn
              </Button>
            </div>
          </div>
        </Container>

        {/* Thin divider */}
        <div aria-hidden="true" className="w-full border-t border-white/[0.05]" />

        {/* ── Featured Projects ── */}
        <Container
          as="section"
          id="projects"
          className="py-20 sm:py-28"
        >
          <div className="flex flex-col gap-12">
            <SectionHeading
              eyebrow="Work"
              heading="Featured Projects"
              description="Selected contributions from professional engagements where I owned core frontend and full-stack features."
            />

            <div className="grid gap-8 lg:grid-cols-2">
              {PROJECTS.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>
        </Container>

        <div aria-hidden="true" className="w-full border-t border-white/[0.05]" />

        {/* ── Skills & Experience ── */}
        <Container
          as="section"
          className="py-20 sm:py-28"
        >
          <div className="flex flex-col gap-16 sm:gap-20">
            {/* Experience Sub-section */}
            <div id="experience" className="scroll-mt-24 flex flex-col gap-10">
              <SectionHeading
                eyebrow="Experience"
                heading="Professional Experience"
                description="My career journey developing responsive user interfaces and backend integrations in agile software teams."
              />

              <div className="relative ml-2 sm:ml-4 flex flex-col gap-8 border-l border-white/[0.1] pl-6 sm:pl-8">
                {EXPERIENCES.map((exp) => (
                  <div key={exp.company} className="relative">
                    {/* Timeline indicator node */}
                    <span
                      className={`absolute -left-[31px] sm:-left-[39px] top-1.5 h-3 w-3 rounded-full border-2 border-bg ${
                        exp.isCurrent
                          ? "bg-mint ring-4 ring-mint/20"
                          : "bg-text-secondary/60"
                      }`}
                      aria-hidden="true"
                    />

                    <article className="rounded-xl border border-white/[0.08] bg-surface p-6 sm:p-7 transition-all duration-200 hover:border-mint/30 hover:bg-[#161c28]">
                      {/* Role, Company, Period header */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-white/[0.06] pb-4">
                        <div>
                          <h3 className="font-heading text-lg sm:text-xl font-semibold text-text-primary">
                            {exp.role}
                          </h3>
                          <p className="font-sans text-sm font-medium text-mint">
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          {exp.isCurrent && (
                            <span className="rounded-full border border-mint/30 bg-mint/10 px-2.5 py-0.5 font-mono text-xs font-medium text-mint">
                              Current
                            </span>
                          )}
                          <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-mono text-xs text-text-secondary">
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      {/* Associated Project & Core Framework */}
                      <div className="flex flex-wrap items-center gap-2 pt-3 pb-4 text-xs font-mono text-text-secondary">
                        <span className="font-medium text-text-primary">Project:</span>
                        <span>{exp.project}</span>
                        <span className="text-white/20" aria-hidden="true">•</span>
                        <span className="rounded border border-mint/30 bg-mint/10 px-2 py-0.5 text-mint">
                          {exp.framework}
                        </span>
                      </div>

                      {/* Responsibilities */}
                      <ul
                        className="flex flex-col gap-2 text-sm text-text-secondary"
                        role="list"
                      >
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mint/70"
                              aria-hidden="true"
                            />
                            <span className="leading-relaxed">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  </div>
                ))}
              </div>
            </div>

            {/* Section separator */}
            <div aria-hidden="true" className="w-full border-t border-white/[0.06]" />

            {/* Technical Skills Sub-section */}
            <div id="skills" className="scroll-mt-24 flex flex-col gap-10">
              <SectionHeading
                eyebrow="Skills"
                heading="Technical Skills"
                description="Core languages, libraries, databases, and engineering workflows categorized for clarity."
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SKILL_CATEGORIES.map((category) => (
                  <div
                    key={category.title}
                    className="flex flex-col gap-4 rounded-xl border border-white/[0.08] bg-surface p-6 transition-all duration-200 hover:border-mint/30 hover:bg-[#161c28]"
                  >
                    <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                      <h3 className="font-heading text-base font-semibold text-text-primary">
                        {category.title}
                      </h3>
                      <span className="font-mono text-xs text-text-secondary/60">
                        {category.skills.length}
                      </span>
                    </div>

                    <ul
                      className="flex flex-wrap gap-2"
                      role="list"
                      aria-label={`${category.title} skills`}
                    >
                      {category.skills.map((skill) => (
                        <li
                          key={skill}
                          className="rounded border border-white/[0.08] bg-bg/70 px-2.5 py-1 font-mono text-xs text-text-secondary transition-colors hover:border-mint/30 hover:text-text-primary"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>

        <div aria-hidden="true" className="w-full border-t border-white/[0.05]" />

        {/* ── Services ── */}
        <Container
          as="section"
          id="services"
          className="py-20 sm:py-28"
        >
          <div className="flex flex-col gap-12 sm:gap-14">
            <SectionHeading
              eyebrow="Services"
              heading="What I Offer"
              description="Focused development services specializing in modern React interfaces, Next.js web applications, and end-to-end full-stack solutions."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {SERVICES.map((service) => {
                const Icon = service.icon;
                return (
                  <article
                    key={service.title}
                    className="group flex flex-col justify-between rounded-xl border border-white/[0.08] bg-surface p-6 sm:p-7 transition-all duration-200 hover:border-mint/30 hover:bg-[#161c28]"
                  >
                    <div className="flex flex-col gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-mint/20 bg-mint/10 text-mint transition-colors group-hover:border-mint/40 group-hover:bg-mint/15">
                        <Icon />
                      </div>
                      <h3 className="font-heading text-lg font-semibold tracking-tight text-text-primary">
                        {service.title}
                      </h3>
                      <p className="font-sans text-sm leading-relaxed text-text-secondary">
                        {service.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Working Contact CTA linking to verified #contact */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 rounded-xl border border-white/[0.06] bg-surface/50 p-6 sm:p-8">
              <div className="flex flex-col gap-1.5 max-w-lg">
                <h4 className="font-heading text-base sm:text-lg font-semibold text-text-primary">
                  Have a project in mind?
                </h4>
                <p className="font-sans text-sm text-text-secondary">
                  Let&apos;s discuss your requirements and how I can help bring your web application to life.
                </p>
              </div>
              <Button href="#contact">
                Contact Me
              </Button>
            </div>
          </div>
        </Container>

        <div aria-hidden="true" className="w-full border-t border-white/[0.05]" />

        {/* ── About Me ── */}
        <Container
          as="section"
          id="about"
          className="py-20 sm:py-28"
        >
          <div className="flex flex-col gap-12 sm:gap-14">
            <SectionHeading
              eyebrow="About"
              heading="About Me"
              description="A brief background on my journey, engineering focus, and approach to software development."
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Narrative column */}
              <div className="lg:col-span-7 flex flex-col gap-5 text-sm sm:text-base leading-relaxed text-text-secondary">
                <p>
                  I am a software developer with approximately 1.5 years of professional experience
                  specializing in <span className="text-text-primary font-medium">React.js</span> and{" "}
                  <span className="text-text-primary font-medium">Next.js</span>. Throughout my work,
                  I have contributed to production products including{" "}
                  <span className="text-text-primary font-medium">JUMP</span>, a Revenue Intelligence Platform,
                  and <span className="text-text-primary font-medium">Hoshi HRMS</span>, a Human Resource Management System.
                </p>

                <p>
                  My day-to-day engineering includes developing reusable UI components, integrating
                  REST APIs, building application features, optimizing runtime performance, and
                  collaborating with cross-functional teams to deliver dependable software.
                </p>

                <p>
                  I enjoy solving practical problems, writing maintainable code, exploring modern web
                  technologies, and building clean, useful digital experiences that serve real user needs.
                </p>

                {/* Core focus pills */}
                <div className="mt-2 flex flex-wrap gap-2 pt-2">
                  <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-mono text-xs text-text-secondary">
                    Modular UI Architecture
                  </span>
                  <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-mono text-xs text-text-secondary">
                    Clean Code &amp; Code Reviews
                  </span>
                  <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-mono text-xs text-text-secondary">
                    Agile Collaboration
                  </span>
                </div>
              </div>

              {/* Highlights column */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="rounded-xl border border-white/[0.08] bg-surface p-5 sm:p-6 transition-all duration-200 hover:border-mint/30 hover:bg-[#161c28]">
                  <div className="flex items-center justify-between pb-2">
                    <span className="font-heading text-2xl sm:text-3xl font-bold text-mint">
                      1.5+ Years
                    </span>
                    <span className="h-2 w-2 rounded-full bg-mint" aria-hidden="true" />
                  </div>
                  <h4 className="font-heading text-base font-semibold text-text-primary">
                    Professional Experience
                  </h4>
                  <p className="mt-1 font-sans text-xs sm:text-sm text-text-secondary">
                    Hands-on software development across enterprise and SaaS web applications.
                  </p>
                </div>

                <div className="rounded-xl border border-white/[0.08] bg-surface p-5 sm:p-6 transition-all duration-200 hover:border-mint/30 hover:bg-[#161c28]">
                  <div className="flex items-center justify-between pb-2">
                    <span className="font-heading text-xl sm:text-2xl font-bold text-text-primary">
                      React &amp; Next.js
                    </span>
                    <span className="h-2 w-2 rounded-full bg-mint/60" aria-hidden="true" />
                  </div>
                  <h4 className="font-heading text-base font-semibold text-text-primary">
                    Core Technology Focus
                  </h4>
                  <p className="mt-1 font-sans text-xs sm:text-sm text-text-secondary">
                    Modern frontend architecture, custom hooks, and server-rendered applications.
                  </p>
                </div>

                <div className="rounded-xl border border-white/[0.08] bg-surface p-5 sm:p-6 transition-all duration-200 hover:border-mint/30 hover:bg-[#161c28]">
                  <div className="flex items-center justify-between pb-2">
                    <span className="font-heading text-xl sm:text-2xl font-bold text-text-primary">
                      Frontend &amp; Full Stack
                    </span>
                    <span className="h-2 w-2 rounded-full bg-violet" aria-hidden="true" />
                  </div>
                  <h4 className="font-heading text-base font-semibold text-text-primary">
                    Engineering Scope
                  </h4>
                  <p className="mt-1 font-sans text-xs sm:text-sm text-text-secondary">
                    Responsive user interfaces backed by Node.js, Express, and database integrations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>

        <div aria-hidden="true" className="w-full border-t border-white/[0.05]" />

        {/* ── Contact ── */}
        <Container
          as="section"
          id="contact"
          className="py-20 sm:py-28"
        >
          <div className="flex flex-col gap-10 max-w-xl">
            <SectionHeading
              eyebrow="Contact"
              heading="Let's work together"
              description="I'm open to frontend and full-stack roles. Feel free to reach out by email or connect on LinkedIn."
            />

            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Button href="mailto:dineshpadhi16@gmail.com">
                <MailIcon />
                Send an email
              </Button>
              <Button
                href="https://www.linkedin.com/in/dineshpadhi17/"
                external
                variant="secondary"
              >
                <LinkedInIcon />
                LinkedIn
              </Button>
              <Button
                href="https://github.com/Dinesh-171"
                external
                variant="secondary"
              >
                <GitHubIcon />
                GitHub
              </Button>
            </div>

            {/* Plain-text email for screen readers and copy-paste */}
            <p className="font-mono text-sm text-text-secondary">
              <Link
                href="mailto:dineshpadhi16@gmail.com"
                className="text-mint underline underline-offset-4 decoration-mint/40 hover:decoration-mint transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded"
              >
                dineshpadhi16@gmail.com
              </Link>
            </p>
          </div>
        </Container>
      </main>

      {/* ── Footer ── */}
      <footer className="w-full border-t border-white/[0.06]">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
          <p className="font-sans text-xs text-text-secondary">
            © 2026 Dinesh Padhi. Built with Next.js &amp; Tailwind CSS.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="https://github.com/Dinesh-171"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-text-secondary transition-colors hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded"
            >
              <GitHubIcon />
            </Link>
            <Link
              href="https://www.linkedin.com/in/dineshpadhi17/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-text-secondary transition-colors hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded"
            >
              <LinkedInIcon />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
