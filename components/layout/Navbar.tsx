"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { focusAreas, navigationLinks } from "@/lib/data";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [focusOpen, setFocusOpen] = useState(false);
  const closeMenus = () => {
    setMenuOpen(false);
    setFocusOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-brand-100 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Main">
        <Link href="/" className="flex items-center gap-3 text-lg font-bold text-slate-900">
          <Image
            src="/images/twezuule-logo.jpg"
            alt="Twezuule Foundation logo"
            width={72}
            height={72}
            className="h-16 w-16 rounded-full object-cover"
            priority
          />
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {navigationLinks.slice(0, 3).map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-navy-900 hover:text-brand-700">
              {link.label}
            </Link>
          ))}

          <div className="relative">
            <button
              className="inline-flex items-center gap-1 text-sm font-medium text-navy-900 hover:text-brand-700"
              aria-haspopup="true"
              aria-expanded={focusOpen}
              onClick={() => setFocusOpen((prev) => !prev)}
              onKeyDown={(event) => {
                if (event.key === "Escape") {
                  setFocusOpen(false);
                }
              }}
            >
              Focus Areas
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </button>
            {focusOpen ? (
              <div className="absolute left-0 mt-2 w-64 rounded-xl border border-slate-200 bg-white p-3 shadow-lg" role="menu">
                {focusAreas.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/focus-areas/${area.slug}`}
                    className="block rounded-lg px-3 py-2 text-sm text-navy-900 hover:bg-brand-50"
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
            <Link key={link.href} href={link.href} className="text-sm font-medium text-navy-900 hover:text-brand-700">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="/donate" variant="secondary">
            Support Our Work
          </Button>
          <Button href="/get-involved">Join Programs</Button>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-full border border-slate-200 p-2 text-slate-700 lg:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {menuOpen ? (
        <div id="mobile-menu" className="border-t border-slate-200 bg-white px-4 pb-6 lg:hidden">
          <div className="flex flex-col gap-4 pt-4">
            {navigationLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-navy-900" onClick={closeMenus}>
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <p className="text-xs font-semibold uppercase text-slate-500">Focus Areas</p>
              <div className="mt-3 flex flex-col gap-2">
                {focusAreas.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/focus-areas/${area.slug}`}
                    className="text-sm text-navy-900"
                    onClick={closeMenus}
                  >
                    {area.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 pt-4">
              <Button href="/donate" variant="secondary">
                Support Our Work
              </Button>
              <Button href="/get-involved">Join Programs</Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
