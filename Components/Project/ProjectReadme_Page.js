"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

import ProjectReadme from "@/Components/Project/ProjectReadme";
import { dm_sans } from "@/utils/fonts";
import Link from "next/link";

const ProjectReadmePage = ({ project }) => {
  const router = useRouter();

  if (!project) {
    return null;
  }

  const repo = project.github_link
    ?.replace("https://github.com/ArNAB-0053/", "")
    ?.replace(/\/$/, "");

  const projectName = project.project_heading;
  const description = project.project_desc;
  const technologies = project.tags || [];
  const categories = project.project_tag || [];

  const scrollToReadme = () => {
    document
      .getElementById("readme")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className={`relative min-h-screen overflow-hidden text-white ${dm_sans.className}`}>
      {/* Subtle background atmosphere */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-20rem] h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-cyan-500/[0.035] blur-3xl" />
        <div className="absolute right-[-10rem] top-[35rem] h-[30rem] w-[30rem] rounded-full bg-blue-500/[0.02] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">

        {/* ─────────────────────────────────────────────
            TOP BAR
        ───────────────────────────────────────────── */}

        <div className="flex items-center justify-between border-b border-white/[0.06] py-6">
          <button
            onClick={() => router.back()}
            className="group flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-white"
          >
            <span className="text-base transition-transform duration-200 group-hover:-translate-x-1">
              ←
            </span>
            Back
          </button>

          <div className="hidden text-xs text-white/25 sm:block">
            <Link href="/" className="hover:text-white/45 transition-all duration-150">Home </Link> 
            / Projects /
            <span className="text-white/45"> {projectName}</span>
          </div>
        </div>

        {/* ─────────────────────────────────────────────
            HERO
        ───────────────────────────────────────────── */}

        <section className="py-16 sm:py-20 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

            {/* LEFT */}
            <div>

              {/* Category */}
              <div className="mb-6 flex flex-wrap items-center gap-2">
                {categories.map((category) => (
                  <span
                    key={category}
                    className="rounded-full border border-cyan-400/10 bg-cyan-400/[0.04] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-cyan-400/70"
                  >
                    {category}
                  </span>
                ))}
              </div>

              {/* Project name */}
              <h1 className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                {projectName}
              </h1>

              {/* Accent line */}
              <div className="mt-7 h-px w-20 bg-cyan-400/60" />

              {/* Description */}
              <p className="mt-7 max-w-2xl text-base leading-7 text-white/45 sm:text-lg sm:leading-8">
                {description}
              </p>

              {/* Technologies */}
              {technologies.length > 0 && (
                <div className="mt-8">
                  <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-white/25">
                    Built with
                  </p>

                  <div className="flex max-w-2xl flex-wrap gap-2">
                    {technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-white/[0.07] bg-white/[0.025] px-2.5 py-1.5 text-xs text-white/50 transition-colors hover:border-white/15 hover:text-white/70"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="mt-9 flex flex-wrap items-center gap-3">

                {/* GitHub */}
                <a
                  href={project.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.06] px-4 py-2.5 text-sm text-white/80 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.1] hover:text-white"
                >
                  <Image
                    src="/Images/github.svg"
                    width={17}
                    height={17}
                    alt=""
                  />

                  GitHub

                  <span className="text-white/30 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </a>

                {/* Live Demo */}
                {project.deployed_link && (
                  <a
                    href={project.deployed_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 rounded-lg bg-cyan-400 px-4 py-2.5 text-sm font-medium text-black transition-all duration-200 hover:bg-cyan-300"
                  >
                    Live Demo

                    <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      ↗
                    </span>
                  </a>
                )}

                {/* README */}
                <button
                  onClick={scrollToReadme}
                  className="group flex items-center gap-2 px-3 py-2.5 text-sm text-white/40 transition-colors hover:text-white"
                >
                  Documentation

                  <span className="transition-transform duration-200 group-hover:translate-y-1">
                    ↓
                  </span>
                </button>
              </div>
            </div>

            {/* RIGHT — PROJECT IMAGE */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] shadow-2xl shadow-black/20">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={project.project_img}
                    alt={`${projectName} project preview`}
                    fill
                    priority
                    className="object-cover transition-transform duration-700 hover:scale-[1.025]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────
            README
        ───────────────────────────────────────────── */}

        <section
          id="readme"
          className="pb-32 pt-20 sm:pt-28"
        >
          {/* Section heading */}
          <div className="mb-10 flex items-center gap-5">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-400/60">
                Documentation
              </p>

              <h2 className="mt-2 text-2xl font-medium tracking-tight text-white sm:text-3xl">
                Project README
              </h2>
            </div>

            <div className="h-px flex-1 bg-white/[0.07]" />
          </div>

          {/* README */}
          <div className="rounded-2xl border border-white/[0.08] bg-black/20 px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
            <ProjectReadme repo={repo} />
          </div>
        </section>

      </div>
    </main>
  );
};

export default ProjectReadmePage;