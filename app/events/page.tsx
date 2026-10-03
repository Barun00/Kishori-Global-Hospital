import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import PrimaryButton from "@/components/buttons/PrimaryButton";

const events = [
  {
    type: "Health Camp",
    title: "Community Health Camp",
    date: "DATE TO BE ADDED",
    location: "LOCATION TO BE ADDED",
  },
  {
    type: "Awareness Drive",
    title: "Cancer Awareness & Screening Drive",
    date: "DATE TO BE ADDED",
    location: "LOCATION TO BE ADDED",
  },
  {
    type: "Fundraising Event",
    title: "Community Fundraising Event",
    date: "DATE TO BE ADDED",
    location: "LOCATION TO BE ADDED",
  },
  {
    type: "Community Program",
    title: "Community Support Program",
    date: "DATE TO BE ADDED",
    location: "LOCATION TO BE ADDED",
  },
];

export default function EventsPage() {
  return (
    <main>

      {/* PAGE HERO */}
      <section className="bg-[var(--primary-dark)] py-20">
        <Container>
          <div className="max-w-3xl">

            {/* CONTENT: Replace with final client headline */}
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
              Events
            </p>

            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Join Us in Making a Difference
            </h1>

            {/* CONTENT: Replace with final client description */}
            <p className="mt-6 text-lg leading-8 text-white/70">
              Discover upcoming health camps, awareness drives,
              fundraising events and community programs.
            </p>

          </div>
        </Container>
      </section>

      {/* EVENTS LIST */}
      <section className="py-20">
        <Container>

          <SectionTitle
            title="Upcoming Events"
            subtitle="Be part of our upcoming initiatives."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">

            {events.map((event) => (
              <article
                key={event.title}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
              >

                {/* CONTENT: Replace with actual event image */}
                <div className="flex aspect-[16/7] items-center justify-center bg-gray-100">
                  <span className="text-5xl">📅</span>
                </div>

                <div className="p-7">

                  {/* CONTENT: Event category */}
                  <p className="text-sm font-semibold uppercase tracking-wider text-[var(--primary)]">
                    {event.type}
                  </p>

                  {/* CONTENT: Final event title */}
                  <h2 className="mt-2 text-2xl font-bold text-gray-900">
                    {event.title}
                  </h2>

                  <div className="mt-5 space-y-2 text-gray-600">

                    {/* CONTENT: Add actual date */}
                    <p>
                      📅 {event.date}
                    </p>

                    {/* CONTENT: Add actual location */}
                    <p>
                      📍 {event.location}
                    </p>

                  </div>

                  <div className="mt-6">
                    {/* CONTENT/LINK: Connect registration later */}
                    <PrimaryButton
                      text="Register / Learn More"
                      href="/contact"
                    />
                  </div>

                </div>

              </article>
            ))}

          </div>

        </Container>
      </section>

    </main>
  );
}