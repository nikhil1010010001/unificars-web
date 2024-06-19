import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { RiStarSFill, RiStarSLine } from "react-icons/ri";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import dynamic from "next/dynamic";
import TestemonialCarousel from "@/components/TestemonialCarousel";

const VehicleInfo = dynamic(
  () => import("@/components/NewComponents/VehicleInfo3"),
  { ssr: false }
);

const about = () => {
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

  const [carNumber, setCarNumber] = useState("");
  const [validNumber, setValidNumber] = useState(false);
  const [challanData, setChallanData] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleInputChange = (e) => {
    let input = e.target.value.replace(/[^a-zA-Z0-9]/g, ""); // Remove non-alphanumeric characters
    input = input.replace(/(.{2})(?=.)/g, "$1 ");
    if (input.length > 10) {
      input = input.slice(0, 11) + input.slice(11, 15).trim();
    }
    if (input.length < 16) {
      setCarNumber(input.toUpperCase());
    }
  };

  const submitCarNumber = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      if (carNumber.length === 13 || carNumber.length === 12) {
        let number = carNumber.split(" ").join("");
        const response = await fetch(
          "https://api.emptra.com/vehicleRegistrations",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              secretKey:
                "rt50rd1OViWQyA6pv40WbWJJmHCwIvGUBEAM6OLmaqTyhE61RiJ8whOOQDHdslXVT",
              clientId:
                "932bee8472f77a75f9a328430973d1ab:87937c1398e424117fe02fcf3f070290",
            },
            body: JSON.stringify({
              vehicleNumber: number,
              blacklistCheck: true,
            }),
          }
        );

        const data = await response.json();
        if (data.code === 100) {
          let challanInfo = await fetch(
            "https://api.invincibleocean.com/invincible/vehicleChallanData",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                secretKey:
                  "rt50rd1OViWQyA6pv40WbWJJmHCwIvGUBEAM6OLmaqTyhE61RiJ8whOOQDHdslXVT",
                clientId:
                  "932bee8472f77a75f9a328430973d1ab:87937c1398e424117fe02fcf3f070290",
              },
              body: JSON.stringify({
                vehicleNumber: number,
                chassisNumber: data.result.chassis.slice(-5),
                advanceSearch: true,
              }),
            }
          );

          challanInfo = await challanInfo.json();
          if (challanInfo.code === 200) {
            setChallanData(challanInfo.result);
            setValidNumber(false);
            handleOpen();
          } else {
            setValidNumber(true);
            console.error("Response from Vehicle Challan API is not valid");
          }
        } else {
          setValidNumber(true);
          console.error("Response from Vehicle Info API is not valid");
        }
      }
    } catch (error) {
      setValidNumber(true);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    maxHeight: "80vh",
    overflowY: "auto",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const title = "Scrap Cars | Experience Delightful Car Ownership | Unificars";
  const description =
    "Unificars is your top destination for buy and sell used cars, offering competitive pricing and valuable car-related information.";
  const canonicalUrl = "https://unificars.com/about";
  return (
    <div className="">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        {/* Add other meta tags if needed */}
      </Head>
      {/* <div className="">
                <div className='relative' style={{paddingTop:'80px'}}>
                    <div><img src='/scrap-car.png' /></div>
                </div>
            </div> */}

      <div
        className="relative bg-cover bg-center min-h-[550px] pt-44 md:-pt-20 bg-blue-500"
        // style={{ backgroundImage: "url(/scrap-car.png)", paddingTop: "80px" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto flex items-center justify-between h-full px-6">
          <div className="flex flex-wrap md:flex-nowrap items-center gap-4 justify-between w-full">
            <div className="text-white">
              <h1 className="md:text-6xl text-2xl font-black">
                Get the Best Price for
                <br />
                your Scrap Car
              </h1>
              <p className="mt-8 text-xl">
                Scrapping of your car with Hassle-Free process and <br /> legal
                documentation.
              </p>
            </div>
            {/* <div className="bg-white p-6 rounded-lg shadow-lg"> */}
            <div
              className="sticky-element bottom-28 bg-orange-500 p-4 self-baseline challan-headbg w-full md:w-[500px] m-auto"
              style={{ marginBottom: "120px" }}>
              <VehicleInfo />
              {/* <div className='bg-white p-6 rounded-2xl shadow'>
                                <div className='p-3 rounded-md'>
                                    <h1 className='text-3xl text-black my-2 font-sansserif font-extrabold text-center'>Enter Your Car Number</h1>
                                    <div className="font-bold text-[#465166] w-full text-field mb-2">
                                    <p className="text-md text-[#465166] my-2">Enter your car Number</p>
                                    <input
                                        type="text"
                                        className="border border-gray-300 rounded-md p-2 w-full"
                                        placeholder="AA 11 AA 1111"
                                        value={carNumber}
                                        onChange={handleInputChange}
                                    />
                                    </div>
                                    {loading ? (
                                    <div className="loader">Loading...</div>
                                    ) : (
                                    <button
                                        className={`bg-[#f38102] p-2 my-4 rounded-sm w-full font-bold text-white`}
                                        onClick={submitCarNumber}
                                    >
                                        View Challan
                                    </button>
                                    )}
                                </div>
                            </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 pt-16">
        {/* <div className="absolute w-full h-60 -z-10 rounded-lg top-4"></div> */}
        <h1 className="py-2 font-bold text-center text-3xl text-black">
          Benefits of scraping car with Unifi cars
        </h1>
        {/* <p className="text-center mb-8 hiwpara">keys to cash unlock the value of your car</p> */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
          <div className="bg-gray-100 text-black p-6 py-12 rounded-lg shadow-md min-h-56 place-content-center">
            <img
              src="/scrap-car-price.png"
              className="h-12 object-cover rounded-lg mb-4"
            />
            <h4 className="text-base font-bold mb-2">Get Best Price</h4>
            <p className="mb-4">
              Get an accurate and fair quote for scrapping your car and helping
              the environment.
            </p>
          </div>

          <div className="bg-blue-200 text-black p-6 py-12 rounded-lg shadow-md min-h-56 place-content-center">
            <img
              src="/scrap-car-certificate.png"
              className="h-12 object-cover rounded-lg mb-4 invert"
            />
            <h4 className="text-base font-bold mb-2">
              Instant Disposal Certificate
            </h4>
            <p className="mb-4">
              Get benefits on buying a new car with a Certificate of deposit.
            </p>
          </div>

          <div className="bg-gray-100 text-black p-6 py-12 rounded-lg shadow-md min-h-56 place-content-center">
            <img
              src="/scrap-car-transparency.png"
              className="h-12 object-cover rounded-lg mb-4"
            />
            <h4 className="text-base font-bold mb-2">Transparency</h4>
            <p className="mb-4">
              Unifi Cars partners only with Government-registered vendors.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-2 md:mx-auto p-6 md:p-8 bg-white carousel-item border mt-16 rounded-md flex items-center justify-around gap-4 flex-wrap">
        <h1 className="py-2 font-black text-4xl text-black">
          Steps to scrap your car
          <br />
          with Unifi cars
        </h1>

        <div className="grid gap-6 w-[400px] text-lg font-semibold">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <div className="bg-orange-500 text-white rounded-full h-8 w-8 flex items-center justify-center">
                1
              </div>
            </div>
            <div className="flex-grow">
              <p>
                Enter your vehicle registration number so we can verify your car
                details.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <div className="bg-orange-500 text-white rounded-full h-8 w-8 flex items-center justify-center">
                2
              </div>
            </div>
            <div className="flex-grow">
              <p>
                Help us understand the condition of your car better for a better
                estimate.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <div className="bg-orange-500 text-white rounded-full h-8 w-8 flex items-center justify-center">
                3
              </div>
            </div>
            <div className="flex-grow">
              <p>
                A registered scrap vendor will pick up your car at a time slot
                you choose.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <div className="bg-orange-500 text-white rounded-full h-8 w-8 flex items-center justify-center">
                4
              </div>
            </div>
            <div className="flex-grow">
              <p>
                Get a secure, instant deposit into your bank account after pick
                up.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="max-w-6xl mx-auto p-6 rounded-md flex mt-16">
        <div className="w-1/2">
          <img
            src="scrap-legal.png" // replace with the actual path to your image
            alt="Engine Check"
            className="object-cover rounded-l-xl h-[100%]"
          />
        </div>
        <div className="w-1/2 bg-blue-500 text-white p-6 rounded-r-xl">
          <h2 className="text-2xl font-bold mb-6">Legal Compliance's</h2>
          <ul className="space-y-4">
            {[
              "Automatic RC cancellation",
              "Get the scrap incentives as applicable",
              "Benefits of Car scrapping policy",
              "Follow all legal way to dismantle the vehicle",
              "Get digital certificates on Government (RVSF) Portal",
              "Get discount on Road tax and registration fees as applicable",
              "Digital and transparent Process to scrap the vehicle",
              "Additional scrap incentives as applicable",
            ].map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-orange-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M16.707 4.293a1 1 0 010 1.414l-8.5 8.5a1 1 0 01-1.414 0l-3.5-3.5a1 1 0 011.414-1.414L8 11.086l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div> */}

      <img
        src="/compliance-banner.png"
        className="px-2 md:max-w-6xl mx-auto mt-16 "
      />

      {/* <div className="container mx-auto p-6 md:px-10 mt-5">
        <div className="relative">
          <div>
            <img src="/pdi.png" />
          </div>
        </div>
      </div> */}
      <div className="max-w-6xl mx-auto p-2 md:p-6 rounded-md mt-16">
        <h1 className="py-2 text-center text-3xl font-bold text-black">
          When Is It Time to Scrap Your Car?
        </h1>
        <div className="flex w-[80%] mx-auto gap-6 justify-items-center">
          {[
            { type: "Private Vehicle", petrol: "15 Years", diesel: "10 Years" },
            {
              type: "Commercial Vehicle",
              petrol: "15 Years",
              diesel: "10 Years",
            },
          ].map((vehicle, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-md shadow-md flex flex-col items-center w-[60%] mt-6">
              <div className="flex items-center mb-4">
                <svg
                  className="h-8 w-8 text-blue-500 mr-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 16a2 2 0 100 4 2 2 0 000-4zm10 0a2 2 0 100 4 2 2 0 000-4zM7.293 9.293A1 1 0 018 9h1V6H5a1 1 0 00-1 1v8h2a1 1 0 010 2H3a1 1 0 01-1-1v-6.586l.293-.293A1 1 0 013 8V7a3 3 0 013-3h1V3a1 1 0 011-1h8a1 1 0 011 1v1h1a3 3 0 013 3v1a1 1 0 01-.293.707L20 10.586V17a1 1 0 01-1 1h-2a1 1 0 010-2h2v-5.414l-.293-.293A1 1 0 0118 9V8a1 1 0 00-1-1h-3v3h1a1 1 0 011 1l-.293.293a1 1 0 01-.707.293H7.707a1 1 0 01-.707-.293L6 11a1 1 0 011-1h1V7H7v1a1 1 0 00-.293.707L7 9h.293zm3.707 2h4V6H11v5z" />
                </svg>
                <h3 className="text-xl font-semibold">{vehicle.type}</h3>
              </div>
              <div className="w-full flex justify-between text-xl font-bold">
                <span>Petrol</span>
                <span>{vehicle.petrol}</span>
              </div>
              <div className="w-full flex justify-between text-xl font-bold">
                <span>Diesel</span>
                <span>{vehicle.diesel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="max-w-6xl mx-auto p-6 mt-16 rounded-md">
        <h1 className="py-2 font-bold text-center text-3xl text-black">
          Scrap Car Policy
        </h1>
        <p>
          The process of scrapping a car is guided by the Vehicle Scrappage
          Policy 2021 from the Government of India. According to this policy,
          when a car is too old or doesn't meet emission and fitness standards,
          it can be scrapped. Car owners can choose to scrap their vehicles
          voluntarily and get benefits like financial incentives, tax rebates,
          or discounts on buying a new vehicle. The scrapped cars are sent to
          authorized scrap yards, where they are taken apart, and the materials
          are recycled or disposed of responsibly. This policy helps reduce
          pollution, encourages recycling, and boosts the automotive industry,
          while also providing benefits to those who scrap their old cars.
        </p>
      </div> */}

      {/* <div className='grid grid-cols-1 lg:grid-cols-2 container mx-auto gap-4 mt-16 lg:mt-24 md:px-20 px-10'>
                <div className="text-3xl font-bold text-black">
                    <h2 className='py-2'>210 Point Inspection Report</h2>
                    <p className='text-lg text-black-600 my-2'>Unifi provide 210 check <br/>points vehicle inspection report.</p>
                    
                </div>
                <div className="line"><img src={"/assured1.png"} alt="" className='w-[80%] mx-auto'/></div>
            </div>

            <div className="container mx-auto">
                <div className='grid grid-cols-1 lg:grid-cols-1 container mx-auto mt-5 lg:mt-10'>
                    <div className="line">
                        <img src={"/unififixassured.png"} alt="" className='rounded-xl' />
                    </div>
                </div>
            </div> */}

      {/* <Reviews/> */}
      {/* <div className="bg-gray-50 py-12 mt-16">
        <div className="text-center items-center flex flex-col mb-6">
          <h2 className="text-4xl text-[#000] my-2">Testimonials</h2>
          <p className="customgryfnt text-lg font-normal">
            Their good reviews motivate us to do more
          </p>
        </div>
        <div className=" w-11/12 mx-auto">
          <Carousel responsive={responsive}>
            <div className="flex flex-col items-center bg-white shadow rounded p-6 mx-4 h-[342px]">
              <div>
                <img
                  src="/testimonials/testi1.jpeg"
                  className="w-24 rounded-full object-cover h-[94px]"
                />
              </div>
              <div className="flex text-orange-500 mt-3">
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
              </div>
              <p className="font-medium my-2 text-center ">
                I recently purchased a car from Quick Buy. The vehicle is in
                excellent condition and truly value for money.
              </p>
              <h5 className="my-4 text-lg text-blue-950">SI MOTORS</h5>
            </div>

            <div className="flex flex-col items-center bg-white shadow rounded p-6 mx-4 h-[342px]">
              <div>
                <img
                  src="/testimonials/testi2.jpeg"
                  className="w-24 rounded-full object-cover h-[94px]"
                />
              </div>
              <div className="flex text-orange-500 mt-3">
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSLine />
              </div>
              <p className="font-medium my-2 text-center ">
                Our dealership's inventory has improved since we started
                sourcing cars from Unificars.
              </p>
              <h5 className="my-4 text-lg text-blue-950">AS TRADING</h5>
            </div>

            <div className="flex flex-col items-center bg-white shadow rounded p-6 mx-4 h-[342px]">
              <div>
                <img
                  src="/testimonials/testi3.jpeg"
                  className="w-24 rounded-full object-cover h-[94px]"
                />
              </div>
              <div className="flex text-orange-500 mt-3">
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
              </div>
              <p className="font-medium my-2 text-center ">
                As a dealer, finding reliable sources for quality cars is very
                crucial, and Unificars has never disappointed us.
              </p>
              <h5 className="my-4  text-lg text-blue-950">GIANI MOTORS</h5>
            </div>

            <div className="flex flex-col items-center bg-white shadow rounded p-6 mx-4 h-[342px]">
              <div>
                <img
                  src="/testimonials/testi4.jpeg"
                  className="w-24 rounded-full object-cover h-[94px]"
                />
              </div>
              <div className="flex text-orange-500 mt-3">
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
              </div>
              <p className="font-medium my-2 text-center ">
                The bidding system at unificars is the best system. We have won
                numerous cars that are well maintained.
              </p>
              <h5 className="my-4 text-lg text-blue-950">GM MOTORS</h5>
            </div>

            <div className="flex flex-col items-center bg-white shadow rounded p-6 mx-4 h-[342px]">
              <div>
                <img
                  src="/testimonials/testi5.jpeg"
                  className="w-24 rounded-full object-cover h-[94px]"
                />
              </div>
              <div className="flex text-orange-500 mt-3">
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
              </div>
              <p className="font-medium my-2 text-center ">
                Customer service at Unificars is Best. From the moment we
                inquired till the settlement the process was smooth.
              </p>
              <h5 className="my-4 text-lg text-blue-950">EXPART AUTOMOBILE</h5>
            </div>

            <div className="flex flex-col items-center bg-white shadow rounded p-6 mx-4 h-[342px]">
              <div>
                <img
                  src="/testimonials/testi6.jpeg"
                  className="w-24 rounded-full object-cover h-[94px]"
                />
              </div>
              <div className="flex text-orange-500 mt-3">
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
              </div>
              <p className="font-medium my-2 text-center ">
                Finding a well-maintained car at a great price was easy with
                Quick Buy, and the staff were incredibly helpful as well.
              </p>
              <h5 className="my-4  text-lg text-blue-950">NAWAJISH MOTORS</h5>
            </div>
          </Carousel>
        </div>
      </div> */}

      <TestemonialCarousel />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <div
          style={{ display: "flex", flexDirection: "column", height: "100%" }}>
          <div style={{ flex: "1", overflowY: "auto", padding: "8px" }}>
            <Box sx={style}>
              <div
                style={{
                  flex: "none",
                  textAlign: "right",
                  paddingRight: "8px",
                  paddingTop: "8px",
                }}>
                <Button onClick={handleClose}>Close</Button>
              </div>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Challan Details
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {challanData.map((challan) => (
                  <div key={challan.challanNumber} className="mb-4">
                    <p>
                      <strong>Challan Number:</strong> {challan.challanNumber}
                    </p>
                    <p>
                      <strong>Offense Details:</strong> {challan.offenseDetails}
                    </p>
                    <p>
                      <strong>Challan Date:</strong> {challan.challanDate}
                    </p>
                    <p>
                      <strong>Amount:</strong> {challan.amount}
                    </p>
                    <p>
                      <strong>Status:</strong> {challan.challanStatus}
                    </p>
                    <a
                      href={challan.payment_url}
                      className="text-blue-500"
                      target="_blank"
                      rel="noopener noreferrer">
                      Pay Now
                    </a>
                  </div>
                ))}
              </Typography>
            </Box>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default about;
