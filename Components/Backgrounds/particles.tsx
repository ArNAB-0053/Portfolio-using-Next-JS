"use client";
import dynamic from "next/dynamic";
import SpotlightComponent from "@/Components/Animation/SpotlightComponent";
import type { ReactNode } from "react";

const Particles = dynamic(() => import("@/Components/Animation/Particles"), { ssr: false });

interface ParticlesLayoutProps {
  children: ReactNode;
}

export default function ParticlesLayout({ children }: ParticlesLayoutProps): JSX.Element {
  return (
    <SpotlightComponent
      className="px-0 py-0 bg-black rounded-none bg-zi00"
      spotlightColor="rgba(0, 155, 255, 0.1)"
    >
      {/* Subtle background atmosphere */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-20rem] h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-cyan-500/[0.035] blur-3xl" />
        <div className="absolute right-[-10rem] top-[35rem] h-[30rem] w-[30rem] rounded-full bg-blue-500/[0.02] blur-3xl" />
      </div>
      <div className="relative w-screen min-h-screen overflow-hidden">
        <div className="fixed inset-0 z-10">
          <div className="absolute inset-0 backdrop-blur-md opacity-40 z-10" />
          <div style={{ width: "100%", height: "100%", position: "relative" }}>
            <Particles
              particleColors={["#00E5FF33", "#00E5FF"]}
              particleCount={200}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover={true}
              alphaParticles={false}
              disableRotation={false}
              className="w-full h-full"
            />
          </div>
        </div>

        <main className="relative z-20">{children}</main>
      </div>
    </SpotlightComponent>
  );
}
