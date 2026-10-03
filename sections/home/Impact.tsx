import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";

const impactStats = [
  {
    value: "12,000+",
    label: "Patients Supported",
  },
  {
    value: "5,000+",
    label: "Lives Touched",
  },
  {
    value: "120+",
    label: "IVF Success Stories",
  },
  {
    value: "50+",
    label: "Cancer Camps",
  },
  {
    value: "25+",
    label: "Child Care Initiatives",
  },
  {
    value: "10+",
    label: "Years of Service",
  },
];

export default function Impact() {
  return (
    <section className="bg-[var(--primary-dark)] py-20">
      <Container>

        <SectionTitle
          title="Our Impact"
          subtitle="Together, we are creating meaningful change in communities."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">

          {impactStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur-sm"
            >
              <p className="text-3xl font-bold text-white sm:text-4xl">
                {stat.value}
              </p>

              <p className="mt-2 text-sm leading-5 text-white/70">
                {stat.label}
              </p>
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}