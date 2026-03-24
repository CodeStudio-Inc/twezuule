import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

export const metadata = {
  title: "Donate",
};

export default function DonatePage() {
  return (
    <div>
      <PageHeader
        title="Support Our Work"
        description="Your support helps youth with disabilities access health information, livelihoods, and inclusive leadership opportunities."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Donate" }]}
      />

      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <h2 className="text-lg font-semibold text-slate-900">Donation options</h2>
              <p className="mt-3 text-sm text-slate-600">
                Use mobile money or bank transfer. We will provide receipts for transparency and accountability.
              </p>
              <div className="mt-4 space-y-2 text-sm text-slate-600">
                <p>Mobile Money: +256 700 000 000 (Placeholder)</p>
                <p>Bank: ABC Bank, Account 123456789 (Placeholder)</p>
                <p>Email for confirmations: finance@twezuule.org</p>
              </div>
            </Card>
            <Card>
              <h2 className="text-lg font-semibold text-slate-900">In-kind support</h2>
              <p className="mt-3 text-sm text-slate-600">
                Contribute assistive devices, training materials, accessibility tools, or meeting spaces.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
                <li>Assistive technology and mobility aids</li>
                <li>Training materials or data bundles</li>
                <li>Accessible transportation support</li>
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="bg-brand-50/40">
        <Container>
          <h2 className="text-2xl font-bold text-slate-900">Sponsorship tiers</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              { title: "Champion", amount: "$50 / month", detail: "Support health education sessions." },
              { title: "Advocate", amount: "$150 / month", detail: "Sponsor a leadership cohort." },
              { title: "Catalyst", amount: "$500 / month", detail: "Fund livelihoods training and mentorship." },
            ].map((tier) => (
              <Card key={tier.title}>
                <h3 className="text-lg font-semibold text-slate-900">{tier.title}</h3>
                <p className="mt-2 text-xl font-bold text-brand-700">{tier.amount}</p>
                <p className="mt-3 text-sm text-slate-600">{tier.detail}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
