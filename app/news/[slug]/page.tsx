import { notFound } from "next/navigation";
import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import { getAllPosts, getPostBySlug } from "@/lib/content";
import { formatDate } from "@/lib/utils";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return { title: "Post not found" };
  }
  return { title: post.title, description: post.excerpt };
}

export default async function NewsPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    notFound();
  }

  return (
    <div>
      <PageHeader
        title={post.title}
        description={post.excerpt}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "News", href: "/news" },
          { label: post.title },
        ]}
      />

      <Section>
        <Container>
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
            <Badge>{post.category}</Badge>
            <span>{formatDate(post.date)}</span>
            <span>{post.readingTime}</span>
          </div>
          <div className="mt-6">
            <Image
              src={post.coverImage}
              alt={post.title}
              width={960}
              height={520}
              className="rounded-[var(--radius)]"
            />
          </div>
          <article className="prose prose-slate mt-8 max-w-none">
            {post.content.map((block, index) => {
              if (block.type === "heading") {
                return <h2 key={index}>{block.text}</h2>;
              }
              if (block.type === "quote") {
                return <blockquote key={index}>{block.text}</blockquote>;
              }
              if (block.type === "list") {
                return (
                  <ul key={index}>
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                );
              }
              return <p key={index}>{block.text}</p>;
            })}
          </article>
        </Container>
      </Section>
    </div>
  );
}
