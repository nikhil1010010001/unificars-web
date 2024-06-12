import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import dynamic from "next/dynamic";

// const PopularBrand = dynamic(() => import("@/components/SellPageModal/PopularBrand"),{ssr: false});
const CheckValue = dynamic(
  () => import("@/components/SellPageModal/CheckValue"),
  { ssr: false }
);
// const UserBookSlot = dynamic(() => import("@/components/SellPageModal/UserBookSlot"),{ssr: false});
const MoreBrands = dynamic(() => import("@/components/Home/MoreBrands"), {
  ssr: false,
});
const SellModal = dynamic(
  () => import("@/components/SellPageModal/SellModal"),
  { ssr: true }
);
const VehicleInfo = dynamic(
  () => import("@/components/NewComponents/VehicleInfo"),
  { ssr: false }
);

import { useRouter } from "next/router";

// import TitleX from '../SellPageModal/TitleX'
// import SelectModel from '../SellPageModal/SelectModel'
// import SelectVarient from '../SellPageModal/SelectVarient'
// import SelectYear from '../SellPageModal/SelectYear'
// import SelectOwner from '../SellPageModal/SelectOwner'
// import SelectFuelType from '../SellPageModal/SelectFuelType'
// import SelectKm from '../SellPageModal/SelectKm'
// import SelectStates from '../SellPageModal/SelectStates'
// import PopularBrand from "@/components/SellPageModal/PopularBrand"

// vehical check

// import TextField from "@mui/material/TextField";
// import Tab from "@mui/material/Tab";
// import TabContext from "@mui/lab/TabContext";
// import TabList from "@mui/lab/TabList";
// import TabPanel from "@mui/lab/TabPanel";
// import Box from "@mui/material/Box";
// import CloseIcon from "@mui/icons-material/Close";
// import Divider from "@mui/material/Divider";
// import Avatar from "@mui/material/Avatar";
// import InputAdornment from "@mui/material/InputAdornment";
// import PopularBrands from "../SellPageModal/PopularBrand";
// import SlotBooking from "../NewComponents/SlotBooking";

// import HowItWork from "@/components/CarDetailsComponents/HowItWork"
// import AskQuestions from "@/components/Home/AskQuestions"
// import UserBookSlot from '@/components/SellPageModal/UserBookSlot'

