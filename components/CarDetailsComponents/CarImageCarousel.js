import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Head from "next/head";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";

const CarImageCarousel = (props) => {
  const { images, car } = props;
  // console.log(car)

  return (
    <div>
      <Head>
        <style>
          {`
                    .carousel .thumb  {
                        height: 5rem !important;
                        width:7rem  !important;
                        transition:none !important;
                        padding:0 !important;
                    }
                   
                    .thumbs-wrapper{
                        margin:10px 0 !important;
                    }
                    .thumbs .thumb img  {
                        height: 100% !important;
                    }
                    .carousel.carousel-slider .control-arrow {
                        background: black !important;
                    }
                    `}
        </style>
      </Head>
      <div className="w-full h-auto  mx-auto">
        <Carousel
          showStatus={false}
          showArrows={true}
          autoPlay={false}
          swipeable={true}
          interval={4000}
          infiniteLoop={true}
          swipeScrollTolerance={50}
          preventMovementUntilSwipeScrollTolerance={true}
          emulateTouch={true}
          dynamicHeight={true}
          thumbWidth={150}
          showIndicators={false}
          renderThumbs={() =>
            images.map((image, index) => <img src={image.image} key={index} />)
          }>
          {images ? (
            images.map((image, index) => {
              return (
                <div key={index}>
                  <InnerImageZoom
                    src={image.image}
                    // className="h-[26rem]"
                    // width={500}
                    // height={500}
                    alt={`${car.lead[0].Brand.replace(
                      / /g,
                      "_"
                    )}-${car.lead[0].varient.replace(
                      / /g,
                      "_"
                    )}-${car.lead[0].Model.split(" ").join("")}-${car.lead[0][
                      "Registration In"
                    ]
                      .replace(/ /g, "_")
                      .slice(0, 2)}`}></InnerImageZoom>
                </div>
              );
            })
          ) : (
            <img className="h-52 w-full" />
          )}
        </Carousel>
      </div>
    </div>
  );
};

export default CarImageCarousel;
