import { auth } from "@/auth";
import { redirect } from "next/navigation";

const AuthLayout = async ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const session = await auth();

  if (session && session.user) redirect("/");

  return <main>{children}</main>;
};

export default AuthLayout;
