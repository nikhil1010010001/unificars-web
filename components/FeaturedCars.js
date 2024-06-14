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
  FaRegCheckCircle,
} from "react-icons/fa";
import Carousel from "react-multi-carousel";
import Rating from "@mui/material/Rating";
import { BsInfoCircleFill } from "react-icons/bs";

function FeaturedCars({ featuredlist, desktopItemNum }) {
  const imageLink = "button";
  const assured = 0;

  const [featureddata, setFeatureddata] = useState();

  useEffect(() => {
    if (featuredlist && featuredlist.auction) {
      setFeatureddata(featuredlist.auction);
    }
  }, [featuredlist]);

  console.log("this is new featured list", featuredlist);

  return (
    <div className="grid transition-all duration-800 z-10">
      <Carousel
        responsive={{
          desktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: desktopItemNum,
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
          featureddata.map((car, index) => {
            console.log("car", car.lead);

            return (
              <div key={index} className="carousel-item m-2 featuremain">
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
                <div className="changefeaturedcartext p-3 space-y-2 ">
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
                  )}
                  {car.lead && parseInt(car.lead.refurbished_price) && (
                    <></>
                    // <div className="relative">
                    //   <div className="flex flex-wrap-reverse gap-2 lg:items-center justify-between flex-row lg:flex-row">
                    //     <div className="">
                    //       <a
                    //         onClick={() => setIsOpen(true)}
                    //         style={{ cursor: "pointer" }}>
                    //         {/* <img
                    //           width="122"
                    //           src="/assured.png"
                    //           alt="info--v1"
                    //           style={{ marginRight: "15px" }}
                    //         /> */}

                    //         {/* <div className="flex items-center justify-between gap-2 border-2 border-green-400 rounded-full px-2 text-xs">
                    //             <FaRegCheckCircle className="text-green-400" />
                    //             <p>Assured Price</p>
                    //           </div> */}
                    //       </a>
                    //     </div>
                    //     <p className="font-bold font-inter">
                    //       ₹{" "}
                    //       {parseInt(car.lead.refurbished_price).toLocaleString(
                    //         "en-IN"
                    //       )}
                    //     </p>
                    //   </div>
                    // </div>
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
                      }}>
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
                            {/* {car.lead.km_driven.split(" ")[0]} */}
                          </span>
                        </div>

                        {/*  <div className="flex items-center space-x-2 p-2 py-1 rounded-md bg-gray-100">
                        <FaMapMarkerAlt />
                        <span>{car.lead.registration_in.slice(0, 2)}</span>
                      </div> */}

                        {/*  <div className="flex items-center space-x-2 p-2 py-1 rounded-md bg-gray-100">
                        <FaClipboardCheck />
                        <span>Rc-Original</span>
                      </div> */}

                        <div className="flex items-center space-x-2 p-2 py-1 rounded-md bg-gray-100">
                          <FaCar />
                          <span>{car.lead.registration_in}</span>
                        </div>

                        {/*  <div className="flex items-center space-x-2 p-2 py-1 rounded-md bg-gray-100">
                        <FaCalendarAlt />
                        <span>{car.lead.manufacturing_date}</span>
                      </div> */}

                        {/* <div className="flex items-center space-x-2 p-2 py-1 rounded-md bg-gray-100">
                          <FaCogs />
                          <span>{car.lead.transmission}</span>
                        </div> */}

                        <div className="flex items-center space-x-2 p-2 py-1 rounded-md bg-gray-100">
                          <FaUser />
                          <span>{car.lead.ownership.split(" ")[0]} Owner</span>
                        </div>
                      </div>

                      <div className="pt-4 flex flex-wrap-reverse gap-1 lg:items-center flex-row lg:flex-row my-2">
                        <p className="font-bold font-inter px-2">
                          ₹{" "}
                          {parseInt(car.lead.selling_amount).toLocaleString(
                            "en-IN"
                          )}
                        </p>

                        <BsInfoCircleFill className="text-blue-500 text-xl" />
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
            );
          })
        ) : (
          <div>Loading...</div>
        )}
      </Carousel>
    </div>
  );
}

export default FeaturedCars;
