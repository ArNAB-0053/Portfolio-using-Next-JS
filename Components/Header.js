"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFileAlt } from "react-icons/fa";

const Header = () => {
    return (
        <div className="mt-7 bg-black/20 rounded-full px-8 py-4 flex justify-center items-center">
            {/* <Image src="/Images/logo_light.svg" alt="Header" width={400} height={400} className="w-12" /> */}
            <h2 className="font-[Pavelt] text-white text-xl flex items-center">
                arnab
                <div className="w-2 h-2 rounded-full bg-white translate-y-[3px] ml-1"></div>
            </h2>
        </div>
    );
};

export default Header;
