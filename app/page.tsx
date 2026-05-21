import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import BlogPreview from "@/components/sections/BlogPreview";
import FeaturedStory from "@/components/sections/FeaturedStory";
import FocusAreasGrid from "@/components/sections/FocusAreasGrid";
import PartnerLogoGrid from "@/components/sections/PartnerLogoGrid";
import Stats from "@/components/sections/Stats";
import Testimonial from "@/components/sections/Testimonial";
import Reveal from "@/components/ui/Reveal";
import { getAllPosts } from "@/lib/content";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);
  const heroImage =
    "https://res.cloudinary.com/dunddp3iw/image/upload/v1771272471/WhatsApp_Image_2026-02-16_at_8.13.40_PM_uzudja.jpg";

  return (
    <>
      {/* Hero — full bleed */}
      <section className="relative min-h-[75vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Twezuule Foundation youth inclusion program"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950/70 via-navy-900/45 to-navy-950/80" />
        </div>
        <Container className="relative z-10 py-24 lg:py-36">
          <Reveal className="max-w-3xl">
            <h1 className="text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Giving young people with disabilities the opportunity to lead and thrive.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
              Twezuule Foundation champions the rights, well-being, and empowerment of youth with disabilities — promoting access to health care, livelihood opportunities, and meaningful participation in community decision-making.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/donate">Donate Now</Button>
              <Button
                href="/get-involved"
                variant="ghost"
                className="border border-white/30 text-white hover:bg-white/10"
              >
                Get Involved
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <Stats />
      <FocusAreasGrid />
      <FeaturedStory />
      <Testimonial />
      <PartnerLogoGrid />
      <BlogPreview posts={posts} />
    </>
  );
}
