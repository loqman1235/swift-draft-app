import { Button } from "./ui/button";
import { FaGithub } from "react-icons/fa";
import { githubSignInAction } from "@/app/(auth)/actions";

const GithubSignInBtn = () => {
  return (
    <form action={githubSignInAction}>
      <Button className="w-full" variant="outline" type="submit">
        <FaGithub />
        Sign in with Github
      </Button>
    </form>
  );
};

export default GithubSignInBtn;
