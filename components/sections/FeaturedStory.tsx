import Image from "next/image";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function FeaturedStory() {
  return (
    <Section>
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-600">Featured story</p>
            <h2 className="mt-3 text-2xl font-bold text-slate-900">Youth-led advocacy for inclusive health services</h2>
            <p className="mt-4 text-base text-slate-600">
              A youth team in Wakiso partnered with local clinics to improve accessibility, signage, and respectful communication.
              The result: more young people with disabilities accessing services on their own terms.
            </p>
            <Button href="/impact" variant="secondary" className="mt-6">
              Read the impact story
            </Button>
          </div>
          <div className="relative">
            <Image
              src="/images/placeholder.svg"
              alt="Youth-led advocacy gathering"
              width={640}
              height={420}
              className="rounded-[var(--radius)]"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
