import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import ContactForm from "@/components/forms/ContactForm";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        title="Contact"
        description="Reach out to Twezuule Foundation for partnerships, program participation, or general inquiries."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Send a message</h2>
              <p className="mt-3 text-sm text-slate-600">
                We aim to respond within 2–3 business days.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Visit or connect</h2>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                <p>Office: Kampala, Uganda (placeholder address)</p>
                <p>Email: info@twezuule.org</p>
                <p>Phone: +256 700 000 000 (placeholder)</p>
              </div>
              <Card className="mt-6">
                <div className="flex h-48 items-center justify-center rounded-lg border border-dashed border-slate-300 text-sm text-slate-500">
                  Map placeholder
                </div>
              </Card>
              <div className="mt-6 text-sm text-slate-600">
                <p>Social links: Facebook · Instagram · LinkedIn · X (placeholders)</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
