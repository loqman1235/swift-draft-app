import { stripe } from "@/lib/stripe";
import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams;
  const session_id = searchParams.get("session_id");

  try {
    const session = await stripe.checkout.sessions.retrieve(session_id!);
    const subscription = await stripe.subscriptions.retrieve(
      session.subscription as string,
    );

    return new Response(JSON.stringify({ status: subscription.status }), {
      status: 200, // OK
    });
  } catch (error) {
    console.log(error);
    return new Response("Failed to verify subscription", { status: 500 });
  }
};
