import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { focusAreas } from "@/lib/data";
import { getPrograms } from "@/lib/content";

export const metadata = {
  title: "Programs",
};

export default function ProgramsPage() {
  const programs = getPrograms();

  return (
    <div>
      <PageHeader
        title="Programs"
        description="Programs co-designed with young people with disabilities to advance health, livelihoods, leadership, and inclusive policies."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Programs" }]}
      />

      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {programs.map((program) => (
              <Card key={program.slug} className="flex h-full flex-col">
                <Badge>{program.focusArea}</Badge>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">{program.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{program.summary}</p>
                <Link
                  href={`/programs/${program.slug}`}
                  className="mt-4 text-sm font-semibold text-brand-700"
                >
                  View program details
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-brand-50/40">
        <Container>
          <h2 className="text-2xl font-bold text-slate-900">All focus areas</h2>
          <p className="mt-3 text-sm text-slate-600">
            Explore the wider themes that guide our program design.
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((area) => (
              <Card key={area.slug}>
                <h3 className="text-lg font-semibold text-slate-900">{area.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{area.description}</p>
                <Link
                  href={`/focus-areas/${area.slug}`}
                  className="mt-4 inline-flex rounded-full border border-brand-200 px-4 py-1.5 text-sm font-semibold text-brand-700 hover:bg-brand-50"
                >
                  Learn more
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
