import Image from "next/image";
import { partners } from "@/lib/data";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function PartnerLogoGrid() {
  return (
    <Section className="bg-white">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Trusted by community partners
        </p>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {partners.map((partner) => (
            <div key={partner.name} className="flex items-center justify-center rounded-xl border border-brand-100 bg-brand-50 p-4">
              <Image src={partner.logo} alt={partner.name} width={160} height={80} />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
