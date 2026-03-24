import { notFound } from "next/navigation";
import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { focusAreas } from "@/lib/data";
import { getFocusAreaDetailBySlug } from "@/lib/content";

export async function generateStaticParams() {
  return focusAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const area = getFocusAreaDetailBySlug(params.slug);
  if (!area) {
    return { title: "Focus area not found" };
  }
  return { title: area.title, description: area.description };
}

export default function FocusAreaPage({ params }: { params: { slug: string } }) {
  const area = getFocusAreaDetailBySlug(params.slug);
  if (!area) {
    notFound();
  }

  return (
    <div>
      <PageHeader
        title={area.title}
        description={area.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Programs", href: "/programs" },
          { label: area.title },
        ]}
      />
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-navy-900">Programs and projects</h2>
          <p className="mt-3 text-sm text-slate-600">
            Each focus area includes targeted programs made up of practical, youth-led projects.
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {area.programs.map((program) => (
              <Card key={program.title}>
                <h3 className="text-lg font-semibold text-slate-900">{program.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{program.summary}</p>
                <h4 className="mt-4 text-sm font-semibold text-slate-900">Projects</h4>
                <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-slate-600">
                  {program.projects.map((project) => (
                    <li key={project}>{project}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
