import Footer from "@/Components/Footer/Footer";
import ParticlesLayout from "@/Components/Backgrounds/particles";
import type { ReactNode } from "react";
import Movestopbtn from "@/Components/Movestopbtn";

const PagesLayout = ({
  children,
}: Readonly<{ children: ReactNode }>): React.ReactElement => {
  return (
    <ParticlesLayout>
      <main className="relative z-20 ">
        <section className="mx-auto w-full max-w-6xl">
          {children}
        </section>
        <Footer />
        <Movestopbtn />
      </main>
    </ParticlesLayout>
  );
};

export default PagesLayout;
