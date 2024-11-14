import { auth } from "@/auth";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import UserAvatar from "@/components/UserAvatar";
import { FREE_PLAN_EMAILS } from "@/constants";
// import UserAvatar from "@/components/UserAvatar";
import { ZapIcon } from "lucide-react";

const Navbar = async () => {
  const session = await auth();

  if (!session || !session.user) return null;

  return (
    <header className="sticky top-0 z-50 flex h-[var(--navbar-height)] w-full items-center justify-between bg-foreground px-5">
      {/* PLAN INFO */}
      <div className="flex items-center gap-2 text-sm">
        <span className="font-medium">Plan</span>
        <Badge
          className="flex items-center gap-1 bg-primary/10 text-xs"
          variant="secondary"
        >
          <span className="capitalize">{session.user.plan} </span>
          <span>
            ({FREE_PLAN_EMAILS - session.user.generatedEmails} emails left)
          </span>
        </Badge>
      </div>

      {/* USER AVATAR */}
      <div className="flex items-center gap-5">
        {session.user.plan === "free" && (
          <Button>
            <ZapIcon className="size-5" />
            Upgrade
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
