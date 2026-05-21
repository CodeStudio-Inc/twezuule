import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { boardMembers } from "@/lib/data";

export const metadata = {
  title: "Board",
};

export default function BoardPage() {
  return (
    <div>
      <PageHeader
        title="Board Members"
        description="Meet the leadership team guiding Twezuule Foundation with experience, accountability, and inclusive vision."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Board" }]}
      />

      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {boardMembers.map((member) => (
              <Card key={member.name} className="space-y-4">
                <div className="overflow-hidden rounded-[var(--radius)] bg-slate-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={600}
                    height={420}
                    className="h-64 w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-lg font-semibold text-slate-900">{member.name}</p>
                  <p className="mt-1 text-sm text-slate-600">{member.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
