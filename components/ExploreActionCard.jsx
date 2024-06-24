import Image from "next/image";
import Link from "next/link";
import React from "react";

function ExploreActionCard() {
  return (
    <div className="flex flex-wrap w-full items-center justify-center gap-6 px-4">
      <Link href="/scrap-cars">
        <Image
          width={300}
          height={300}
          src="/scrap-explore.png"
          className="max-h-[300px] w-full object-cover"
        />
      </Link>
      <Link href="/challan-check">
        <Image
          width={300}
          height={300}
          src="/challan-explore.png"
          className="max-h-[300px] object-cover w-full"
        />
      </Link>
      <Link href="/pre-delivery-inspection">
        <Image
          width={300}
          height={300}
          src="/pdi-explore.png"
          className="max-h-[300px] object-cover w-full"
        />
      </Link>
      <Link href="/sell-used-cars">
        <Image
          width={300}
          height={300}
          src="/resale-explore.png"
          className="max-h-[300px] object-cover w-full"
        />
      </Link>
    </div>
  );
}

export default ExploreActionCard;
