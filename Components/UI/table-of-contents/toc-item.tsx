"use client";

import { tocTextStyle, columnWidthRem, columnLeftRem } from "./toc-styles";

interface TocItemProps {
  id: string;
  text: string;
  level: number;
  guides: boolean[];
  isLast: boolean;
  isActive: boolean;
  onNavigate: (id: string) => void;
  registerRef: (id: string, el: HTMLAnchorElement | null) => void;
}

const LINE_CLASS = "bg-white/10 group-hover:bg-white/25 transition-colors duration-150";

export default function TocItem({
  id, text, level, guides, isLast, isActive, onNavigate, registerRef,
}: TocItemProps) {
  const ownColumnIndex = level; // the column right after all ancestor guide columns
  const paddingLeft = level > 0 ? `${columnLeftRem(ownColumnIndex + 1) + 0.75}rem` : "0rem";

  return (
    <li className="group relative">
      <div className="absolute inset-y-0 left-0 flex" aria-hidden>
        {guides.map((hasLine, i) => (
          <span key={i} className="relative h-full" style={{ width: `${columnWidthRem(i)}rem` }}>
            {hasLine && (
              <span className={`absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 ${LINE_CLASS}`} />
            )}
          </span>
        ))}
        {level > 0 && (
          <span className="relative h-full" style={{ width: `${columnWidthRem(ownColumnIndex)}rem` }}>
            <span className={`absolute left-1/2 top-0 h-1/2 w-px -translate-x-1/2 ${LINE_CLASS}`} />
            <span className={`absolute left-1/2 top-1/2 h-px w-1/2 ${LINE_CLASS}`} />
            {!isLast && (
              <span className={`absolute left-1/2 top-1/2 bottom-0 w-px -translate-x-1/2 ${LINE_CLASS}`} />
            )}
          </span>
        )}
      </div>

      <a
        ref={(el) => registerRef(id, el)}
        href={`#${id}`}
        onClick={(e) => {
          e.preventDefault();
          onNavigate(id);
        }}
        aria-current={isActive ? "location" : undefined}
        className={`block py-1 leading-snug transition-colors duration-200 geist ${tocTextStyle(level, isActive)}`}
        style={{ paddingLeft }}
      >
        {text}
      </a>
    </li>
  );
}