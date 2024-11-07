import { Button } from "@/components/ui/button";
import { plans } from "./PricingSection";
import { formatMoney } from "@/lib/utils";
import { CheckIcon } from "lucide-react";

const PlanCard = ({ plan }: { plan: (typeof plans)[number] }) => {
  return (
    <div className="w-full rounded-md border border-border bg-foreground p-5">
      <div className="flex flex-col gap-2 border-b border-b-border pb-5">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">{plan.name}</h3>
          <p className="text-3xl font-bold tracking-tight">
            {formatMoney(plan.price)}{" "}
            <span className="text-sm font-normal text-muted-foreground">
              {plan.period}
            </span>
          </p>
          <p className="text-sm text-muted-foreground">{plan.description}</p>
        </div>
        <Button size="lg" className="w-full">
          Get Started
        </Button>
      </div>
      <div className="flex flex-col gap-3 pt-5">
        {plan.features.map((feature) => (
          <div
            key={feature}
            className="flex items-center gap-2 text-sm font-medium"
          >
            <CheckIcon className="size-4 text-primary" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanCard;
