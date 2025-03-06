import Dock from "./Animation/dock";
import { FaBrain, FaHome, FaProjectDiagram } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdAttachEmail } from "react-icons/md";

const items = [
  {
    icon: <FaHome size={18} />,
    label: "Home",
    href: '#home'
  },
  {
    icon: <CgProfile size={18} />,
    label: "About",
    href: '#about'
  },
  {
    icon: <FaBrain size={18} />,
    label: "Skills",
    href: '#skills'
  },
  {
    icon: <FaProjectDiagram size={18} />,
    label: "Projects",
    href: '#project'
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
      className="bg-black/20 backdrop-blur-md"
    />
  );
};
export default DockHeader;
