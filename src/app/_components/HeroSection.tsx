import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="flex h-[calc(100vh-var(--navbar-height))] flex-col items-center justify-center gap-4 p-10 text-center">
      <h1 className="text-pretty text-4xl font-black tracking-tight md:text-5xl">
        <span className="text-gradient">Unlock</span> the Power of AI to
        Instantly <br />
        Create <span className="text-gradient">Professional</span> Emails
      </h1>
      <p className="text-pretty text-base md:text-lg">
        Effortlessly generate professional emails tailored to your needs with
        the power of AI.
      </p>
      <Button
        className="rounded-full py-6 text-base md:text-lg"
        size="lg"
        asChild
      >
        <Link href="/signup">Sign Up for Free</Link>
      </Button>
    </section>
  );
};

export default HeroSection;
