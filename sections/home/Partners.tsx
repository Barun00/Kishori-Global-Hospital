import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";

const partners = [
  {
    name: "CSR Partners",
  },
  {
    name: "Hospitals",
  },
  {
    name: "Medical Institutions",
  },
  {
    name: "Community Organizations",
  },
];

export default function Partners() {
  return (
    <section className="bg-white py-20">
      <Container>

        <SectionTitle
          title="Partners & Supporters"
          subtitle="Together with organizations working towards a healthier and more compassionate society."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">

          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex min-h-32 items-center justify-center rounded-2xl border border-gray-100 bg-gray-50 p-6 text-center"
            >
              {/* CONTENT: Replace with partner logo */}

              <div>
                <div className="mb-3 text-3xl">🤝</div>

                <p className="font-semibold text-gray-700">
                  {partner.name}
                </p>
              </div>
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}