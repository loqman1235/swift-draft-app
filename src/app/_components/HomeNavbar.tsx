import { auth } from "@/auth";
import Brand from "@/components/Brand";
import { Button } from "@/components/ui/button";
import UserAvatar from "@/components/UserAvatar";
import Link from "next/link";

const HomeNavbar = async () => {
  const session = await auth();

  return (
    <header className="h-[var(--navbar-height)] w-full">
      <div className="m-auto flex h-full max-w-7xl items-center justify-between px-10">
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

            {session && session.user && (
              <li>
                <Link
                  className="font-semibold transition hover:text-primary"
                  href="/dashboard"
                >
                  Dashboard
                </Link>
              </li>
            )}
          </ul>
        </div>

        <div className="flex items-center gap-5">
          {session && session.user ? (
            <UserAvatar
              name={session.user.name || ""}
              avatar={session.user.image || ""}
            />
          ) : (
            <>
              <Link
                className="font-semibold transition hover:text-primary"
                href="/signin"
              >
                Login
              </Link>
              <Button asChild>
                <Link href="/signup">Sign Up</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default HomeNavbar;
