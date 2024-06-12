import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import Link from "next/link";
import { TiTick } from "react-icons/ti";
import Head from "next/head";
import Rating from "@mui/material/Rating";
import {
  FaCar,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUser,
  FaGasPump,
  FaClipboardCheck,
  FaCogs,
  FaRoad,
} from "react-icons/fa";

const AllCars = ({
  carListing,
  gridView,
  imageLink,
  assured,
  folder,
  featuredlist,
}) => {
  // console.log(carListing);
  const [isOpen, setIsOpen] = useState(false);
  const [featureddata, setTest] = useState(featuredlist?.auction);
  // const [featuredlist, featuredlist] = useState(featuredlist);

  return (
    <>
      <Head>
        <title>All Cars - UnifiCars</title>
        <meta
          name="description"
          content="Browse all available used cars at UnifiCars. Find the perfect car for you with our wide selection of certified pre-owned vehicles."
        />
      </Head>

      <h3 className="md:px-20 px-6 text-2xl text-[#000] font-black my-2 buyh1fontfamily">
        Featured Cars
      </h3>
      <div className="grid md:px-16 transition-all duration-800 z-10 pt-0">
        <Carousel
          responsive={{
            desktop: {
              breakpoint: { max: 4000, min: 1024 },
              items: 3,
              slidesToSlide: 1,
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2,
              slidesToSlide: 1,
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
              slidesToSlide: 1,
            },
          }}
          swipeable={true}
          draggable={false}
          showDots={false}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="transform 500ms ease-in-out"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}>
          {featureddata && featureddata.length > 0 ? (
            featureddata.map((car, index) => (
              <div
                key={index}
                className="carousel-item m-2 featuremain"
                style={{ marginLeft: "16px", marginRight: "16px" }}>
                <div>
                  <Carousel
                    responsive={{
                      desktop: {
                        breakpoint: { max: 4000, min: 0 },
                        items: 1,
                      },
                    }}
                    className="z-10">
                    {car.lead &&
                      car.lead.images &&
                      car.lead.images.length > 0 && (
                        <Link
                          href={{
                            pathname: `/cars/${car.lead.brand.replace(
                              / /g,
                              "_"
                            )}-${car.lead.model.replace(
                              / /g,
                              "_"
                            )}-${car.lead.registration_in.toLowerCase()}`,
                            query: { id: car.lead.id, assured: assured },
                          }}>
                          <Image
                            className="rounded-12"
                            src={car.lead.images[0].image}
                            style={{
                              borderRadius: "0.1rem",
                              height: "170px",
                              objectFit: "cover",
                            }}
                            width={800}
                            height={800}
                            priority={1}
                            alt={`${car.lead.brand.replace(
                              / /g,
                              "_"
                            )}-${car.lead.model.replace(
                              / /g,
                              "_"
                            )}-${car.lead.registration_in.toLowerCase()}`}
                          />
                        </Link>
                      )}
                  </Carousel>
                </div>
                <div className="changefeaturedcartext">
                  {car.lead && (
                    <Link
                      href={{
                        pathname: `/cars/${car.lead.brand
                          .replace(/ /g, "_")
                          .toLowerCase()}-${car.lead.model
                          .replace(/ /g, "_")
                          .toLowerCase()}-${car.lead.registration_in.toLowerCase()}`,
                        query: { id: car.lead.id, assured: assured },
                      }}
                      className="">
                      <div className="justify-start items-center">
                        <p className="text-[12px] md:text-sm text-white/100 font-medium font-inter">
                          Unifi Rating
                        </p>
                        <Rating
                          name="read-only"
                          value={parseInt(car.lead.engine_rating)}
                          size="small"
                          readOnly
                        />
                      </div>
                      <div className="relative">
                        <h4 className="text-md font-bold mt-2 font-inter text-white/100">
                          {car.lead.model} {car.lead.brand}
                        </h4>
                        <p className="text-xs md:text-sm font-normal text-white/80">
                          {car.lead.varient}
                        </p>
                        <div className="pt-1 flex lg:items-center justify-between flex-row lg:flex-row">
                          <div className="">
                            <img
                              src={`/${imageLink}.png`}
                              className="w-32 lg:mx-0"
                            />
                          </div>
                          <p className="font-bold font-inter text-white/100">
                            ₹{" "}
                            {parseInt(car.lead.selling_amount).toLocaleString(
                              "en-IN"
                            )}
                          </p>
                        </div>
                      </div>
                    </Link>
                  )}
                  {car.lead && parseInt(car.lead.refurbished_price) && (
                    <div className="relative">
                      <div className="flex lg:items-center justify-between flex-row lg:flex-row">
                        <div className="">
                          <a
                            onClick={() => setIsOpen(true)}
                            style={{ cursor: "pointer" }}>
                            <img
                              width="122"
                              src="/assured.png"
                              alt="info--v1"
                              style={{ marginRight: "15px" }}
                            />
                          </a>
                        </div>
                        <p className="font-bold font-inter text-white/100">
                          ₹{" "}
                          {parseInt(car.lead.refurbished_price).toLocaleString(
                            "en-IN"
                          )}
                        </p>
                      </div>
                    </div>
                  )}
                  {car.lead && (
                    <Link
                      href={{
                        pathname: `/cars/${car.lead.brand
                          .replace(/ /g, "_")
                          .toLowerCase()}-${car.lead.model
                          .replace(/ /g, "_")
                          .toLowerCase()}-${car.lead.registration_in.toLowerCase()}`,
                        query: { id: car.lead.id, assured: assured },
                      }}
                      className="md:px-1">
                      <div className="flex flex-wrap gap-2 text-sm text-white pt-2">
                        <div className="flex items-center space-x-2 border px-2 rounded-full">
                          <FaGasPump />
                          <span>{car.lead.engine_type}</span>
                        </div>
                        <div className="flex items-center space-x-2 border px-2 rounded-full">
                          <FaRoad />
                          <span>{car.lead.km_driven.split(" ")[0]}</span>
                        </div>
                        <div className="flex items-center space-x-2 border px-2 rounded-full">
                          <FaMapMarkerAlt />
                          <span>{car.lead.registration_in.slice(0, 2)}</span>
                        </div>
                        <div className="flex items-center space-x-2 border px-2 rounded-full">
                          <FaClipboardCheck />
                          <span>Rc-Original</span>
                        </div>
                        <div className="flex items-center space-x-2 border px-2 rounded-full">
                          <FaCar />
                          <span>{car.lead.registration_in}****</span>
                        </div>
                        <div className="flex items-center space-x-2 border px-2 rounded-full">
                          <FaCalendarAlt />
                          <span>{car.lead.manufacturing_date}</span>
                        </div>
                        <div className="flex items-center space-x-2 border px-2 rounded-full">
                          <FaCogs />
                          <span>{car.lead.transmission}</span>
                        </div>
                        <div className="flex items-center space-x-2 border px-2 rounded-full">
                          <FaUser />
                          <span>{car.lead.ownership}</span>
                        </div>
                      </div>
                      {/* <div className='flex gap-4 justify-between text-white/100 text-[10px] md:text-sm'>
                                    <p><span style={{ display: 'flex' }}>&nbsp;&nbsp;&nbsp;{((car.lead.km_driven).split(' '))[0]} km</span></p>
                                    <p><span style={{ display: 'flex' }}>&nbsp;&nbsp;&nbsp;{((car.lead.ownership).split(" "))[0]}</span></p>
                                    <p><span style={{ display: 'flex' }}>&nbsp;&nbsp;&nbsp;{car.lead.engine_type}</span></p>
                                    <p><span style={{ display: 'flex' }}>&nbsp;&nbsp;&nbsp;{(car.lead.registration_in).slice(0, 2)}</span></p>
                                </div> */}
                    </Link>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div>Loading...</div>
          )}
        </Carousel>
      </div>

      <h3 className="md:px-20 px-6 text-2xl text-[#000] font-black my-2 buyh1fontfamily">
        All Cars
      </h3>

      <div
        className={`grid md:px-20 transition-all duration-800 ${
          gridView
            ? "sm:grid-cols-2 md:gap-4 md:rounded-xl md:justify-center  md:grid-cols-3 lg:grid-cols-3 lg:rounded-xl lg:justify-center lg:gap-8"
            : "grid-cols-1 gap-2 md:grid-cols-2"
        } z-10 gap-2 p-2 pt-0`}>
        {carListing && carListing.length > 0 ? (
          carListing.map((car, index) => (
            <div
              key={index}
              id="carList"
              className={`group/link duration-400 transition-all shadow-sm font-robo border-2 border-gray-400/10 rounded-3xl ${
                gridView ? "" : "grid grid-cols-2 gap-4 items-center"
              }`}>
              <div>
                <Carousel
                  responsive={{
                    desktop: {
                      breakpoint: { max: 4000, min: 0 },
                      items: 1,
                    },
                  }}
                  className="z-10">
                  {car.lead.images ? (
                    car.lead.images.map((img, idx) => (
                      <Link
                        href={{
                          pathname: `/cars/${car.lead.brand.replace(
                            / /g,
                            "_"
                          )}-${car.lead.varient.replace(
                            / /g,
                            "_"
                          )}-${car.lead.model
                            .split(" ")
                            .join("")}-${car.lead.registration_in
                            .replace(/ /g, "_")
                            .slice(0, 2)}`.toLowerCase(),
                          query: { id: car.lead.id, assured: assured },
                        }}
                        key={idx}>
                        <Image
                          className="rounded-12"
                          src={img.image}
                          style={{
                            borderRadius: "0.1rem",
                            height: "170px",
                            objectFit: "cover",
                          }}
                          width={800}
                          height={800}
                          priority={1}
                          alt={`${car.lead.brand.replace(
                            / /g,
                            "_"
                          )}-${car.lead.varient.replace(
                            / /g,
                            "_"
                          )}-${car.lead.model
                            .split(" ")
                            .join("")}-${car.lead.registration_in
                            .replace(/ /g, "_")
                            .slice(0, 2)}`}
                        />
                      </Link>
                    ))
                  ) : (
                    <img />
                  )}
                </Carousel>
              </div>
              <div className="changeallcartext">
                <Link
                  href={{
                    pathname: `/cars/${car.lead.brand
                      .replace(/ /g, "_")
                      .toLowerCase()}-${car.lead.varient
                      .replace(/ /g, "_")
                      .toLowerCase()}-${car.lead.model
                      .split(" ")
                      .join("")
                      .toLowerCase()}-${car.lead.registration_in
                      .replace(/ /g, "_")
                      .slice(0, 2)
                      .toLowerCase()}`,
                    query: { id: car.lead.id, assured: assured },
                  }}
                  className="">
                  <div className="justify-start items-center">
                    <p className="text-[12px] md:text-sm text-black/100 font-medium font-inter">
                      Unifi Rating
                    </p>
                    <Rating
                      name="read-only"
                      value={parseInt(car.lead.engine_rating)}
                      size="small"
                      readOnly
                    />
                  </div>
                  <div className="relative">
                    <h4 className="text-md font-bold font-inter">
                      {car.lead.model} {car.lead.brand}
                    </h4>
                    <p className="text-xs md:text-sm font-normal text-black/80">
                      {car.lead.varient}
                    </p>
                    <div className="pt-1 flex lg:items-center justify-between flex-col lg:flex-row">
                      <div className="">
                        <img
                          src={`/${imageLink}.png`}
                          className="w-32 lg:mx-0"
                        />
                      </div>
                      <p className="font-bold font-inter">
                        ₹{" "}
                        {parseInt(car.lead.selling_amount).toLocaleString(
                          "en-IN"
                        )}
                      </p>
                    </div>
                  </div>
                </Link>
                {parseInt(car.lead.refurbished_price) && (
                  <div className="relative">
                    <div className="flex lg:items-center justify-between flex-col lg:flex-row">
                      <div className="">
                        <a
                          onClick={() => setIsOpen(true)}
                          style={{ cursor: "pointer" }}>
                          <img
                            width="122"
                            src="/assured.png"
                            alt="info--v1"
                            style={{ marginRight: "15px" }}
                          />
                        </a>
                      </div>
                      <p className="font-bold font-inter">
                        ₹{" "}
                        {parseInt(car.lead.refurbished_price).toLocaleString(
                          "en-IN"
                        )}
                      </p>
                    </div>
                  </div>
                )}
                <Link
                  href={{
                    pathname: `/cars/${car.lead.brand
                      .replace(/ /g, "_")
                      .toLowerCase()}-${car.lead.varient
                      .replace(/ /g, "_")
                      .toLowerCase()}-${car.lead.model
                      .split(" ")
                      .join("")
                      .toLowerCase()}-${car.lead.registration_in
                      .replace(/ /g, "_")
                      .slice(0, 2)
                      .toLowerCase()}`,
                    query: { id: car.lead.id, assured: assured },
                  }}
                  className="md:px-1">
                  <div className="pt-2 flex gap-2 justify-between text-black/100 text-xs md:text-sm">
                    <div className="flex flex-wrap gap-2 items-center">
                      <div className="flex items-center space-x-2 border px-2 rounded-full">
                        <FaGasPump />
                        <span>{car.lead.engine_type}</span>
                      </div>
                      <div className="flex items-center space-x-2 border px-2 rounded-full">
                        <FaRoad />
                        <span>{car.lead.km_driven.split(" ")[0]}</span>
                      </div>
                      <div className="flex items-center space-x-2 border px-2 rounded-full">
                        <FaMapMarkerAlt />
                        <span>{car.lead.registration_in.slice(0, 2)}</span>
                      </div>
                      <div className="flex items-center space-x-2 border px-2 rounded-full">
                        <FaClipboardCheck />
                        <span>Rc-Original</span>
                      </div>
                      <div className="flex items-center space-x-2 border px-2 rounded-full">
                        <FaCar />
                        <span>{car.lead.registration_in}****</span>
                      </div>
                      <div className="flex items-center space-x-2 border px-2 rounded-full">
                        <FaCalendarAlt />
                        <span>{car.lead.manufacturing_date}</span>
                      </div>
                      <div className="flex items-center space-x-2 border px-2 rounded-full">
                        <FaCogs />
                        <span>{car.lead.transmission}</span>
                      </div>
                      <div className="flex items-center space-x-2 border px-2 rounded-full">
                        <FaUser />
                        <span>{car.lead.ownership}</span>
                      </div>
                    </div>
                    {/* <p><span style={{ display: 'flex' }}>&nbsp;&nbsp;&nbsp;{((car.lead.km_driven).split(' '))[0]} km</span></p>
                                        <p><span style={{ display: 'flex' }}>&nbsp;&nbsp;&nbsp;{((car.lead.ownership).split(" "))[0]}</span></p>
                                        <p><span style={{ display: 'flex' }}>&nbsp;&nbsp;&nbsp;{car.lead.engine_type}</span></p>
                                        <p><span style={{ display: 'flex' }}>&nbsp;&nbsp;&nbsp;{(car.lead.registration_in).slice(0, 2)}</span></p> */}
                  </div>
                </Link>
              </div>
              {/* {[5, 12, 15, 23, 34, 41, 48, 55, 62, 69, 76].includes(index) && (
                                <>
                                    {folder == "listing" ? (
                                        <Link href='/sell-used-cars' className='h-full'>
                                            <img
                                                src={`${gridView ? (index % 2 === 0 ? `/allbuttons/${folder}/carButton2.png` : `/allbuttons/${folder}/sell.png`) : (index % 2 === 0 ? `/allbuttons/${folder}/LaidCarButton2.png` : `/allbuttons/${folder}/sellLaid.png`)}`}
                                                className='w-full h-full shadow hover:scale-105 transition-all duration-200 ease-in-out'
                                            />
                                        </Link>
                                    ) : (
                                        <img
                                            src={`${gridView ? `/allbuttons/${folder}/carButton2.png` : `/allbuttons/${folder}/LaidCarButton2.png`}`}
                                            className='w-full h-full shadow hover:scale-105 transition-all duration-200 ease-in-out'
                                        />
                                    )}
                                </>
                            )} */}
            </div>
          ))
        ) : (
          <>Loading...</>
        )}
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-80">
          <div
            className="rounded-lg mt-20 p-0 max-w-lg w-full relative"
            style={{ maxWidth: "50rem" }}>
            <img src="/assuredban.png" className="w-full shadow" />
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="fixed inset-0" onClick={() => setIsOpen(false)}></div>
        </div>
      )}
    </>
  );
};

export async function getServerSideProps(context) {
  const { gridView, assured, folder } = context.query;

  const res = await fetch(
    `https://api.yourservice.com/cars?assured=${assured}`
  );
  const carListing = await res.json();

  return {
    props: {
      carListing,
      gridView: gridView === "true",
      imageLink: "image-link-placeholder",
      assured: assured || null,
      folder: folder || "default-folder",
    },
  };
}

export default AllCars;
