import Image from "next/image";
import Badge from "@/components/ui/Badge";
import Breadcrumbs, { BreadcrumbItem } from "@/components/ui/Breadcrumbs";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { Program } from "@/lib/content";

export default function ProgramDetail({
  program,
  breadcrumbs,
}: {
  program: Program;
  breadcrumbs?: BreadcrumbItem[];
}) {
  return (
    <div>
      <Section>
        <Container>
          {breadcrumbs && breadcrumbs.length > 0 ? (
            <div className="mb-4">
              <Breadcrumbs items={breadcrumbs} />
            </div>
          ) : null}
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <Badge>{program.focusArea}</Badge>
              <h1 className="mt-4 text-3xl font-bold text-slate-900">{program.title}</h1>
              <p className="mt-4 text-base text-slate-600">{program.summary}</p>
            </div>
            <Image
              src={program.coverImage}
              alt={program.title}
              width={560}
              height={360}
              className="rounded-[var(--radius)]"
            />
          </div>
        </Container>
      </Section>
      <Section className="bg-brand-50">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <h2 className="text-lg font-semibold text-slate-900">Problem</h2>
              <p className="mt-3 text-sm text-slate-600">{program.problem}</p>
            </Card>
            <Card>
              <h2 className="text-lg font-semibold text-slate-900">Who it serves</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
                {program.audience.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>
            <Card>
              <h2 className="text-lg font-semibold text-slate-900">Key activities</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
                {program.activities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>
            <Card>
              <h2 className="text-lg font-semibold text-slate-900">Outcomes</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
                {program.outcomes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>
            <Card className="md:col-span-2">
              <h2 className="text-lg font-semibold text-slate-900">How to join</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
                {program.howToJoin.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>
          </div>
        </Container>
      </Section>
    </div>
  );
}
