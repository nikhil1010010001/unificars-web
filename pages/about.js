import React from "react";
import { TiTick } from "react-icons/ti";

import Head from "next/head";
import "react-multi-carousel/lib/styles.css";
import TestemonialCarousel from "@/components/TestemonialCarousel";

const about = () => {
  const title = "About Us | Experience Delightful Car Ownership | Unificars";
  const description =
    "Unificars is your top destination for buy and sell used cars, offering competitive pricing and valuable car-related information.";
  const canonicalUrl = "https://unificars.com/about";
  return (
    <div className="">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        {/* Add other meta tags if needed */}
      </Head>
      <div className="container mx-auto py-6 md:px-10">
        <div className="relative" style={{ paddingTop: "100px" }}>
          <div>
            <img src="/aboutus.png" />
          </div>
          {/* <div className='absolute left-[45%] top-1/3 '>
                        <h2 className='text-white text-xl lg:text-5xl text-center'>Buy, Sell, and Drive On!</h2>
                        <p className='text-white text-2xl my-4 hidden lg:block'>Let the UNIFI WHEELS PRIVATE LIMITED be a part of your journey.</p>
                        <div className='flex gap-4 justify-center mt-3'>
                            <Link href={"/assured-cars"} className='bg-[#f38102] p-1 lg:p-2 text-white cursor-pointer hover:scale-105 lg:px-6 hover:text-[#f38102] hover:bg-white border-[#f38102] border text-center transition-all duration-300 ease-in-out rounded shadow'>Buy Car</Link>
                            <Link href={"/sell-used-cars"} className='bg-[#f38102] p-1 lg:p-2 text-white cursor-pointer hover:scale-105 lg:px-6 hover:text-[#f38102] hover:bg-white border-[#f38102] border text-center transition-all duration-300 ease-in-out rounded shadow'>Sell Car</Link>
                        </div>
                    </div> */}
        </div>
      </div>

      <div>
        <div className="container mx-auto p-6 md:px-20">
          <div className="mb-12 font-bold text-center">
            <h2 className="text-2xl text-black">
              UNIFI WHEELS PRIVATE LIMITED
            </h2>
            <p className="text-sm text-black-600 my-2">
              Welcome to our platform for buying and selling used cars! We
              strive to provide a seamless and convenient experience for
              individuals looking to purchase or sell pre-owned cars.
            </p>
          </div>

          <div className="md:w-[60%] mx-auto">
            <ul className="my-12 flex flex-col gap-6 ">
              <li className="flex font-sm">
                <div className="flex-none pt-1 mr-2">
                  <TiTick className="bg-[#ffffff] text-xl rounded-full text-[#579EFD]" />
                </div>
                Looking for a second hand car or want to sell one? Unificars is
                the destination.
              </li>

              <li className="flex font-sm">
                <div className="flex-none pt-1 mr-2">
                  <TiTick className="bg-[#ffffff] text-xl rounded-full text-[#579EFD]" />
                </div>
                Or, you want to sell your car to someone who understands the
                value of it, pays the right price and the transaction is hassle
                free.
              </li>

              <li className="flex font-sm">
                <div className="flex-none pt-1 mr-2">
                  <TiTick className="bg-[#ffffff] text-xl rounded-full text-[#579EFD]" />
                </div>
                Sounds familiar? You are at the right place. We understand the
                subtlety of your pain points and we are here to rectify those to
                make your experience wonderful.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#E2E2E2] py-10 px-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto gap-4 ">
          <div className=" mx-4 font-bold text-black content-center">
            <h2 className="py-2 text-2xl">Our Mission</h2>
            <p className="font-normal text-black my-2 text-justify">
              At Unificars we are trying to rectify the pain points, still
              holding a pre owned car seller or buyer from selling or buying it
              online. There are already multiple platforms to buy or sell a car
              but what they lack in service, is our USP.
            </p>
            <h6 className="font-normal text-black my-2 text-justify">
              We think it's time to revolutionize the process of selling and
              buying pre owned cars in India.
            </h6>
          </div>
          <div className="line">
            <img src={"/map.png"} alt="" className="rounded-xl" />
          </div>
        </div>
      </div>

      {/* <Reviews/> */}
      <div className="bg-gray-50 py-12 h-full">
        <div className="text-center items-center flex flex-col mb-6 px-2">
          <h2 className="text-4xl text-[#000] my-2">Testimonials</h2>
          <p className="customgryfnt text-lg font-normal">
            Their good reviews motivate us to do more
          </p>
          {/* <img src='/home/title_line.png' /> */}
        </div>
        <div className="w-11/12 mx-auto">
          <TestemonialCarousel />
        </div>
      </div>
    </div>
  );
};

export default about;
