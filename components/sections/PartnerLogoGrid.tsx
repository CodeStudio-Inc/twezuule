import Image from "next/image";
import { partners } from "@/lib/data";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function PartnerLogoGrid() {
  return (
    <Section className="bg-white">
      <Container>
        <p className="text-center text-sm font-semibold uppercase tracking-wide text-slate-500">
          Trusted by community partners
        </p>
        <div className="mt-8 grid grid-cols-2 items-center gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center px-4 py-3 grayscale transition hover:grayscale-0"
            >
              <Image src={partner.logo} alt={partner.name} width={140} height={60} />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
