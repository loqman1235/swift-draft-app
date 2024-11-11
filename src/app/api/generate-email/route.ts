import { auth } from "@/auth";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const POST = async (req: Request) => {
  const session = await auth();

  if (!session || !session.user)
    return new Response("Unauthorized", { status: 401 });

  const body = await req.json();
  const prompt = body.prompt;

  try {
    // Make sure to include these imports:
    // import { GoogleGenerativeAI } from "@google/generative-ai";
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(prompt);

    const formattedOutput = result.response.text().replace(/\n/g, "<br />");

    return Response.json({ output: formattedOutput }, { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to generate email", { status: 500 });
  }
};
