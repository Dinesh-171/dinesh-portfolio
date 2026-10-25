"use client";

import Link from "next/link";
import { useState } from "react";

interface NavLinkItem {
  label: string;
  href: string;
  external?: boolean;
}

const NAV_LINKS: readonly NavLinkItem[] = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Resume", href: "/Dinesh-Padhi-Resume.pdf", external: true },
] as const;

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.06] bg-bg/80 backdrop-blur-md">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
      >
        {/* Logo / wordmark */}
        <Link
          href="#home"
          className="font-heading text-base font-semibold tracking-tight text-text-primary transition-colors hover:text-mint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded"
          onClick={closeMenu}
        >
          Dinesh<span className="text-mint">.</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-3.5 md:flex lg:gap-6" role="list">
          {NAV_LINKS.map(({ label, href, external }) => (
            <li key={label}>
              <Link
                href={href}
                className={
                  external
                    ? "rounded border border-mint/30 bg-mint/5 px-2.5 py-1 font-sans text-sm font-medium text-mint transition-colors duration-150 hover:bg-mint/10 hover:text-mint/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                    : "rounded font-sans text-sm text-text-secondary transition-colors duration-150 hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                }
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-controls="mobile-menu"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex md:hidden items-center justify-center rounded p-1.5 text-text-secondary transition-colors hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        >
          {/* Hamburger / close icon */}
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {menuOpen ? (
              <>
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </>
            ) : (
              <>
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-white/[0.06] bg-bg md:hidden"
        >
          <ul
            className="flex flex-col px-4 py-4 sm:px-6"
            role="list"
            aria-label="Mobile navigation links"
          >
            {NAV_LINKS.map(({ label, href, external }) => (
              <li key={label}>
                <Link
                  href={href}
                  onClick={closeMenu}
                  className={
                    external
                      ? "inline-flex items-center gap-1.5 py-3 font-sans text-sm font-medium text-mint transition-colors hover:text-mint/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded"
                      : "block py-3 font-sans text-sm text-text-secondary transition-colors hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded"
                  }
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {label}
                  {external && (
                    <svg
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="opacity-70"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" x2="21" y1="14" y2="3" />
                    </svg>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
