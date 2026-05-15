import { GeneratorForm } from "@/components/generator-form";
import { Hero } from "@/components/hero";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 lg:gap-12">
        <header className="flex items-center justify-between gap-4 pt-2 sm:pt-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan">
              YourEnding
            </p>
            <p className="mt-3 max-w-xl text-sm leading-6 text-mist">
              An AI movie ending generator that turns rewritten finales into short video scenes.
            </p>
          </div>
          <div className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-mist shadow-sm backdrop-blur sm:block">
            MVP • Next.js 14 • Runway ML
          </div>
        </header>

        <Hero />
        <GeneratorForm />
      </div>
    </main>
  );
}
