import Link from "next/link";

export interface ProjectCardProps {
  /** Project title. */
  title: string;
  /** Subtitle or product type (e.g., "Revenue Intelligence Platform"). */
  subtitle?: string;
  /** Role held by the developer (e.g., "Software Developer"). */
  role?: string;
  /** Company or organization where the project was built. */
  company?: string;
  /** Timeline or engagement period (e.g., "June 2025 – May 2026"). */
  period?: string;
  /** Primary framework or technology highlight (e.g., "Next.js", "React.js"). */
  framework?: string;
  /** Concise professional overview of the project and its context. */
  description: string;
  /** Focused list of concrete engineering contributions. */
  contributions?: readonly string[];
  /** Technology or tool names shown as inline labels. */
  technologies: readonly string[];
  /** Optional destination link (only rendered if provided). */
  href?: string;
  /** Label for the destination link. */
  linkLabel?: string;
  /** Set to true when `href` is an external URL. */
  external?: boolean;
  /** Badge indicating project category (e.g., "Professional Project"). */
  statusLabel?: string;
}

/**
 * ProjectCard
 *
 * Displays a single project with structured hierarchy:
 * - Meta tags: framework pill, status badge, engagement timeline
 * - Title, role, and company attribution
 * - Concise context description
 * - Key contributions bullet points
 * - Technology stack tags
 * - Functional destination link (only if a valid URL is provided)
 */
export default function ProjectCard({
  title,
  subtitle,
  role,
  company,
  period,
  framework,
  description,
  contributions,
  technologies,
  href,
  linkLabel = "View Project",
  external = false,
  statusLabel,
}: ProjectCardProps) {
  const externalProps = external
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <article className="group relative flex h-full flex-col justify-between rounded-xl border border-white/[0.08] bg-surface p-6 sm:p-8 transition-all duration-200 hover:border-mint/30 hover:bg-[#161c28]">
      <div className="flex flex-col gap-5">
        {/* Top metadata row: Framework, Status Badge, Period */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex flex-wrap items-center gap-2">
            {framework && (
              <span className="rounded-full border border-mint/30 bg-mint/10 px-2.5 py-0.5 font-mono text-xs font-medium text-mint">
                {framework}
              </span>
            )}
            {statusLabel && (
              <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-0.5 font-mono text-xs text-text-secondary">
                {statusLabel}
              </span>
            )}
          </div>
          {period && (
            <span className="font-mono text-xs text-text-secondary/80">
              {period}
            </span>
          )}
        </div>

        {/* Title, Subtitle, and Role / Company */}
        <div className="flex flex-col gap-1.5">
          <h3 className="font-heading text-xl font-semibold tracking-tight text-text-primary sm:text-2xl">
            {title}
            {subtitle && (
              <span className="block text-base font-normal text-text-secondary sm:inline sm:text-lg sm:before:content-['\00a0—\00a0']">
                {subtitle}
              </span>
            )}
          </h3>

          {(role || company) && (
            <p className="font-sans text-xs sm:text-sm font-medium text-text-secondary">
              {role && <span className="text-text-primary">{role}</span>}
              {role && company && <span className="mx-1.5 text-mint/60">•</span>}
              {company && <span>{company}</span>}
            </p>
          )}
        </div>

        {/* Overview Description */}
        <p className="font-sans text-sm leading-relaxed text-text-secondary">
          {description}
        </p>

        {/* Bulleted Key Contributions */}
        {contributions && contributions.length > 0 && (
          <div className="flex flex-col gap-2.5 pt-1">
            <h4 className="font-mono text-xs uppercase tracking-wider text-text-secondary/80">
              Key Contributions
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-text-secondary" role="list">
              {contributions.map((contribution, index) => (
                <li key={index} className="flex items-start gap-2.5">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mint/80"
                    aria-hidden="true"
                  />
                  <span className="leading-relaxed">{contribution}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Footer Area: Technology tags & optional link */}
      <div className="mt-6 flex flex-col gap-4 border-t border-white/[0.06] pt-5">
        {technologies.length > 0 && (
          <ul
            aria-label="Technologies used"
            className="flex flex-wrap gap-1.5"
            role="list"
          >
            {technologies.map((tech) => (
              <li
                key={tech}
                className="rounded border border-white/[0.08] bg-bg/60 px-2.5 py-1 font-mono text-xs text-text-secondary transition-colors group-hover:border-white/[0.14]"
              >
                {tech}
              </li>
            ))}
          </ul>
        )}

        {/* Functional Link (only rendered if href is provided) */}
        {href && (
          <div className="pt-1">
            <Link
              href={href}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-mint transition-colors duration-150 hover:text-mint/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              {...externalProps}
            >
              {linkLabel}
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-150 group-hover:translate-x-0.5"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </article>
  );
}
