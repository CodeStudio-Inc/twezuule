import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Container from "@/components/ui/Container";
import { navigationLinks, socialLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-brand-50">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Twezuule Foundation</h2>
            <p className="mt-3 text-sm text-slate-600">
              Youth-driven, disability-led organization empowering young people with disabilities to advocate for their rights and access health and livelihood opportunities.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-brand-700">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Newsletter</h3>
            <p className="mt-3 text-sm text-slate-600">Get updates on programs and opportunities.</p>
            <form className="mt-4 flex flex-col gap-3" aria-label="Newsletter signup">
              <label className="text-sm text-slate-700" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="you@example.com"
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm"
              />
              <button className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row">
          <p>© 2026 Twezuule Foundation. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
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
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600 hover:text-brand-700"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only">{link.label}</span>
                  <span aria-hidden="true">{link.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </footer>
  );
}
