import { stripe } from "@/lib/stripe";

export const POST = async (req: Request) => {
  const { priceId, email } = await req.json();

  try {
    const session = await stripe.checkout.sessions.create({
      customer_email: email,
      payment_method_types: ["card"],
      mode: "subscription",
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    });

    return new Response(JSON.stringify({ sessionId: session.id }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Failed to create checkout session", { status: 500 });
  }
};
