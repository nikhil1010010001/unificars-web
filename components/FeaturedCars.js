import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import Rating from "@mui/material/Rating";
import { FaCar, FaUser, FaGasPump, FaRoad } from "react-icons/fa";
import { BsInfoCircleFill } from "react-icons/bs";

function FeaturedCars({ featuredlist, desktopItemNum }) {
  const assured = 0;

  const [featureddata, setFeatureddata] = useState();

  useEffect(() => {
    if (featuredlist && featuredlist.auction) {
      setFeatureddata(featuredlist.auction);
    }
  }, [featuredlist]);

  return (
    <div className="transition-all duration-800 z-10">
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
        containerClass="carousel-container pb-4"
        removeArrowOnDeviceType={["tablet", "mobile"]}>
        {featureddata && featureddata.length > 0 ? (
          featureddata.map((car, index) => {
            return (
              <div key={index} className="carousel-item m-2 featuremain h-full">
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
                            className="rounded-12 w-full"
                            src={car.lead.images[0].image}
                            style={{
                              borderRadius: "0.1rem",
                              height: "170px",
                              objectFit: "cover",
                            }}
                            width={300}
                            height={200}
                            priority
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
                        <p className="text-[12px] md:text-sm font-medium">
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
                          <span>{car.lead.model}</span>
                          <span>•</span>
                          <span>{car.lead.transmission}</span>
                        </p>
                      </div>
                    </Link>
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
                          {parseInt(car.lead.selling_amount).toLocaleString(
                            "en-IN"
                          )}
                        </p>

                        <BsInfoCircleFill className="text-blue-500 text-xl" />
                      </div>
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
