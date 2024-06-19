import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";

function Car210PointsModal({ showModal, setShowModal, carDetails }) {
  const [selectedCarIndex, setSelectedCarIndex] = useState(0);

  const HandleCloseModal = () => {
    setShowModal(false);
  };

  const [hideElementIndex, setHideElementIndex] = useState([]);

  console.log("car details in car details modal", carDetails);

  return (
    <div
      className={`fixed bottom-0 flex justify-center items-center ${
        showModal ? "h-full" : "h-0"
      } overflow-hidden bg-black/50 z-40 transition-all duration-500 w-full`}>
      <div className="bg-white p-4 rounded-xl shadow relative">
        <div
          className="absolute cursor-pointer top-4 right-4"
          onClick={() => HandleCloseModal()}>
          <AiOutlineClose className="text-xl" />
        </div>

        <p className="text-xl font-bold">Car Details</p>
        <div className="flex w-full items-center justify-center mt-4 gap-12">
          {carDetails.map((car, index) => (
            <div key={car.id}>
              <button
                className={`${
                  selectedCarIndex === index && "bg-orange-500 text-white"
                } font-bold py-2 px-4 rounded-lg`}
                onClick={() => setSelectedCarIndex(index)}>
                {car.name}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-col items-center h-[70vh] max-w-[67vw] border rounded-xl overflow-auto p-2">
          {selectedCarIndex === 1
            ? carDetails[selectedCarIndex].subpart.map((subpart, index) => (
                <div
                  className="flex flex-col items-center justify-start border gap-4 w-full p-4 mb-2 rounded-xl last:mb-0"
                  key={index}>
                  <p className="font-bold text-lg text-start w-full">
                    {subpart.name}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {subpart.car_detail.map(
                      (detail, index) =>
                        detail.image &&
                        detail.image.map((image, index) => (
                          <div
                            key={index}
                            className="w-[200px] border rounded-xl px-2">
                            <p className="p-2">{detail.name}</p>
                            <Image
                              priority
                              src={image.image}
                              alt={"Parts image"}
                              width={200}
                              height={200}
                              className="rounded-xl object-cover h-[200px] w-[200px]"
                            />
                            <div className="flex flex-wrap justify-between p-2">
                              <p>{detail.condition}</p>
                            </div>
                          </div>
                        ))
                    )}
                  </div>
                </div>
              ))
            : carDetails[selectedCarIndex].car_details.map((detail, index) => (
                <div
                  className="flex items-center justify-start gap-4 w-full p-4 py-2"
                  key={index}>
                  <FaCheck className="text-green-500 w-10" />
                  <p className="font-bold w-full">{detail.name}</p>

                  <p className="p-2 bg-gray-200 rounded-lg w-full">
                    {detail.condition || "N/A"}
                  </p>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default Car210PointsModal;
