import Image from "next/image";
import React from "react";

const HowToSell = () => {
  return (
    <div className="relative max-w-6xl mx-auto px-4 pt-16">
      {/* <div className="absolute w-full h-60 -z-10 rounded-lg top-4"></div> */}
      {/* <h1 className='py-2 font-bold text-center text-3xl font-bold text-black'>What We Do</h1> */}
      <div className="text-4xl w-[50] mx-auto px-6 order-last lg:order-first text-center mb-4">
        <h1 className="py-2 font-black">
          <span className="text-orange-500 sellheadfont">How</span>
          <span className="sellheadfont"> to Sell !</span>
        </h1>
      </div>
      <p className="text-center mb-8 hiwpara">
        keys to cash unlock the value of your car
      </p>

      <div className="flex gap-6 md:flex-row flex-col w-full">
        <div className="relative text-center justify-center my-4 bg-[#FBFBFB] text-black p-2 rounded-lg md:w-[45%] overflow-hidden">
          <Image
            width={100}
            height={100}
            src="/sell-fast.png"
            alt="Fast"
            className="absolute -top-5 -left-5 w-32"
          />
          <Image
            width={400}
            height={400}
            src="/carousel/carousel-new-1.png"
            className="img-fluid w-full object-cover h-80 rounded-xl"
            alt="howitworks"
          />
          <div className="text-left space-y-4 p-4">
            <h4 className="text-xl text-black font-bold mt-4 flex-none">
              SUBMIT YOUR CAR DETAILS
            </h4>
            <p className="text-lg">
              Provide simple details of your car like mobile number, year and
              mileage for accurate price.
            </p>
          </div>
        </div>

        <div className="relative text-center justify-center my-4 bg-[#FBFBFB] text-black p-2 rounded-lg md:w-[45%] overflow-hidden">
          <Image
            width={100}
            height={100}
            src="/sell-fair.png"
            alt="Fast"
            className="absolute -top-5 -left-5 w-32"
          />
          <Image
            src="/carousel/carousel-new-2.png"
            className="img-fluid w-full object-cover h-80 rounded-xl"
            alt="howitworks"
            height={400}
            width={400}
          />
          <div className="text-left space-y-4 p-4">
            <h4 className="text-xl text-black font-bold mt-4 flex-none">
              GET QUICK VALUATION
            </h4>
            <p className="text-lg">
              Our advance methods quickly analyze your car price and get the
              estimate value of your car.
            </p>
          </div>
        </div>

        <div
          className="relative text-center justify-center my-4 bg-[#FBFBFB] text-black p-2 rounded-lg 
      md:w-[45%] overflow-hidden">
          <Image
            width={100}
            height={100}
            src="/sell-done.png"
            alt="Fast"
            className="absolute -top-5 -left-5 w-32"
          />
          <Image
            width={400}
            height={400}
            src="/carousel/carousel-new-4.png"
            className="img-fluid w-full object-cover h-80 rounded-xl"
            alt="howitworks"
          />
          <div className="text-left space-y-4 p-4">
            <h4 className="text-xl text-black font-bold mt-4 flex-none">
              EASY PAYMENT METHODS
            </h4>
            <p className="text-lg">
              We Provide you online and cash payment options according to your
              suitability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToSell;
