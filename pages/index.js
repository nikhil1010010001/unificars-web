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
// import TestemonialCarousel from "@/components/TestemonialCarousel";
import CookiesSection from "@/components/CookiesSection";
import HowToSell from "@/components/Home/Howtosell";
import ExploreActionCard from "@/components/ExploreActionCard";
import TestimonialCarousel from "@/components/TestemonialCarousel";
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

  const [userLocation, setUserLocation] = useState({});

  const userGeolocation = async () => {
    const localLocation = localStorage.getItem("userLocation");

    console.log("localLocation", localLocation);

    if (!localLocation) {
      const geolocation = navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation(position.coords);
          localStorage.setItem("userLocation", JSON.stringify(position.coords));
        },
        (error) => {
          console.log(error);
        }
      );
    }
  };

  useEffect(() => {
    userGeolocation();
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
              className={`absolute left-0 top-0 w-1/2 h-full bg-opacity-80 px-20 z-10 flex flex-col justify-center backdrop-blur-[6px] bg-[#f7f6f6]/30`}>
              <Carousel
                showStatus={false}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}>
                <div>
                  <h1 className="text-5xl font-black banheadfont">
                    Choose Reliability, Choose Your New Car.
                  </h1>
                  <p className="text-lg my-4 mb-6 text-left font-inter">
                    Trusted by over 1 Lakh customers. Choose from 5000+ Unifi
                    Assured Cars
                  </p>
                  {/* <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 font-inter" style={{ width: 'fit-content', float: 'left' }}>Buy Car</button> */}
                  <Link href="/buy-used-cars" passHref>
                    <button
                      className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 font-inter"
                      style={{ width: "fit-content", float: "left" }}>
                      Buy Car
                    </button>
                  </Link>
                </div>

                <div>
                  <h1 className="text-5xl font-black banheadfont font-futura">
                    Fast. Fair. Done. Sell Your Car with Unifi.
                  </h1>
                  <p className="text-lg my-4 mb-6 text-left font-inter">
                    Trusted by over 1 Lakh customers. Choose from 5000+ Unifi
                    Assured Cars
                  </p>
                  {/* <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 font-inter" style={{ width: 'fit-content', float: 'left' }}>Sell Car</button> */}
                  <Link href="/sell-used-cars" passHref>
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 font-inter"
                      style={{ width: "fit-content", float: "left" }}>
                      Sell Car
                    </button>
                  </Link>
                </div>
              </Carousel>
            </div>

            {/* Image section */}
            <div className="w-full flex justify-center items-center">
              <div className="w-full h-full bg-[#f7f6f6]/30" />
              <div className="w-full h-full bg-[#fffde7]">
                <img
                  src="/homecar-new.png"
                  className={`object-contain absolute right-24`}
                  alt="Car Image"
                  style={{ width: "70%" }}
                />
              </div>
            </div>
          </div>

          {/* For smaller screens */}
          <div className={`md:hidden `}>
            <div
              className="relative flex items-center justify-center"
              style={{ backgroundColor: "#fffde7", height: "400px" }}>
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
                className="absolute bottom-10 text-center w-full">
                <div className="flex flex-col mx-4 items-start justify-start">
                  <h1 className="text-2xl mb-2 font-bold text-start">
                    Choose Reliability, Choose Your New Car.
                  </h1>
                  <p className="text-sm mb-4 text-start">
                    Trusted by over 1 Lakh customers. Choose from 5000+ Unifi
                    Assured Cars
                  </p>
                  <Link href="/buy-used-cars" passHref>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                      Buy Car
                    </button>
                  </Link>
                </div>

                <div className="flex flex-col mx-4 items-start justify-start">
                  <h1 className="text-2xl mb-2 font-bold text-start">
                    Fast. Fair. Done. Sell Your Car with Unifi.
                  </h1>
                  <p className="text-sm mb-4 text-start">
                    Trusted by over 1 Lakh customers. Choose from 5000+ Unifi
                    Assured Cars
                  </p>
                  <Link href="/sell-used-cars" passHref>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                      Sell Car
                    </button>
                  </Link>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      <CookiesSection />

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
          <Link href="/sell-used-cars" passHref>
            <div className="flex flex-col gap-4 bg-[#FBFBFB] text-black p-6 py-12 rounded-lg shadow-md">
              <div>
                <img
                  src="/handshake-new.png"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h4 className="text-2xl font-bold buyh4">Sell Car</h4>
              <p className="text-lg">
                Sell your car easily with us and get better offers with hassle
                free process.
                <br /> &nbsp;
              </p>
            </div>
          </Link>

          <Link href="/buy-used-cars" passHref>
            <div className="flex flex-col gap-4 bg-[#FBFBFB] text-black p-6 py-12 rounded-lg shadow-md">
              <div>
                <img
                  src="/rentalcar-new.png"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h4 className="text-2xl font-bold buyh4">Buy Car</h4>
              <p className="text-lg">
                Explore top quality used cars at unbeatable price. Enjoy stress
                free car buying experience.
              </p>
            </div>
          </Link>

          <Link href="/pre-delivery-inspection" passHref>
            <div className="flex flex-col gap-4 bg-[#FBFBFB] text-black p-6 py-12 rounded-lg shadow-md">
              <div>
                <img
                  src="/car-insp-new.png"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h4 className="text-2xl font-bold buyh4">Car Inspection</h4>
              <p className="text-lg">
                Our car experts checked your car from interior to exterior and
                ensures your safety as our priority.
              </p>
            </div>
          </Link>
          {/* <Link href="/challan-check" passHref> */}
          <Link href="#" passHref>
            <div className="flex flex-col gap-4 bg-[#FBFBFB] text-black p-6 py-12 rounded-lg shadow-md">
              <div>
                <img
                  src="/challan-check.png"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h4 className="text-2xl font-black buyh4">Challan check</h4>
              <p className="text-lg">
                Stay informed & avoid penalties with our direct and easy process
                to fill your traffic challan online.
              </p>
            </div>
          </Link>
        </div>
      </div>

      <HowToSell />

      <SellCar />

      <Buycar />

      <div className="w-full my-16">
        <ExploreActionCard />
      </div>

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

      {/* <Reviews /> */}

      <div>
        {/* <div className="text-center items-center flex flex-col mb-6">
          <h2 className="text-4xl text-[#000] my-2 font-black">Testimonials</h2>
          <p className="customgryfnt text-lg font-normal">
            Their good reviews motivate us to do more
          </p>
          <img src='/home/title_line.png' />
        </div> */}

        <div className="md:px-4 px-2 mx-auto">
          {/* <TestemonialCarousel /> */}
          <TestimonialCarousel />
        </div>
      </div>

      <div className="container mx-auto my-16">
        <div className="grid grid-cols-1 lg:grid-cols-1 container mx-auto mt-5 lg:mt-10">
          <div className="line">
            <img src={"/download-banner.png"} alt="" className="rounded-xl" />
          </div>
        </div>
      </div>

      <div className="my-16">
        <HomeQuestions />
      </div>
    </>
  );
}

export default index;
