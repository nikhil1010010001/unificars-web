import React from "react";
import { RiStarSFill, RiStarSLine } from "react-icons/ri";
import Carousel from "react-multi-carousel";

function TestemonialCarousel() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1280 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1280, min: 720 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 720, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.25,
    },
  };

  return (
    <div className="bg-gray-50 py-12 w-full">
      <div className="text-center items-center flex flex-col mb-6 px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-[#000] my-2">
          What Our Clients Are Saying
        </h2>
        <p className="customgryfnt text-lg font-normal">
          Their good reviews motivate us to do more
        </p>
        {/* <img src='/home/title_line.png' /> */}
      </div>
      <div className=" w-11/12 mx-auto">
        <Carousel responsive={responsive} arrows={false}>
          <div className="flex flex-col items-center bg-white shadow rounded p-6 mx-4 h-[342px]">
            <div>
              <img
                src="/testimonials/testi1.jpeg"
                className="w-24 rounded-full object-cover h-[94px]"
              />
            </div>
            <div className="flex text-orange-500 mt-3">
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
            </div>
            <p className="font-medium my-2 text-center ">
              I recently purchased a car from Quick Buy. The vehicle is in
              excellent condition and truly value for money.
            </p>
            <h5 className="my-4 text-lg text-blue-950">SI MOTORS</h5>
          </div>

          <div className="flex flex-col items-center bg-white shadow rounded p-6 mx-4 h-[342px]">
            <div>
              <img
                src="/testimonials/testi2.jpeg"
                className="w-24 rounded-full object-cover h-[94px]"
              />
            </div>
            <div className="flex text-orange-500 mt-3">
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSLine />
            </div>
            <p className="font-medium my-2 text-center ">
              Our dealership's inventory has improved since we started sourcing
              cars from Unificars.
            </p>
            <h5 className="my-4 text-lg text-blue-950">AS TRADING</h5>
          </div>

          <div className="flex flex-col items-center bg-white shadow rounded p-6 mx-4 h-[342px]">
            <div>
              <img
                src="/testimonials/testi3.jpeg"
                className="w-24 rounded-full object-cover h-[94px]"
              />
            </div>
            <div className="flex text-orange-500 mt-3">
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
            </div>
            <p className="font-medium my-2 text-center ">
              As a dealer, finding reliable sources for quality cars is very
              crucial, and Unificars has never disappointed us.
            </p>
            <h5 className="my-4  text-lg text-blue-950">GIANI MOTORS</h5>
          </div>

          <div className="flex flex-col items-center bg-white shadow rounded p-6 mx-4 h-[342px]">
            <div>
              <img
                src="/testimonials/testi4.jpeg"
                className="w-24 rounded-full object-cover h-[94px]"
              />
            </div>
            <div className="flex text-orange-500 mt-3">
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
            </div>
            <p className="font-medium my-2 text-center ">
              The bidding system at unificars is the best system. We have won
              numerous cars that are well maintained.
            </p>
            <h5 className="my-4 text-lg text-blue-950">GM MOTORS</h5>
          </div>

          <div className="flex flex-col items-center bg-white shadow rounded p-6 mx-4 h-[342px]">
            <div>
              <img
                src="/testimonials/testi5.jpeg"
                className="w-24 rounded-full object-cover h-[94px]"
              />
            </div>
            <div className="flex text-orange-500 mt-3">
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
            </div>
            <p className="font-medium my-2 text-center ">
              Customer service at Unificars is Best. From the moment we inquired
              till the settlement the process was smooth.
            </p>
            <h5 className="my-4 text-lg text-blue-950">EXPART AUTOMOBILE</h5>
          </div>

          <div className="flex flex-col items-center bg-white shadow rounded p-6 mx-4 h-[342px]">
            <div>
              <img
                src="/testimonials/testi6.jpeg"
                className="w-24 rounded-full object-cover h-[94px]"
              />
            </div>
            <div className="flex text-orange-500 mt-3">
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
            </div>
            <p className="font-medium my-2 text-center ">
              Finding a well-maintained car at a great price was easy with Quick
              Buy, and the staff were incredibly helpful as well.
            </p>
            <h5 className="my-4  text-lg text-blue-950">NAWAJISH MOTORS</h5>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default TestemonialCarousel;
