import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="flex h-[calc(100vh-var(--navbar-height))] flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-balance text-5xl font-black tracking-tight">
        <span className="text-primary">Unlock</span> the Power of AI to
        Instantly <br />
        Create <span className="text-primary">Professional</span> Emails
      </h1>
      <p className="text-balance text-lg text-text-muted">
        Effortlessly generate professional emails tailored to your needs with
        the power of AI.
      </p>
      <Button className="py-6 text-lg" size="lg" asChild>
        <Link href="/sign-up">Let&apos;s Get Started</Link>
      </Button>
    </section>
  );
};

export default HeroSection;
