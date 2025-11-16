"use client";

import { ArrowRight, CheckIcon, LoaderCircle } from "lucide-react";
import Link from "next/link";
import { redirect, useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

function SuccessContent() {
  const searchParams = useSearchParams();
  const session_id = searchParams.get("session_id");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (session_id) {
      fetch(`/api/verify-checkout-session?session_id=${session_id}`)
        .then((res) => res.json())
        .then((data) => setStatus(data.status))
        .finally(() => setLoading(false))
        .catch((err) => console.log(err));
    }
  }, [session_id]);

  if (!session_id) redirect("/");

  return (
    <div className="flex h-[calc(100vh-3.5rem)] w-full items-center justify-center">
      {loading ? (
        <div className="flex flex-col items-center gap-2">
          <LoaderCircle className="size-5 animate-spin" />
          <p className="text-muted-foreground">Please wait...</p>
        </div>
      ) : (
        <div className="">
          {status === "active" ? (
            <div className="flex flex-col items-center gap-2">
              <div className="flex flex-col items-center gap-2">
                <span className="rounded-full bg-green-500 p-1">
                  <CheckIcon className="size-5 text-white" />
                </span>
                <div className="flex flex-col gap-1 text-center">
                  <h1 className="text-xl font-bold tracking-tight">
                    Subscription Successfully Activated!
                  </h1>
                  <p className="text-center text-sm text-muted-foreground">
                    Thanks for subscribing! We are excited to have you on board.
                  </p>
                </div>
              </div>

              <Link
                className="mt-4 flex items-center gap-2 text-primary underline"
                href="/"
              >
                Go home
                <ArrowRight className="size-4" />
              </Link>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2"></div>
              <span className="rounded-full bg-red-500/10 p-0.5">
                <CheckIcon className="size-4 text-red-500" />
              </span>
              <h1 className="text-2xl font-bold tracking-tight">
                Failed to activate subscription, please try again
              </h1>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function LoadingFallback() {
  return (
    <div className="flex h-[calc(100vh-3.5rem)] w-full items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <LoaderCircle className="size-5 animate-spin" />
        <p className="text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}

const SuccessPage = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <SuccessContent />
    </Suspense>
  );
};

export default SuccessPage;