const Sellcar = () => {
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
  const [UserNumber, setUserNumber] = useState("");

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

  const [last_id, setlast_id] = useState(null);
  const [verifyNum, setVerifyNum] = useState(false);
  const [BookSlot, setBookSlot] = useState(false);

  const bookingRef = useRef();

  const HandleDetailBarClick = (e, number) => {
    if (number == 0) {
      setCurrentTab(number);
    } else if (UserCarTabArray[number - 1] != undefined) {
      setCurrentTab(number);
    }
    // setCurrentTab(number)
  };

  // vehical check

  const [value, setValue] = useState("1");
  const [screen, setScreen] = useState(1);
  const [OtpSend, setOtpSend] = useState(false);
  const [OTPVerify, setOTPVerify] = useState(false);
  const [OTPNumber, setOTPNumber] = useState("");
  const [ExpectedPrice, setExpectedPrice] = useState([0, 0]);
  const inputRef = useRef();
  const [carNumber, setCarNumber] = useState("");
  const [BookedStatus, setBookedStatus] = useState(null);
  const [validNumber, setValidNumber] = useState(false);

  const [carInfo, setCarInfo] = useState({
    brand: {
      id: "",
      name: "",
      iamge: "",
    },
    model: {
      id: "",
      name: "",
    },
    variant: {
      id: "",
      name: "",
    },
    year: "",
    ownerShip: "",
    fuelType: "",
    kmDriven: "",
    location: "",
  });
  const tabs = [
    {
      label: "Brand",
      value: "1",
    },
    {
      label: "Model",
      value: "2",
    },
    {
      label: "Variant",
      value: "3",
    },
    {
      label: "Year",
      value: "4",
    },
    {
      label: "Ownership",
      value: "5",
    },
    {
      label: "Fuel Type",
      value: "6",
    },
    {
      label: "KM Driven",
      value: "7",
    },
    {
      label: "Location",
      value: "8",
    },
  ];
  const customTab = (label, val) => {
    return (
      <Tab
        className="rounded-md m-1"
        label={label}
        value={val}
        style={
          value == val
            ? {
                backgroundColor: "#f38102",
                color: "white",
                fontWeight: "bold",
              }
            : {
                backgroundColor: "#E1F0DA",
                color: "black",
              }
        }
      />
    );
  };

  const selectedPillArray = [
    "",
    carInfo.brand.name,
    carInfo.model.name,
    carInfo.year,
    carInfo.fuelType,
  ];

  const selectedPill = (value, tabValue) => {
    // value = value.split(" ").slice(0,2);
    return (
      value && (
        <>
          <div className="px-1 bg-[#E9F6FF] col-span-1 rounded-md flex items-center ">
            <div>
              <button
                onClick={() => {
                  setValue(tabValue);
                }}
                className="mx-2">
                <CloseIcon className="text-sm" />
              </button>
            </div>
            <div>
              <p className="text-xs font-bold">{value}</p>
            </div>
          </div>
        </>
      )
    );
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    console.log(carInfo.brand, "From useEffect");
    if (carNumber === "") {
      setValue("2");
    }
  }, [carInfo.brand]);

  const sendOtp = async (data) => {
    const fetchData = await fetch("https://api.unificars.com/api/sendotp", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const jsonRes = await fetchData.json();
    return jsonRes;
  };

  const HandleGetOtp = async () => {
    if (carNumber === "") {
      getCarValuation();
    }
    if (userNumber != "") {
      const data = {
        ...carInfo,
        mobile_number: userNumber,
        brand: carInfo.brand.name,
        model: carInfo.model.name,
        varient: carInfo.variant.name,
      };
      const res = await sendOtp(data);
      if (res.code == 200) {
        setOtpSend(true);
      }
    }
  };

  const getCarValuation = async () => {
    const data = {
      year: carInfo.year,
      model_name: carInfo.variant.name,
      id: carInfo.model.id,
    };
    console.log(data, "data object from evaluation");
    try {
      const valuation = await fetch(
        "https://api.unificars.com/api/getvarientmodelamount",
        {
          method: "POST",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const value = await valuation.json();
      if (value.code == 200) {
        const response = value.data;
        console.log(response, "response object from evaluation");
        let calculatedyear = 15;
        if (carInfo.fuelType === "DIESEL") {
          calculatedyear = 10;
        }
        let calculation = response / calculatedyear;
        let remainingyears =
          carInfo.year + calculatedyear - new Date().getFullYear();
        let expectedprice = Math.round(calculation * remainingyears);
        let expectedprice1 = Math.round(calculation * remainingyears) + 100240;
        console.log([expectedprice, expectedprice1]);
        setExpectedPrice([expectedprice, expectedprice1]);
      }
    } catch (error) {}
  };

  const HandleVerifyOTP = async () => {
    if (OTPNumber != "") {
      const data = {
        ...carInfo,
        otp: OTPNumber,
        mobile_number: userNumber,
        brand: carInfo.brand.name,
        model: carInfo.model.name,
        varient: carInfo.variant.name,
      };
      console.log(JSON.stringify(data));

      const fetchData = await fetch(
        "https://api.unificars.com/api/customerrequestverify",
        {
          method: "POST",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const jsonRes = await fetchData.json();
      if (jsonRes.code == 200) {
        setOTPVerify(true);
        setlast_id(jsonRes.last_id);
        if (carNumber === "") {
          getCarValuation();
        }
      }
    }
  };

  const HandleEditNumber = () => {
    setOtpSend(false);
    setOTPNumber("");
    setUserNumber("");
  };

  const handleInputChange = (e) => {
    let input = e.target.value.replace(/[^a-zA-Z0-9]/g, ""); // Remove non-alphanumeric characters

    input = input.replace(/(.{2})(?=.)/g, "$1 ");

    // You can add logic to limit the length of the input if needed
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
      if (carNumber.length == 13) {
        let number = carNumber.split(" ").join("");
        console.log(number, "number");
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
          // Setting Up Brand Logo here
          const fetchBrand = await fetch(
            "https://api.unificars.com/api/getwebrands",
            {
              method: "POST",
              headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
              },
            }
          );
          const jsonRes = await fetchBrand.json();
          if (jsonRes.code == 200) {
            const brands = jsonRes.data;

            brands.map((brand) => {
              const brandName = brand.brand_name.split(" ");
              for (let val of brandName) {
                for (let mfg of data.result.vehicleManufacturerName.split(
                  " "
                )) {
                  if (mfg.toLowerCase() === val.toLowerCase()) {
                    setCarInfo({
                      ...carInfo,
                      brand: {
                        id: brand.id,
                        name: brand.brand_name,
                        image: brand.image,
                      },
                      model: { name: data.result.model.split(" ")[1] },
                      year: data.result.vehicleManufacturingMonthYear.split(
                        "/"
                      )[1],
                      variant: { name: data.result.model },
                      fuelType: data.result.type,
                      location: data.result.regAuthority,
                      ownerShip: data.result.ownerCount,
                    });
                  }
                }
              }
            });

            setValue("7");
            setScreen(2);
            setValidNumber(true);
          }
        } else {
          setValidNumber(true);
          console.error("Response Was not right from API");
        }
      }
    } catch (error) {
      setValidNumber(true);
      console.log(error);
    }
  };
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto gap-4 mt-10 lg:mt-15">
        <div className="text-4xl w-[50] mx-auto px-6 order-last lg:order-first">
          <div className="md:ml-24 ml-4">
            <h1 className="py-2 font-bold ">
              <span className="text-orange-500 sellheadfont">Sell</span>
              <span className="sellheadfont"> Car </span>
            </h1>
            <p className="text-lg my-2">Select your car brand to get started</p>
            <h6 className="text-lg text-black my-2 font-semibold">
              ● Instant online quote.
            </h6>
            <h6 className="text-lg text-black my-2 font-semibold">
              ● Free doorstep evaluation.
            </h6>
            <h6 className="text-lg text-black my-2 font-semibold">
              ● Same day payment.
            </h6>
          </div>
          <img src={"/selcarimage.png"} alt="" className="rounded-xl" />
        </div>
        <div className="text-4xl font-bold w-[100] px-6 order-first lg:order-last">
          <VehicleInfo />
          {/* {!verifyNum && !OpenModal && (
                        
                        <div className='bg-blue-custom p-3 rounded-2xl'>
                            <h1 className='text-xl text-black my-2 flex leading-3'>
                                Enter your car registration number &nbsp;&nbsp;<img src="4xfaster.png" width="80"/>
                            </h1>
                            <input 
                                className='px-2 focus:outline-none rounded-xl shadow carreg w-96' 
                                placeholder="DL34 AC 4565"
                                fullWidth
                                id={
                                    validNumber
                                    ? "outlined-error-helper-text"
                                    : "outlined-basic"
                                }
                                label="Search By Car Number"
                                variant="outlined"
                                type="text"
                                value={carNumber}
                                onChange={handleInputChange}
                                color={validNumber ? "error" : "warning"}
                                ref={inputRef}
                                helperText={validNumber ? "Enter a valid number." : ""}
                            /><br/>
                            <button className="bg-blue-500 text-white px-7 py-1 rounded-lg hover:bg-blue-600 mt-4 text-base font-inter" onClick={submitCarNumber}>
                                Get Price
                            </button><br/>
                            <div className="flex items-center justify-center my-2">
                                <div className="w-full border-t border-gray-500"></div>
                                <span className="mx-5 text-black text-base font-inter"> OR </span>
                                <div className="w-full border-t border-gray-500"></div>
                            </div>
                        </div>
                        
                    )}
                    {!verifyNum && !OpenModal && (
                        <h1 className='text-xl text-black mt-4 leading-3'>Select your car brand to get started</h1>
                    )}
                    <div id="popularBrands">
                        {!verifyNum && !OpenModal ?
                            <div className='mb-4'>
                                <MoreBrands setOpenModal={setOpenModal} setUserCarTabArray={setUserCarTabArray} UserCarTabArray={UserCarTabArray} OpenModal={OpenModal} UserCar={UserCar} setUserCar={setUserCar} CurrentTab={CurrentTab} setCurrentTab={setCurrentTab} />
                            </div>
                            : 
                            verifyNum &&  !OpenModal && ( 
                            <><CheckValue setlast_id={setlast_id} UserNumber={UserNumber} setUserNumber={setUserNumber} UserCar={UserCar} BookSlot={BookSlot} setBookSlot={setBookSlot} bookingRef={bookingRef} /> </>
                            )
                        }
                        <div className='my-4' ref={bookingRef}>
                            {BookSlot ? <><UserBookSlot last_id={last_id} /> </> : <></>}
                        </div>
                    </div>
                    {OpenModal && (
                    <div className='bg-white w-6/6 h-6/6 mx-auto overflow-y-auto rounded mt-10'>
                        <div className='overflow-x-scroll sticky bg-white top-0 p-1 z-50'>
                            <ul className='flex gap-4 text-lg mb-1'>
                                <li className={`whitespace-nowrap font-normal p-2 px-4 cursor-pointer rounded shadow ${UserCar.brand.name ? 'bg-[rgba(243,129,2,0.97)] text-white' : 'bg-gray-200 text-gray-400'}`} id='brand' onClick={(e)=>HandleDetailBarClick(e,"0")}>{(UserCar.brand).name==""?"Brand":(UserCar.brand).name}</li>
                                <li className={`whitespace-nowrap font-normal p-2 px-4 cursor-pointer rounded shadow ${UserCar.model.name ? 'bg-[rgba(243,129,2,0.97)] text-white' : 'bg-gray-200 text-gray-400'}`} id='model' onClick={(e)=>HandleDetailBarClick(e,"1")}>{(UserCar.model).name==""?"Model":(UserCar.model).name}</li>
                                <li className={`whitespace-nowrap font-normal p-2 px-4 cursor-pointer rounded shadow ${UserCar.varient.name ? 'bg-[rgba(243,129,2,0.97)] text-white' : 'bg-gray-200 text-gray-400'}`} id='varient' onClick={(e)=>HandleDetailBarClick(e,"2")}>{(UserCar.varient).name==""?"Varient":(UserCar.varient).name}</li>
                                <li className={`whitespace-nowrap font-normal p-2 px-4 cursor-pointer rounded shadow ${UserCar.year ? 'bg-[rgba(243,129,2,0.97)] text-white' : 'bg-gray-200 text-gray-400'}`} id='year' onClick={(e)=>HandleDetailBarClick(e,"3")}>{UserCar.year==""?"Year":UserCar.year}</li>
                                <li className={`whitespace-nowrap font-normal p-2 px-4 cursor-pointer rounded shadow ${UserCar.ownerShip ? 'bg-[rgba(243,129,2,0.97)] text-white' : 'bg-gray-200 text-gray-400'}`} id='ownerShip' onClick={(e)=>HandleDetailBarClick(e,"4")}>{UserCar.ownerShip==""?"Ownership":`ownership : ${UserCar.ownerShip}`}</li>
                                <li className={`whitespace-nowrap font-normal p-2 px-4 cursor-pointer rounded shadow ${UserCar.fuelType ? 'bg-[rgba(243,129,2,0.97)] text-white' : 'bg-gray-200 text-gray-400'}`} id='fuelType' onClick={(e)=>HandleDetailBarClick(e,"5")}>{UserCar.fuelType==""?"Fuel Type":UserCar.fuelType}</li>
                                <li className={`whitespace-nowrap font-normal p-2 px-4 cursor-pointer rounded shadow ${UserCar.kmDriven ? 'bg-[rgba(243,129,2,0.97)] text-white' : 'bg-gray-200 text-gray-400'}`} id='kmDriven' onClick={(e)=>HandleDetailBarClick(e,"6")}>{UserCar.kmDriven==""?"Km Driven":UserCar.kmDriven}</li>
                                <li className='bg-gray-200 whitespace-nowrap font-normal text-gray-400 p-2 px-4 cursor-pointer rounded shadow mr-4' id='location' onClick={(e)=>HandleDetailBarClick(e,"7")}>{UserCar.location==""?"Location":UserCar.location}</li>
                            </ul>
                        </div>
                        <div>
                            {(() => {
                                switch (CurrentTab) {
                                    case "0":
                                        return (
                                            <>
                                                <TitleX title={"Select your brand"} setOpenModal={setOpenModal} setUserCar={setUserCar} setCurrentTab={setCurrentTab} setUserCarTabArray={setUserCarTabArray}/>
                                                <PopularBrand UserCarTabArray={UserCarTabArray} OpenModal={OpenModal} setUserCar={setUserCar} UserCar={UserCar} setCurrentTab={setCurrentTab} setOpenModal={setOpenModal}/>
                                            </>
                                        );
                                    case "1":
                                        return (
                                            <>
                                                <TitleX title={"Select your model"} setOpenModal={setOpenModal} setUserCar={setUserCar} setCurrentTab={setCurrentTab} setUserCarTabArray={setUserCarTabArray}/>
                                                <SelectModel UserCarTabArray={UserCarTabArray} setUserCar={setUserCar} UserCar={UserCar} setCurrentTab={setCurrentTab}/>
                                            </>
                                        );
                                    case "2":
                                        return (
                                            <>
                                                <TitleX title={"Select your varient"} setOpenModal={setOpenModal} setUserCar={setUserCar} setCurrentTab={setCurrentTab} setUserCarTabArray={setUserCarTabArray}/>
                                                <SelectVarient UserCarTabArray={UserCarTabArray} setUserCar={setUserCar} UserCar={UserCar} setCurrentTab={setCurrentTab}/>
                                            </>
                                        );
                                    case "3":
                                        return (
                                            <>
                                                <TitleX title={"Select your year"} setOpenModal={setOpenModal} setUserCar={setUserCar} setCurrentTab={setCurrentTab} setUserCarTabArray={setUserCarTabArray}/>
                                                <SelectYear UserCarTabArray={UserCarTabArray} setUserCar={setUserCar} UserCar={UserCar} setCurrentTab={setCurrentTab}/>
                                            </>
                                        );
                                    case "4":
                                        return (
                                            <>
                                                <TitleX title={"Select your ownership"} setOpenModal={setOpenModal} setUserCar={setUserCar} setCurrentTab={setCurrentTab} setUserCarTabArray={setUserCarTabArray}/>
                                                <SelectOwner UserCarTabArray={UserCarTabArray} setUserCar={setUserCar} UserCar={UserCar} setCurrentTab={setCurrentTab}/>
                                            </>
                                        );
                                    case "5":
                                        return (
                                            <>
                                                <TitleX title={"Select your fuel type"} setOpenModal={setOpenModal} setUserCar={setUserCar} setCurrentTab={setCurrentTab} setUserCarTabArray={setUserCarTabArray}/>
                                                <SelectFuelType UserCarTabArray={UserCarTabArray} setUserCar={setUserCar} UserCar={UserCar} setCurrentTab={setCurrentTab}/>
                                            </>
                                        );
                                    case "6":
                                        return (
                                            <>
                                                <TitleX title={"Select your km driven"} setOpenModal={setOpenModal} setUserCar={setUserCar} setCurrentTab={setCurrentTab} setUserCarTabArray={setUserCarTabArray}/>
                                                <SelectKm UserCarTabArray={UserCarTabArray} setUserCar={setUserCar} UserCar={UserCar} setCurrentTab={setCurrentTab}/>
                                            </>
                                        );
                                    case "7":
                                        return (
                                            <>
                                                <TitleX title={"Select your location"} setOpenModal={setOpenModal} setUserCar={setUserCar} setCurrentTab={setCurrentTab} setUserCarTabArray={setUserCarTabArray}/>
                                                <SelectStates UserCarTabArray={UserCarTabArray} setOpenModal={setOpenModal} setVerifyNum={setVerifyNum} setUserCar={setUserCar} UserCar={UserCar} setCurrentTab={setCurrentTab}/>
                                            </>
                                        );
                                    default:
                                        return null;
                                }
                            })()}
                        </div>
                    </div>
                    )} */}
        </div>
      </div>

      {/* modal starts here  */}
      {/* <div>
                <SellModal setUserCarTabArray={setUserCarTabArray} UserCarTabArray={UserCarTabArray} OpenModal={OpenModal} setOpenModal={setOpenModal} UserCar={UserCar} setUserCar={setUserCar} CurrentTab={CurrentTab} setCurrentTab={setCurrentTab} setVerifyNum={setVerifyNum} />
            </div> */}
      <div className=""></div>
    </div>
  );
};

export default Sellcar;
