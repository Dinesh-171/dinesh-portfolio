import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

// Constrain to block-level HTML tags that make semantic sense as containers.
type ContainerTag = Extract<
  ElementType,
  "div" | "section" | "main" | "header" | "footer" | "article" | "aside" | "nav"
>;

// Pick only the attributes common to all block-level elements we support.
type SharedHTMLProps = Pick<
  ComponentPropsWithoutRef<"div">,
  "id" | "aria-labelledby" | "aria-label"
>;

interface ContainerProps extends SharedHTMLProps {
  /** Content to render inside the container. */
  children: ReactNode;
  /**
   * Additional Tailwind classes applied to the outer tag.
   * Use for per-section vertical padding overrides, etc.
   */
  className?: string;
  /**
   * HTML element to render as. Defaults to "div".
   * Use "section", "main", "header", "footer" when semantically appropriate.
   */
  as?: ContainerTag;
}

/**
 * Container
 *
 * Applies consistent horizontal padding and a maximum content width
 * across every section of the portfolio. The outer element spans full
 * width; the inner wrapper is centered and constrained to `max-w-6xl`.
 *
 * Supports `id`, `aria-labelledby` and `aria-label` for landmark semantics.
 *
 * Usage:
 *   <Container as="section" id="projects" aria-labelledby="projects-heading" className="py-24">
 *     …content…
 *   </Container>
 */
export default function Container({
  children,
  className = "",
  as: Tag = "div",
  ...rest
}: ContainerProps) {
  return (
    <Tag className={`w-full px-4 sm:px-6 lg:px-8 ${className}`.trim()} {...rest}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </Tag>
  );
}
