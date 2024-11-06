import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="flex h-[calc(100vh-var(--navbar-height))] flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-5xl font-black tracking-tight">
        Create <span className="text-primary">Perfect</span> Emails in Seconds
        with <span className="text-primary">AI</span>
      </h1>
      <p className="text-text-muted">
        Effortlessly generate professional emails tailored to your needs with
        the power of AI.
      </p>
      <Button className="rounded-xl py-6 text-lg" size="lg" asChild>
        <Link href="/signup">Try it Now</Link>
      </Button>
    </div>
  );
};

export default HeroSection;
