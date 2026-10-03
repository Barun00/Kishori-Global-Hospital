import Link from "next/link";
import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";

const causes = [
  {
    icon: "❤️",
    title: "Charitable IVF Support",
    description:
      "Providing fertility treatment assistance to deserving families who need support.",
    href: "/programs",
  },
  {
    icon: "🎗️",
    title: "Cancer Awareness & Screening",
    description:
      "Promoting awareness, prevention and early detection through community initiatives.",
    href: "/programs",
  },
  {
    icon: "🧒",
    title: "Child Welfare",
    description:
      "Supporting children through healthcare, education, care and opportunities.",
    href: "/programs",
  },
  {
    icon: "🤝",
    title: "Elderly Care",
    description:
      "Helping senior citizens with compassionate care, healthcare and community support.",
    href: "/programs",
  },
  {
    icon: "🏥",
    title: "Community Health Camps",
    description:
      "Bringing essential healthcare awareness and services closer to underserved communities.",
    href: "/programs",
  },
];

export default function Causes() {
  return (
    <section className="section-soft py-20 sm:py-24 lg:py-28">
      <Container>

        {/* SECTION HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[var(--accent-light)] px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />

            <span className="text-sm font-semibold text-[var(--primary)]">
              What We Do
            </span>
          </div>

          <SectionTitle
            title="Our Causes"
            subtitle="Supporting communities through healthcare, care and compassion."
          />
        </div>

        {/* CAUSE CARDS */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {causes.map((cause) => (
            <article
              key={cause.title}
              className="soft-card group relative overflow-hidden p-7 sm:p-8"
            >
              {/* Decorative glow */}
              <div
                aria-hidden="true"
                className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[var(--accent-light)] opacity-0 blur-2xl transition duration-500 group-hover:opacity-100"
              />

              {/* ICON */}
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--accent-light)] to-[var(--lavender)] text-3xl shadow-sm transition duration-300 group-hover:scale-105">
                {cause.icon}
              </div>

              {/* CONTENT */}
              <div className="relative mt-7">

                <h3 className="text-xl font-bold leading-snug text-[var(--heading)] sm:text-2xl">
                  {cause.title}
                </h3>

                <p className="mt-4 leading-7 text-[var(--muted)]">
                  {cause.description}
                </p>

                {/* LINK */}
                <Link
                  href={cause.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[var(--primary)] transition-all group-hover:gap-3"
                >
                  Learn More
                  <span aria-hidden="true">→</span>
                </Link>

              </div>
            </article>
          ))}

        </div>

        {/* BOTTOM CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/programs"
            className="brand-button-outline"
          >
            Explore All Programs
            <span aria-hidden="true">→</span>
          </Link>
        </div>

      </Container>
    </section>
  );
}