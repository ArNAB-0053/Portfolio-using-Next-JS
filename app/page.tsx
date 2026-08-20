"use client";
import React from "react";
import dynamic from "next/dynamic";
import Body from "@/Components/Body";

const DockHeader = dynamic(() => import("@/Components/dock-header"), {
  ssr: false,
});
const MobileNav = dynamic(() => import("@/Components/MobileNav"), {
  ssr: false,
});

const Page = (): React.ReactElement => {
  return (
    <>
      {/* Main Content */}
      <Body />

      {/* Floating Dock Header */}
      <div className="hidden md:block fixed z-50 bottom-0 left-1/2 -translate-x-1/2">
        <DockHeader />
      </div>

      {/* Mobile HUD Navigation */}
      <div className="block md:hidden">
        <MobileNav />
      </div>
    </>
  );
};

export default Page;
