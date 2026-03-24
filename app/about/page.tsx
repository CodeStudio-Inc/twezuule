import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { values } from "@/lib/data";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        title="About Twezuule Foundation"
        description="A youth-driven, disability-led organization championing rights, well-being, and opportunity for young people with disabilities in Uganda."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <Section>
        <Container>
          <div className="grid items-center gap-10 rounded-[var(--radius)] border border-slate-200 bg-white p-6 lg:grid-cols-2 lg:p-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Who we are</h2>
              <p className="mt-4 text-base text-slate-600">
                Twezuule Foundation is a youth-driven, disability-led organization empowering young people with disabilities to advocate for their rights and access health and livelihood opportunities.
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
                    To champion the rights, well-being, and empowerment of youth with disabilities by promoting access to health and livelihood opportunities, amplifying their voices in decision-making, and fostering a supportive and inclusive society.
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
          <h2 className="text-2xl font-bold text-slate-900">Our values</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title}>
                <h3 className="text-lg font-semibold text-slate-900">{value.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-brand-50/40">
        <Container>
          <h2 className="text-2xl font-bold text-slate-900">Leadership and Board</h2>
          <p className="mt-3 text-sm text-slate-600">
            Meet the youth leaders and advisors guiding Twezuule Foundation.
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <Card key={index}>
                <Image
                  src="/images/team-placeholder.svg"
                  alt="Team member placeholder"
                  width={320}
                  height={200}
                  className="rounded-lg"
                />
                <h3 className="mt-4 text-base font-semibold text-slate-900">Leader Name</h3>
                <p className="text-sm text-slate-500">Role / Title</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
