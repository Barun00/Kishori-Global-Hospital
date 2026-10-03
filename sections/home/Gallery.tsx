import Link from "next/link";
import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";

const galleryItems = [
  {
    title: "Healthcare",
    label: "Community Care",
    gradient:
      "from-[var(--primary-light)] to-[var(--accent-light)]",
  },
  {
    title: "Awareness",
    label: "Creating Awareness",
    gradient:
      "from-[var(--accent-light)] to-[var(--lavender)]",
  },
  {
    title: "Community",
    label: "Together for Change",
    gradient:
      "from-[var(--lavender)] to-[var(--primary-light)]",
  },
  {
    title: "Humanity",
    label: "Compassion in Action",
    gradient:
      "from-[var(--primary-light)] to-[var(--lavender)]",
  },
];

export default function Gallery() {
  return (
    <section className="section-soft py-20 sm:py-24 lg:py-28">
      <Container>

        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle
            title="Moments That Matter"
            subtitle="A glimpse into the people, communities and initiatives we support."
          />

          <Link
            href="/gallery"
            className="hidden shrink-0 text-sm font-bold text-[var(--primary)] transition hover:translate-x-1 sm:inline-flex"
          >
            View Gallery →
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">

          {galleryItems.map((item) => (
            <Link
              key={item.title}
              href="/gallery"
              className="group relative aspect-square overflow-hidden rounded-[var(--radius-lg)] border border-white bg-white shadow-[var(--shadow-card)]"
            >

              {/* TEMPORARY VISUAL */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`}
              />

              <div className="absolute inset-0 flex items-center justify-center">

                <div className="text-center transition duration-300 group-hover:scale-105">

                  <div className="text-4xl">
                    📸
                  </div>

                  <p className="mt-3 text-sm font-bold text-[var(--heading)]">
                    {item.title}
                  </p>

                  <p className="mt-1 px-3 text-xs text-[var(--muted)]">
                    {item.label}
                  </p>

                </div>

              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[var(--primary)]/0 transition duration-300 group-hover:bg-[var(--primary)]/5" />

            </Link>
          ))}

        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/gallery"
            className="brand-button-outline"
          >
            View Gallery →
          </Link>
        </div>

      </Container>
    </section>
  );
}