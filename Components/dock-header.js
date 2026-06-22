import Dock from "./Animation/dock";
import { FaBrain, FaCode, FaBriefcase } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdAttachEmail } from "react-icons/md";

const items = [
  {
    icon: <CgProfile size={18} />,
    label: "About",
    href: '#about'
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

const DockHeader = () => {
  return (
    <Dock
      items={items}
      panelHeight={68}
      baseItemSize={50}
      magnification={70}
      className="bg-black/20 backdrop-blur-md text-white"
    />
  );
};
export default DockHeader;
