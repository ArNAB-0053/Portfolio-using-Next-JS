export const INDENT_STEP_REM = 1.4;

// Gap between the root heading's own text and the trunk line under its
// children. Deliberately smaller than INDENT_STEP_REM — this is the only
// gap that should shrink; every deeper level still steps by 0.9rem.
export const ROOT_GAP_REM = 0;

export function columnWidthRem(columnIndex: number) {
  return columnIndex === 0 ? ROOT_GAP_REM : INDENT_STEP_REM;
}

export function columnLeftRem(columnIndex: number) {
  let left = 0;
  for (let i = 0; i < columnIndex; i++) left += columnWidthRem(i);
  return left;
}

// Center of the trunk column — where the sliding cyan indicator sits.
export const TRUNK_LEFT_REM = columnLeftRem(1) + columnWidthRem(1) / 2;

type TextStyle = { active: string; inactive: string };

const LEVEL_STYLES: TextStyle[] = [
  { active: "text-[14px] font-medium text-cyan-300", inactive: "text-[14px] font-medium text-white/65 hover:text-white/90" },
  { active: "text-[13px] text-cyan-300", inactive: "text-[13px] text-white/40 hover:text-white/70" },
];
const DEEP_STYLE: TextStyle = { active: "text-[13px] text-cyan-300", inactive: "text-[13px] text-white/40 hover:text-white/70" };

export function tocTextStyle(level: number, isActive: boolean) {
  const style = LEVEL_STYLES[level] ?? DEEP_STYLE;
  return isActive ? style.active : style.inactive;
}