import Link from "next/link";
import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";

function WhatsappSupport() {
  return (
    <div className="fixed bottom-0 right-0 m-12 z-50 drop-shadow-xl">
      <Link
        href="https://api.whatsapp.com/send?phone=919911771977&text=Hi"
        target="_blank">
        <div className="bg-white rounded-full">
          <IoLogoWhatsapp className="text-6xl text-green-500" />
        </div>
      </Link>
    </div>
  );
}

export default WhatsappSupport;
