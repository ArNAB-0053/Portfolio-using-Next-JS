"use client"

import { FaBrain, FaCode, FaBriefcase } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdAttachEmail } from "react-icons/md";
import { PiGraduationCapFill } from "react-icons/pi";
import Dock from "./Animation/dock";
import type { ComponentType, ReactNode } from "react";

interface DockItem {
  icon: ReactNode;
  label: string;
  href: string;
}

const items: DockItem[] = [
  {
    icon: <CgProfile size={18} />,
    label: "About",
    href: '#about'
  },
  {
    icon: <PiGraduationCapFill size={18} />,
    label: "Education",
    href: '#education'
  },
  {
    icon: <FaBriefcase size={18} />,
    label: "Experience",
    href: '#experience'
  },
  {
    icon: <FaCode size={18} />,
    label: "Projects",
    href: '#project'
  },
  {
    icon: <FaBrain size={18} />,
    label: "Tech",
    href: '#tech'
  },
  {
    icon: <MdAttachEmail size={18} />,
    label: "Contact",
    href: '#contact'
  },
];

interface DockProps {
  items: DockItem[];
  panelHeight: number;
  baseItemSize: number;
  magnification: number;
}

const TypedDock = Dock as ComponentType<DockProps>;

const DockHeader = (): React.ReactElement => {
  return (
    <TypedDock
      items={items}
      panelHeight={68}
      baseItemSize={50}
      magnification={70}
    />
  );
};
export default DockHeader;
