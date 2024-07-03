"use client";

import { Mail, PhoneCall } from "@/common/IconsSvg";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

function TopBar() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isDesktop) {
    return (
      <div className="bg-orange-500 text-white px-4 lg:px-28 py-2 flex  justify-end items-center gap-4 md:gap-8 sticky top-0 z-20">
        <p className="flex items-center gap-2">
          <PhoneCall />
          <span className="md:block hidden">Toll Free : </span>
          <span>+91-9911771977</span>
        </p>
        <Link
          href="mailto:info@unificars.com"
          className="flex items-center gap-2">
          <Mail />
          <span>info@unificars.com</span>
        </Link>
      </div>
    );
  } else {
    return (
      <Marquee
        speed={50}
        gradient={false}
        pauseOnHover={true}
        className="bg-orange-500">
        <div className="w-screen mx-auto text-white px-4 lg:px-28 py-2 flex justify-evenly md:justify-end items-center gap-8 md:gap-8 sticky top-0 z-20">
          <p className="flex items-center gap-2">
            <PhoneCall />
            <span className="md:block hidden">Toll Free : </span>
            <span className="whitespace-nowrap">+91-9911771977</span>
          </p>
          <Link
            href="mailto:info@unificars.com"
            className="flex items-center gap-2">
            <Mail />
            <span>info@unificars.com</span>
          </Link>
        </div>
      </Marquee>
    );
  }
}

export default TopBar;
