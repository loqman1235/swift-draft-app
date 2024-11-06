import { AvatarImage } from "@radix-ui/react-avatar";
import { Avatar, AvatarFallback } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { LogOutIcon, SettingsIcon } from "lucide-react";
import Link from "next/link";

type UserAvatarProps = {
  user: {
    avatar?: string;
    name: string;
  };
};

const UserAvatar = ({ user }: UserAvatarProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-full outline-none">
        <Avatar>
          <AvatarImage
            src={user.avatar}
            className="h-full w-full object-cover"
          />
          <AvatarFallback>{user.name.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-[180px]" align="end">
        <DropdownMenuItem asChild>
          <Link href="/dashboard/settings">
            <SettingsIcon />
            <span>Settings</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <button className="w-full">
            <LogOutIcon />
            <span>Logout</span>
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAvatar;
