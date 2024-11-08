import { auth } from "@/auth";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import UserAvatar from "@/components/UserAvatar";
// import UserAvatar from "@/components/UserAvatar";
import { ZapIcon } from "lucide-react";

const Navbar = async () => {
  const session = await auth();

  if (!session || !session.user) return null;

  return (
    <header className="sticky top-0 z-50 flex h-[var(--navbar-height)] w-full items-center justify-between bg-foreground px-5">
      {/* PLAN INFO */}
      <div className="flex items-center gap-2">
        <span className="font-medium">Plan</span>
        <Badge className="uppercase" variant="secondary">
          {session.user.plan}
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
