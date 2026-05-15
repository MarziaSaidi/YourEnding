"use client";

function SparkIcon() {
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
      <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3Z" />
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

export function Hero() {
  return (
    <section className="grid gap-6">
      <div className="grid-shell glass-panel noise-overlay relative overflow-hidden rounded-[2.2rem] border border-white/10 p-6 shadow-card sm:p-8 lg:p-10">
        <div className="neon-orb -left-10 top-10 h-40 w-40 bg-cyan/15" />
        <div className="neon-orb right-10 top-0 h-44 w-44 bg-fuchsia/15" />

        <div className="relative z-10 max-w-3xl space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan">
            <SparkIcon />
            AI movie ending generator
          </div>
          <h1 className="headline-balance text-4xl font-black leading-[0.95] tracking-[-0.05em] text-ink sm:text-5xl lg:text-6xl">
            Rewrite a movie ending and watch your version play out.
          </h1>
          <p className="max-w-2xl text-base leading-8 text-mist sm:text-lg">
            Start with one prompt. Tell us the movie, what should change in the ending, and the
            feeling or shot you want the final scene to have.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.04] p-5">
          <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/8 text-cyan">
            <NoteIcon />
          </div>
          <p className="text-sm font-semibold text-ink">1. Describe it</p>
          <p className="mt-2 text-sm leading-6 text-mist">
            Write the ending you wanted instead of the original one.
          </p>
        </div>
        <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.04] p-5">
          <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/8 text-cyan">
            <WandIcon />
          </div>
          <p className="text-sm font-semibold text-ink">2. Generate it</p>
          <p className="mt-2 text-sm leading-6 text-mist">
            We turn your rewritten finale into a short AI video scene.
          </p>
        </div>
        <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.04] p-5">
          <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/8 text-cyan">
            <PlayIcon />
          </div>
          <p className="text-sm font-semibold text-ink">3. Watch it</p>
          <p className="mt-2 text-sm leading-6 text-mist">
            Your alternate ending appears below as a playable clip.
          </p>
        </div>
      </div>
    </section>
  );
}
