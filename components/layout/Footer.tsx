import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import { navigationLinks, socialLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white/85">
      <Container className="py-16">
        <div className="grid gap-10 xl:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent-300">
              Visit or Connect With Us
            </p>
            <h2 className="mt-4 text-2xl font-bold text-white">Twezuule Foundation</h2>
            <div className="mt-6 space-y-4 text-sm text-slate-200">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-accent-300" aria-hidden="true" />
                Plot 260, Bukoto, Kampala, Uganda
              </p>
              <p className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 text-accent-300" aria-hidden="true" />
                <Link href="mailto:info@twezuule.org" className="transition hover:text-white">
                  info@twezuule.org
                </Link>
              </p>
              <p className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-accent-300" aria-hidden="true" />
                +256 771 442821
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/board" className="transition hover:text-white">
                  Board
                </Link>
              </li>
              <li>
                <Link href="/partners" className="transition hover:text-white">
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Follow Us</h3>
            <div className="mt-4 flex flex-wrap gap-3 text-white/70">
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
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-sm transition hover:border-accent-300 hover:text-white"
                    aria-label={link.label}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-slate-400">
          &copy; 2026 Twezuule Foundation. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}