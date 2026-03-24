import Link from "next/link";
import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
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
    <Section className="bg-slate-50">
      <Container>
        <Reveal className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-navy-900 sm:text-4xl">Latest news</h2>
            <p className="mt-2 text-base text-slate-600">Stories and updates from our community.</p>
          </div>
          <Link href="/news" className="hidden text-sm font-semibold text-brand-600 hover:text-brand-700 sm:inline">
            View all \u2192
          </Link>
        </Reveal>
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Reveal key={post.slug}>
              <article className="flex h-full flex-col rounded-xl bg-white p-6 shadow-sm">
                <Badge>{post.category}</Badge>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{post.title}</h3>
                <p className="mt-2 flex-1 text-sm text-slate-600">{post.excerpt}</p>
                <div className="mt-4 text-xs text-slate-400">
                  {formatDate(post.date)} \u00b7 {post.readingTime}
                </div>
                <Link
                  href={`/news/${post.slug}`}
                  className="mt-4 text-sm font-semibold text-brand-600 hover:text-brand-700"
                >
                  Read more \u2192
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
        <Link
          href="/news"
          className="mt-8 block text-center text-sm font-semibold text-brand-600 hover:text-brand-700 sm:hidden"
        >
          View all news \u2192
        </Link>
      </Container>
    </Section>
  );
}
