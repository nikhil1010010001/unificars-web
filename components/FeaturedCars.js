import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
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
import Carousel from "react-multi-carousel";
import Rating from "@mui/material/Rating";

function FeaturedCars({ featuredlist }) {
  const imageLink = "button";
  const assured = 0;

  const [featureddata, setFeatureddata] = useState();

  useEffect(() => {
    if (featuredlist && featuredlist.auction) {
      setFeatureddata(featuredlist.auction);
    }
  }, [featuredlist]);

  console.log("this is new featured list", featuredlist);

  const [isOpen, setIsOpen] = useState(false);

  return (
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
        arrows={false}
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
              <div className="changefeaturedcartext bg-[#e4e4e4]/40">
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
                    <div className="text-start">
                      <p className="text-[12px] md:text-sm font-medium font-inter">
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
                      <h4 className="text-md font-black my-2 font-inter text-start">
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
                        <p className="font-bold font-inter">
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
                      <p className="font-bold font-inter">
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
                    <div className="flex flex-wrap gap-2 text-sm pt-2">
                      <div className="flex items-center space-x-2  px-2 rounded-full">
                        <FaGasPump />
                        <span>{car.lead.engine_type}</span>
                      </div>
                      <div className="flex items-center space-x-2  px-2 rounded-full">
                        <FaRoad />
                        <span>{car.lead.km_driven.split(" ")[0]}</span>
                      </div>
                      <div className="flex items-center space-x-2  px-2 rounded-full">
                        <FaMapMarkerAlt />
                        <span>{car.lead.registration_in.slice(0, 2)}</span>
                      </div>
                      <div className="flex items-center space-x-2  px-2 rounded-full">
                        <FaClipboardCheck />
                        <span>Rc-Original</span>
                      </div>
                      <div className="flex items-center space-x-2  px-2 rounded-full">
                        <FaCar />
                        <span>{car.lead.registration_in} XXXX</span>
                      </div>
                      <div className="flex items-center space-x-2  px-2 rounded-full">
                        <FaCalendarAlt />
                        <span>{car.lead.manufacturing_date}</span>
                      </div>
                      <div className="flex items-center space-x-2  px-2 rounded-full">
                        <FaCogs />
                        <span>{car.lead.transmission}</span>
                      </div>
                      <div className="flex items-center space-x-2  px-2 rounded-full">
                        <FaUser />
                        <span>{car.lead.ownership}</span>
                      </div>
                    </div>
                    {/* <div className='flex gap-4 justify-between text-[10px] md:text-sm'>
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
  );
}

export default FeaturedCars;
