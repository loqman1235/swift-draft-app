"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signUpAction } from "../actions";
import SignUpBtn from "./SignUpBtn";
import Link from "next/link";
import { useActionState } from "react";

const SignUpForm = () => {
  const [state, formAction] = useActionState(signUpAction, undefined);

  return (
    <Card className="w-full max-w-md p-4">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Sign Up</CardTitle>
      </CardHeader>

      <CardContent>
        <form action={formAction} className="space-y-4">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" name="name" placeholder="Name" />
            {state?.fieldErrors?.name && (
              <p className="text-sm text-red-700">{state.fieldErrors.name}</p>
            )}
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" name="email" placeholder="Email" />
            {state?.fieldErrors?.email && (
              <p className="text-sm text-red-700">{state.fieldErrors.email}</p>
            )}
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
            {state?.fieldErrors?.password && (
              <p className="text-sm text-red-700">
                {state.fieldErrors.password}
              </p>
            )}
          </div>

          <SignUpBtn />
        </form>

        <p className="mt-4 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link className="text-primary" href="/signin">
            Sign In
          </Link>
        </p>
      </CardContent>
    </Card>
  );
};

export default SignUpForm;
