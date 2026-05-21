import Replicate from "replicate";

const ZEROSCOPE_MODEL =
  "anotherjesse/zeroscope-v2-xl:9f747673945c62801b13b84701c783929c0ee784e4748ec062204894dda1a351";

export async function generateReplicateVideo(prompt: string): Promise<string> {
  const apiToken = process.env.REPLICATE_API_TOKEN;

  if (!apiToken) {
    throw new Error("REPLICATE_API_TOKEN is missing. Add it to your environment variables.");
  }

  const replicate = new Replicate({
    auth: apiToken
  });

  const output = await replicate.run(ZEROSCOPE_MODEL, {
    input: {
      prompt,
      num_frames: 24,
      num_inference_steps: 50
    }
  });

  if (typeof output === "string") {
    return output;
  }

  if (Array.isArray(output)) {
    const firstItem = output[0];

    if (typeof firstItem === "string") {
      return firstItem;
    }

    if (firstItem && typeof firstItem === "object" && "url" in firstItem) {
      const maybeUrl = firstItem.url;

      if (typeof maybeUrl === "function") {
        return maybeUrl();
      }
    }
  }

  if (output && typeof output === "object" && "url" in output) {
    const maybeUrl = output.url;

    if (typeof maybeUrl === "function") {
      return maybeUrl();
    }
  }

  throw new Error("Replicate did not return a video URL.");
}
