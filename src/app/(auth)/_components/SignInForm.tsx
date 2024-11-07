"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { signInAction } from "../actions";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SignInBtn from "./SignInBtn";
import GithubSignInBtn from "@/components/GithubSignInBtn";
import Link from "next/link";
import GoogleSignInBtn from "@/components/GoogleSignInBtn";
import { useActionState } from "react";
const SignInForm = () => {
  const [state, formAction] = useActionState(signInAction, null);

  return (
    <Card className="w-full max-w-md p-4">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Sign In</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="mb-4 flex flex-col gap-4">
          <GithubSignInBtn />
          <GoogleSignInBtn />
        </div>
        <form action={formAction} className="space-y-4">
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

          <SignInBtn />
        </form>

        <p className="mt-4 text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link className="text-primary" href="/signup">
            Sign Up
          </Link>
        </p>
      </CardContent>
    </Card>
  );
};

export default SignInForm;
