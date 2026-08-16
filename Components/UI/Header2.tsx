import { cn } from "@/lib/utils";
import React from "react";

type Header2Props = React.ComponentProps<"h2"> & {
  tag?: string;
  tagClassName?: string;
  showLine?: boolean;
  lineClassName?: string;
}

const Header2 = ({
  children,
  className,
  tag,
  tagClassName,
  showLine = true,
  lineClassName,
  ...props
}: Header2Props) => {
  return (
    <div className="mb-10 flex items-center gap-5">
      <div>
        <p className={cn("text-[10px] uppercase tracking-[0.3em] text-cyan-400/60", tagClassName)}>
          {tag}
        </p>

        <h2
          className={cn(
            "mt-2 text-2xl font-medium tracking-tight text-white sm:text-3xl",
            className
          )}
          {...props}
        >
          {children}
        </h2>
      </div>

      {showLine && <div className={cn("h-px flex-1 bg-white/[0.07]", lineClassName)} />}
    </div>
  );
};

export default Header2;