"use client";

import { LoaderCircle } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const CallbackPage = () => {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    const stripePaymentLink = localStorage.getItem("stripePaymentLink");
    if (session && session.user && stripePaymentLink) {
      localStorage.removeItem("stripePaymentLink");
      router.push(stripePaymentLink + `?prefilled_email=${session.user.email}`);
    }
  }, [session, router]);

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
