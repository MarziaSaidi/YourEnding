import RunwayML from "@runwayml/sdk";

export type RunwayGenerationResult = {
  prompt: string;
  provider: "runway";
  videoUrl: string;
};

export async function generateRunwayVideo(prompt: string): Promise<RunwayGenerationResult> {
  const apiKey = process.env.RUNWAY_API_KEY;

  if (!apiKey) {
    throw new Error("RUNWAY_API_KEY is missing. Add it to your local env before generating.");
  }

  const client = new RunwayML({
    apiKey
  });

  const task = await client.textToVideo
    .create({
      model: "gen4.5",
      promptText: prompt,
      ratio: "1280:720",
      duration: 5
    })
    .waitForTaskOutput();

  const videoUrl = task.output?.[0];

  if (!videoUrl) {
    throw new Error("Runway completed without returning a video URL.");
  }

  return {
    prompt,
    provider: "runway",
    videoUrl
  };
}
