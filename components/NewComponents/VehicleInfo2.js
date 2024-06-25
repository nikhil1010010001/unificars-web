import { useState, useEffect, useRef } from "react";
import BlogGrid from "@/components/NewComponents/BlogGrid";
import TextField from "@mui/material/TextField";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import InputAdornment from "@mui/material/InputAdornment";
import PopularBrands from "../SellPageModal2/PopularBrand2";
import SelectModel from "../SellPageModal2/SelectModel";
import SelectYear from "../SellPageModal2/SelectYear";
import SelectVariant from "../SellPageModal2/SelectVarient";
import SelectStates from "../SellPageModal2/SelectStates";
import SelectKm from "../SellPageModal2/SelectKm";
import SelectFuelType from "../SellPageModal2/SelectFuelType";
import SelectOwner from "../SellPageModal2/SelectOwner";
import SlotBooking from "./SlotBooking";
import Image from "next/image";
import axios from "axios";
import { data } from "autoprefixer";
import { getCarValuation } from "@/common/common";

// import InputMask from 'inputmask';

// car number for DL 1C AE 2216

const VehicleInfo = () => {
  const [value, setValue] = useState("1");
  const [screen, setScreen] = useState(1);
  const [OtpSend, setOtpSend] = useState(false);
  const [OTPVerify, setOTPVerify] = useState(false);
  const [OTPNumber, setOTPNumber] = useState("");
  const [ExpectedPrice, setExpectedPrice] = useState([0, 0]);
  const [userNumber, setUserNumber] = useState("");
  const [last_id, setlast_id] = useState(null);
  const [verifyNum, setVerifyNum] = useState(false);
  const [BookSlot, setBookSlot] = useState(false);
  const bookingRef = useRef();
  const inputRef = useRef();
  const [carNumber, setCarNumber] = useState("");
  const [BookedStatus, setBookedStatus] = useState(true);
  const [validationerror, setValidationerror] = useState(false);
  const [validNumber, setValidNumber] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const [carInfo, setCarInfo] = useState({
    brand: {
      id: "",
      name: "",
      image: "",
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
                borderRadius: "10px",
              }
            : {
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
    // console.log(carInfo.brand, "From useEffect");
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
    if (userNumber == "") {
      setValidationerror("Phone number is required!");
    }

    getCarValuation(carInfo, setExpectedPrice);

    if (userNumber.length < 10) {
      setValidationerror("Invalid Phone Number");
    }

    if (userNumber != "" && userNumber.length == 10) {
      setValidationerror("");
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
        setIsDisabled(true);
      }
    }
  };

  const HandleVerifyOTP = async () => {
    setValidationerror(" ");

    if (OTPNumber != "") {
      const data = {
        ...carInfo,
        otp: OTPNumber,
        mobile_number: userNumber,
        brand: carInfo.brand.name,
        model: carInfo.model.name,
        varient: carInfo.variant.name,
      };

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
        // setBookSlot(false);
        // setBookedStatus(true);

        getCarValuation(carInfo, setExpectedPrice);
      } else {
        setValidationerror(jsonRes.status);
      }
    } else {
      setValidationerror("OTP is required!");
    }
  };

  const HandleEditNumber = () => {
    setOtpSend(false);
    setOTPNumber("");
    setUserNumber("");
    setIsDisabled(false);
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

  const getCarDetails = async (carNum) => {
    try {
      const res = await axios.post(
        `https://crm.unificars.com/api/checkvehiclnumber`,
        { vehicle_number: carNum }
      );
      // console.log("res", res.data);
      return res.data.data;
    } catch (error) {
      console.log("error", error);
      return null;
    }
  };

  const [emptraData, setEmptraData] = useState(null);

  const submitCarNumber = async () => {
    try {
      setLoading(true);

      if (carNumber.length === 13) {
        setValidNumber(false);

        let number = carNumber.split(" ").join("");
        let data = await getCarDetails(number);

        if (data === null) {
          const response = await axios.post(
            "https://api.emptra.com/vehicleRegistrations",
            {
              vehicleNumber: number,
              blacklistCheck: true,
            },
            {
              headers: {
                "Content-Type": "application/json",
                secretKey:
                  "rt50rd1OViWQyA6pv40WbWJJmHCwIvGUBEAM6OLmaqTyhE61RiJ8whOOQDHdslXVT",
                clientId:
                  "932bee8472f77a75f9a328430973d1ab:87937c1398e424117fe02fcf3f070290",
              },
            }
          );

          setEmptraData(response.data);

          console.log(emptraData, "emptra data");

          // Call the third API with the data from the second API (save to db)
          if (emptraData.result.status !== 400) {
            const thirdApiResponse = await fetch(
              "https://crm.unificars.com/api/vehiclenumber",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  vehicle_number: number,
                  object: emptraData,
                }),
              }
            );

            const resData = await thirdApiResponse.json();
            console.log("post to db data", resData);
          }
        }

        if (data?.code === 100) {
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
                    setCarInfo((prev) => ({
                      ...prev,
                      brand: {
                        id: brand.id,
                        name: brand.brand_name,
                        image: brand.image,
                      },
                      model: {
                        ...prev.model,
                        name: data.result.model.split(" ")[1],
                      },
                      year: data.result.vehicleManufacturingMonthYear.split(
                        "/"
                      )[1],
                      variant: {
                        ...prev.variant,
                        name: data.result.model,
                      },
                      fuelType: data.result.type,
                      location: data.result.regAuthority,
                      ownerShip: data.result.ownerCount,
                    }));

                    console.log("carInfo brand updated", carInfo);

                    setValue("7");
                    setScreen(2);
                    setValidNumber(true);
                  }
                }
              }
            });
          }
        } else {
          setValidNumber(true);
          console.error("Response Was not right from API");
        }

        const res = await axios.post(
          `https://crm.unificars.com/api/getBrandVariantresponse`,
          { dl_number: number }
        );

        console.log("res data from getBrandVariantresponse", res.data.message);

        setCarInfo((prev) => ({
          ...prev,
          brand: {
            ...prev.brand,
            id: res.data.message.brand.id,
            name: res.data.message.brand.brand_name,
          },
          model: {
            ...prev.model,
            id: res.data.message.model.id,
            name: res.data.message.model.model,
          },
          variant: {
            ...prev.variant,
            id: res.data.message.variant.id,
            name: res.data.message.variant.variant,
          },
          year: res.data.message.registrationDate,
          ownerShip: res.data.message.owner,
          fuelType: res.data.message.type,
          location: res.data.message.location,
        }));

        console.log("carInfo from getBrandVariantresponse", carInfo);
      } else {
        setValidNumber(true);
      }
    } catch (error) {
      setValidNumber(true);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const [hideAnimation, setHideAnimation] = useState(false);

  const handleHideAnimation = () => {
    setHideAnimation(!hideAnimation);
  };

  // RETURN STARTS
  return (
    <>
      <div className="gap-4 flex flex-col z-10 rounded-md">
        {screen === 1 && (
          <div
            className={`p-4 flex flex-col justify-center items-start gap-4 w-full`}>
            <div className="flex flex-wrap-reverse gap-4 items-center  w-full max-w-full overflow-hidden">
              <span className="text-2xl font-semibold">
                Enter your car registration number
              </span>
              <Image
                src="/4xfaster.png"
                alt="4x Faster"
                width={70}
                height={20}
                className="flex-shrink-0"
              />
            </div>
            <div className="flex flex-wrap md:flex-nowrap gap-4 w-full">
              <div className="flex flex-wrap w-full gap-2">
                <div className="font-bold text-[#465166] w-full text-field relative">
                  {/* <TextField
                  error={validNumber}
                  id={
                    validNumber
                      ? "outlined-error-helper-text"
                      : "outlined-basic"
                  }
                  label="Search By Car Number"
                  variant="outlined"
                  placeholder="AA 11 AA 1111"
                  type="text"
                  value={carNumber}
                  onChange={handleInputChange}
                  color={validNumber ? "error" : "warning"}
                  ref={inputRef}
                  helperText={validNumber ? "Enter a valid number." : ""}
                  className="w-full"
                /> */}

                  <input
                    type="text"
                    className="w-full p-4 rounded-2xl shadow-lg text-xl outline-none  border border-gray-200"
                    value={carNumber}
                    onChange={handleInputChange}
                    placeholder={hideAnimation ? "DL XX AC XXXX" : ""}
                    ref={inputRef}
                    onBlur={() => {
                      if (carNumber.length === 0) {
                        setHideAnimation(false);
                      }
                    }}
                  />

                  {!hideAnimation && (
                    <div
                      className="absolute top-0 m-auto w-full h-full z-10 flex items-center"
                      onClick={handleHideAnimation}>
                      <div>
                        <h1 className="ml-4 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-xl text-gray-500">
                          DL XX AC XXXX
                        </h1>
                      </div>
                    </div>
                  )}
                </div>

                <p className="text-sm p-2 pt-0 text-[#D04848]">
                  {validNumber ? "Please enter a valid number." : ""}
                </p>
              </div>
              {loading ? (
                <div className="loader text-sm">Loading...</div>
              ) : (
                <button
                  className="w-48 h-14 bg-blue-500 text-white md:px-7 py-4 rounded-lg hover:bg-blue-600 text-base font-sans"
                  onClick={submitCarNumber}>
                  Get Price
                </button>
              )}
            </div>
            <div className="w-full flex items-center justify-center my-2 place-self-center">
              <div className="w-full border-t border-gray-500"></div>
              <span className="mx-5 text-black text-base font-sans"> OR </span>
              <div className="w-full border-t border-gray-500"></div>
            </div>
            <h1 className="text-2xl font-bold text-black mt-4">
              Choose your model
            </h1>

            {/* <Divider className="w-3/4" />
              <p className="text-md text-[#465166]">or</p>
              <p className="text-xl text-[#465166]">
                {" "}
                Start with your car brand
              </p> */}

            <PopularBrands
              setCarInfo={setCarInfo}
              carInfo={carInfo}
              screen={screen}
              setScreen={setScreen}
            />
          </div>
        )}

        {/* className={`${screen === 1 ? 'hidden' : ''}`} */}

        {/* Pills */}
        {(screen === 2 || screen === 3) && carInfo.brand.name && (
          <div className="flex flex-row my-2 mx-4 text-[#465166] gap-2 items-center justify-between">
            {/* <div className="grid grid-cols-3 gap-2">
              {selectedPillArray.map((item, index) => {
                return selectedPill(item, index + "");
              })}
            </div> */}
            <div className="flex gap-1 items-center">
              <div>
                <Avatar
                  alt="brand_logo"
                  src={carInfo?.brand?.image}
                  className="bg-[#E1F0DA]"
                  sx={{ width: 100, height: 100 }}
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex flex-row gap-1 items-center text-xl">
                  {carInfo.year && <p>{carInfo.year}</p>}

                  {carInfo.model.name && (
                    <p className=" font-bold">{carInfo.model.name}</p>
                  )}

                  {carInfo.fuelType && <p>{"[ " + carInfo.fuelType + " ]"}</p>}
                </div>

                <div>
                  {carInfo.variant.name && (
                    <p className="text-xs">{carInfo.variant.name}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                className=" border border-orange-500 text-orange-500 px-4 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-200 ease-in-out"
                onClick={() => {
                  setValue("1");
                  // setScreen(2);
                  setCarInfo({
                    brand: {
                      id: "",
                      name: "",
                      image: "",
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
                  setScreen(1);
                  setOTPVerify(false);
                  setOTPNumber(false);
                  setOtpSend(false);
                  setBookedStatus(true);
                  setIsDisabled(false);
                }}>
                Edit
              </button>
            </div>
          </div>
        )}

        {/* Tabs Div */}
        {screen === 2 && (
          <TabContext value={value} className="mt-2">
            <Box>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                scrollButtons="auto"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  margin: "auto",
                }}
                variant="scrollable"
                indicatorColor="warning">
                {tabs.map((tab) => {
                  return customTab(tab.label, tab.value);
                })}
              </TabList>

              <Divider className="w-full p-2" />
            </Box>
            <div>
              <TabPanel value="1">
                <PopularBrands
                  setCarInfo={setCarInfo}
                  carInfo={carInfo}
                  screen={screen}
                  setScreen={setScreen}
                />
              </TabPanel>

              <TabPanel value="2">
                <SelectModel
                  setCarInfo={setCarInfo}
                  carInfo={carInfo}
                  value={value}
                  setValue={setValue}
                />
              </TabPanel>

              <TabPanel value="3">
                <SelectVariant
                  setCarInfo={setCarInfo}
                  carInfo={carInfo}
                  value={value}
                  setValue={setValue}
                />
              </TabPanel>

              <TabPanel value="4">
                <SelectYear
                  setCarInfo={setCarInfo}
                  carInfo={carInfo}
                  value={value}
                  setValue={setValue}
                />
              </TabPanel>

              <TabPanel value="5">
                <SelectOwner
                  setCarInfo={setCarInfo}
                  carInfo={carInfo}
                  value={value}
                  setValue={setValue}
                />
              </TabPanel>

              <TabPanel value="6">
                <SelectFuelType
                  setCarInfo={setCarInfo}
                  carInfo={carInfo}
                  value={value}
                  setValue={setValue}
                />
              </TabPanel>

              <TabPanel value="7">
                <SelectKm
                  setCarInfo={setCarInfo}
                  carInfo={carInfo}
                  value={value}
                  setValue={setValue}
                  carNumber={carNumber}
                  setScreen={setScreen}
                />
              </TabPanel>

              <TabPanel value="8">
                <SelectStates
                  setCarInfo={setCarInfo}
                  carInfo={carInfo}
                  value={value}
                  setValue={setValue}
                  setScreen={setScreen}
                />
              </TabPanel>
            </div>
          </TabContext>
        )}
        {/* Code For OTP and Car valuation screen */}
        {screen === 3 && (
          <div className="flex flex-col text-[#465166] w-[60%] mx-auto">
            {!OTPVerify ? (
              <>
                <div className="p-2 m-2 gap-6 flex flex-col ">
                  <h1 className="text-2xl">Enter Your Phone Number</h1>

                  <p className="text-xs">
                    We will reach you for further queries
                  </p>

                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Enter Mobile NUmber"
                    variant="outlined"
                    type="number"
                    disabled={isDisabled}
                    value={userNumber}
                    onChange={(e) => setUserNumber(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">+91</InputAdornment>
                      ),
                    }}
                  />

                  {OtpSend ? (
                    <div>
                      {/* <input
                    placeholder="Enter Your OTP"

                    className="w-full p-2 border outline-gray-200 rounded border-gray-200 "
                  /> */}
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Enter OTP"
                        variant="outlined"
                        type="number"
                        color="warning"
                        onChange={(e) => setOTPNumber(e.target.value)}
                        value={OTPNumber}
                      />
                      {/* <span className="text-red-600 mt-[2px] text-sm"> {validationerror}</span> */}

                      <div className="flex justify-between gap-2 my-2">
                        <button
                          onClick={HandleVerifyOTP}
                          className="w-full p-2 text-base text-center bg-[#f38102] text-white rounded shadow hover:bg-black hover:text-white transition-all duration-200 ease-in-out ">
                          Verify OTP
                        </button>
                        <button
                          onClick={HandleEditNumber}
                          className="w-full p-2 text-base text-center bg-[#f38102] text-white rounded shadow hover:bg-black hover:text-white transition-all duration-200 ease-in-out ">
                          Edit Number
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full">
                      <button
                        onClick={HandleGetOtp}
                        className="w-full p-2 text-base text-center bg-[#f38102] text-white rounded shadow hover:bg-black hover:text-white transition-all duration-200 ease-in-out ">
                        GET OTP
                      </button>
                    </div>
                  )}
                  <span className="text-red-600 mt-[2px] text-sm">
                    {" "}
                    {validationerror}
                  </span>
                </div>
                <div className="my-6 flex items-center justify-center">
                  <p className=" font-bold text-sm">
                    We respect your privacy and your information is secure with
                    us
                  </p>
                </div>
              </>
            ) : (
              // When OTP is verfied
              <div className="">
                {OTPVerify ? (
                  <div className="flex tracking-widest flex-col text-blue-900 justify-center items-center">
                    <div className="text-xl">Expected Price</div>
                    <h3 className="text-2xl my-2 ">
                      ₹
                      {(ExpectedPrice[0] < 0
                        ? 0
                        : ExpectedPrice[0]
                      ).toLocaleString("en-IN")}{" "}
                      - ₹{ExpectedPrice[1].toLocaleString("en-IN")}
                    </h3>
                    <div className="bg-blue-500/20 p-2 rounded text-green-700 my-2">
                      <p className="text-base">Price May Vary On Inspection</p>
                    </div>
                    {/* <div className="flex flex-col justify-center items-center">
                        <button
                            onClick={() => {
                              setBookSlot(true);
                              bookingRef.current.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="w-full p-2 text-base mb-8 mt-3 text-center bg-[#f38102] text-white rounded shadow hover:bg-black hover:text-white transition-all duration-200 ease-in-out "
                          >
                            Book Slot
                        </button>
                      </div> */}
                  </div>
                ) : (
                  <></>
                )}

                {/* Slot Booking */}
                <div ref={bookingRef}>
                  {!BookSlot ? (
                    <>
                      <SlotBooking
                        last_id={last_id}
                        setBookedStatus
                        BookedStatus
                      />{" "}
                    </>
                  ) : (
                    <></>
                  )}
                </div>
                {/* Ends */}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default VehicleInfo;

// onClick={() => {setBookSlot(true); bookingRef.current.scrollIntoView({ behavior: "smooth" }) }
