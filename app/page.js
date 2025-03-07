"use client";
import Body from "@/Components/Body";
import React from "react";
import Movestopbtn from "@/Components/Movestopbtn";
import DockHeader from "@/Components/dock-header";
import Particles from "@/Components/Animation/Particles";
import SpotlightComponent from "@/Components/Animation/SpotlightComponent";

const Page = () => {
  return (
    <SpotlightComponent
      className="px-0 py-0 bg-black rounded-none bg-zi00"
      spotlightColor="rgba(0, 155, 255, 0.1)"
    >
    <div className="relative w-screen min-h-screen overflow-hidden ">
      {/* Global Background */}
      <div className="fixed inset-0 z-10">
        <div className="absolute inset-0 backdrop-blur-md opacity-40 z-10"></div>{" "}
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

      {/* Main Content */}
      <Body />
      <Movestopbtn />

      {/* Floating Dock Header */}
      <div className="fixed z-50 bottom-0 left-1/2 -translate-x-1/2">
        <DockHeader />
      </div>
    </div>
    </SpotlightComponent>
  );
};

export default Page;
