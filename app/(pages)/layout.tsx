import type { ReactNode } from "react";

const PagesLayout = ({
  children,
}: Readonly<{ children: ReactNode }>): React.ReactElement => {
  return (
    <main className="relative z-20 ">
      <section className="mx-auto w-full max-w-6xl max-[1024px]:px-8 lg:max-[1280px]:px-8">
        {children}
      </section>
    </main>
  );
};

export default PagesLayout;
