import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import VolunteerForm from "@/components/forms/VolunteerForm";
import PartnershipForm from "@/components/forms/PartnershipForm";

export const metadata = {
  title: "Get Involved",
};

export default function GetInvolvedPage() {
  return (
    <div>
      <PageHeader
        title="Get Involved"
        description="Volunteer, mentor, or partner with Twezuule Foundation to create inclusive opportunities."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Get Involved" }]}
      />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Volunteer with us</h2>
              <p className="mt-3 text-sm text-slate-600">
                Share your skills to support youth-led programs, outreach, and inclusive advocacy.
              </p>
              <div className="mt-6">
                <VolunteerForm />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Mentorship & partnerships</h2>
              <p className="mt-3 text-sm text-slate-600">
                Collaborate with us on mentorship, funding, or inclusive employment pathways.
              </p>
              <div className="mt-6">
                <PartnershipForm />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-brand-50">
        <Container>
          <Card>
            <h2 className="text-2xl font-bold text-slate-900">Employ a youth with disability</h2>
            <p className="mt-3 text-sm text-slate-600">
              Private sector partners can offer inclusive internships, apprenticeships, and jobs. We provide accessibility guidance and candidate matching.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
              <li>Inclusive hiring support and workplace adjustments</li>
              <li>Skills matching with trained youth candidates</li>
              <li>Ongoing mentorship and peer support</li>
            </ul>
            <p className="mt-4 text-sm font-semibold text-brand-700">Email: partnerships@twezuule.org</p>
          </Card>
        </Container>
      </Section>
    </div>
  );
}
