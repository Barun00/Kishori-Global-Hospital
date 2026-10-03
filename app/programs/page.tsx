import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import PrimaryButton from "@/components/buttons/PrimaryButton";

const programs = [
  {
    title: "Charitable IVF Support",
    description:
      "Supporting deserving families with fertility treatment assistance and guidance.",
    icon: "❤️",
  },
  {
    title: "Cancer Awareness & Screening",
    description:
      "Promoting cancer awareness, prevention and early screening within communities.",
    icon: "🎗️",
  },
  {
    title: "Orphan Care & Child Welfare",
    description:
      "Supporting children's education, healthcare, wellbeing and development.",
    icon: "🧒",
  },
  {
    title: "Elderly Care Programs",
    description:
      "Providing care, healthcare assistance and support for senior citizens.",
    icon: "🤝",
  },
  {
    title: "Community Health Camps",
    description:
      "Bringing healthcare awareness and basic health services to underserved communities.",
    icon: "🏥",
  },
];

export default function ProgramsPage() {
  return (
    <main>

      {/* PAGE HERO */}
      <section className="bg-[var(--primary-dark)] py-20">
        <Container>
          <div className="max-w-3xl">

            {/* CONTENT: Replace with final client headline */}
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
              Our Programs
            </p>

            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Creating Impact Through Action
            </h1>

            {/* CONTENT: Replace with final client introduction */}
            <p className="mt-6 text-lg leading-8 text-white/70">
              Our programs focus on healthcare, child welfare, elderly care
              and community support.
            </p>

          </div>
        </Container>
      </section>

      {/* PROGRAMS */}
      <section className="py-20">
        <Container>

          <SectionTitle
            title="Our Causes"
            subtitle="Explore the initiatives where your support can make a difference."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {programs.map((program) => (
              <article
                key={program.title}
                className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >

                {/* CONTENT: Replace icon with final program image/icon */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-3xl">
                  {program.icon}
                </div>

                {/* CONTENT: Final program title */}
                <h2 className="text-2xl font-bold text-gray-900">
                  {program.title}
                </h2>

                {/* CONTENT: Final program description */}
                <p className="mt-4 leading-7 text-gray-600">
                  {program.description}
                </p>

                <div className="mt-6">
                  {/* CONTENT/LINK: Connect to program detail page later */}
                  <PrimaryButton
                    text="Learn More"
                    href="/contact"
                  />
                </div>

              </article>
            ))}

          </div>

        </Container>
      </section>

    </main>
  );
}