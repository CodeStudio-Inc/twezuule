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
      <Container className="py-11 sm:py-14">
        {breadcrumbs && breadcrumbs.length > 0 ? (
          <div className="mb-4">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        ) : null}
        <h1 className="max-w-4xl text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">{title}</h1>
        {description ? (
          <p className="mt-4 max-w-3xl text-base text-slate-600 sm:text-lg">{description}</p>
        ) : null}
      </Container>
    </div>
  );
}
