import Link from "next/link";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

function TopBar() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return (
      <Marquee
        speed={50}
        gradient={false}
        pauseOnHover={true}
        className="bg-orange-500">
        <div className="w-screen mx-auto text-white px-4 lg:px-28 py-2 flex justify-evenly md:justify-end items-center gap-8 md:gap-8 sticky top-0 z-20">
          <p className="flex items-center gap-2">
            <FaPhoneVolume />{" "}
            <span className="md:block hidden">Toll Free : </span>
            <span className="whitespace-nowrap">+91-9911771977</span>
          </p>
          <Link
            href="mailto:info@unificars.com"
            className="flex items-center gap-2">
            <MdOutlineMailOutline className="text-xl" />{" "}
            <span>info@unificars.com</span>
          </Link>
        </div>
      </Marquee>
    );
  } else {
    return (
      <div className="bg-orange-500 text-white px-4 lg:px-28 py-2 flex  justify-end items-center gap-4 md:gap-8 sticky top-0 z-20">
        <p className="flex items-center gap-2">
          <FaPhoneVolume />{" "}
          <span className="md:block hidden">Toll Free : </span>
          <span>+91-9911771977</span>
        </p>
        <Link
          href="mailto:info@unificars.com"
          className="flex items-center gap-2">
          <MdOutlineMailOutline className="text-xl" />{" "}
          <span>info@unificars.com</span>
        </Link>
      </div>
    );
  }
}

export default TopBar;
