"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { loadStripe } from "@stripe/stripe-js";
import Link from "next/link";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

type PaymentLinkProps = {
  href: string;
  // paymentLink?: string;
  priceId: string;
  text: string;
  isLoggedIn?: boolean;
  email?: string;
};

const PaymentLink = ({
  href,
  // paymentLink,
  priceId,
  text,
  isLoggedIn,
  email,
}: PaymentLinkProps) => {
  const handlCreateCheckoutSession = async (priceId: string, email: string) => {
    try {
      const stripe = await stripePromise;

      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ priceId, email }),
      });

      const { sessionId } = await response.json();
      if (stripe) {
        stripe.redirectToCheckout({ sessionId });
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (!priceId) {
    return (
      <Link href={href} className={buttonVariants()}>
        {text}
      </Link>
    );
  }

  return (
    <Button
      onClick={() => {
        if (priceId) {
          localStorage.setItem("stripePriceId", priceId);
        }

        if (isLoggedIn && priceId) {
          handlCreateCheckoutSession(priceId, email as string);
        }
      }}
    >
      {text}
    </Button>
  );
};

export default PaymentLink;
