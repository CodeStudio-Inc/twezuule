import Breadcrumbs, { BreadcrumbItem } from "@/components/ui/Breadcrumbs";
import Container from "@/components/ui/Container";

type PageHeaderProps = {
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
};

export default function PageHeader({ title, description, breadcrumbs }: PageHeaderProps) {
  return (
    <div className="border-b border-slate-200 bg-white">
      <Container className="py-10">
        {breadcrumbs && breadcrumbs.length > 0 ? (
          <div className="mb-4">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        ) : null}
        <h1 className="text-3xl font-bold text-navy-900 sm:text-4xl">{title}</h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-base text-slate-600">{description}</p>
        ) : null}
      </Container>
    </div>
  );
}
