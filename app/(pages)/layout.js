import React from "react";
import Footer from "@/Components/Footer/Footer";
import ParticlesLayout from "@/Components/Backgrounds/particles";

const PagesLayout = ({ children }) => {
  return (
    <ParticlesLayout>
      <main className="relative z-20">
        {children}
        <Footer />
      </main>
    </ParticlesLayout>
  );
};

export default PagesLayout;
