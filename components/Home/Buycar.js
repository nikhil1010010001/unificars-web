import Link from "next/link";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import ExploreCars from "./ExploreCars";

const Buycar = () => {
  return (
    <div className="py-6 text-center from-white to-blue-50 text-gray-600">
      <div className="w-11/12 mx-auto">
        <div className="text-center my-10 font-normal text-xl">
          {/* <span className="uppercase tracking-widest">Keys to cash Unlock the value of your car</span> */}
          <h1 className="text-[#000] font-black my-2 text-center sellheadfont">
            Buy Car
          </h1>
        </div>
        <div className="flex gap-6 md:flex-row flex-col">
          <div className="text-center justify-center my-4 bg-[#FBFBFB] text-black p-2 rounded-lg shadow-md">
            <img
              src="carousel/usedcars1.png"
              className="img-fluid w-full h-80 object-cover rounded-lg"
              alt="howitworks"
              width="280"
            />
            <div className="text-left">
              <h4 className="text-lg text-black font-black tracking-widest mt-4 flex-none buyh4">
                210 Point Inspection Report
              </h4>
              <p className="text-sm">
                Unifi provide 210 check points vehicle inspection report.
              </p>
            </div>
          </div>

          <div className="text-center justify-center my-4 bg-[#FBFBFB] text-black p-2 rounded-lg shadow-md">
            <img
              src="carousel/usedcars2.png"
              className="img-fluid w-full h-80 object-cover rounded-lg"
              alt="howitworks"
              width="280"
            />
            <div className="text-left">
              <h4 className="text-lg text-black font-bold tracking-widest mt-4 flex-none buyh4">
                10,000 km engine warranty
              </h4>
              <p className="text-sm">
                Every car is carefully hand picked after a thorough quality
                inspection.
              </p>
            </div>
          </div>

          <div className="text-center justify-center my-4 bg-[#FBFBFB] text-black p-2 rounded-lg shadow-md">
            <img
              src="carousel/usedcars3.png"
              className="img-fluid w-full h-80 object-cover rounded-lg"
              alt="howitworks"
              width="280"
            />
            <div className="text-left">
              <h4 className="text-lg text-black font-bold tracking-widest mt-4 flex-none buyh4">
                Free accessories worth 10k
              </h4>
              <p className="text-sm">
                {" "}
                Every car is carefully hand picked after a thorough quality
                inspection.
              </p>
            </div>
          </div>

          <div className="text-center justify-center my-4 bg-[#FBFBFB] text-black p-2 rounded-lg shadow-md">
            <img
              src="carousel/usedcars4.png"
              className="img-fluid w-full h-80 object-cover rounded-lg"
              alt="howitworks"
              width="280"
            />
            <div className="text-left">
              <h4 className="text-lg text-black font-bold tracking-widest mt-4 flex-none buyh4">
                First Service free
              </h4>
              <p className="text-sm">
                Every car is carefully hand picked after a thorough quality
                inspection.
              </p>
            </div>
          </div>
        </div>

        {/* <ExploreCars /> */}

        <Link href="/buy-used-cars" passHref>
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
