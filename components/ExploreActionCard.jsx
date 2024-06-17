import Link from "next/link";
import React from "react";

function ExploreActionCard() {
  return (
    <div className="flex flex-wrap w-full items-center justify-center gap-6 px-4">
      <Link href="/scrap-car" passHref>
        <img
          src="/get-price-explore.png"
          className="max-h-[350px] w-full object-cover"
        />
      </Link>
      <Link href="/buy-car" passHref>
        <img
          src="/pay-challan-explore.png"
          className="max-h-[350px] object-cover w-full"
        />
      </Link>
      <Link href="/sell-car" passHref>
        <img
          src="/pdi-explore.png"
          className="max-h-[350px] object-cover w-full"
        />
      </Link>
    </div>
  );
}

export default ExploreActionCard;
