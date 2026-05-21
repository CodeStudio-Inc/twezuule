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
  const heroImage = program.heroImage || program.coverImage;

  return (
    <div>
      <Section>
        <Container>
          {breadcrumbs && breadcrumbs.length > 0 ? (
            <div className="mb-4">
              <Breadcrumbs items={breadcrumbs} />
            </div>
          ) : null}
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div>
              <Badge>{program.focusArea}</Badge>
              <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                {program.title}
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
                {program.summary}
              </p>
            </div>
            <div className="overflow-hidden rounded-[var(--radius)] border border-slate-200 bg-slate-100">
              <Image
                src={heroImage}
                alt={`${program.title} program image`}
                width={720}
                height={520}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>

      {program.stats ? (
        <Section className="bg-slate-50">
          <Container>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {program.stats.map((item) => (
                <div key={item.label} className="rounded-3xl bg-white p-6 text-center shadow-sm">
                  <p className="text-3xl font-bold text-slate-900">{item.value}</p>
                  <p className="mt-2 text-sm text-slate-600">{item.label}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

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

      {program.sections?.map((section, index) => (
        <Section key={section.title} className={index % 2 === 1 ? "bg-white" : "bg-slate-50"}>
          <Container>
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] xl:grid-cols-[0.95fr_1.05fr]">
              <div className={index % 2 === 1 ? "order-2 lg:order-1" : ""}>
                <h2 className="text-2xl font-bold text-slate-900">{section.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{section.description}</p>
                {section.items ? (
                  <ul className="mt-5 space-y-3 text-sm text-slate-600">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-accent-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
              <div className="rounded-[var(--radius)] bg-slate-100 p-1">
                {section.image ? (
                  <Image
                    src={section.image}
                    alt={section.title}
                    width={780}
                    height={520}
                    className="h-full w-full rounded-[var(--radius)] object-cover"
                  />
                ) : (
                  <div className="flex min-h-[280px] items-center justify-center rounded-[var(--radius)] bg-slate-200 p-8 text-center text-sm text-slate-500">
                    Image placeholder for {section.title}
                  </div>
                )}
              </div>
            </div>
          </Container>
        </Section>
      ))}

      {program.quote ? (
        <Section className="bg-brand-50">
          <Container>
            <Card className="rounded-[var(--radius)] border border-brand-200 bg-white p-8">
              <p className="text-xl font-semibold text-slate-900">“{program.quote}”</p>
              {program.quoteAuthor ? (
                <p className="mt-4 text-sm font-semibold text-slate-700">{program.quoteAuthor}</p>
              ) : null}
            </Card>
          </Container>
        </Section>
      ) : null}

      {program.keyOutcomes ? (
        <Section>
          <Container>
            <h2 className="text-2xl font-bold text-slate-900">Key outcomes</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {program.keyOutcomes.map((outcome) => (
                <Card key={outcome} className="border border-slate-200 transition hover:-translate-y-0.5 hover:shadow-lg">
                  <p className="text-sm leading-7 text-slate-600">{outcome}</p>
                </Card>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      {program.gallery ? (
        <Section className="bg-slate-50">
          <Container>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent-500">
                  Gallery
                </p>
                <h2 className="mt-3 text-2xl font-bold text-slate-900">Stories in action</h2>
              </div>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {program.gallery.map((image) => (
                <div key={image} className="overflow-hidden rounded-[var(--radius)] bg-white shadow-sm">
                  <Image
                    src={image}
                    alt={`${program.title} program gallery image`}
                    width={640}
                    height={480}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}
    </div>
  );
}
