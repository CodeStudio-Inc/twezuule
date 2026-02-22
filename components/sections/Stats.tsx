import { stats } from "@/lib/data";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function Stats() {
  return (
    <Section>
      <Container>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.label} className="border-accent-100 text-center">
              <p className="text-3xl font-bold text-brand-500">{stat.value}</p>
              <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
