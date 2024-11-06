import Brand from "@/components/Brand";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HomeNavbar = () => {
  return (
    <header className="h-[var(--navbar-height)] w-full bg-foreground shadow-sm">
      <div className="m-auto flex h-full max-w-5xl items-center justify-between">
        <div className="flex items-center gap-10">
          <Brand />

          <ul className="flex items-center gap-5">
            <li>
              <Link
                className="font-semibold transition hover:text-primary"
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="font-semibold transition hover:text-primary"
                href="/"
              >
                About
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-5">
          <Link
            className="font-semibold transition hover:text-primary"
            href="/"
          >
            Login
          </Link>
          <Button asChild>
            <Link href="/signup">Try for free</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default HomeNavbar;
