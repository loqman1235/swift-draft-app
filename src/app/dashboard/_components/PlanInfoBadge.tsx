"use client";

import { Badge } from "@/components/ui/badge";
import { Plan } from "@prisma/client";
import { useEmailContext } from "../_context/EmailProvider";

type PlanCardProps = {
  plan: Plan;
};

const PlanInfoBadge = ({ plan }: PlanCardProps) => {
  const { emailUsage } = useEmailContext();

  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="font-medium">Plan</span>
      <Badge
        className="flex items-center gap-1 bg-primary/10 text-xs"
        variant="secondary"
      >
        <span className="capitalize">{plan} </span>
        {emailUsage !== null && emailUsage > 0 && (
          <span>( {emailUsage} emails left)</span>
        )}
      </Badge>
    </div>
  );
};
export default PlanInfoBadge;
