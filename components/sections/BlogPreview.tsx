import Link from "next/link";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { formatDate } from "@/lib/utils";

type BlogPreviewProps = {
  posts: Array<{
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    readingTime: string;
  }>;
};

export default function BlogPreview({ posts }: BlogPreviewProps) {
  return (
    <Section className="bg-brand-50">
      <Container>
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Latest news</h2>
            <p className="mt-2 text-sm text-slate-600">Stories and updates from our community.</p>
          </div>
          <Link href="/news" className="text-sm font-semibold text-brand-700">
            View all
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                className="mt-4 text-sm font-semibold text-brand-700"
              >
                Read more
              </Link>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
