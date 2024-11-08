import { cn, formatMoney } from "@/lib/utils";
import { CheckIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { plans } from "@/data";
import PaymentLink from "./PaymentLink";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { Button } from "@/components/ui/button";

type PlanCardProps = {
  plan: (typeof plans)[number];
  className?: string;
};

const PlanCard = async ({ plan, className }: PlanCardProps) => {
  const session = await auth();
  const user = await prisma.user.findUnique({
    where: {
      id: session?.user?.id || "",
    },
    include: {
      subscription: {
        select: {
          period: true,
        },
      },
    },
  });

  return (
    <div
      className={cn(
        "w-full rounded-md border border-border bg-foreground p-5",
        className,
      )}
    >
      <div className="flex flex-col gap-2 border-b border-b-border pb-5">
        <div className="flex flex-col gap-2">
          <div className="flex w-full items-center justify-between">
            <h3 className="text-lg font-bold">{plan.name}</h3>
            <Badge variant="secondary">
              {plan.isPopular && "Most Popular"}
            </Badge>
          </div>
          <p className="text-3xl font-bold tracking-tight">
            {formatMoney(plan.price)}{" "}
            <span className="text-sm font-normal tracking-normal text-muted-foreground">
              {plan.period}
            </span>
          </p>
          <p className="text-sm text-muted-foreground">{plan.description}</p>
        </div>
        {user?.subscription?.period === plan.name.toLocaleLowerCase() ? (
          <Button className="w-full" disabled>
            Current Plan
          </Button>
        ) : (
          <PaymentLink
            href={plan.href}
            paymentLink={plan.paymentLink}
            text="Get Started"
            isLoggedIn={!!session?.user}
            email={session?.user?.email || ""}
          />
        )}
      </div>
      <div className="flex flex-col gap-3 pt-5">
        {plan.features.map((feature) => (
          <div
            key={feature}
            className="flex items-center gap-2 text-sm font-medium"
          >
            <CheckIcon className="size-4 text-primary" />
            <span className="font-normal">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanCard;
