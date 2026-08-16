import Link from "next/link";
import { cn } from "@/lib/utils";

import ParticlesLayout from "@/Components/Backgrounds/particles";
import { dm_sans, lora, oswald, space_grotesk } from "@/utils/fonts";

const NotFound = (): JSX.Element => {
  return (
    <ParticlesLayout>
      <main className={cn("relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-white", dm_sans.className)}>
        <div className="relative z-10 mx-auto w-full max-w-2xl text-center">

          <p className={cn("mb-5 text-xs font-medium uppercase tracking-[0.4em] text-cyan-400/60", space_grotesk.className)}>
            Error 404
          </p>

          <h1 className={cn("text-[8rem] font-bold leading-none tracking-[-0.06em] text-white sm:text-[11rem]", space_grotesk.className)}>
            4<span className="text-cyan-400">0</span>4
          </h1>

          <div className="mx-auto mt-4 h-px w-16 bg-cyan-400/50" />

          <h2 className={cn("mt-8 text-2xl font-semibold tracking-tight text-white sm:text-3xl", space_grotesk.className)}>
            Looks like you got lost.
          </h2>

          <p className={cn("mx-auto mt-4 max-w-md text-base leading-7 text-white/40")}>
            The page you're looking for doesn't exist, may have moved, or was never here in the first place.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/" className="group flex items-center gap-2 rounded-lg bg-cyan-400 px-5 py-2.5 text-sm font-medium text-black transition-all duration-200 hover:bg-cyan-300">
              <span className="transition-transform duration-200 group-hover:-translate-x-0.5">←</span>
              Back Home
            </Link>

            {/* <Link href="/projects" className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm text-white/60 backdrop-blur-sm transition-all duration-200 hover:border-white/20 hover:bg-white/[0.08] hover:text-white">
              Explore Projects
              <span className="text-white/30">↗</span>
            </Link> */}
          </div>

          <p className={cn("mt-12 text-[10px] uppercase tracking-[0.25em] text-white/25")}>
            Nothing to see here... yet
          </p>

        </div>
      </main>
    </ParticlesLayout>
  );
};

export default NotFound;
