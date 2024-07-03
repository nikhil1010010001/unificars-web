import { Mail, PhoneCall } from "@/common/IconsSvg";
import Link from "next/link";

function TopBar() {
  return (
    <div className="w-full bg-orange-500 text-white sticky top-0 z-20">
      <div className="overflow-x-auto w-full px-2 lg:px-28 py-2 flex justify-between md:justify-end items-center gap-4 md:gap-8 text-sm md:text-base">
        <div className="flex items-center gap-2">
          <PhoneCall className="md:w-6 w-4" />
          <span className="md:block hidden">Toll Free : </span>
          <span className="whitespace-nowrap">+91-9911771977</span>
        </div>

        <div>
          <Link
            href="mailto:info@unificars.com"
            className="flex items-center gap-2">
            <Mail className="md:w-6 w-4" />
            <span>info@unificars.com</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
