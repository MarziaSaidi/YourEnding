"use client";

import { FormEvent, useState } from "react";

type GenerateVideoResponse = {
  videoUrl: string;
};

const starterPrompt =
  "Inception: instead of the ambiguous top spinning ending, it clearly falls over and Dom is home for real.";

function WandIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m4 20 11-11" />
      <path d="m14 5 1-3 1 3 3 1-3 1-1 3-1-3-3-1 3-1Z" />
      <path d="m5 15-3 1 3 1 1 3 1-3 3-1-3-1-1-3-1 3Z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="m10 9 5 3-5 3V9Z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function NoteIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="5" y="3.5" width="14" height="17" rx="2.5" />
      <path d="M9 8h6" />
      <path d="M9 12h6" />
      <path d="M9 16h4" />
    </svg>
  );
}

export function GeneratorForm() {
  const [prompt, setPrompt] = useState(starterPrompt);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt })
      });

      const payload = (await response.json()) as GenerateVideoResponse | { error?: string };

      if (!response.ok || !("videoUrl" in payload)) {
        const message =
          "error" in payload ? payload.error : "Something went wrong while generating the clip.";

        throw new Error(message ?? "Something went wrong while generating the clip.");
      }

      setVideoUrl(payload.videoUrl);
    } catch (submissionError) {
      const message =
        submissionError instanceof Error
          ? submissionError.message
          : "Something went wrong while generating the clip.";

      setError(message);
      setVideoUrl(null);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="grid gap-6 xl:gap-8">
      <form
        onSubmit={handleSubmit}
        className="grid-shell glass-panel noise-overlay rounded-[2.2rem] border border-white/10 p-7 shadow-card sm:p-10"
      >
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan">Step 1</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-ink">
              Tell us how the movie should end
            </h2>
          </div>
          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-mist">
            Prompt
          </div>
        </div>

        <div className="mb-5 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
          <div className="flex items-start gap-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/8 text-cyan">
              <NoteIcon />
            </div>
            <div>
              <p className="text-sm font-semibold text-ink">What to include</p>
              <p className="mt-1 text-sm leading-6 text-mist">
                Name the movie, describe the changed final moment, and add the mood or visual you
                want to see.
              </p>
            </div>
          </div>
        </div>

        <label htmlFor="prompt" className="mb-2 block text-sm font-medium text-ink/80">
          Movie + desired ending
        </label>
        <textarea
          id="prompt"
          name="prompt"
          value={prompt}
          onChange={(event) => setPrompt(event.target.value)}
          placeholder={starterPrompt}
          className="min-h-64 w-full rounded-[1.7rem] border border-white/10 bg-white/[0.03] px-6 py-5 text-base leading-8 text-ink outline-none transition placeholder:text-mist/45 focus:border-violet/60 focus:ring-4 focus:ring-violet/15"
          maxLength={600}
          required
        />

        <div className="mt-4 flex items-center justify-between text-xs text-mist">
          <span>No real movie footage is used.</span>
          <span>{prompt.length}/600</span>
        </div>

        {error ? (
          <div className="mt-5 rounded-2xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">
            {error}
          </div>
        ) : null}

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(90deg,_#ff8a4c,_#d97745_55%,_#a66d4f)] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
            >
              <WandIcon />
              {isLoading ? "Generating your ending..." : "Generate ending"}
            </button>
            <p className="max-w-xs text-sm leading-6 text-mist">
              Expect a short wait while the model renders your scene.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-mist">
            <ClockIcon />
            Usually takes a short moment
          </div>
        </div>
      </form>

      <div className="grid-shell glass-panel noise-overlay overflow-hidden rounded-[2.2rem] border border-white/10 p-4 shadow-card">
        <div className="mb-4 flex items-center justify-between px-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan">Step 2</p>
            <h3 className="mt-2 text-2xl font-black text-ink">Preview your ending</h3>
          </div>
          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-mist">
            Result
          </div>
        </div>

        <div className="flex min-h-[500px] flex-col rounded-[1.8rem] bg-[radial-gradient(circle_at_top,_rgba(217,119,69,0.14),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(255,138,76,0.12),_transparent_28%),linear-gradient(180deg,_#141310_0%,_#191713_45%,_#201b15_100%)] p-6 text-white">
          <div className="mb-6 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/55">
            <span>Preview monitor</span>
            <span>Rendered scene</span>
          </div>

          {videoUrl ? (
            <div className="space-y-5">
              <video
                src={videoUrl}
                controls
                autoPlay
                loop
                muted
                playsInline
                className="aspect-video w-full rounded-[1.25rem] border border-white/10 bg-black object-cover"
              />
              <p className="text-sm leading-6 text-white/70">
                Your alternate ending is live. If you want a stronger result, specify the last
                shot, the emotion on the actor&apos;s face, or the exact action that closes the
                scene.
              </p>
            </div>
          ) : (
            <div className="flex flex-1 flex-col justify-between rounded-[1.8rem] border border-white/10 bg-white/5 p-7">
              <div>
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/8 text-cyan">
                  <PlayIcon />
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.28em] text-cyan/80">
                  Waiting for your prompt
                </p>
                <p className="mt-3 max-w-md text-3xl font-black leading-tight text-white">
                  Your generated ending will show up here as a playable video.
                </p>
                <p className="mt-4 max-w-lg text-sm leading-7 text-white/70">
                  After you click generate, this panel updates with the finished clip.
                </p>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.4rem] border border-white/10 bg-white/6 p-5">
                  <div className="text-xs uppercase tracking-[0.26em] text-white/45">
                    Prompt tip
                  </div>
                  <p className="mt-3 text-sm leading-7 text-white/75">
                    Mention the setting, emotion, and final action you want to see.
                  </p>
                </div>
                <div className="rounded-[1.4rem] border border-white/10 bg-white/6 p-5">
                  <div className="text-xs uppercase tracking-[0.26em] text-white/45">
                    What you get
                  </div>
                  <p className="mt-3 text-sm leading-7 text-white/75">
                    A short AI-generated clip visualizing your new ending.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
