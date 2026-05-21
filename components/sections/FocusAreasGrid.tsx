import Link from "next/link";
import { focusAreas } from "@/lib/data";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

export default function FocusAreasGrid() {
  return (
    <Section className="bg-navy-900">
      <Container>
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-400">What we do</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Key Focus Areas</h2>
          <p className="mt-4 max-w-2xl text-base text-white/70">
            Our programs are co-designed with young people with disabilities to advance rights, health, livelihoods, and leadership.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((area, index) => (
            <Reveal key={area.slug} delay={index * 0.05}>
              <div className="group h-full overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-6 transition hover:border-accent-300 hover:bg-white/15">
                <h3 className="text-lg font-semibold text-white">{area.title}</h3>
                <p className="mt-3 text-sm text-white/70">{area.description}</p>
                <Link
                  href={area.route || `/focus-areas/${area.slug}`}
                  className="mt-6 inline-flex text-sm font-semibold text-accent-400 transition hover:text-accent-300"
                >
                  Learn more →
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
