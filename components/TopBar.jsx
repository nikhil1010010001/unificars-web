import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

function TopBar() {
  return (
    <div className="bg-orange-500 text-white px-4 lg:px-28 py-2 flex justify-end items-center flex-wrap gap-2 md:gap-8 sticky top-0 z-20">
      <p className="flex items-center gap-2">
        <FaPhoneVolume /> <span>Toll Free : +91-9911771977</span>
      </p>
      <p className="flex items-center gap-2">
        <MdOutlineMailOutline className="text-xl" />{" "}
        <span>Info@unificar.com</span>
      </p>
    </div>
  );
}

export default TopBar;