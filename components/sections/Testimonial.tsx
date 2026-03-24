import { testimonials } from "@/lib/data";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function Testimonial() {
  return (
    <section className="bg-brand-600 py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">What our community says</h2>
        </Reveal>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {testimonials.map((item) => (
            <Reveal key={item.name}>
              <blockquote className="rounded-2xl bg-white/10 p-8">
                <p className="text-lg leading-relaxed text-white/90">&ldquo;{item.quote}&rdquo;</p>
                <footer className="mt-6">
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="text-sm text-white/60">{item.role}</p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}