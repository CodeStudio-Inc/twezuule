import Link from "next/link";
import { focusAreas } from "@/lib/data";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

export default function FocusAreasGrid() {
  return (
    <Section className="bg-brand-50">
      <Container>
        <div className="mb-8 flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-navy-900">Key Focus Areas</h2>
          <p className="max-w-2xl text-sm text-slate-600">
            Our programs are designed with young people with disabilities to advance rights, health, livelihoods, and leadership.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((area, index) => (
            <Reveal key={area.slug} delay={index * 0.05}>
              <Card className="h-full">
                <h3 className="text-lg font-semibold text-slate-900">{area.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{area.description}</p>
                <Link
                  href={`/focus-areas/${area.slug}`}
                  className="mt-4 inline-flex text-sm font-semibold text-brand-700"
                >
                  Learn more
                </Link>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
