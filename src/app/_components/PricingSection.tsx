import { plans } from "@/data";
import PlanCard from "./PlanCard";

const PricingSection = () => {
  return (
    <section id="pricing" className="min-h-screen p-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-10">
        <div className="w-full text-center">
          <h1 className="text-2xl font-bold tracking-tight">Plans & Pricing</h1>
          <p className="text-pretty text-muted-foreground">
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
