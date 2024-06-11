import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";
import { TiTick } from "react-icons/ti";
import { RiStarSFill, RiStarSLine } from "react-icons/ri";

// import Carousel from "react-multi-carousel";

import dynamic from "next/dynamic";
import Reviews from "@/components/Home/Reviews";
// const BannerCarousel = dynamic(() => import("@/components/Home/BannerCarousel"),{ssr: false});
const HomeQuestions = dynamic(() => import("@/components/Home/HomeQuestions"), {
  ssr: false,
});
const SellCar = dynamic(() => import("@/components/Home/SellCar"), {
  ssr: false,
});
const Buycar = dynamic(() => import("@/components/Home/Buycar"), {
  ssr: false,
});
const Howtosell = dynamic(() => import("@/components/Home/Howtosell"), {
  ssr: false,
});

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

function index() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Buy and Sell Used Cars with Best Price | Unificars</title>
        <meta
          name="description"
          content="Buy and sell used cars at Unificars in just 29 minutes. We provide free home inspection to sell your car, offers 100% verified used cars with easy RC transfer."
        />
        <link rel="canonical" href="https://unificars.com" />
      </Head>

      <div className="relative" style={{ paddingTop: "85px" }}>
        {/* <BannerCarousel /> */}
        <div className="cursor-pointer relative overflow-hidden">
          {/* For larger screens */}
          <div className="hidden md:flex relative w-full h-[35rem]">
            {/* Text section */}
            <div
              className={`absolute left-0 top-0 w-1/2 h-full bg-opacity-80 px-20 z-10 flex flex-col justify-center backdrop-blur-sm bg-gradient-to-r from-white`}
            >
              <Carousel
                className=""
                showStatus={false}
                showThumbs={false}
                infiniteLoop
                autoPlay
              >
                <div>
                  <h1 className="text-5xl font-black mb-4 banheadfont">
                    Choose Reliability, Choose Your New Car.
                  </h1>
                  <p className="text-lg mb-4 text-left font-inter">
                    Trusted by over 1 Lakh customers. Choose from 5000+ Unifi
                    Assured Cars
                  </p>
                  {/* <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 font-inter" style={{ width: 'fit-content', float: 'left' }}>Buy Car</button> */}
                  <Link href="/buy-used-cars" passHref>
                    <button
                      className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 font-inter"
                      style={{ width: "fit-content", float: "left" }}
                    >
                      Buy Car
                    </button>
                  </Link>
                </div>
                <div>
                  <h1 className="text-5xl font-black mb-4 banheadfont">
                    Fast. Fair. Done. Sell Your Car with Unifi.
                  </h1>
                  <p className="text-lg mb-4 text-left font-inter">
                    Trusted by over 1 Lakh customers. Choose from 5000+ Unifi
                    Assured Cars
                  </p>
                  {/* <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 font-inter" style={{ width: 'fit-content', float: 'left' }}>Sell Car</button> */}
                  <Link href="/sell-used-cars" passHref>
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 font-inter"
                      style={{ width: "fit-content", float: "left" }}
                    >
                      Sell Car
                    </button>
                  </Link>
                </div>
              </Carousel>
            </div>
            {/* Image section */}
            <div className="w-full flex justify-center items-center bg-[#fffde7]">
              <img
                src="/homecar.png"
                className={`object-contain`}
                alt="Car Image"
                style={{ width: "70%" }}
              />
            </div>
          </div>

          {/* For smaller screens */}
          <div className={`md:hidden `}>
            <div
              className="relative flex items-center justify-center"
              style={{ backgroundColor: "#FDF4E3", height: "400px" }}
            >
              <img
                src="/homecar.png"
                className="absolute transform -translate-y-1/2 object-contain mt-12"
                style={{ height: "250px" }}
                alt="Car Image"
              />
              <Carousel
                showStatus={false}
                showThumbs={false}
                infiniteLoop
                autoPlay
                className="absolute bottom-10 text-center w-full"
              >
                <div className="flex flex-col mx-4 items-start justify-start">
                  <h1 className="text-2xl mb-2 font-bold text-start">
                    Choose Reliability, Choose Your New Car.
                  </h1>
                  <p className="text-sm mb-4 text-start">
                    Trusted by over 1 Lakh customers. Choose from 5000+ Unifi
                    Assured Cars
                  </p>
                  <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                    Buy Car
                  </button>
                </div>

                <div className="flex flex-col mx-4 items-start justify-start">
                  <h1 className="text-2xl mb-2 font-bold text-start">
                    Fast. Fair. Done. Sell Your Car with Unifi.
                  </h1>
                  <p className="text-sm mb-4 text-start">
                    Trusted by over 1 Lakh customers. Choose from 5000+ Unifi
                    Assured Cars
                  </p>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Sell Car
                  </button>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 pt-16">
        {/* <div className="absolute w-full h-60 -z-10 rounded-lg top-4"></div> */}
        {/* <h1 className='py-2 font-bold text-center text-3xl font-bold text-black'>What We Do</h1> */}
        <div className="text-4xl w-[50] mx-auto px-6 order-last lg:order-first text-center">
          <h1 className="py-6 font-bold">
            <span className="text-orange-500 sellheadfont">What</span>
            <span className="sellheadfont"> We Do</span>
          </h1>
        </div>

        {/* <p className="text-center mb-8 hiwpara">keys to cash unlock the value of your car</p> */}

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
          <div className="flex flex-col gap-4 bg-[#FBFBFB] text-black p-6 rounded-lg shadow-md">
            <div>
              <img src="/handshake.png" className="w-8 object-cover h-[30px]" />
            </div>
            <h4 className="text-lg font-bold buyh4">Sell Car</h4>
            <p>
              Scrapping of your car with Hassle-Free process & legal
              documentation.
            </p>
            <p className="text-blue-500 cursor-pointer hover:text-orange-500">
              Learn More
            </p>
          </div>

          <div className="flex flex-col gap-4 bg-[#FBFBFB] text-black p-6 rounded-lg shadow-md">
            <div>
              <img src="/rentalcar.png" className="w-8 object-cover h-[30px]" />
            </div>
            <h4 className="text-lg font-bold buyh4">Buy Car</h4>
            <p>
              Scrapping of your car with Hassle-Free process & legal
              documentation.
            </p>
            <p className="text-blue-500 cursor-pointer hover:text-orange-500">
              Learn More
            </p>{" "}
          </div>

          <div className="flex flex-col gap-4 bg-[#FBFBFB] text-black p-6 rounded-lg shadow-md">
            <div>
              <img src="/car-insp.png" className="w-8 object-cover h-[30px]" />
            </div>
            <h4 className="text-lg font-bold buyh4">Car Inspection</h4>
            <p>
              Scrapping of your car with Hassle-Free process & legal
              documentation.
            </p>
            <p className="text-blue-500 cursor-pointer hover:text-orange-500">
              Learn More
            </p>{" "}
          </div>

          <div className="flex flex-col gap-4 bg-[#FBFBFB] text-black p-6 rounded-lg shadow-md">
            <div>
              <img src="/assur-fix.png" className="w-8 object-cover h-[30px]" />
            </div>
            <h4 className="text-lg font-bold buyh4">Assured Fix</h4>
            <p>
              Scrapping of your car with Hassle-Free process & legal
              documentation.
            </p>
            <p className="text-blue-500 cursor-pointer hover:text-orange-500">
              Learn More
            </p>
          </div>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 pt-16">
        {/* <div className="absolute w-full h-60 -z-10 rounded-lg top-4"></div> */}
        {/* <h1 className='py-2 font-bold text-center text-3xl font-bold text-black'>What We Do</h1> */}
        <div className="text-4xl w-[50] mx-auto px-6 order-last lg:order-first text-center">
          <h1 className="py-2 font-black">
            <span className="text-orange-500 sellheadfont">How</span>
            <span className="sellheadfont"> to Sell !</span>
          </h1>
        </div>
        <p className="text-center mb-8 hiwpara">
          keys to cash unlock the value of your car
        </p>

        <div className="flex gap-6 md:flex-row flex-col">
          <div className="text-center justify-center my-4 bg-[#FBFBFB] text-black p-2 rounded-lg shadow-md">
            <img
              src="carousel/carousel-new-1.png"
              className="img-fluid w-full object-cover h-80 rounded-xl"
              alt="howitworks"
              width="280"
            />
            <div className="text-left space-y-2">
              <h4 className="text-lg text-black font-black tracking-widest mt-4 flex-none buyh4">
                SUBMIT YOUR CAR DETAILS
              </h4>
              <p className="text-sm">
                Provide simple details of your car like mobile number, year and
                mileage for accurate price.
              </p>
            </div>
          </div>

          <div className="text-center justify-center my-4 bg-[#FBFBFB] text-black p-2 rounded-lg shadow-md">
            <img
              src="carousel/carousel-new-2.png"
              className="img-fluid w-full object-cover h-80 rounded-xl"
              alt="howitworks"
              width="280"
            />
            <div className="text-left space-y-2">
              <h4 className="text-lg text-black font-bold tracking-widest mt-4 flex-none buyh4">
                GET QUICK VALUATION
              </h4>
              <p className="text-sm">
                Our advance methods quickly analyze your car price and get the
                estimate value of your car.
              </p>
            </div>
          </div>

          <div className="text-center justify-center my-4 bg-[#FBFBFB] text-black p-2 rounded-lg shadow-md">
            <img
              src="carousel/carousel-new-3.png"
              className="img-fluid w-full object-cover h-80 rounded-xl"
              alt="howitworks"
              width="280"
            />
            <div className="text-left space-y-2">
              <h4 className="text-lg text-black font-bold tracking-widest mt-4 flex-none buyh4">
                EASY PAYMENT METHODS
              </h4>
              <p className="tet-sm">
                We Provide you online and cash payment options according to your
                suitability.
              </p>
            </div>
          </div>
        </div>
      </div>

      <SellCar />

      <Buycar />

      {/* <Howtosell/> */}

      {/* <div className="container mx-auto p-6 md:px-10 mt-5">
          <div className='relative' >
              <div><img src='/pdi.png' /></div>
          </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 container mx-auto gap-4 mt-10 mb-16 lg:mt-10 border-2 rounded-xl'>
          <div className=" mx-4 mt-2 font-bold place-self-center">
              <h2 className='py-2 text-4xl text-black ' >How to join us</h2>
              <p className='font-normal text-black my-2 '>Join our family in 4 simple steps.</p>
              <ul className='my-12 flex flex-col gap-6 '>
                  <li className='flex font-bold'><div className='flex-none pt-1 mr-2'><TiTick className='bg-[#FFB648] text-xl rounded-full text-[#ffffff]' /></div>Register yourself and our Executive will contact you within 24 Hours.</li>

                  <li className='flex font-bold'><div className='flex-none pt-1 mr-2'><TiTick className='bg-[#FFB648] text-xl rounded-full text-[#ffffff]' /></div>Download the app via playstore or app store</li>

                  <li className='flex font-bold'><div className='flex-none pt-1 mr-2'><TiTick className='bg-[#FFB648] text-xl rounded-full text-[#ffffff]' /></div>Verifying your profile</li>
                  
                  <li className='flex font-bold'><div className='flex-none pt-1 mr-2'><TiTick className='bg-[#FFB648] text-xl rounded-full text-[#ffffff]' /></div>Start bidding on the cars</li>
              </ul>
          </div>
          
          <div className="line"><img src={"/howtojoin.png"} alt="" className='rounded-xl' style={{width:'60%',margin:'auto'}}/></div>
      </div> */}

      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-1 container mx-auto mt-5 lg:mt-10">
          <div className="line">
            <img src={"/unififixassured.png"} alt="" className="rounded-xl" />
          </div>
        </div>
      </div>

      {/* <Reviews /> */}

      <div className="bg-gray-50 py-12">
        <div className="text-center items-center flex flex-col mb-6">
          <h2 className="text-4xl text-[#000] my-2 font-black">Testimonials</h2>
          {/* <p className="customgryfnt text-lg font-normal">
            Their good reviews motivate us to do more
          </p> */}
          {/* <img src='/home/title_line.png' /> */}
        </div>

        <div className="px-4 mx-auto">
          <Carousel showThumbs={false} autoPlay infiniteLoop showStatus={false}>
            {/* Slide 1 */}
            <div className="flex items-center w-full">
              <div className="flex flex-col items-center bg-white shadow rounded p-6 mx-2 h-[342px] w-full">
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
                <p className="font-medium my-2 text-center">
                  I recently purchased a car from Quick Buy. The vehicle is in
                  excellent condition and truly value for money.
                </p>
                <h5 className="my-4 text-lg text-blue-950">SI MOTORS</h5>
              </div>

              <div className="hidden md:flex flex-col items-center bg-white shadow rounded p-6 mx-2 h-[342px] w-full">
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
                <p className="font-medium my-2 text-center">
                  Our dealership's inventory has improved since we started
                  sourcing cars from Unificars.
                </p>
                <h5 className="my-4 text-lg text-blue-950">AS TRADING</h5>
              </div>

              <div className="hidden md:flex flex-col items-center bg-white shadow rounded p-6 mx-2 h-[342px] w-full">
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
                <p className="font-medium my-2 text-center">
                  As a dealer, finding reliable sources for quality cars is very
                  crucial, and Unificars has never disappointed us.
                </p>
                <h5 className="my-4 text-lg text-blue-950">GIANI MOTORS</h5>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="flex justify-around">
              <div className="flex flex-col items-center bg-white shadow rounded p-6 mx-2 h-[342px] w-full">
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
                <p className="font-medium my-2 text-center">
                  The bidding system at unificars is the best system. We have
                  won numerous cars that are well maintained.
                </p>
                <h5 className="my-4 text-lg text-blue-950">GM MOTORS</h5>
              </div>

              <div className="hidden md:flex flex-col items-center bg-white shadow rounded p-6 mx-2 h-[342px] w-full">
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
                <p className="font-medium my-2 text-center">
                  Customer service at Unificars is Best. From the moment we
                  inquired till the settlement the process was smooth.
                </p>
                <h5 className="my-4 text-lg text-blue-950">
                  EXPART AUTOMOBILE
                </h5>
              </div>

              <div className="hidden md:flex flex-col items-center bg-white shadow rounded p-6 mx-2 h-[342px] w-full">
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
                <p className="font-medium my-2 text-center">
                  Finding a well-maintained car at a great price was easy with
                  Quick Buy, and the staff were incredibly helpful as well.
                </p>
                <h5 className="my-4 text-lg text-blue-950">NAWAJISH MOTORS</h5>
              </div>
            </div>
          </Carousel>
        </div>
      </div>

      <HomeQuestions />
    </>
  );
}

export default index;
