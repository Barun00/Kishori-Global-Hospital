import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";

const galleryItems = [
  {
    title: "Medical Camps",
    category: "Healthcare",
  },
  {
    title: "Awareness Programs",
    category: "Awareness",
  },
  {
    title: "Community Events",
    category: "Community",
  },
  {
    title: "Child Welfare",
    category: "Child Care",
  },
  {
    title: "Elderly Care",
    category: "Elderly Care",
  },
  {
    title: "Humanitarian Activities",
    category: "Humanitarian",
  },
];

export default function GalleryPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-[var(--primary-dark)] py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
              Gallery
            </p>

            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Moments That Inspire Change
            </h1>

            <p className="mt-6 text-lg leading-8 text-white/70">
              Explore moments from our healthcare, community and
              humanitarian initiatives.
            </p>
          </div>
        </Container>
      </section>

      {/* GALLERY */}
      <section className="py-20">
        <Container>
          <SectionTitle
            title="Our Gallery"
            subtitle="A glimpse into the work we do and the communities we serve."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
              >
                {/* CONTENT: Replace this with actual image */}
                <div className="flex aspect-[4/3] items-center justify-center bg-gray-100 transition duration-300 group-hover:bg-gray-200">
                  <div className="text-center">
                    <div className="text-5xl">📷</div>

                    <p className="mt-3 font-medium text-gray-500">
                      Gallery Image
                    </p>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-sm font-semibold uppercase tracking-wider text-[var(--primary)]">
                    {item.category}
                  </p>

                  <h2 className="mt-1 text-xl font-bold text-gray-900">
                    {item.title}
                  </h2>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}