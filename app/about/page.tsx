import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import PrimaryButton from "@/components/buttons/PrimaryButton";

export default function AboutPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-[var(--primary-dark)] py-20">
        <Container>
          <div className="max-w-3xl">
            {/* CONTENT: Replace with final client content */}
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
              About Shakti Foundation
            </p>

            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Creating Hope Through Healthcare & Humanity
            </h1>

            {/* CONTENT: Replace with approved client introduction */}
            <p className="mt-6 text-lg leading-8 text-white/70">
              Shakti Foundation is committed to supporting individuals,
              families and communities through healthcare and humanitarian
              initiatives.
            </p>
          </div>
        </Container>
      </section>

      {/* ABOUT CONTENT */}
      <section className="py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">

            {/* IMAGE */}
            <div className="aspect-[4/3] rounded-3xl bg-gray-100">
              <div className="flex h-full items-center justify-center text-center">
                <div>
                  <div className="text-5xl">🤝</div>

                  {/* CONTENT: Replace with actual client image */}
                  <p className="mt-4 font-semibold">
                    Foundation Image
                  </p>
                </div>
              </div>
            </div>

            {/* TEXT */}
            <div>
              <SectionTitle
                title="Who We Are"
                subtitle="Our mission is to make meaningful impact."
              />

              {/* CONTENT: Replace with final About Us content */}
              <p className="mt-6 leading-8 text-gray-600">
                We work towards improving access to healthcare, supporting
                vulnerable communities and creating opportunities for
                individuals to live with dignity and hope.
              </p>

              {/* CONTENT: Add final mission statement */}
              <p className="mt-4 leading-8 text-gray-600">
                Our work brings together healthcare initiatives, community
                programs and humanitarian support.
              </p>

              <div className="mt-8">
                <PrimaryButton
                  text="Support Our Mission"
                  href="/donate"
                />
              </div>
            </div>

          </div>
        </Container>
      </section>
    </main>
  );
}