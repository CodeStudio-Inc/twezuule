import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { getCaseStudies } from "@/lib/content";

export const metadata = {
  title: "Impact",
};

const outcomes = [
  "Increased access to health services and information for young people with disabilities.",
  "Enhanced economic independence through sustainable livelihoods.",
  "Greater participation of youth with disabilities in civic activities and leadership.",
  "Improved policies/legislation safeguarding rights of youth with disabilities.",
  "Supportive community environment that develops talents and capacities.",
];

const indicators = [
  { label: "Health access confidence", value: 78 },
  { label: "Livelihood readiness", value: 64 },
  { label: "Civic participation", value: 52 },
];

export default function ImpactPage() {
  const caseStudies = getCaseStudies();

  return (
    <div>
      <PageHeader
        title="Impact"
        description="Measuring change through youth-led outcomes, community feedback, and inclusive policies."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Impact" }]}
      />

      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Expected outcomes</h2>
              <ul className="mt-4 list-disc space-y-3 pl-5 text-sm text-slate-600">
                {outcomes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Progress indicators</h2>
              <div className="mt-4 space-y-4">
                {indicators.map((indicator) => (
                  <div key={indicator.label}>
                    <div className="flex items-center justify-between text-sm font-semibold text-slate-700">
                      <span>{indicator.label}</span>
                      <span>{indicator.value}%</span>
                    </div>
                    <div className="mt-2 h-2 w-full rounded-full bg-slate-200">
                      <div
                        className="h-2 rounded-full bg-brand-600"
                        style={{ width: `${indicator.value}%` }}
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-brand-50/40">
        <Container>
          <h2 className="text-2xl font-bold text-slate-900">Case studies</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {caseStudies.map((study) => (
              <Card key={study.id}>
                <h3 className="text-lg font-semibold text-slate-900">{study.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{study.summary}</p>
                <p className="mt-3 text-xs text-slate-500">Location: {study.location}</p>
                <p className="mt-2 text-sm font-semibold text-slate-700">{study.outcome}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
