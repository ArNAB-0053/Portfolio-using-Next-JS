import Footer from "@/Components/Footer/Footer";
import ParticlesLayout from "@/Components/Backgrounds/particles";
import type { ReactNode } from "react";

const PagesLayout = ({
  children,
}: Readonly<{ children: ReactNode }>): JSX.Element => {
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
