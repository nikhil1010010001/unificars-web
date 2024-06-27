import React from "react";
import { TiTick } from "react-icons/ti";
import { FaCar } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { BsFillBuildingsFill } from "react-icons/bs";

import Head from "next/head";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import TestimonialCarousel from "@/components/TestimonialCarousel";

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
      <div className="pb-4">
        <div className="relative">
          <Image
            src="/aboutus.png"
            alt="about us"
            width={1000}
            height={800}
            className="w-full object-cover pt-12"
          />
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

      <div className="container mx-auto p-6 md:px-20 flex gap-4 md:gap-8">
        <Image
          src="/aboutus-office.png"
          alt="Office of Unifi Cars"
          width={500}
          height={300}
          className="w-[50%] rounded-xl"
        />
        <div className="w-full">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-black font-sans">
              UNIFI WHEELS
              <br />
              PRIVATE LIMITED
            </h2>
            <p className="text-md text-black-600 my-4 font-sans">
              Welcome to our platform for buying and selling used cars! We
              strive to provide a seamless and convenient experience for
              individuals looking to purchase or sell pre-owned cars.
            </p>
          </div>

          <div>
            <ul className="my-4 flex flex-col gap-6 ">
              <li className="flex font-sm border-b-2 pb-4 text-lg font-sans">
                <div className="flex-none pt-1 mr-4">
                  <FaCar className="bg-[#ffffff] text-4xl " />
                </div>
                Looking for a second hand car or want to sell one? Unifi Cars is
                the destination.
              </li>

              <li className="flex font-sm border-b-2 pb-4 text-lg font-sans">
                <div className="flex-none pt-1 mr-4">
                  <IoDocumentTextSharp className="bg-[#ffffff] text-4xl " />
                </div>
                Or, you want to sell your car to someone who understands the
                value of it, pays the right price and the transaction is hassle
                free.
              </li>

              <li className="flex text-lg font-sans">
                <div className="flex-none pt-1 mr-4 ">
                  <BsFillBuildingsFill className="bg-[#ffffff] text-4xl " />
                </div>
                Sounds familiar? You are at the right place. We understand the
                subtlety of your pain points and we are here to rectify those to
                make your experience wonderful.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="my-16 max-w-[1000px] mx-auto">
        <h2 className="text-4xl font-bold text-black font-sans text-center mb-8">
          Our Team
        </h2>
        <div className="flex flex-wrap justify-evenly items-center gap-4 lg:gap-8">
          <div className="flex flex-col gap-4">
            <Image
              src="/about-team-1.png"
              alt="Team"
              width={100}
              height={100}
              className="w-24 rounded-full"
            />
            <p className="text-2xl text-orange-500 font-bold">Amit Gupta</p>
            <p>Founder, CEO</p>
          </div>

          <div className="flex flex-col gap-4 items-center justify-center">
            <Image
              src="/about-team-2.png"
              alt="Team"
              width={100}
              height={100}
              className="w-24 rounded-full"
            />
            <p className="text-2xl text-orange-500 font-bold">Vikas Jangra</p>
            <p>Co-founder</p>
          </div>

          <div className="flex flex-col gap-4 items-center justify-center">
            <Image
              src="/about-team-3.png"
              alt="Team"
              width={100}
              height={100}
              className="w-24 rounded-full"
            />
            <p className="text-2xl text-orange-500 font-bold">Amit Taneja</p>
            <p>Director & CFO</p>
          </div>

          <div className="flex flex-col gap-4 items-center justify-center">
            <Image
              src="/about-team-4.png"
              alt="Team"
              width={100}
              height={100}
              className="w-24 rounded-full"
            />
            <p className="text-2xl text-orange-500 font-bold">Satyajit Gupta</p>
            <p>Director & COO</p>
          </div>
        </div>
      </div>

      <div className="bg-[#fbfbfb] py-10 px-2 lg:px-20">
        <div className="container mx-auto gap-4 ">
          <h2 className="py-2 text-4xl text-center font-bold">Our Mission</h2>
          <div className="line">
            <Image
              src={"/about-india.png"}
              alt="India map"
              className="rounded-xl w-[400px] mx-auto"
              width={800}
              height={500}
            />
          </div>
          <div className="font-bold text-black content-center max-w-[800px] mx-auto">
            <p className="font-normal text-black my-2 text-center text-xl">
              At Unifi Cars we are trying to rectify the pain points, still
              holding a pre owned car seller or buyer from selling or buying it
              online. There are already multiple platforms to buy or sell a car
              but what they lack in service, is our USP. We think it's time to
              revolutionize the process of selling and buying pre owned cars in
              India.
            </p>
          </div>
        </div>
      </div>

      {/* <Reviews/> */}

      <TestimonialCarousel />
    </div>
  );
};

export default about;
