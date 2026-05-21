import { NextResponse } from "next/server";
import { generateReplicateVideo } from "@/lib/replicate";

type GenerateRequestBody = {
  prompt?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as GenerateRequestBody;
    const prompt = body.prompt?.trim();

    if (!prompt) {
      return NextResponse.json({ error: "Please enter a movie ending prompt." }, { status: 400 });
    }

    if (prompt.length > 600) {
      return NextResponse.json(
        { error: "Please keep your prompt under 600 characters." },
        { status: 400 }
      );
    }

    const videoUrl = await generateReplicateVideo(prompt);
    return NextResponse.json({ videoUrl });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to generate a video right now.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
