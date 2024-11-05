import { AvatarImage } from "@radix-ui/react-avatar";
import { Avatar, AvatarFallback } from "./ui/avatar";

type UserAvatarProps = {
  user: {
    avatar?: string;
    name: string;
  };
};

const UserAvatar = ({ user }: UserAvatarProps) => {
  return (
    <Avatar>
      <AvatarImage src={user.avatar} className="h-full w-full object-cover" />
      <AvatarFallback>{user.name.slice(0, 2).toUpperCase()}</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
