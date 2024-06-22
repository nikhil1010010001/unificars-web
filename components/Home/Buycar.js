import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import FeaturedCars from "../FeaturedCars";
import Image from "next/image";

const Buycar = () => {
  const [featuredCars, setFeaturedCars] = useState([]);

  useEffect(() => {
    const fetchFeaturedCars = async () => {
      try {
        const response = await fetch(
          "https://crm.unificars.com/api/featuredcars",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch featured cars");
        }

        const data = await response.json();

        setFeaturedCars(data.data || []);
      } catch (error) {
        console.error("Error fetching featured cars:", error);
      }
    };

    fetchFeaturedCars();
  }, []);

  return (
    <div className="py-6 text-center text-gray-600">
      <div className="mx-auto space-y-6 w-[85%]">
        <div className="text-center my-10 mb-0 font-normal text-xl">
          <h1 className="text-[#000] font-black my-2 text-center sellheadfont">
            Why Buy Car From Us
          </h1>
          {/* <span className="uppercase tracking-widest">
            Keys to cash Unlock the value of your car
          </span> */}
        </div>
        <div className="flex gap-6 lg:flex-row flex-col">
          <Link href="/buy-used-cars" passHref className="w-full">
            <div className="text-center justify-center my-4 bg-[#FBFBFB] text-black p-2 rounded-lg">
              <Image
                width={400}
                height={400}
                src="/carousel/used-car-1.png"
                className="img-fluid w-full h-80 object-cover rounded-lg"
                alt="howitworks"
              />
              <div className="text-left space-y-4 py-4">
                <h4 className="text-xl text-black font-black tracking-widest mt-4 flex-none buyh4">
                  210 Point Inspection Report
                </h4>
                <p className="text-lg">
                  Unificars believes in providing better deal for our users with
                  210-point inspection report.
                </p>
              </div>
            </div>
          </Link>

          <Link href="/buy-used-cars" passHref className="w-full">
            <div className="text-center justify-center my-4 bg-[#FBFBFB] text-black p-2 rounded-lg">
              <img
                src="carousel/used-car-2.png"
                className="img-fluid w-full h-80 object-cover rounded-lg"
                alt="howitworks"
                width="280"
              />
              <div className="text-left space-y-4 py-4">
                <h4 className="text-xl text-black font-bold tracking-widest mt-4 flex-none buyh4">
                  10,000 km engine warranty
                </h4>
                <p className="text-lg">
                  We assure your journey with upto 9,999+ km engine warranty
                  with us.
                </p>
              </div>
            </div>
          </Link>

          <Link href="/buy-used-cars" passHref className="w-full">
            <div className="text-center justify-center my-4 bg-[#FBFBFB] text-black p-2 rounded-lg">
              <img
                src="carousel/used-car-3.png"
                className="img-fluid w-full h-80 object-cover rounded-lg"
                alt="howitworks"
                width="280"
              />
              <div className="text-left space-y-4 py-4">
                <h4 className="text-xl text-black font-bold tracking-widest mt-4 flex-none buyh4">
                  Free accessories worth 10k
                </h4>
                <p className="text-lg">
                  On your purchase from our side we provides free accessories
                  worth upto 10K.
                </p>
              </div>
            </div>
          </Link>

          <Link href="/buy-used-cars" passHref className="w-full">
            <div className="text-center justify-center my-4 bg-[#FBFBFB] text-black p-2 rounded-lg">
              <img
                src="carousel/used-car-4.png"
                className="img-fluid w-full h-80 object-cover rounded-lg"
                alt="howitworks"
                width="280"
              />
              <div className="text-left space-y-4 py-4">
                <h4 className="text-xl text-black font-bold tracking-widest mt-4 flex-none buyh4">
                  First Service free
                </h4>
                <p className="text-lg">
                  We provide first free car service for our users ie car
                  servicing, washing etc. 
                </p>
              </div>
            </div>
          </Link>
        </div>

        <h2 className="text-[#000] font-black my-2 text-center sellheadfont pt-8">
          Featured Cars
        </h2>

        <FeaturedCars featuredlist={featuredCars} desktopItemNum={4} />

        <Link href="/buy-used-cars" passHref className="w-full">
          <button className="bg-orange-500 text-white mt-10 px-4 py-1 text-2xl rounded-lg hover:bg-orange-600 browsbtn">
            Browse Car
          </button>
        </Link>
        {/* <button className="bg-blue-200 p-2 px-3 hover:animate-none animate-[bounce_1s_ease-in-out_infinite] font-medium text-lg text-blue-900 rounded-full mt-5">
                    <span className='flex'><Link href={"/buy-used-cars"}> Buy a Car</Link><AiOutlineArrowRight className='flex-none ml-2 my-1'/></span>
                </button> */}
      </div>
    </div>
  );
};

export default Buycar;
