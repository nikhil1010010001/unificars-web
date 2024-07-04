import { CheckIcon, ShieldCHeckIcon } from "@/common/IconsSvg";
import PaidChallan from "@/components/ChallanComponent/PaidChallan";
import PendingChallan from "@/components/ChallanComponent/PendingChallan";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const ChallanDetail = () => {
  const router = useRouter();
  const { carNumber, chassisNumber } = router.query;

  const [currentTab, setCurrentTab] = useState("pending");
  const [challanData, setChallanData] = useState({
    code: 200,
    message: "Data Found Successfully.",
    result: [
      {
        number: 1,
        challanNumber: "UP84025230312172003",
        offenseDetails:
          "Violation of traffic rules by the driver except the offences mentioned in Section in 184 a, b, d, e, f and without any indication changing the alignment",
        challanPlace: "",
        payment_url: "https://echallan.parivahan.gov.in/index/accused-challan",
        image_url: "",
        challanDate: "2023-03-12 17:20:03",
        state: "UP",
        rto: "",
        accusedName: "SARTHAK SHARAN",
        accused_father_name: "",
        amount: 500,
        challanStatus: "Pending",
        court_status: "",
      },
      {
        number: 2,
        challanNumber: "DL17626220414130500",
        offenseDetails: "Violation of Mandatory Signs(One Way,No Right Turn)",
        challanPlace: "",
        payment_url: "https://echallan.parivahan.gov.in/index/accused-challan",
        image_url: "",
        challanDate: "2022-04-14 13:05:00",
        state: "DL",
        rto: "",
        accusedName: "SARTHAK SHARAN",
        accused_father_name: "",
        amount: 500,
        challanStatus: "Disposed",
        court_status: "",
      },
      {
        number: 3,
        challanNumber: "DL31236210612171919",
        offenseDetails: "Not using Seat-belt",
        challanPlace: "",
        payment_url: "https://echallan.parivahan.gov.in/index/accused-challan",
        image_url: "",
        challanDate: "2021-06-12 17:19:19",
        state: "DL",
        rto: "",
        accusedName: "SARTHAK SHARAN",
        accused_father_name: "",
        amount: 500,
        challanStatus: "Disposed",
        court_status: "",
      },
      {
        number: 4,
        challanNumber: "UP42315211223033187",
        offenseDetails:
          "Violation of traffic rules by the driver except the offences mentioned in section 184 a,b,d,e,f and without any indication changing the alignment",
        challanPlace: "",
        payment_url: "https://echallan.parivahan.gov.in/index/accused-challan",
        image_url: "",
        challanDate: "2021-06-09 22:16:11",
        state: "UP",
        rto: "",
        accusedName: "SARTHAK SHARAN",
        accused_father_name: "",
        amount: 500,
        challanStatus: "Pending",
        court_status: "",
      },
    ],
  });

  const getChallanData = async (carNumber, chassisNumber) => {
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
          vehicleNumber: carNumber,
          chassisNumber: chassisNumber,
          advanceSearch: true,
        }),
      }
    );

    challanInfo = await challanInfo.json();

    console.log("challanInfo", challanInfo);

    if (challanInfo.code === 200) {
      setChallanData(challanInfo.result);
    } else {
      console.error("Response from Vehicle Challan API is not valid");
    }
  };

  //   useEffect(() => {
  //     getChallanData(carNumber, chassisNumber);
  //   }, [carNumber, chassisNumber]);

  return (
    <div className="mt-4 max-w-6xl px-2 mx-auto min-h-screen flex gap-4">
      <div className="min-h-screen w-[18rem] bg-blue-50 p-4 flex flex-col gap-4 items-start">
        <h1 className="text-2xl font-bold">My Challan</h1>
        <div className="font-semibold space-y-4">
          <button
            onClick={() => setCurrentTab("pending")}
            className={`px-4 rounded-lg ${
              currentTab === "pending" ? "text-orange-500" : " px-4 rounded-lg"
            }`}>
            Pending Challan
          </button>
          <button
            onClick={() => setCurrentTab("paid")}
            className={`px-4 rounded-lg ${
              currentTab === "paid" ? "text-orange-500" : " px-4 rounded-lg"
            }`}>
            Paid Challan
          </button>
        </div>

        {/* info card */}
        <div className="flex flex-col gap-2 bg-blue-500 p-4 rounded-lg text-white text-sm">
          <div className="flex items-center gap-2">
            <ShieldCHeckIcon className="w-5 h-5" />
            <span className="font-semibold text-base">
              Pay securely with unificars
            </span>
          </div>

          <div className="flex items-center gap-2">
            <CheckIcon className="w-5 h-5" />
            <span>Avoid Late Penalties</span>
          </div>

          <div className="flex items-center gap-2">
            <CheckIcon className="w-5 h-5" />
            <span>Pay From Anywhere</span>
          </div>

          <div className="flex items-center gap-2">
            <CheckIcon className="w-5 h-5" />
            <span>No Hassle Of Court Visits</span>
          </div>
        </div>
      </div>

      <div className="h-full flex-1 p-4">
        {currentTab === "pending" && (
          <PendingChallan
            carNumber={carNumber}
            chassisNumber={chassisNumber}
            challanData={challanData}
          />
        )}
        {currentTab === "paid" && (
          <PaidChallan
            carNumber={carNumber}
            chassisNumber={chassisNumber}
            challanData={challanData}
          />
        )}
      </div>
    </div>
  );
};

export default ChallanDetail;
