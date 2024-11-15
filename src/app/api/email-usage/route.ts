import { FREE_PLAN_EMAILS, PRO_PLAN_EMAILS } from "@/constants";
import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams;
  const userId = searchParams.get("userId");

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId!,
      },
    });

    if (!user) {
      return new Response("User not found", { status: 404 });
    }

    const emailLimit =
      user?.plan === "free" ? FREE_PLAN_EMAILS : PRO_PLAN_EMAILS;
    const emailsLeft = emailLimit - user?.generatedEmails || 0;

    return new Response(JSON.stringify({ emailsLeft }), {
      status: 200, // OK
    });
  } catch (error) {
    console.log(error);
    return new Response("Failed to fetch email usage", { status: 500 });
  }
};
