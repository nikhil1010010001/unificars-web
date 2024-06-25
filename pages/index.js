import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";
import CookiesSection from "@/components/CookiesSection";
import HowToSell from "@/components/Home/Howtosell";
import ExploreActionCard from "@/components/ExploreActionCard";
import TestimonialCarousel from "@/components/TestemonialCarousel";

import HomeQuestions from "@/components/Home/HomeQuestions";
import SellCar from "@/components/Home/SellCar";
import Buycar from "@/components/Home/Buycar";
import Image from "next/image";

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

  const [userLocation, setUserLocation] = useState({});

  const userGeolocation = async () => {
    const localLocation = localStorage.getItem("userLocation");

    if (!localLocation) {
      navigator.geolocation.getCurrentPosition(
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

      <div className="relative">
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
                    Choose Reliability, Choose Your New Car
                  </h1>
                  <p className="text-lg my-4 mb-6 text-left font-sans">
                    Trusted by over 1 Lakh customers. Choose from 5000+ Unifi
                    Assured Cars
                  </p>

                  <Link href="/buy-used-cars">
                    <button
                      className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 font-sans"
                      style={{ width: "fit-content", float: "left" }}>
                      Buy Car
                    </button>
                  </Link>
                </div>

                <div>
                  <h1 className="text-5xl font-black banheadfont">
                    Fast, Fair, Done Sell Your Car with Unifi Cars
                  </h1>
                  <p className="text-lg my-4 mb-6 text-left font-sans">
                    Experience a transparent and hassle-free car selling
                    journey. With Unifi Cars
                  </p>

                  <Link href="/sell-used-cars">
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 font-sans"
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
                <Image
                  width={700}
                  height={350}
                  src="/homecar-new.png"
                  className="object-contain w-[70%] absolute right-24"
                  alt="Car Image"
                />
              </div>
            </div>
          </div>

          {/* For smaller screens */}
          <div className={`md:hidden`}>
            <div
              className="relative flex items-center justify-center pt-8"
              style={{ backgroundColor: "#fffde7", height: "400px" }}>
              <Image
                width={300}
                height={150}
                src="/homecar-new.png"
                className="absolute transform -translate-y-1/2 object-contain mt-12 h-64 w-full"
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
                    Choose Reliability, Choose Your New Car
                  </h1>
                  <p className="text-sm mb-4 text-start">
                    Trusted by over 1 Lakh customers. Choose from 5000+ Unifi
                    Assured Cars
                  </p>
                  <Link href="/buy-used-cars">
                    <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                      Buy Car
                    </button>
                  </Link>
                </div>

                <div className="flex flex-col mx-4 items-start justify-start">
                  <h1 className="text-2xl mb-2 font-bold text-start">
                    Fast. Fair. Done. Sell Your Car with Unifi Cars
                  </h1>
                  <p className="text-sm mb-4 text-start">
                    Trusted by over 1 Lakh customers. Choose from 5000+ Unifi
                    Assured Cars
                  </p>
                  <Link href="/sell-used-cars">
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
        <div className="text-4xl min-w-[50] mx-auto px-2 md:px-6 order-last lg:order-first text-center">
          <h1 className="py-6 font-bold">
            <span className="text-orange-500 sellheadfont">What</span>
            <span className="sellheadfont"> We Do</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 h-full">
          <Link href="/sell-used-cars">
            <div className="flex flex-col gap-4 bg-[#FBFBFB] text-black p-6 py-12 rounded-lg shadow-md">
              <div>
                <Image
                  width={100}
                  height={100}
                  src="/handshake-new.png"
                  className="w-16 h-16 object-contain"
                  alt="Sell Car"
                />
              </div>
              <h4 className="text-2xl font-bold buyh4">Sell Car</h4>
              <p className="text-lg">
                Sell your car easily with us and get better offers with hassle
                free process.
                <br /> &nbsp;
                <br /> &nbsp;
              </p>
            </div>
          </Link>

          <Link href="/buy-used-cars">
            <div className="flex flex-col gap-4 bg-[#FBFBFB] text-black p-6 py-12 rounded-lg shadow-md">
              <div>
                <Image
                  width={100}
                  height={100}
                  src="/rentalcar-new.png"
                  className="w-16 h-16 object-contain"
                  alt="Buy Car"
                />
              </div>
              <h4 className="text-2xl font-bold buyh4">Buy Car</h4>
              <p className="text-lg">
                Explore top quality used cars at unbeatable price. Enjoy stress
                free car buying experience.
                <br /> &nbsp;
              </p>
            </div>
          </Link>

          <Link href="/pre-delivery-inspection">
            <div className="flex flex-col gap-4 bg-[#FBFBFB] text-black p-6 py-12 rounded-lg shadow-md">
              <div>
                <Image
                  width={100}
                  height={100}
                  src="/car-insp-new.png"
                  className="w-16 h-16 object-contain"
                  alt="Car Health Report"
                />
              </div>
              <h4 className="text-2xl font-bold buyh4">Car Health Report</h4>
              <p className="text-lg">
                Car Health Report ensures safety with 210 checkpoints, covering
                all issues by certified professionals.
              </p>
            </div>
          </Link>

          <Link href="/challan-check">
            <div className="flex flex-col gap-4 bg-[#FBFBFB] text-black p-6 py-12 rounded-lg shadow-md">
              <div>
                <Image
                  width={100}
                  height={100}
                  src="/challan-check.png"
                  className="w-16 h-16 object-contain"
                  alt="Challan Check"
                />
              </div>
              <h4 className="text-2xl font-black buyh4">Challan Check</h4>
              <p className="text-lg">
                Stay informed & avoid penalties with our direct and easy process
                to fill your traffic challan online.
                <br /> &nbsp;
              </p>
            </div>
          </Link>
        </div>
      </div>

      <HowToSell />

      <SellCar />

      <Buycar />

      <div className="w-full mx-auto my-16">
        <ExploreActionCard />
      </div>

      <div>
        <div className="md:px-4 px-2 mx-auto my-16">
          <TestimonialCarousel />
        </div>
      </div>

      <div className="container mx-auto my-16">
        <Image
          width={3840 / 3}
          height={1302 / 3}
          src={"/download-banner.png"}
          className="rounded-xl object-cover w-full"
          alt="Download Banner"
        />
      </div>

      <div className="my-16">
        <HomeQuestions />
      </div>
    </>
  );
}

export default index;
