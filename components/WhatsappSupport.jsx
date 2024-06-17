import Link from "next/link";
import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";

function WhatsappSupport() {
  return (
    <div className="fixed bottom-0 right-0 m-4 z-50 drop-shadow-xl">
      <Link
        href="https://wa.me/+919911771977?text=Hey%20Unificars%20%20I%20want%20to%20buy%20MARUTI%20CELERIO%20VXI%20GREEN%20GREY%202019%201st%20Ownership%20containing%20UNC-30577"
        target="_blank">
        <IoLogoWhatsapp className="text-6xl text-green-500" />
      </Link>
    </div>
  );
}

export default WhatsappSupport;
