import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsCardChecklist, BsCashCoin, BsWhatsapp } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import {
  FaWhatsapp,
  FaFacebook,
  FaCar,
  FaUser,
  FaGasPump,
  FaRoad,
  FaCogs,
} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const CarDetailsBox = (props) => {
  const { car, showModal, setShowModal, setShowEnquiryModal, id } = props;
  console.log(car);

  return (
    <div className="p-4 mx-4 bg-white rounded-xl lg:mx-0 font-light carousel-item">
      <div>
        <h1 className="font-black text-3xl font-inter mb-1 tracking-wide">
          {car && car.lead ? car.lead[0]["Model"] : ""}{" "}
          {car && car.lead ? car.lead[0]["Brand"] : "Brand"}
        </h1>
        <p className="text-xs mb-2 text-black/70">
          {car && car.lead ? car.lead[0].varient : ""}
        </p>
        {/* <span className="font-semibold text-base text-black/90">
          ₹{" "}
          {car && car.lead
            ? parseInt(car.lead[0]["Amount"]).toLocaleString("en-IN")
            : "..."}
        </span>
        <br /> */}
      </div>
      {/* <hr className="mt-2" /> */}
      <div className="flex flex-wrap justify-start gap-2 my-4 text-black/80 text-sm">
        <div className="rounded-xl p-2 bg-gray-200/60 flex items-center gap-2 py-1">
          <FaRoad />
          {parseInt(car.lead[0]["Km Driven"]).toLocaleString("en-IN")} KM
        </div>

        <div className="rounded-xl p-2 bg-gray-200/60 flex items-center gap-2 py-1">
          <FaUser />
          {car.lead[0]["Ownership"].split(" ")[0]} Owner
        </div>

        <div className="rounded-xl p-2 bg-gray-200/60 flex items-center gap-2 py-1">
          <FaCogs />
          {car.lead[0]["transmission"]}
        </div>

        <div className="rounded-xl p-2 bg-gray-200/60 flex items-center gap-2 py-1">
          <FaGasPump />
          {car.lead[0]["Fuel Type"]}
        </div>

        <div className="rounded-xl p-2 bg-gray-200/60 flex items-center gap-2 py-1">
          <FaCar />
          {car.lead[0]["Registration In"]}
        </div>
      </div>
      {/* <div className="flex flex-col gap-3 text-sm border-b-2 p-2">
        <div className="flex items-center">
          <BsCashCoin className="mr-2 text-[#f38102]" />
          <p className="font-semibold tracking-wider">Free Rc transfer</p>
        </div>
        <div className="flex items-center">
          <TiTick className="mr-2 text-[#f38102]" />
          <p className="font-semibold tracking-wider">
            Hassle free documentation
          </p>
        </div>
        <div className="flex items-center">
          <BsCardChecklist className="mr-2 text-[#f38102]" />
          <p className="font-semibold tracking-wider">210+ point inspected</p>
        </div>
        <div className="cursor-pointer text-[green] hover:text-green-600 active:text-green-700">
          <a
            className="flex items-center"
            href={`https://wa.me/+919911771977?text=Hey Unificars  I want to buy ${car.lead[0].Brand} ${car.lead[0].Colour} ${car.lead[0].Model} ${car.lead[0].Ownership} containing ${car.lead[0].unique_code}`}
            target="_blank">
            <BsWhatsapp className="mr-2" />
            <p className="font-semibold tracking-wider">
              Connect on Whatsapp
            </p>{" "}
            <AiOutlineArrowRight className="my-1 mx-1" />
          </a>
        </div>
      </div> */}

      <div className="my-6">
        <span className="font-black text-3xl text-black/90">
          ₹{" "}
          {car && car.lead
            ? parseInt(car.lead[0]["refurbished_price"]).toLocaleString("en-IN")
            : "..."}
        </span>
      </div>

      <div className="flex gap-4 text-center my-4">
        <button
          className="transition-all hover:scale-105 duration-200 px-2 w-full bg-blue-500 text-white font-bold hover:text-white shadow rounded-lg"
          onClick={() => setShowModal(!showModal)}>
          <p className="tracking-widest">View Car Report</p>
        </button>

        <button
          className="transition-all hover:scale-105 w-full duration-200 p-2 bg-green-500 text-white font-bold shadow rounded-lg"
          onClick={() => setShowEnquiryModal(true)}>
          <div>
            <p className="text-base tracking-widest">Enquiry Now</p>
            {/* <p className="text-[10px] p-0">100% Refundable</p> */}
          </div>
        </button>
      </div>

      <div className="flex flex-col items-center justify-center gap-2 mt-6">
        <p className="font-bold text-2xl">Share With</p>
        <div className="flex items-center gap-8 mt-2">
          <FaWhatsapp className="text-green-500 text-4xl" />

          <FaInstagram className="text-red-500 text-4xl" />

          <FaFacebook className="text-blue-500 text-4xl" />
        </div>
      </div>
    </div>
  );
};

export default CarDetailsBox;
