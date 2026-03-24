import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { getAllPosts } from "@/lib/content";
import { formatDate } from "@/lib/utils";

export const metadata = {
  title: "News",
};

const categories = ["Health", "Livelihoods", "Advocacy", "Talent", "Leadership"];

export default function NewsPage() {
  const posts = getAllPosts();

  return (
    <div>
      <PageHeader
        title="News and stories"
        description="Updates, insights, and youth-led stories from Twezuule Foundation."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "News" }]}
      />

      <Section>
        <Container>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Badge key={category}>{category}</Badge>
            ))}
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Card key={post.slug} className="flex h-full flex-col">
                <Badge>{post.category}</Badge>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{post.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{post.excerpt}</p>
                <div className="mt-4 text-xs text-slate-500">
                  {formatDate(post.date)} · {post.readingTime}
                </div>
                <Link
                  href={`/news/${post.slug}`}
                  className="mt-4 inline-flex w-fit rounded-full border border-brand-200 px-4 py-1.5 text-sm font-semibold text-brand-700 hover:bg-brand-50"
                >
                  Read more
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
