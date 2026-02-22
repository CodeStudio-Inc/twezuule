import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import BlogPreview from "@/components/sections/BlogPreview";
import FeaturedStory from "@/components/sections/FeaturedStory";
import FocusAreasGrid from "@/components/sections/FocusAreasGrid";
import PartnerLogoGrid from "@/components/sections/PartnerLogoGrid";
import Stats from "@/components/sections/Stats";
import Testimonial from "@/components/sections/Testimonial";
import { getAllPosts } from "@/lib/content";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <div>
      <Section className="bg-gradient-to-br from-brand-50 via-white to-accent-50">
        <Container>
          <div className="grid items-center gap-10 rounded-[var(--radius)] border border-brand-100 bg-white/80 p-6 shadow-sm backdrop-blur lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
                Disability-led · Youth-driven
              </p>
              <h1 className="mt-4 text-4xl font-bold text-navy-900 sm:text-5xl">
                Empowering young people with disabilities to lead, thrive, and shape inclusive communities.
              </h1>
              <p className="mt-5 text-base text-slate-600">
                Twezuule Foundation champions rights, well-being, and economic opportunities by centering youth voices in health, livelihood, and policy spaces.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/donate">Support Our Work</Button>
                <Button href="/get-involved" variant="secondary">
                  Join Programs
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/placeholder.svg"
                alt="Young leaders with disabilities collaborating"
                width={640}
                height={420}
                className="rounded-[var(--radius)]"
                priority
              />
            </div>
          </div>
        </Container>
      </Section>

      <Stats />
      <FocusAreasGrid />
      <FeaturedStory />
      <Testimonial />
      <PartnerLogoGrid />
      <BlogPreview posts={posts} />
    </div>
  );
}
