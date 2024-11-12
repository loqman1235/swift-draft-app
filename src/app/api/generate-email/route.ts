import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const POST = async (req: Request) => {
  const session = await auth();

  if (!session || !session.user)
    return new Response("Unauthorized", { status: 401 });

  if (session.user.plan === "free" && session.user.generatedEmails >= 2)
    return Response.json(
      { error: "You have reached your email limit" },
      { status: 402 },
    );

  const body = await req.json();
  const prompt = body.prompt;

  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(prompt);

    const formattedOutput = result.response.text().replace(/\n/g, "<br />");
    await prisma.user.update({
      where: {
        id: session.user.id,
      },
      data: {
        generatedEmails: {
          increment: 1,
        },
      },
    });

    return Response.json({ output: formattedOutput }, { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to generate email", { status: 500 });
  }
};
