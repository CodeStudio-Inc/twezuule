import { notFound } from "next/navigation";
import ProgramDetail from "@/components/sections/ProgramDetail";
import { getProgramBySlug, getPrograms } from "@/lib/content";

export async function generateStaticParams() {
  return getPrograms().map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) {
    return { title: "Program not found" };
  }
  return { title: program.title, description: program.summary };
}

export default async function ProgramPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) {
    notFound();
  }

  return (
    <ProgramDetail
      program={program}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Programs", href: "/programs" },
        { label: program.title },
      ]}
    />
  );
}
