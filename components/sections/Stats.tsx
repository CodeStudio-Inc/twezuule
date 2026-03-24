import { stats } from "@/lib/data";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function Stats() {
  return (
    <section className="bg-brand-600 py-14">
      <Container>
        <Reveal className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-bold text-white">{stat.value}</p>
              <p className="mt-1 text-sm text-white/70">{stat.label}</p>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
