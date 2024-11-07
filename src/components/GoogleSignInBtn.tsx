import { Button } from "./ui/button";
import { FaGoogle } from "react-icons/fa";
import { googleSignInAction } from "@/app/(auth)/actions";

const GoogleSignInBtn = () => {
  return (
    <form action={googleSignInAction}>
      <Button className="w-full" variant="outline" type="submit">
        <FaGoogle />
        Sign in with Google
      </Button>
    </form>
  );
};

export default GoogleSignInBtn;
