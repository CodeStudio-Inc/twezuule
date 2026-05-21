import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { partners } from "@/lib/data";

export const metadata = {
  title: "Partners",
};

export default function PartnersPage() {
  return (
    <div>
      <PageHeader
        title="Partners"
        description="Trusted partners working with Twezuule Foundation to advance disability inclusion, policy advocacy, and community resilience."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Partners" }]}
      />

      <Section>
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {partners.map((partner) => (
              <Card key={partner.name} className="group overflow-hidden border border-slate-200 bg-slate-50 transition hover:-translate-y-0.5 hover:shadow-xl">
                <div className="flex h-28 items-center justify-center bg-white p-4 transition duration-300 group-hover:bg-white">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={220}
                    height={120}
                    className="h-full w-auto object-contain grayscale transition duration-300 group-hover:grayscale-0"
                  />
                </div>
                <div className="border-t border-slate-200 px-6 py-5">
                  <p className="text-base font-semibold text-slate-900">{partner.name}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
