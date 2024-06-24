import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
import Image from "next/image";
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
import { BsInfoCircleFill } from "react-icons/bs";

const CarPageRelatedCars = (props) => {
  const { relatedCars, assured } = props;

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1280 },
      items: 4.5,
    },
    desktop: {
      breakpoint: { max: 1280, min: 720 },
      items: 2.98,
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
    <div className="border bg-white rounded-xl shadow p-4 mb-6">
      <h3 className="text-base md:text-2xl text-black/80 uppercase mb-4">
        Cars you may like
      </h3>
      <Carousel responsive={responsive} className="z-0 py-2">
        {relatedCars && relatedCars.length > 0 ? (
          relatedCars.map((car, index) => (
            <div
              className="bg-white mx-1 min-h-[20rem] h-full max-w-[20rem] rounded shadow"
              key={index}>
              <Link
                target="_blank"
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
                <Image
                  src={car.lead.images[0].image}
                  width={200}
                  height={200}
                  alt="car image"
                  className="rounded-[1.1rem] w-full h-[170px] object-cover"
                />
              </Link>

              <div className="p-3 space-y-2">
                <p className="text-[12px] md:text-sm font-medium">
                  Unifi Rating
                </p>
                <Rating
                  name="read-only"
                  value={parseInt(car.lead.engine_rating)}
                  size="small"
                  readOnly
                />

                <Link
                  target="_blank"
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
                  <div className="text-start">
                    <h4 className="text-md font-black my-2 font-sans">
                      {car.lead.brand}
                    </h4>
                    <p className="mb-4 md:text-sm text-start space-x-2">
                      <span>{car.lead.model}</span>
                      <span>•</span>
                      <span>{car.lead.transmission}</span>
                    </p>
                  </div>
                </Link>

                <div className="flex flex-wrap gap-2 text-xs mt-2">
                  <div className="flex items-center space-x-2 p-2 py-1 rounded-md bg-gray-100">
                    <FaGasPump />
                    <span>{car.lead.engine_type}</span>
                  </div>

                  <div className="flex items-center space-x-2 p-2 py-1 rounded-md bg-gray-100">
                    <FaRoad />
                    <span>
                      {parseInt(
                        car.lead.km_driven.split(" ")[0]
                      ).toLocaleString("en-IN")}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2 p-2 py-1 rounded-md bg-gray-100">
                    <FaCar />
                    <span>{car.lead.registration_in}</span>
                  </div>

                  <div className="flex items-center space-x-2 p-2 py-1 rounded-md bg-gray-100">
                    <FaUser />
                    <span>{car.lead.ownership.split(" ")[0]} Owner</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap-reverse gap-1 lg:items-center flex-row lg:flex-row my-2">
                  <p className="font-bold font-sans px-2">
                    ₹{" "}
                    {parseInt(car.lead.selling_amount).toLocaleString("en-IN")}
                  </p>

                  <BsInfoCircleFill className="text-blue-500 text-xl" />
                </div>
              </div>
            </div>
          ))
        ) : (
          <></>
        )}
      </Carousel>
    </div>
  );
};

export default CarPageRelatedCars;
