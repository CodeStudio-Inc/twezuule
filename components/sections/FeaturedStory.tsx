import Image from "next/image";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function FeaturedStory() {
  return (
    <Section className="bg-white">
      <Container>
        <Reveal className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">Featured story</p>
            <h2 className="mt-3 text-3xl font-bold text-navy-900 sm:text-4xl">
              Youth-led advocacy for inclusive health services
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              A youth team in Wakiso partnered with local clinics to improve accessibility, signage, and respectful
              communication. The result: more young people with disabilities accessing services on their own terms.
            </p>
            <Button href="/impact" variant="secondary" className="mt-6">
              Read the impact story
            </Button>
          </div>
          <div>
            <Image
              src="/images/placeholder.svg"
              alt="Youth-led advocacy gathering"
              width={640}
              height={420}
              className="w-full rounded-2xl"
            />
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
