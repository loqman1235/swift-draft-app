import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

const SignUpBtn = () => {
  const { pending } = useFormStatus();

  return (
    <Button className="w-full" type="submit" disabled={pending}>
      {pending ? "Signing up..." : "Sign Up"}
    </Button>
  );
};

export default SignUpBtn;
