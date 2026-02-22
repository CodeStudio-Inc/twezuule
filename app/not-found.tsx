import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function NotFound() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-bold text-slate-900">Page not found</h1>
          <p className="mt-4 text-sm text-slate-600">
            Sorry, we couldn’t find the page you’re looking for. Explore our programs or return home.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/" className="rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white">
              Go home
            </Link>
            <Link href="/programs" className="rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700">
              View programs
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
