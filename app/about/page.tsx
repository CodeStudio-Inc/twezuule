import Image from "next/image";
import { Users, HeartHandshake, Scale, Handshake, Sparkles } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { values } from "@/lib/data";

export const metadata = {
  title: "About",
};

const valueIcons = {
  Inclusion: Users,
  Equity: Scale,
  Empowerment: Sparkles,
  "Dignity & Respect": HeartHandshake,
  Collaboration: Handshake,
};

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        title="About Twezuule Foundation"
        description="A youth-driven disability rights and inclusion organization dedicated to implementing interventions that address the unique needs and challenges faced by a diverse group of young people with disabilities."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <Section>
        <Container>
          <div className="grid items-center gap-10 rounded-[var(--radius)] border border-slate-200 bg-white p-6 lg:grid-cols-2 lg:p-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Who we are</h2>
              <p className="mt-4 text-base text-slate-600">
                Twezuule Foundation is a youth-driven disability rights and inclusion organization dedicated to implementing interventions that address the unique needs and challenges faced by a diverse group of young people with disabilities.
              </p>
              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">Vision</h3>
                  <p className="text-sm text-slate-600">
                    A society where young people with disabilities are empowered, included, and have equal access to opportunities to thrive.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">Mission</h3>
                  <p className="text-sm text-slate-600">
                    To champion the rights, well-being, and empowerment of youth with disabilities by promoting access to health, livelihood, and leadership opportunities while advancing inclusion in every community.
                  </p>
                </div>
              </div>
            </div>
            <Image
              src="/images/placeholder.svg"
              alt="Youth leaders collaborating"
              width={560}
              height={420}
              className="w-full rounded-[var(--radius)] border border-slate-200"
            />
          </div>
        </Container>
      </Section>

      <Section className="bg-brand-50/50">
        <Container>
          <div className="rounded-[var(--radius)] border border-brand-200 bg-white p-8">
            <h2 className="text-xl font-bold text-brand-800">Disability-led & Youth-driven</h2>
            <p className="mt-3 text-sm text-brand-800">
              We believe in leadership by those most impacted. Our programs are co-designed and led by young people with disabilities, ensuring dignity, accessibility, and meaningful participation.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-slate-900">Core values</h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-600">
            Our work is anchored in principles that reinforce dignity, equity, and lasting inclusion.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {values.map((value) => {
              const Icon = valueIcons[value.title as keyof typeof valueIcons] || Users;
              return (
                <Card
                  key={value.title}
                  className="group border border-slate-200 bg-slate-50 transition hover:-translate-y-1 hover:border-accent-200"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600/10 text-brand-600 transition group-hover:bg-brand-600/15">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-slate-900">{value.title}</h3>
                  <p className="mt-3 text-sm text-slate-600">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>
    </div>
  );
}
