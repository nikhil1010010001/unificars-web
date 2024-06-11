import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  BsSpeedometer,
  BsFuelPumpFill,
  BsFillCarFrontFill,
} from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import BarLoader from "react-spinners/BarLoader";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import BuyCarSearchFilter from "@/components/cars-listing/BuyCarSearchFilter";
import Head from 'next/head';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const buyUsedCars = () => {
  const [CarListing, setCarListing] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCarList = async () => {
    setLoading(true)
    const fecthCars = await fetch("https://crm.unificars.com/api/getcustomercars")
    const jsonData = await fecthCars.json()
    if (jsonData.code == 200) {
      setLoading(false)
      setCarListing(jsonData.data.auction)
      // console.log(jsonData.data.auction)
    }
  };

  useEffect(() => {
    fetchCarList()
  }, []);


  return (
    <>
      <Head>
        {/* <style>
          {`* ::-webkit-scrollbar {
            width: 3px;
            }

        * ::-webkit-scrollbar-track {
            background:rgb(0,0,0,0.1);
          border-radius: 15px;
                }

        *::-webkit-scrollbar-thumb {
          background - color: orange;
          border-radius: 1px;
          border: 5px solid orange; 
                }

        ::-webkit-scrollbar-thumb:hover {
            background - color: orange;
                }`}
        </style> */}
      </Head>
      <div className="grid grid-cols-5 h-screen py-4 pl-8">
        <div className="overflow-y-scroll" id="filter">
          <BuyCarSearchFilter setCarListing={setCarListing} setLoading={setLoading} />
        </div>
        {/* car details starts here */}
        <div className="col-span-4 overflow-y-scroll overflow-x-hidden p-4">
          {/* banner images */}
          <div className="grid grid-cols-3">
            <div className="mx-auto">
              <img src="./banners/nikhil 163 - Copy.png"/>
            </div>
            <div className="mx-auto">
              <img src="./banners/nikhil 164.png"/>
            </div>
            <div className="mx-auto">
              <img src="./banners/nikhil 165 - Copy.png"/>
            </div>

          </div>

          {/* car deatils  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-2 m-auto  rounded-xl py-4 pr-8">
            {CarListing && CarListing.length > 0 ? CarListing.map((car, index) => {
              return (
                <div className=" transform px-4 pt-4 border rounded shadow-[0_0px_4px_1px_rgba(80,74,69,0.1)] transition-transform duration-300 hover:scale-105" key={index}>
                  <div>
                    <Carousel
                      showStatus={false}
                      showArrows={true}
                      autoPlay={false}
                      swipeable={true}
                      dynamicHeight={true}
                      swipeScrollTolerance={50}
                      preventMovementUntilSwipeScrollTolerance={true}
                      emulateTouch={true}
                      showThumbs={false}
                      infiniteLoop={true}
                    // renderThumbs={() =>
                    //   car.lead.images ? car.lead.images.map((img, idx) => (
                    //     <div key={idx} className="w-full rounded-xl h-10 relative">
                    //       <Image
                    //         src={img.image}
                    //         layout="fill"
                    //         objectFit="cover"
                    //         alt="logo"
                    //         priority={index == 0}
                    //       ></Image>
                    //     </div>
                    //   )) : <img/>
                    // }
                    >
                      {car.lead.images ? car.lead.images.map((img, idx) => (
                        <div key={idx} className=""><Image
                          src={img.image}
                          // alt={`${product.title} preview ${idx}`}
                          style={{ "borderRadius": "0.5rem" }}
                          width={800}
                          height={800}
                          priority={true}
                          alt="car Image"
                        ></Image></div>
                      )) : <img />}
                    </Carousel>
                  </div>
                  <div className="cursor-pointer">
                    <div className="flex flex-col font-medium">
                      <Link
                        href={`/cars/${car.lead.id}`}
                        className="my-2"
                      >
                        <h5 className="text-sm my-1 hover:text-blue-900 ">
                         {car.lead.model}  {car.lead.brand} 
                          <div className="flex items-center justify-between">
                            <p className="text-xs font-normal">VXI 1.2 Manual</p> 
                             {<div className={`uppercase font-normal items-center text-xs flex-nowrap text-white ${index%2==0?"bg-green-700":"bg-orange-500"} p-1 rounded-full shadow-xl tracking-widest text-[8px]`}>
                              <VerifiedUserIcon className="text-sm mr-1"/>{index%2==0?"certified":"assured"} 
                            </div>}
                            </div>
                        </h5>
                        <div className="flex justify-between">
                          <div>
                            <span className="whitespace-nowrap text-base font-bold">
                              ₹ {(parseInt(car.lead.selling_amount)).toLocaleString("en-IN")}
                            </span>
                            <span className="font-semibold ml-2 line-through text-orange-500"> ₹{(parseInt(car.lead.selling_amount) + ((parseInt(car.lead.selling_amount)) / 10)).toLocaleString("en-IN")} </span>
                          </div>

                        </div>
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-1 items-center font-light text-gray-700 mt-1 text-xs">
                      <div className="  p-2  text-xs  cursor-pointer">
                        <p className="flex">
                          <BsSpeedometer className="mr-2" /> {((car.lead.km_driven).split(' '))[0]} km
                        </p>
                      </div>
                      <div className="  p-2 cursor-pointer ">
                        <p className="flex">
                          <CgProfile className="mr-2" />{((car.lead.ownership).split(" "))[0]}
                        </p>
                      </div>
                      <div className=" p-2 cursor-pointer ">
                        <p className="flex">
                          <BsFuelPumpFill className="mr-2" />
                          {car.lead.engine_type}
                        </p>
                      </div>
                      <div className=" p-2 cursor-pointer ">
                        <p className="flex">
                          <BsFillCarFrontFill className="mr-2" />
                          {car.lead.registration_in}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              )
            }) : (
              loading ?
                <div className="flex col-span-4 justify-center h-96 items-center w-11/12 my-8 bg-gray-100 m-auto rounded-xl">
                  <div className="">
                    <img src='../logo.png' className='h-20 animate-bounce  mx-auto' />
                    <BarLoader color="#f38120" width={100} className="mx-auto" />
                  </div>
                </div> : <h1>NO DATA FOUND</h1>)
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default buyUsedCars