import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";

const stories = [
  {
    category: "IVF Support",
    title: "A Journey Towards Parenthood",
    description:
      "A family received fertility treatment support and moved closer to fulfilling their dream of parenthood.",
  },
  {
    category: "Cancer Awareness",
    title: "Early Awareness, Better Hope",
    description:
      "Community awareness and screening initiatives helped people understand the importance of early detection.",
  },
  {
    category: "Child Welfare",
    title: "Supporting a Brighter Future",
    description:
      "Children received support for education, healthcare and overall development.",
  },
  {
    category: "Elderly Care",
    title: "Care With Dignity",
    description:
      "Senior citizens received healthcare assistance, companionship and welfare support.",
  },
];

export default function SuccessStories() {
  return (
    <section className="bg-white py-20">
      <Container>

        <SectionTitle
          title="Success Stories"
          subtitle="Real people. Real journeys. Real impact."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">

          {stories.map((story) => (
            <article
              key={story.title}
              className="overflow-hidden rounded-2xl border border-gray-100 bg-gray-50"
            >
              {/* CONTENT: Replace with client's real story image */}

              <div className="flex aspect-[16/9] items-center justify-center bg-gray-200">
                <div className="text-center text-gray-500">
                  <div className="mb-2 text-4xl">❤️</div>

                  <p className="font-medium">
                    Story Image
                  </p>

                  <p className="text-sm">
                    {/* CONTENT: Add client photograph here */}
                    Real beneficiary photograph
                  </p>
                </div>
              </div>

              <div className="p-6">

                {/* CONTENT: Replace with final category */}
                <p className="text-sm font-semibold uppercase tracking-wider text-[var(--primary)]">
                  {story.category}
                </p>

                {/* CONTENT: Replace with final story title */}
                <h3 className="mt-2 text-2xl font-bold text-gray-900">
                  {story.title}
                </h3>

                {/* CONTENT: Replace with approved story */}
                <p className="mt-3 leading-7 text-gray-600">
                  {story.description}
                </p>

              </div>
            </article>
          ))}

        </div>

      </Container>
    </section>
  );
}  