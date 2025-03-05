"use client";
import Body from "@/Components/Body";
import React from "react";
import Movestopbtn from "@/Components/Movestopbtn";
import DockHeader from "@/Components/dock-header";
import Squares from "@/Components/Animation/Squares";

const Page = () => {
  return (
    <div className="relative w-screen min-h-screen overflow-hidden ">
      {/* Global Background */}
      <div className="fixed inset-0 z-10">
        <div className="absolute inset-0 backdrop-blur-md opacity-40"></div> {/* Blur effect */}
        <Squares
          speed={0.09}
          squareSize={290}
          direction="diagonal"
          borderColor="#efefef40"
          hoverFillColor="#fff"
          className="w-full h-full"
        />
      </div>

      {/* Main Content */}
      <Body />
      <Movestopbtn />

      {/* Floating Dock Header */}
      <div className="fixed z-50 bottom-0 left-1/2 -translate-x-1/2">
        <DockHeader />
      </div>
    </div>
  );
};

export default Page;
