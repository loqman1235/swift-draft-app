import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import UserAvatar from "@/components/UserAvatar";
import { ZapIcon } from "lucide-react";

const Navbar = () => {
  const user = {
    name: "John Doe",
    avatar: "/avatar.jpg",
  };

  return (
    <header className="flex h-[var(--navbar-height)] w-full items-center justify-between bg-foreground px-5">
      {/* PLAN INFO */}
      <div className="flex items-center gap-2">
        <span className="font-medium">Plan</span>
        <Badge variant="secondary">Free</Badge>
      </div>

      {/* USER AVATAR */}
      <div className="flex items-center gap-5">
        <Button>
          <ZapIcon className="size-5" />
          Upgrade
        </Button>
        <UserAvatar user={user} />
      </div>
    </header>
  );
};

export default Navbar;
