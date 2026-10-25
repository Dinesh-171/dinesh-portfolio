import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

// ─── Shared base classes ───────────────────────────────────────────────────────

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-40";

const VARIANTS = {
  primary: "bg-mint text-bg hover:bg-mint/85 focus-visible:ring-mint",
  secondary:
    "border border-mint/40 text-mint bg-transparent hover:bg-mint/8 focus-visible:ring-mint",
} as const;

type Variant = keyof typeof VARIANTS;

// ─── Prop types ───────────────────────────────────────────────────────────────

interface BaseProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

/**
 * When `href` is provided the component renders as a Next.js `<Link>`.
 * Set `external` to true for URLs that open in a new tab.
 */
type LinkButtonProps = BaseProps & {
  href: string;
  external?: boolean;
} & Omit<
    ComponentPropsWithoutRef<typeof Link>,
    "href" | "children" | "className"
  >;

/**
 * Without `href` the component renders as a native `<button>`.
 */
type NativeButtonProps = BaseProps & {
  href?: never;
  external?: never;
} & Omit<ComponentPropsWithoutRef<"button">, "children" | "className">;

type ButtonProps = LinkButtonProps | NativeButtonProps;

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * Button
 *
 * Renders either a Next.js `<Link>` (when `href` is provided) or a native
 * `<button>` element. Both variants share the same visual styles and
 * accessible focus rings.
 *
 * Variants:
 *   "primary"   — solid mint background (default)
 *   "secondary" — outlined, transparent background
 *
 * Usage — as a link:
 *   <Button href="/projects">View Projects</Button>
 *   <Button href="https://github.com/…" external variant="secondary">GitHub</Button>
 *
 * Usage — as a button:
 *   <Button variant="secondary" onClick={handleSubmit}>Send</Button>
 */
export default function Button(props: ButtonProps) {
  const classes = `${BASE} ${VARIANTS[props.variant ?? "primary"]} ${props.className ?? ""}`.trim();

  if (props.href !== undefined) {
    // Build a minimal, explicit prop set for Link to avoid spreading
    // variant/external/className into the DOM element.
    return (
      <Link
        href={props.href}
        className={classes}
        {...(props.external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {props.children}
      </Link>
    );
  }

  // Native button — pass only the native button attributes.
  const nativeProps = ((): Omit<
    ComponentPropsWithoutRef<"button">,
    "children" | "className"
  > => {
    const {
      children: _c,
      className: _cn,
      variant: _v,
      href: _h,
      external: _e,
      ...rest
    } = props as NativeButtonProps;
    void _c;
    void _cn;
    void _v;
    void _h;
    void _e;
    return rest;
  })();

  return (
    <button className={classes} {...nativeProps}>
      {props.children}
    </button>
  );
}
