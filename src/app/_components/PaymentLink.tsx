"use client";

import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

type PaymentLinkProps = {
  href: string;
  paymentLink?: string;
  text: string;
  isLoggedIn?: boolean;
  email?: string;
};

const PaymentLink = ({
  href,
  paymentLink,
  text,
  isLoggedIn,
  email,
}: PaymentLinkProps) => {
  if (!paymentLink) {
    return (
      <Link href={href} className={buttonVariants()}>
        {text}
      </Link>
    );
  }

  return (
    <Link
      href={
        isLoggedIn ? paymentLink + `?prefilled_email=${email}` || href : href
      }
      className={buttonVariants()}
      onClick={() => {
        if (paymentLink) {
          localStorage.setItem("stripePaymentLink", paymentLink);
        }
      }}
    >
      {text}
    </Link>
  );
};

export default PaymentLink;
