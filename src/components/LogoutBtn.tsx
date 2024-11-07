import { signOut } from "@/auth";
import { LogOutIcon } from "lucide-react";

const LogoutBtn = () => {
  return (
    <form
      action={async () => {
        "use server";

        await signOut();
      }}
    >
      <button type="submit" className="flex items-center gap-2">
        <LogOutIcon className="size-4" />
        <span>Logout</span>
      </button>
    </form>
  );
};

export default LogoutBtn;
