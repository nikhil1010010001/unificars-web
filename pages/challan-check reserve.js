import React, { useState } from "react";
import Head from "next/head";

import { FaRegHand, FaBuildingColumns } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";

import dynamic from "next/dynamic";
import ChallanModal from "@/components/ChallanComponent/ChallanModal";

const HomeQuestions = dynamic(() => import("@/components/Home/HomeQuestions"), {
  ssr: false,
});

const Challan = () => {
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

  const submitCarNumber = async () => {
    try {
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

  return (
    <div className="">
      <Head>
        <title>
          About Us | Experience Delightful Car Ownership | Unificars
        </title>
        <meta
          name="description"
          content="Unificars is your top destination for buy and sell used cars, offering competitive pricing and valuable car-related information."
        />
        <link rel="canonical" href="https://unificars.com/challan-check" />
      </Head>

      <div className='bg-[url("/background/abtbg.jpg")]'>
        <div className="container mx-auto my-4 m-12 md:-mt-6">
          <div className="flex flex-wrap-reverse md:flex-nowrap items-start gap-16 md:m-9 m-4">
            <div className="space-y-12 w-full">
              <div className="relative w-full mx-auto">
                <img
                  src="/challan.png"
                  alt="Pay Challan with unifi cars"
                  className="w-full h-auto rounded-lg mt-6"
                />
                <div className="absolute inset-0 rounded-lg flex items-end p-4 mb-4">
                  <h2 className="text-white w-fit lg:text-5xl text-xl font-bold text-left">
                    Pay Challan with unifi cars
                  </h2>
                </div>
              </div>
              {/* <img src={"/challan.png"} className='rounded-xl' alt="E-challan" /> */}

              <div className="space-y-12">
                {/* e challan */}
                <div className="space-y-4">
                  <h1 className="text-2xl text-black mt-4 font-sansserif font-extrabold">
                    E-challan
                  </h1>
                  <p className="text-md font-normal">
                    An e-challan is a digital fine issued by the traffic police
                    for a traffic violation. An e-challan can be checked online,
                    which gives the details of the fine, the current challan
                    status, the challan amount, and an option to pay e-challan
                    online. An issued e-challan can be checked through the
                    Parivahan portal or by using the Spinny tool. The
                    step-by-step guide for paying e-challan online is easy to
                    follow and lets you conveniently clear the challan without
                    visiting the court.
                  </p>
                </div>

                {/* how to check  */}
                <div className="space-y-4">
                  <h1 className="text-2xl text-black mt-4 font-sansserif font-extrabold">
                    How to check e-challan
                  </h1>
                  <p className="text-md font-normal">
                    Enter the registration number of your car and click submit
                    to check any issued e-challan to know the challan status for
                    your car. All pending and unpaid e-challans for your car
                    will be shown, with the option to pay the fines to clear the
                    challan. Checking e-challan online is a convenient way to
                    stay updated with challan status of your car while also
                    paying the e-challan online for minimal inconvenience to
                    you.
                  </p>
                </div>

                {/* benifit of e-challan */}
                <div className="space-y-4">
                  <h1 className="text-2xl text-black font-sansserif font-extrabold">
                    Benefits of paying challan online with Unifi cars
                  </h1>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm">
                    <div className="hover:bg-blue-500 hover:text-white bg-white text-black p-6 rounded-lg shadow-md h-56">
                      <FaRegHand className="text-2xl mb-4" />
                      <h4 className="text-base font-semibold mb-2 buyh4">
                        Avoid Late
                        <br />
                        Penalties
                      </h4>
                      <p className="mb-4">
                        Get an accurate and fair quote for scrapping your car
                        and helping the environment.
                      </p>
                    </div>
                    <div className="hover:bg-blue-500 hover:text-white bg-white text-black p-6 rounded-lg shadow-md h-56">
                      <FaRupeeSign className="text-2xl mb-4" />
                      <h4 className="text-base font-semibold mb-2 buyh4">
                        Pay From <br /> Anywhere
                      </h4>
                      <p className="mb-4">
                        Get benefits on buying a new car with a Certificate of
                        deposit.
                      </p>
                    </div>
                    <div className="hover:bg-blue-500 hover:text-white bg-white text-black p-6 rounded-lg shadow-md h-56">
                      <FaBuildingColumns className="text-2xl mb-4" />
                      <h4 className="text-base font-semibold mb-2 buyh4">
                        No Hassle Of <br />
                        Court Visits
                      </h4>
                      <p className="mb-4">
                        Unifi Cars partners only with Government-registered
                        vendors.
                      </p>
                    </div>
                  </div>
                </div>

                {/* step */}
                <div className="space-y-4">
                  <h1 className="text-2xl text-black font-sansserif font-extrabold">
                    Steps to pay e-challan
                  </h1>
                  <div className="mt-3">
                    <p className="mb-4">
                      <b>Steps:1</b> Navigate to check and pay e-challan
                      Section.
                    </p>
                    <p className="mb-4">
                      <b>Steps:2</b> Enter Challan Details such as e-challan
                      number, vehicle number, or license plate number.
                    </p>
                    <p className="mb-4">
                      <b>Steps:3</b> Select Payment Method like credit/debit
                      cards, net banking, or digital wallets and make the
                      payment.
                    </p>
                    <p className="mb-4">
                      <b>Steps:4</b> Save Confirmation Receipt for your records.
                    </p>
                  </div>
                </div>

                {/* table */}
                <div className="space-y-4">
                  <h1 className="text-2xl text-black font-extrabold">
                    What are the common type of traffic challan?
                  </h1>
                  <div className="flex items-center justify-center h-full bg-gray-100 mt-3">
                    <div className="bg-white shadow-md rounded-lg overflow-hidden w-4/4">
                      <table className="min-w-full leading-normal">
                        <thead>
                          <tr>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                              Challan
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                              Challan Penalty
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              Driving Under Intoxication
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              First Offense: Rs. 10000 and/or 6 months in
                              prison. Second Offense: Rs. 15000 and/or 2 years
                              in prison
                            </td>
                          </tr>
                          <tr>
                            <td className="px-5 py-5 border-b border-gray-200 bg-gray-50 text-sm">
                              Overloading Pillion Riders
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-gray-50 text-sm">
                              Rs. 2000 fine + disqualification of license and/or
                              community service for 3 months
                            </td>
                          </tr>
                          <tr>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              Over Speeding Vehicle
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              Rs. 1000 for LMV, Rs. 2000 for MMV
                            </td>
                          </tr>
                          <tr>
                            <td className="px-5 py-5 border-b border-gray-200 bg-gray-50 text-sm">
                              Driving Dangerously
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-gray-50 text-sm">
                              Rs. 1000 – Rs. 5000, seizure of license, and/or 6
                              months - 1 year in prison
                            </td>
                          </tr>
                          <tr>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              Driving Without License
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              Rs. 5000 and/or community service
                            </td>
                          </tr>
                          <tr>
                            <td className="px-5 py-5 border-b border-gray-200 bg-gray-50 text-sm">
                              Driving Without Valid Insurance
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-gray-50 text-sm">
                              First Offense: Rs. 2000 and/or 3 months in prison,
                              community service. Second Offense: Rs. 4000
                            </td>
                          </tr>
                          <tr>
                            <td className="px-5 py-5 bg-white text-sm">
                              Signal Jumping
                            </td>
                            <td className="px-5 py-5 bg-white text-sm">
                              Rs. 1000 – Rs. 5000, license seizure, and/or fine
                              for dangerous driving
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* e-challan check */}
            <div className="border-2 border-red-500 md:mt-4 max-w-[500px] w-full md:sticky-element md:sticky md:top-36  md:bottom-28 bg-orange-500 p-4 self-baseline challan-headbg">
              <div className="bg-white p-6 md:px-2 px-6 rounded-2xl shadow">
                <div className="p-3 rounded-md">
                  <h1 className="text-3xl text-black my-2 font-sansserif font-extrabold text-center">
                    Check & Pay e-challan
                  </h1>
                  <div className="font-bold text-[#465166] w-full text-field mb-2">
                    <p className="text-md text-[#465166] my-2">
                      Enter your car Number
                    </p>
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
                      onClick={submitCarNumber}>
                      View Challan
                    </button>
                  )}
                </div>
              </div>

              <ChallanModal
                challanData={challanData}
                open={open}
                handleClose={handleClose}
              />
            </div>
          </div>
        </div>

        <HomeQuestions />
      </div>
    </div>
  );
};

export default Challan;
