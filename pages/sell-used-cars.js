import React, { useEffect, useState } from "react";

import SellModal from "@/components/SellPageModal3/SellModal";

import Howtosell from "@/components/Home/Howtosell";
import VehicleInfo from "@/components/NewComponents/VehicleInfo2";

import { useRouter } from "next/router";
import Head from "next/head";
import TestemonialCarousel from "@/components/TestemonialCarousel";
import HomeQuestions from "@/components/Home/HomeQuestions";

const sellCars = () => {
  const [OpenModal, setOpenModal] = useState(false);
  const [UserCar, setUserCar] = useState({
    brand: { name: "", id: "" },
    model: { name: "", id: "" },
    varient: { name: "", id: "" },
    year: "",
    ownerShip: "",
    fuelType: "",
    kmDriven: "",
    location: "",
  });
  const arr = new Array(7);
  const [UserCarTabArray, setUserCarTabArray] = useState(arr);
  const [CurrentTab, setCurrentTab] = useState("0");

  const router = useRouter();

  const title =
    "Sell Cars Online at Best Prices Get Instant Payment |Unificars";
  const description =
    "Sell Used Car Fast and Get Best Price with Unificars! Call - 9911771977 Now. Get Best deals with Free RC transfer, Doorstep Pickup with Instant Payment";
  const canonicalUrl = "https://unificars.com/sell-used-cars";

  useEffect(() => {
    if (router.query.brand && router.query.id) {
      setUserCar({
        ...UserCar,
        brand: { name: router.query.brand, id: router.query.id },
      });
      console.log({ ...UserCar, brand: router.query.brand });
      UserCarTabArray[0] = router.query.brand;
      setUserCarTabArray([...UserCarTabArray]);
      setOpenModal(true);
      setCurrentTab("1");
    }
  }, [router]);

  const [verifyNum, setVerifyNum] = useState(false);

  return (
    <>
      <div className="pt-8">
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <link rel="canonical" href={canonicalUrl} />
        </Head>

        <div className="text-center items-center flex flex-col mx-4">
          <h1 className="text-4xl text-black my-2 font-black">
            Sell Your Car At Best Price Instantly From Home
          </h1>

          <h3 className="text-2xl uppercase tracking-wide text-blue-950 my-6">
            Let's select your car brand
          </h3>
        </div>

        <div className="container mx-auto md:w-[70%] mb-6">
          <VehicleInfo />
        </div>

        <Howtosell />

        <div className="w-full h-fit">
          <TestemonialCarousel />
        </div>

        <HomeQuestions />

        {/* modal starts here  */}
        <div>
          <SellModal
            setUserCarTabArray={setUserCarTabArray}
            UserCarTabArray={UserCarTabArray}
            OpenModal={OpenModal}
            setOpenModal={setOpenModal}
            UserCar={UserCar}
            setUserCar={setUserCar}
            CurrentTab={CurrentTab}
            setCurrentTab={setCurrentTab}
            setVerifyNum={setVerifyNum}
          />
        </div>
      </div>
    </>
  );
};

export default sellCars;
