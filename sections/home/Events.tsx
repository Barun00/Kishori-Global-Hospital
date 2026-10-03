import Link from "next/link";
import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";

const events = [
  {
    date: "Upcoming",
    title: "Community Healthcare Initiative",
    description:
      "An upcoming initiative focused on healthcare awareness and community support.",
    type: "Healthcare",
  },
  {
    date: "Upcoming",
    title: "Cancer Awareness Program",
    description:
      "Creating awareness around prevention, screening and early detection.",
    type: "Awareness",
  },
  {
    date: "Upcoming",
    title: "Community Outreach",
    description:
      "Connecting with communities and understanding the needs that matter most.",
    type: "Community",
  },
];

export default function Events() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <Container>

        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle
            title="Upcoming Events"
            subtitle="Join us in creating meaningful change through community action."
          />

          <Link
            href="/events"
            className="hidden shrink-0 text-sm font-bold text-[var(--primary)] transition hover:translate-x-1 sm:inline-flex"
          >
            View All Events →
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">

          {events.map((event) => (
            <article
              key={event.title}
              className="group overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-white shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-soft)]"
            >

              {/* EVENT VISUAL */}
              <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--primary-light)] via-[var(--accent-light)] to-[var(--lavender)]">

                <div
                  aria-hidden="true"
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/40 blur-2xl"
                />

                <div className="relative text-center">
                  <span className="text-5xl">📅</span>

                  <p className="mt-3 text-sm font-bold uppercase tracking-wider text-[var(--primary)]">
                    {event.date}
                  </p>
                </div>

              </div>

              {/* CONTENT */}
              <div className="p-6">

                <span className="inline-flex rounded-full bg-[var(--accent-light)] px-3 py-1 text-xs font-semibold text-[var(--primary)]">
                  {event.type}
                </span>

                <h3 className="mt-4 text-xl font-bold leading-snug text-[var(--heading)]">
                  {event.title}
                </h3>

                <p className="mt-3 leading-7 text-[var(--muted)]">
                  {event.description}
                </p>

                <Link
                  href="/events"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[var(--primary)] transition-all group-hover:gap-3"
                >
                  Learn More
                  <span aria-hidden="true">→</span>
                </Link>

              </div>

            </article>
          ))}

        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/events"
            className="brand-button-outline"
          >
            View All Events →
          </Link>
        </div>

      </Container>
    </section>
  );
}