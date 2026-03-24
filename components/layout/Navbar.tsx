"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { focusAreas, navigationLinks } from "@/lib/data";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [focusOpen, setFocusOpen] = useState(false);
  const closeMenus = () => {
    setMenuOpen(false);
    setFocusOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 shadow-sm backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6 lg:px-8" aria-label="Main">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <Image
            src="/images/twezuule-logo.jpg"
            alt="Twezuule Foundation logo"
            width={72}
            height={72}
            className="h-10 w-10 rounded-xl object-cover"
            priority
          />
          <span className="hidden text-sm font-bold text-slate-900 sm:inline">Twezuule</span>
        </Link>

        {/* Desktop tabs */}
        <div className="hidden items-center gap-0.5 md:flex">
          {navigationLinks.slice(0, 3).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                pathname === link.href
                  ? "bg-brand-600 text-white"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Focus Areas dropdown */}
          <div className="relative">
            <button
              className={`inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition ${
                pathname.startsWith("/focus-areas")
                  ? "bg-brand-600 text-white"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
              aria-haspopup="true"
              aria-expanded={focusOpen}
              onClick={() => setFocusOpen((prev) => !prev)}
              onKeyDown={(event) => {
                if (event.key === "Escape") setFocusOpen(false);
              }}
            >
              Focus Areas
              <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
            {focusOpen ? (
              <div className="absolute left-0 mt-1 w-64 rounded-xl bg-white p-2 shadow-xl ring-1 ring-black/5" role="menu">
                {focusAreas.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/focus-areas/${area.slug}`}
                    className="block rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100"
                    role="menuitem"
                    onClick={closeMenus}
                  >
                    {area.title}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          {navigationLinks.slice(3).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                pathname === link.href
                  ? "bg-brand-600 text-white"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-2 md:flex">
          <Button href="/donate" variant="secondary" className="!px-4 !py-2 !text-xs">
            Donate
          </Button>
        </div>

        {/* Mobile hamburger — only below md */}
        <button
          className="inline-flex items-center justify-center rounded-lg bg-slate-100 p-2 text-slate-700 md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen ? (
        <div id="mobile-menu" className="bg-white px-4 pb-5 md:hidden">
          <div className="flex flex-col gap-1 pt-2">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                  pathname === link.href
                    ? "bg-brand-600 text-white"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
                onClick={closeMenus}
              >
                {link.label}
              </Link>
            ))}
            <p className="mt-3 px-3 text-xs font-semibold uppercase tracking-wide text-slate-400">Focus Areas</p>
            {focusAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/focus-areas/${area.slug}`}
                className="rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-100"
                onClick={closeMenus}
              >
                {area.title}
              </Link>
            ))}
            <div className="mt-3 flex gap-2">
              <Button href="/donate" variant="secondary" className="flex-1">
                Donate
              </Button>
              <Button href="/get-involved" className="flex-1">
                Join
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
