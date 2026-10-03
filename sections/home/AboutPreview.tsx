import Link from "next/link";
import Container from "@/components/common/Container";

export default function AboutPreview() {
  return (
    <section className="section-lavender py-20 sm:py-24 lg:py-28">
      <Container>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* VISUAL */}
          <div className="relative mx-auto w-full max-w-xl">

            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white bg-white p-3 shadow-[0_25px_70px_rgba(194,24,91,0.10)]">

              {/* CLIENT IMAGE:
                  Replace this placeholder with an approved
                  Shakti Foundation photograph. */}

              <div className="flex h-full items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-[var(--primary-light)] via-[var(--accent-light)] to-[var(--lavender)]">

                <div className="px-8 text-center">

                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white text-4xl shadow-md">
                    ❤️
                  </div>

                  <p className="mt-6 text-xl font-bold text-[var(--heading)]">
                    Compassion in Action
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                    Building healthier and stronger communities together.
                  </p>

                </div>

              </div>
            </div>

            {/* FLOATING BADGE */}
            <div className="absolute -bottom-5 -right-3 rounded-2xl border border-white bg-white px-5 py-4 shadow-[0_15px_40px_rgba(31,35,51,0.10)] sm:-right-6">

              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                Our Mission
              </p>

              <p className="mt-1 font-bold text-[var(--primary)]">
                Hope • Care • Impact
              </p>

            </div>

          </div>

          {/* CONTENT */}
          <div>

            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[var(--accent-light)] px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />

              <span className="text-sm font-semibold text-[var(--primary)]">
                About Shakti Foundation
              </span>
            </div>

            <h2 className="text-4xl font-bold leading-tight tracking-tight text-[var(--heading)] sm:text-5xl">
              Turning
              <span className="brand-text"> Compassion </span>
              Into Action.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
              Shakti Foundation is committed to creating meaningful
              change by supporting people and communities through
              healthcare, humanitarian service and compassionate action.
            </p>

            <p className="mt-4 leading-7 text-[var(--muted)]">
              Our work focuses on identifying genuine community needs
              and creating initiatives that can make a lasting difference.
            </p>

            {/* HIGHLIGHTS */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              <div className="rounded-2xl border border-[var(--border)] bg-white p-5">
                <p className="text-2xl font-bold text-[var(--primary)]">
                  Healthcare
                </p>

                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  Supporting access to essential healthcare and awareness.
                </p>
              </div>

              <div className="rounded-2xl border border-[var(--border)] bg-white p-5">
                <p className="text-2xl font-bold text-[var(--primary)]">
                  Humanity
                </p>

                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  Helping communities with compassion and dignity.
                </p>
              </div>

            </div>

            {/* CTA */}
            <div className="mt-8">
              <Link
                href="/about"
                className="brand-button"
              >
                Discover Our Story
                <span aria-hidden="true">→</span>
              </Link>
            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}