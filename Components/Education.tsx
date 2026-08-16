import React from "react";
import SectionHeader from "./UI/SectionHeader";
import { dm_sans } from "@/utils/fonts";
import { MapPin, Calendar } from "lucide-react";

const Education = (): JSX.Element => {
  const courses: string[] = [
    "DSA",
    "DBMS",
    "Operating Systems",
    "Computer Networks",
    "Machine Learning",
    "Software Engineering",
  ];

  return (
    <>
      <SectionHeader title="Education" className="translate-y-[2px] mt-20" />

      <div className={`mt-8 relative group ${dm_sans.className}`}>
        {/* Card */}
        <div className="relative border border-zinc-800/80 rounded-2xl bg-zinc-950/40 backdrop-blur-sm overflow-hidden hover:border-zinc-700/60 transition-all duration-300">
          {/* Top cyan accent line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent" />

          <div className="p-8 sm:p-10">
            <div className="mb-6">
              <span className="inline-flex items-center gap-1.5 text-xs text-zinc-400">
                <Calendar size={11} />
                Aug 2021 — Jul 2025
              </span>
            </div>
            <div className="flex items-start justify-between gap-4 mb-5">
              <div className="flex flex-1 items-start gap-3">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 leading-snug">
                    B.Tech in Computer Science &amp; Engineering (AI &amp; ML)
                  </h3>
                  <p className="mt-1 text-sm font-medium text-cyan-400">
                    Brainware University
                  </p>
                  <p className="mt-0.5 text-xs text-zinc-500 flex items-center gap-1">
                    <MapPin size={11} />
                    Barasat, Kolkata, West Bengal
                  </p>
                </div>
              </div>
              <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/50 px-4 py-3 w-[6rem]">
                <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">
                  CGPA
                </p>
                <p className="text-xl font-bold text-cyan-400 leading-none">
                  9.53
                  <span className="text-xs font-normal text-zinc-500">
                    / 10
                  </span>
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-zinc-800/80 mb-5" />

            {/* Coursework */}
            <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-3">
              Relevant Coursework
            </p>
            <div className="flex flex-wrap gap-2">
              {courses.map((course) => (
                <span
                  key={course}
                  className="rounded-lg border border-zinc-800 bg-zinc-900/50 px-3 py-1.5 text-xs text-zinc-300"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
