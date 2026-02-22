import { testimonials } from "@/lib/data";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function Testimonial() {
  return (
    <Section>
      <Container>
        <div className="grid gap-6 lg:grid-cols-2">
          {testimonials.map((item) => (
            <Card key={item.name}>
              <p className="text-base text-slate-700">“{item.quote}”</p>
              <p className="mt-4 text-sm font-semibold text-slate-900">{item.name}</p>
              <p className="text-xs text-slate-500">{item.role}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
