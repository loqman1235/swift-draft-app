"use client";

import { LoaderCircle } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

const CallbackPage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

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

  useEffect(() => {
    if (status === "authenticated") {
      const stripePriceID = localStorage.getItem("stripePriceId");

      if (stripePriceID && session?.user?.email) {
        handlCreateCheckoutSession(stripePriceID, session.user.email);
        localStorage.removeItem("stripePriceId");
      } else {
        router.push("/dashboard");
      }
    }
  }, [status, session, router]);

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <LoaderCircle className="size-8 animate-spin text-primary" />
        <p className="text-sm">Please wait...</p>
      </div>
    </div>
  );
};

export default CallbackPage;
