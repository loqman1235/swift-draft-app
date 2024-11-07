import PlanCard from "./PlanCard";

export const plans = [
  {
    name: "Free",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 0,
    period: "/ month",
    features: [
      "Limited to 5 emails per month",
      "Access to a few basic tones",
      "Limited to one primary language",
      "500 characters per email",
    ],
  },
  {
    name: "Monthly",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 10,
    period: "/ month",
    features: [
      "Up to 50 emails per month",
      "Access to all tones and moods",
      " Access to 3 major languages",
      "1000 characters per email",
    ],
  },
  {
    name: "Yearly",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 99,
    period: "/ year",
    features: [
      "Unlimited AI Email Generation",
      "Access to all tones and moods",
      "Full language support for all supported languages",
      "Unlimited characters per email",
      "Early Access to New Features",
    ],
  },
] as const;

const PricingSection = () => {
  return (
    <section className="min-h-screen p-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <div className="w-full text-center">
          <h1 className="text-2xl font-bold tracking-tight">Plans & Pricing</h1>
          <p className="text-text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
