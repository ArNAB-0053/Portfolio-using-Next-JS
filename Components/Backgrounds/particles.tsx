"use client";
import dynamic from "next/dynamic";
import SpotlightComponent from "@/Components/Animation/SpotlightComponent";
import type { ReactNode } from "react";

const Particles = dynamic(() => import("@/Components/Animation/Particles"), { ssr: false });

interface ParticlesLayoutProps {
  children: ReactNode;
}

export default function ParticlesLayout({ children }: ParticlesLayoutProps): React.ReactElement {
  return (
    <SpotlightComponent
      className="px-0 py-0 rounded-none bg-[#212121]/70 overflow-visible"
      spotlightColor="rgba(0, 155, 255, 0.1)"
    >
      {/* Subtle background atmosphere */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-20rem] h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-cyan-500/[0.035] blur-3xl" />
      </div>
      <div className="relative w-full min-h-screen overflow-x-clip">
        <div className="fixed inset-0 z-10">
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
