import { StarIcon } from "@/common/IconsSvg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const FillData = [
  {
    id: 1,
    name: "Raghav Sharma",
    location: "New Delhi",
    stars: 5,
    carName: "Honda City",
    text: "I have recently purchased a used Honda City from Unifi Cars. Their customer service and delivery process were just amazing.",
  },
  {
    id: 2,
    name: "Tarun Mittal",
    location: "Gurugram",
    stars: 4,
    carName: "Maruti Suzuki Swift",
    text: "The buying and selling of used Maruti Suzuki Swift cars is very smooth with a simplified documentation process. I heard about Unifi Cars from one of my friends. I personally visited Unifi Cars to buy a car, and now I am fully satisfied with my car-buying process. They provide a hassle-free process. I am happy with their service.",
  },
  {
    id: 3,
    name: "Ashok Kapoor",
    location: "Delhi NCR",
    stars: 5,
    carName: "Hyundai i10",
    text: "I always recommend Unifi Cars. I bought my first Hyundai i10 from them. The deal was fairly priced and their all used car is in excellent condition, and their team was very supportive throughout the entire process. Unifi Cars was very helpful for providing me with the best condition used car in Delhi. Their delivery and service were great also their process was also very simple.",
  },
  {
    id: 4,
    name: "Bhumika",
    location: "Delhi NCR",
    stars: 4,
    carName: "Hyundai i10",
    text: "I want to sell my Hyundai i10 and searching for buyers since a long time then found Unifi Cars. They offered the best price for my car and I also enjoyed their flawless process.",
  },
  {
    id: 5,
    name: "Rohan Rajput",
    location: "Ghaziabad",
    stars: 5,
    carName: "Hyundai i10",
    text: "Unifi Cars' selling used Hyundai i10 process is very comfortable. Their loyalty towards their customers is what I liked most about Unifi Cars company.",
  },
];

function TestimonialCarousel({ testimonialData }) {
  const testimonials = FillData;

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
    <div className="bg-white w-full my-16">
      <div className="text-center items-center flex flex-col mb-8 px-4">
        <h3 className="text-2xl md:text-4xl font-bold text-[#000] my-2">
          What Our Clients Are Saying
        </h3>
        <p className="customgryfnt text-lg font-normal">
          Their good reviews motivate us to do more
        </p>
      </div>
      <div className=" w-11/12 mx-auto">
        <Carousel responsive={responsive} arrows={false} autoPlay={true}>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col items-center bg-white shadow border-2 rounded-3xl p-4 md:p-6 mr-2 h-full max-w-[500px]">
              <div>
                <div className="flex justify-between items-center w-full flex-wrap gap-2">
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-sm">{testimonial.location}</p>
                </div>
                <h5 className="my-2 text-sm text-blue-950">
                  {testimonial.carName}
                </h5>
                <div className="flex text-orange-500 my-3">
                  {Array.from({ length: 5 }, (_, index) => (
                    <span key={index}>
                      {index < testimonial.stars ? (
                        <StarIcon className="fill-orange-500" />
                      ) : (
                        <StarIcon className="text-gray-400" />
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
