import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import UserAvatar from "@/components/UserAvatar";
// import UserAvatar from "@/components/UserAvatar";
import { ZapIcon } from "lucide-react";
import PlanInfoBadge from "./PlanInfoBadge";
import Link from "next/link";

const Navbar = async () => {
  const session = await auth();

  if (!session || !session.user) return null;

  return (
    <header className="sticky top-0 z-50 flex h-[var(--navbar-height)] w-full items-center justify-between bg-foreground px-5">
      {/* PLAN INFO */}
      <PlanInfoBadge plan={session.user.plan} />

      {/* USER AVATAR */}
      <div className="flex items-center gap-5">
        {session.user.plan === "free" && (
          <Button asChild>
            <Link href="/dashboard/plan">
              <ZapIcon className="size-5" />
              Upgrade
            </Link>
          </Button>
        )}

        <UserAvatar
          name={session.user.name || ""}
          avatar={session.user.image || ""}
        />
      </div>
    </header>
  );
};

export default Navbar;
