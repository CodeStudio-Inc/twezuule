import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Container from "@/components/ui/Container";
import { navigationLinks, socialLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white/80">
      <Container className="py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h2 className="text-lg font-bold text-white">Twezuule Foundation</h2>
            <p className="mt-4 text-sm leading-relaxed">
              A youth-driven, disability-led organization empowering young people with disabilities to advocate for their
              rights and access health and livelihood opportunities.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Stay connected</h3>
            <p className="mt-4 text-sm">Get updates on programs and opportunities.</p>
            <form className="mt-4 flex gap-2" aria-label="Newsletter signup">
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="you@example.com"
                className="flex-1 rounded-lg bg-white/10 px-4 py-2.5 text-sm text-white placeholder-white/40"
              />
              <button className="rounded-lg bg-accent-500 px-4 py-2.5 text-sm font-semibold text-navy-900 transition hover:bg-accent-400">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <p className="text-sm">&copy; 2026 Twezuule Foundation. All rights reserved.</p>
          <div className="flex gap-4">
            {socialLinks.map((link) => {
              const Icon =
                link.label === "Facebook"
                  ? Facebook
                  : link.label === "Instagram"
                    ? Instagram
                    : link.label === "LinkedIn"
                      ? Linkedin
                      : Twitter;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-white/50 transition hover:text-white"
                  aria-label={link.label}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </footer>
  );
}