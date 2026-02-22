import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function Loading() {
  return (
    <Section>
      <Container>
        <div className="animate-pulse space-y-4">
          <div className="h-6 w-48 rounded bg-slate-200" />
          <div className="h-4 w-full rounded bg-slate-200" />
          <div className="h-4 w-5/6 rounded bg-slate-200" />
        </div>
      </Container>
    </Section>
  );
}
