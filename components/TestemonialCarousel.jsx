import React from "react";
import { RiStarSFill, RiStarSLine } from "react-icons/ri";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    location: "Noida",
    image: "/testimonials/testi1.jpeg",
    stars: 5,
    text: "I recently purchased a car from Quick Buy. The vehicle is in excellent condition and truly value for money.",
    company: "SI MOTORS",
  },
  {
    id: 2,
    name: "Priya Patel",
    location: "Jaipur",
    image: "/testimonials/testi2.jpeg",
    stars: 4,
    text: "Our dealership's inventory has improved since we started sourcing cars from Unifi Cars. The car is in good condition.",
    company: "AS TRADING",
  },
  {
    id: 3,
    location: "Gujarat",
    name: "Ankita Sharma",
    image: "/testimonials/testi3.jpeg",
    stars: 5,
    text: "As a dealer, finding reliable sources for quality cars is very crucial, and Unifi Cars has never disappointed us.",
    company: "GIANI MOTORS",
  },
  {
    id: 4,
    name: "Amit Kumar",
    location: "Faridabad",
    image: "/testimonials/testi4.jpeg",
    stars: 5,
    text: "The bidding system at Unifi Cars is the best system. We have won numerous cars that are well maintained.",
    company: "GM MOTORS",
  },
  {
    id: 5,
    name: "Shubham Kumar",
    location: "Delhi",
    image: "/testimonials/testi5.jpeg",
    stars: 5,
    text: "Customer service at Unifi Cars is Best. From the moment we inquired till the settlement the process was smooth.",
    company: "EXPART AUTOMOBILE",
  },
  {
    id: 6,
    name: "Anil Verma",
    location: "Mumbai",
    image: "/testimonials/testi6.jpeg",
    stars: 5,
    text: "Finding a well-maintained car at a great price was easy with Quick Buy, and the staff were incredibly helpful as well.",
    company: "NAWAJISH MOTORS",
  },
];

function TestimonialCarousel() {
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

  return (
    <div className="bg-white my-16 w-full">
      <div className="text-center items-center flex flex-col mb-6 px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-[#000] my-2">
          What Our Clients Are Saying
        </h2>
        <p className="customgryfnt text-lg font-normal">
          Their good reviews motivate us to do more
        </p>
      </div>
      <div className=" w-11/12 mx-auto">
        <Carousel responsive={responsive} arrows={false}>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col items-center bg-white shadow border-2 rounded-3xl p-4 md:p-6 mr-2 h-full max-w-[500px]">
              <div>
                <div className="flex justify-between items-center w-full flex-wrap gap-2">
                  <h2 className="font-bold text-lg">{testimonial.name}</h2>
                  <p className="text-sm">{testimonial.location}</p>
                </div>
                <h5 className="my-2 text-sm text-blue-950">
                  {testimonial.company}
                </h5>
                <div className="flex text-orange-500 my-3">
                  {Array.from({ length: 5 }, (_, index) => (
                    <span key={index}>
                      {index < testimonial.stars ? (
                        <RiStarSFill />
                      ) : (
                        <RiStarSLine />
                      )}
                    </span>
                  ))}
                </div>

                <p className="font-medium my-2">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default TestimonialCarousel;
