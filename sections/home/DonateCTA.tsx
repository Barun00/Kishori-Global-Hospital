import Container from "@/components/common/Container";
import PrimaryButton from "@/components/buttons/PrimaryButton";

export default function DonateCTA() {
  return (
    <section className="bg-[var(--primary-dark)] py-20">
      <Container>
        <div className="rounded-3xl bg-white/10 px-6 py-14 text-center backdrop-blur-sm sm:px-12">

          {/* CONTENT: Replace with client's final CTA message */}
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Your contribution can change a life.
          </h2>

          {/* CONTENT: Add final supporting text from client */}
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/70">
            Your support can help us provide healthcare, care,
            education and hope to communities that need it most.
          </p>

          <div className="mt-8 flex justify-center">
            {/* CONTENT/LINK: Connect to final donation system */}
            <PrimaryButton
              text="Donate Now"
              href="/donate"
            />
          </div>

        </div>
      </Container>
    </section>
  );
}