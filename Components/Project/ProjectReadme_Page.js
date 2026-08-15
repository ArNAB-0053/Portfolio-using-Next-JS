"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

import ProjectReadme from "@/Components/Project/ProjectReadme";
import { dm_sans } from "@/utils/fonts";

const ProjectReadmePage = ({ projectId }) => {
  const router = useRouter();

  const repo = decodeURIComponent(projectId);

  const scrollToReadme = () => {
    document
      .getElementById("readme")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main
      className={`
        relative
        min-h-screen
        text-white
        ${dm_sans.className}
      `}
    >
      {/* Page container */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">
        
        {/* Back */}
        <div className="pt-8 flex items-center justify-between w-full">
          <button
            onClick={() => router.back()}
            className="
              group
              flex items-center gap-2
              text-sm text-white/50
              transition-colors duration-200
              hover:text-white
            "
          >
            <span className="transition-transform duration-200 group-hover:-translate-x-1">
              ←
            </span>

            Back to projects
          </button>

          <div>
            Home / Projects / {repo}
          </div>
        </div>

        {/* Hero */}
        <section className="flex min-h-[55vh] items-center">
          <div className="w-full py-20">
            
            {/* Small label */}
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-cyan-400/70">
              Project
            </p>

            {/* Project name */}
            <h1
              className="
                text-5xl
                font-semibold
                uppercase
                tracking-tight
                text-white
                sm:text-6xl
                lg:text-7xl
              "
            >
              {repo}
            </h1>

            {/* Accent */}
            <div className="mt-5 h-px w-24 bg-cyan-400/60" />

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
              Explore the project's documentation, architecture,
              implementation details, and development notes.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={`https://github.com/ArNAB-0053/${repo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center gap-2
                  rounded-lg
                  border border-white/10
                  bg-white/5
                  px-4 py-2.5
                  text-sm text-white/80
                  backdrop-blur-md
                  transition-all duration-200
                  hover:border-white/20
                  hover:bg-white/10
                  hover:text-white
                "
              >
                <Image
                  src="/Images/github.svg"
                  width={18}
                  height={18}
                  alt=""
                />

                GitHub

                <span className="text-white/40">↗</span>
              </a>

              <button
                onClick={scrollToReadme}
                className="
                  group
                  flex items-center gap-2
                  rounded-lg
                  px-4 py-2.5
                  text-sm text-white/60
                  transition-colors
                  hover:text-white
                "
              >
                Read documentation

                <span className="transition-transform group-hover:translate-y-1">
                  ↓
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* README */}
        <section
          id="readme"
          className="scroll-mt-10 pb-32"
        >
          {/* README header */}
          <div className="mb-8 flex items-center gap-4">
            <span className="text-xs uppercase tracking-[0.25em] text-white/40">
              README
            </span>

            <div className="h-px flex-1 bg-white/10" />
          </div>

          {/* README container */}
          <div
            className="
              mx-auto
              rounded-2xl
              border border-white/10
              bg-black/20
              px-5 py-8
              backdrop-blur-sm
              sm:px-8
              lg:px-12
              lg:py-12
            "
          >
            <ProjectReadme repo={repo} />
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProjectReadmePage;