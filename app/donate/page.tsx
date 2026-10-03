import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";

const donationAmounts = [
  500,
  1000,
  2500,
  5000,
];

export default function DonatePage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-[var(--primary-dark)] py-20">
        <Container>
          <div className="max-w-3xl">
            {/* CONTENT: Replace with final client headline */}
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
              Support Our Mission
            </p>

            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Your Contribution Can Change a Life
            </h1>

            {/* CONTENT: Replace with approved client description */}
            <p className="mt-6 text-lg leading-8 text-white/70">
              Your support helps us continue healthcare initiatives,
              child welfare, elderly care and community programs.
            </p>
          </div>
        </Container>
      </section>

      {/* DONATION FORM */}
      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-2xl">

            <SectionTitle
              title="Make a Donation"
              subtitle="Choose an amount and provide your details to continue."
            />

            <form className="mt-12 space-y-6">

              {/* AMOUNT */}
              <div>
                <label className="mb-3 block text-sm font-medium text-gray-700">
                  Select Donation Amount
                </label>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {donationAmounts.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      className="rounded-xl border border-gray-200 px-4 py-3 font-semibold transition hover:border-[var(--primary)] hover:bg-gray-50"
                    >
                      ₹{amount}
                    </button>
                  ))}
                </div>
              </div>

              {/* CUSTOM AMOUNT */}
              <div>
                <label
                  htmlFor="customAmount"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Custom Amount
                </label>

                <input
                  id="customAmount"
                  name="customAmount"
                  type="number"
                  min="1"
                  placeholder="Enter amount in ₹"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[var(--primary)]"
                />
              </div>

              {/* NAME */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[var(--primary)]"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[var(--primary)]"
                />
              </div>

              {/* PHONE */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[var(--primary)]"
                />
              </div>

              {/* PURPOSE */}
              <div>
                <label
                  htmlFor="purpose"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Support a Cause
                </label>

                <select
                  id="purpose"
                  name="purpose"
                  defaultValue=""
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:border-[var(--primary)]"
                >
                  <option value="" disabled>
                    Select a cause
                  </option>

                  <option value="ivf">
                    IVF Support
                  </option>

                  <option value="cancer">
                    Cancer Awareness
                  </option>

                  <option value="child-welfare">
                    Child Welfare
                  </option>

                  <option value="elderly">
                    Elderly Care
                  </option>

                  <option value="health-camps">
                    Community Health Camps
                  </option>

                  <option value="general">
                    General Fund
                  </option>
                </select>
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="w-full rounded-xl bg-[var(--primary)] px-6 py-4 font-semibold text-white transition hover:opacity-90"
              >
                Continue to Donation
              </button>

              <p className="text-center text-xs text-gray-500">
                {/* CONTENT: Add legal/tax/payment information
                    after client confirms it. */}
                Secure payment processing will be connected here.
              </p>

            </form>
          </div>
        </Container>
      </section>
    </main>
  );
}