interface SectionHeadingProps {
  /**
   * Small label rendered above the heading in accent color.
   * Use a short category like "About", "Projects", "Experience".
   */
  eyebrow?: string;
  /** Main heading text. Rendered as an <h2> by default. */
  heading: string;
  /** Optional one-to-two sentence description beneath the heading. */
  description?: string;
  /**
   * HTML heading level to render.
   * Defaults to "h2". Use "h1" for the page hero.
   */
  level?: "h1" | "h2" | "h3";
  /** Text alignment. Defaults to "left". */
  align?: "left" | "center";
  /** Additional classes on the outer wrapper. */
  className?: string;
}

/**
 * SectionHeading
 *
 * Consistent heading block used at the top of every portfolio section.
 * Renders an optional eyebrow label, the main heading, and an optional
 * short description.
 *
 * Usage:
 *   <SectionHeading
 *     eyebrow="Work"
 *     heading="Selected Projects"
 *     description="A curated set of things I've built."
 *   />
 */
export default function SectionHeading({
  eyebrow,
  heading,
  description,
  level: Tag = "h2",
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 ${alignClass} ${className}`.trim()}>
      {eyebrow && (
        <span className="font-sans text-xs font-semibold uppercase tracking-widest text-mint">
          {eyebrow}
        </span>
      )}
      <Tag className="font-heading text-3xl font-semibold leading-tight text-text-primary sm:text-4xl">
        {heading}
      </Tag>
      {description && (
        <p className="max-w-xl font-sans text-base leading-relaxed text-text-secondary">
          {description}
        </p>
      )}
    </div>
  );
}
