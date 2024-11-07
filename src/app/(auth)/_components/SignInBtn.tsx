import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

const SignInBtn = () => {
  const { pending } = useFormStatus();

  return (
    <Button className="w-full" type="submit" disabled={pending}>
      {pending ? "Signing in..." : "Sign In"}
    </Button>
  );
};

export default SignInBtn;
