import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const data = await req.json();

  return NextResponse.json(data, { status: 200 });
};
