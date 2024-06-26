import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Rating from "@mui/material/Rating";
import {
  CarFront,
  MeterIcon,
  UserIcon,
  FuelIcon,
  InfoIcon,
} from "@/common/IconsSvg";
import FeaturedCars from "../FeaturedCars";

const AllCars = ({
  carListing,
  gridView,
  imageLink,
  assured,
  folder,
  featuredlist,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

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

      <div className="md:px-4">
        <FeaturedCars featuredlist={featuredlist} desktopItemNum={3} />
      </div>

      <div className="my-16">
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
                className={`group/link duration-400 transition-all shadow-sm border-2 border-gray-400/10 rounded-3xl ${
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
                      <p className="text-[12px] md:text-sm text-black/100 font-medium font-sans">
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
                      <h4 className="text-md font-black my-2 font-sans text-start">
                        {car.lead.brand}
                      </h4>
                      <p className="mb-4 md:text-sm text-start space-x-2">
                        {/* {car.lead.varient} */}
                        <span>{car.lead.model}</span>
                        <span>•</span>
                        <span>{car.lead.transmission}</span>
                      </p>
                    </div>
                  </Link>

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
                    }}>
                    <div className="flex flex-wrap gap-2 text-xs mt-2">
                      <div className="flex items-center space-x-2 p-2 py-1 rounded-md bg-gray-100">
                        <FuelIcon className="p-1" />
                        <span>{car.lead.engine_type}</span>
                      </div>

                      <div className="flex items-center space-x-2 p-2 py-1 rounded-md bg-gray-100">
                        <MeterIcon className="p-1" />
                        <span>
                          {parseInt(
                            car.lead.km_driven.split(" ")[0]
                          ).toLocaleString("en-IN")}
                        </span>
                      </div>

                      <div className="flex items-center space-x-2 p-2 py-1 rounded-md bg-gray-100">
                        <CarFront className="p-1" />
                        <span>{car.lead.registration_in}</span>
                      </div>

                      <div className="flex items-center space-x-2 p-2 py-1 rounded-md bg-gray-100">
                        <UserIcon className="p-1" />
                        <span>{car.lead.ownership.split(" ")[0]} Owner</span>
                      </div>
                    </div>

                    <div className="relative pt-4 flex flex-wrap-reverse gap-1 lg:items-center flex-row lg:flex-row my-2">
                      <p className="font-bold font-sans px-2">
                        ₹{" "}
                        {parseInt(car.lead.selling_amount).toLocaleString(
                          "en-IN"
                        )}
                      </p>

                      <div
                        onMouseEnter={() => setHoveredItem(index)}
                        onMouseLeave={() => setHoveredItem(null)}>
                        <InfoIcon className="fill-blue-500 text-white text-xl relative" />

                        {hoveredItem === index && (
                          <div className="bg-white p-4 shadow-lg rounded-2xl absolute bottom-10 z-10 w-full left-0">
                            <ul className="list-disc ps-6">
                              <li>Free ownership transfer</li>
                              <li>Free accessories</li>
                              <li>Comprehensive insurance</li>
                              <li>Certificate pollution certificate</li>
                              <li>
                                Complete warranty upto 2,000 km on upto 30 days
                                whenever comes first.
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <>Loading...</>
          )}
        </div>
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
