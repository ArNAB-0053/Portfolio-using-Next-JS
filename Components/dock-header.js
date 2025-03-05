import Dock from "./Animation/dock";
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";


const items = [
  { icon: <FaHome size={18} />, label: "Home", onClick: () => alert("Home!") },
  {
    icon: <CgProfile size={18} />,
    label: "Archive",
    onClick: () => alert("Archive!"),
  },
  {
    icon: <FaHome size={18} />,
    label: "Profile",
    onClick: () => alert("Profile!"),
  },
  {
    icon: <FaHome size={18} />,
    label: "Settings",
    onClick: () => alert("Settings!"),
  },
];

const DockHeader = () => {
  return (
    <Dock items={items} panelHeight={68} baseItemSize={50} magnification={70} className="bg-black" />
  );
};
export default DockHeader;
