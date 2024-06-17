import React, { useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { RiStarSFill, RiStarSLine } from "react-icons/ri";
import { useRouter } from "next/router";
import TestemonialCarousel from "@/components/TestemonialCarousel";

const dealership = () => {
  const router = useRouter();
  const [UserDetails, setUserDetails] = useState({
    fname: "",
    email: "",
    mobile: "",
    state: "",
    check: false,
  });
  const [msg, setMsg] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const UserInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) =>
      name === "check"
        ? { ...prevDetails, check: !prevDetails.check }
        : { ...prevDetails, [name]: value }
    );
  };

  const HandleFormSubmit = async (e) => {
    e.preventDefault();
    const { fname, email, mobile, state, otp } = UserDetails;

    if (otp) {
      const res = await fetch("https://crm.unificars.com/api/verifyotp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile, otp, is_verify: "1" }),
      });
      const data = await res.json();
      if (data.code === 200) {
        setMsg(data.message);
        router.push("/thankyou");
      } else {
        setMsg(data.message);
      }
    } else if (
      fname &&
      state &&
      mobile.match(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/) &&
      email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)
    ) {
      const res = await fetch("https://crm.unificars.com/api/mobileotpsend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(UserDetails),
      });
      const data = await res.json();
      if (data.code === 200) {
        setMsg(data.message);
        setIsFormSubmitted(true);
      }
    }
  };

  return (
    <div className="">
      <div className="relative" style={{ paddingTop: "85px" }}>
        <div>
          <img
            src="Banner-Image.png"
            className="hidden md:block  h-[40rem] w-[100rem] bannerimage"
          />
          <div className="block md:hidden bg-[#0e223b] h-[40rem] w-full"></div>
        </div>
        {/* <div className='absolute left-[45%] top-1/3 '>
                    <h2 className='text-white text-xl lg:text-5xl text-center'>Buy, Sell, and Drive On!</h2>
                    <p className='text-white text-2xl my-4 hidden lg:block'>Let the UNIFI WHEELS PRIVATE LIMITED be a part of your journey.</p>
                    <div className='flex gap-4 justify-center mt-3'>
                        <Link href={"/assured-cars"} className='bg-[#f38102] p-1 lg:p-2 text-white cursor-pointer hover:scale-105 lg:px-6 hover:text-[#f38102] hover:bg-white border-[#f38102] border text-center transition-all duration-300 ease-in-out rounded shadow'>Buy Car</Link>
                        <Link href={"/sell-used-cars"} className='bg-[#f38102] p-1 lg:p-2 text-white cursor-pointer hover:scale-105 lg:px-6 hover:text-[#f38102] hover:bg-white border-[#f38102] border text-center transition-all duration-300 ease-in-out rounded shadow'>Sell Car</Link>
                    </div>
                </div> */}
        <div
          className="setmaindiv3 absolute top-5 right-[5%] bg-white p-7 rounded mt-[120px] md:mt-[90px]"
          style={{
            boxShadow: "0px 0px 16px 0px rgba(0, 0, 0, 0.25)",
            justifySelf: "center!important",
            marginLeft: "auto",
          }}>
          {/* <div className="ribbon-pop font-bold text-2xl my-2 capitalize">Dealer Onboarding</div> */}
          <h3 className="font-bold text-2xl my-2 capitalize text-center">
            BECOME OUR CHANNEL PARTNER
          </h3>
          {/* <div className=""><img src={'/title_line.png'} alt="" /></div> */}

          <form onSubmit={HandleFormSubmit} id="enquiry">
            {/* <div className="form-grp">
                            <label className="flex gap-2 mt-2" htmlFor="email"><FaAngleDoubleRight className='my-1 text-orange-500' /> Email <span className='text-orange-500'>*</span></label>
                            <input  required type="email" className='p-2 w-full focus:outline-none rounded-xl shadow2' name="email" id="email" placeholder="Your Email" />
                            <span id="email_error" className=""></span>
                        </div> */}
            <div className="box form-grp w-full mt-5">
              <input
                type="text"
                placeholder="Full Name"
                name="fname"
                id="fname"
                onChange={(e) => UserInputChange(e)}
                value={UserDetails.fname}
                required
              />
              {/* <label for="fname">Full Name</label> */}
            </div>
            {/* <div className="box form-grp w-48 mt-5 mars-3">
                            <input type="lname" placeholder="" name="lname" id="lname" onChange={(e) => UserInputChange(e)} value={UserDetails.lname} required />
                            <label for="lname">Last Name</label>
                        </div> */}
            <div className="box form-grp w-full mt-5">
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                id="email"
                onChange={(e) => UserInputChange(e)}
                value={UserDetails.email}
                required
              />
              {/* <label for="email">Your Email</label> */}
            </div>
            {/* <div className="box form-grp w-full mt-5" > */}

            {/* <select className="form-select" name="state" id="state" style={{ padding: '14px 6px', border: '1px solid black', borderRadius: '15px', color: 'rgb(34 34 34/79%)' }}>
                                <option selected>Select Your State</option>
                                <option value="1">One</option>
                            </select> */}
            {/* <input type="state" placeholder="" name="state" id="state" onChange={(e)=>UserInputChange(e)} value={UserDetails.state} required/> */}
            {/* <label for="state">Select your State</label> */}
            {/* </div> */}
            <div className="box form-grp w-full mt-5">
              <select
                className="form-select"
                name="state"
                onChange={(e) => UserInputChange(e)}
                id="state"
                style={{
                  padding: "14px 10px",
                  border: "1px solid black",
                  borderRadius: "15px",
                  color: "rgb(34 34 34/79%)",
                  fontWeight: "200",
                  background: "white",
                }}
                required>
                <option selected>Select Your State</option>
                <option value="Andaman and Nicobar Islands">
                  Andaman and Nicobar Islands
                </option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Dadra and Nagar Haveli">
                  Dadra and Nagar Haveli
                </option>
                <option value="Daman and Diu">Daman and Diu</option>
                <option value="Delhi">Delhi</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Ladakh">Ladakh</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Puducherry">Puducherry</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
              </select>
            </div>

            <div className="box form-grp w-full mt-5">
              <input
                type="number"
                placeholder="Your Mobile"
                name="mobile"
                id="mobile"
                onChange={(e) => UserInputChange(e)}
                value={UserDetails.mobile}
                required
              />
              {/* <label for="mobile">Your Mobile</label> */}
            </div>

            <div
              className="box w-full form-grp mt-5"
              style={{ display: isFormSubmitted ? "flex" : "none" }}>
              <input
                type="number"
                placeholder="OTP"
                name="otp"
                id="otp"
                onChange={(e) => UserInputChange(e)}
                value={UserDetails.otp}
                requiredb={isFormSubmitted}
              />
              {/* <label for="otp">OTP</label> */}

              {/* <label className="flex gap-2 mt-2" htmlFor="otp"><FaAngleDoubleRight className='my-1 text-orange-500' /> Otp <span className='text-orange-500'>*</span></label>
                            <input  requiredb={isFormSubmitted} type="number" onChange={(e)=>UserInputChange(e)} value={UserDetails.otp} className='p-2 w-full focus:outline-none rounded-xl shadow2' name="otp" id="otp" placeholder="Your otp"/> */}
              <span id="otp_error" className=""></span>
            </div>
            <div className="form-grp">
              {!isFormSubmitted && ( // Show the 'Send OTP' button if form is not submitted
                <button
                  type="submit"
                  className="bg-sky-700 rounded-xl shadow2 p-2 border disabled:border-0 border-orange-500 text-white disabled:bg-sky-700 mt-4">
                  Register Now
                </button>
              )}
              {isFormSubmitted && ( // Show the 'Verify OTP' button if form is submitted
                <button
                  type="submit"
                  className="bg-sky-700 rounded-xl shadow2 p-2 border disabled:border-0 border-orange-500 text-white disabled:bg-sky-700 mt-4"
                  style={{ width: "100%" }}>
                  Verify OTP
                </button>
              )}
            </div>
            <span className="prvtag">
              We respect your privacy. Your information is confidential with us.
            </span>
            <div className="text-green-500">{msg}</div>

            {/* <button>Başvur</button> */}
          </form>
        </div>
      </div>
      <div className="mt-0 md:mt-[-45px]">
        <div>
          <div className="container mx-auto items-center">
            <div className="p-4">
              <div className="">
                {/* <div className="text-4xl font-bold text-orange-500">
                                    <h2 className='py-2'>Why choose us <span className='text-blue-900'>US </span></h2>
                                    <img src='/home/title_line.png' alt="line" />
                                </div> */}
                <div className="text-center items-center flex flex-col mb-6">
                  <h2 className="text-4xl font-black">Why Partners with Us</h2>
                  <p className=" text-lg my-4">
                    Unifi Cars ensures every deal is built on clarity, trust,
                    and experience
                    <br />
                    so you can make smart and secure purchases.
                  </p>
                  {/* <img src='/home/title_line.png' alt='home'/> */}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="text-center flex flex-wrap justify-center align-item-center">
                    <img
                      src="carousel/WCU1.jpg"
                      className="img-fluid h-64 transition object-cover duration-300 transform hover:scale-110 whychooseus relative"
                      alt="howitworks"
                      width="250px"
                    />
                    <div className="after"></div>
                    <div className="px-4 absolute">
                      {/* <h4 className="text-xl text-white font-bold  uppercase mt-4 flex-none">Verified cars</h4> */}
                      {/* <p className="mx-5 hiwpara">You can easily become the part of our family by downloading our auction app to take part in the auctions.</p> */}
                    </div>
                  </div>
                  <div className="text-center flex flex-wrap justify-center align-item-center">
                    <img
                      src="carousel/WCU2.jpg"
                      className="img-fluid h-64 transition object-cover duration-300 transform hover:scale-110 whychooseus relative"
                      alt="howitworks"
                      width="250px"
                    />
                    <div className="px-4 absolute">
                      {/* <h4 className="text-xl text-white font-bold  uppercase flex-none">Transparent<br />bidding process</h4> */}
                      {/* <p className="mx-5 hiwpara"> </p> */}
                    </div>
                  </div>
                  <div className="text-center flex flex-wrap justify-center align-item-center">
                    <img
                      src="carousel/WCU3.png"
                      className="img-fluid h-64 transition object-cover duration-300 transform hover:scale-110 whychooseus relative"
                      alt="howitworks"
                      width="250px"
                    />
                    <div className="px-4 absolute">
                      {/* <h4 className="text-xl text-white font-bold  uppercase flex-none">Get car at your<br /> doorstep</h4> */}
                      {/* <p className="mx-5 hiwpara">After winning the bidding we will offers the various payment methods just like online and offline methods.</p> */}
                    </div>
                  </div>
                  <div className="text-center flex flex-wrap justify-center align-item-center">
                    <img
                      src="carousel/WCU4.png"
                      className="img-fluid h-64 transition object-cover duration-300 transform hover:scale-110 whychooseus relative"
                      alt="howitworks"
                      width="250px"
                    />
                    <div className="px-4 absolute">
                      {/* <h4 className="text-xl text-white font-bold  uppercase flex-none">Secured payment<br /> methods</h4> */}
                      {/* <p className="mx-5 hiwpara">Secured payment methods</p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="">
                            <img src={"/whyus.jpg"} className='rounded-xl' alt="" width="500"/>
                        </div> */}
          </div>
        </div>
      </div>

      <div>
        <div className="py-10 text-center bg-gradient-radial from-white text-gray-600">
          <div className="w-11/12 mx-auto">
            <div className="text-center items-center flex flex-col mb-6">
              <h2 className="text-4xl text-[#000] font-black">
                How It Works !
              </h2>
              <p className="text-lg my-4">
                Make your car buying journey easy and convenient with us.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* <div className="text-center flex flex-wrap justify-center cardhow">
                <img
                  src="icons/join.png"
                  className="img-fluid transition duration-300 transform hover:scale-110"
                  alt="howitworks"
                  width="200px"
                />
                <div className="px-4 pb-3">
                  <h4 className="text-2xl font-black text-black uppercase mt-4 flex-none">
                    Join our family
                  </h4>
                  <p className="mx-5 font-normal my-4 text-lg">
                    You can easily become the part of our family by downloading
                    our auction app to take part in the auctions.
                  </p>
                </div>
              </div> */}

              {/* <div className="text-center flex flex-wrap justify-center cardhow">
                <img
                  src="icons/onboarding.png"
                  className="img-fluid transition duration-300 transform hover:scale-110"
                  alt="howitworks"
                  width="200px"
                />
                <div className="px-4 pb-3">
                  <h4 className="text-2xl font-black text-black uppercase mt-4 flex-none">
                    On boarding form
                  </h4>
                  <p className="mx-5 font-normal my-4 text-lg">
                    Our advance methods quickly analyse your car price and get
                    the estimate value of your car.{" "}
                  </p>
                </div>
              </div> */}

              <div className="text-center flex flex-wrap justify-center cardhow">
                <img
                  src="icons/biding.png"
                  className="img-fluid transition duration-300 transform hover:scale-110"
                  alt="howitworks"
                  width="200px"
                />
                <div className="px-4 pb-3">
                  <h4 className="text-2xl font-black text-black uppercase mt-4 flex-none">
                    Bid placing time
                  </h4>
                  <p className="mx-5 font-normal my-4 text-lg">
                    You can easily start the bidding from our wide range of
                    cars.{" "}
                  </p>
                </div>
              </div>
              <div className="text-center flex flex-wrap justify-center cardhow">
                <img
                  src="icons/dealclose.png"
                  className="img-fluid transition duration-300 transform hover:scale-110"
                  alt="howitworks"
                  width="200px"
                />
                <div className="px-4 pb-3">
                  <h4 className="text-2xl font-black text-black uppercase mt-4 flex-none">
                    Deal closing time
                  </h4>
                  <p className="mx-5 font-normal my-4 text-lg">
                    Close the deal after winning the bid.
                  </p>
                </div>
              </div>

              {/* <div className="text-center flex flex-wrap justify-center cardhow">
                <img
                  src="icons/payment.png"
                  className="img-fluid transition duration-300 transform hover:scale-110"
                  alt="howitworks"
                  width="200px"
                />
                <div className="px-4 pb-3">
                  <h4 className="text-2xl font-black text-black uppercase mt-4 flex-none">
                    Payment time
                  </h4>
                  <p className="mx-5 font-normal my-4 text-lg">
                    After winning the bidding we will offers the various payment
                    methods just like online and offline methods.
                  </p>
                </div>
              </div> */}

              <div className="text-center flex flex-wrap justify-center cardhow">
                <img
                  src="https://api.unificars.com/front/img/icon/hiw1copy.png"
                  className="img-fluid transition duration-300 transform hover:scale-110"
                  alt="howitworks"
                  width="200px"
                />
                <div className="px-4 pb-3">
                  <h4 className="text-2xl font-black text-black uppercase mt-4 flex-none">
                    Delivery time
                  </h4>
                  <p className="mx-5 font-normal my-4 text-lg">
                    After completion of payment, we will provide you the
                    doorstep delivery with all completed documents.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className='flex items-center mx-auto'>
                <div className='hidden lg:block w-[100%]'>
                    <img src="howitjoin.png" className=' w-[100%]' />
                </div>
            </div> */}

      <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto gap-4 mt-10 mb-16 lg:mt-10 border-2 rounded-xl">
        <div className=" mx-4 mt-2 font-bold place-self-center">
          <h2 className="py-2 text-4xl text-black ">How to join us</h2>
          <p className="font-normal text-black my-2 ">
            Join our family in 4 simple steps.
          </p>
          <ul className="my-12 flex flex-col gap-6 ">
            <li className="flex font-bold">
              <div className="flex-none pt-1 mr-2">
                <TiTick className="bg-[#FFB648] text-xl rounded-full text-[#ffffff]" />
              </div>
              Register yourself and our Executive will contact you within 24
              Hours.
            </li>

            <li className="flex font-bold">
              <div className="flex-none pt-1 mr-2">
                <TiTick className="bg-[#FFB648] text-xl rounded-full text-[#ffffff]" />
              </div>
              Download the app via playstore or app store
            </li>

            <li className="flex font-bold">
              <div className="flex-none pt-1 mr-2">
                <TiTick className="bg-[#FFB648] text-xl rounded-full text-[#ffffff]" />
              </div>
              Verifying your profile
            </li>

            <li className="flex font-bold">
              <div className="flex-none pt-1 mr-2">
                <TiTick className="bg-[#FFB648] text-xl rounded-full text-[#ffffff]" />
              </div>
              Start bidding on the cars
            </li>
          </ul>
        </div>

        <div className="line">
          <img
            src={"/howtojoin.png"}
            alt=""
            className="rounded-xl"
            style={{ width: "60%", margin: "auto" }}
          />
        </div>
      </div>

      {/* <Reviews/> */}
      <TestemonialCarousel />

      <style jsx>{`
        * {
          -webkit-appearance: none;
        }
        ::placeholder {
          color: gray;
          font-size: 14px;
          font-weight: lighter;
          // padding-left:10px;
        }
        .ribbon-pop {
          background: linear-gradient(270deg, #f45006 5.25%, #f4a72b 96.68%);
          display: inline-block;
          padding: 10px 40px 10px 40px;
          color: white;
          position: relative;
          margin-left: -44px;
          width: 100%;
        }
        .ribbon-pop:after {
          content: "";
          width: 0;
          height: 0;
          top: 0;
          position: absolute;
          right: 0;
          border-right: 20px solid #c3e0ff;
          border-top: 25px solid transparent;
          border-bottom: 25px solid transparent;
        }
        .ribbon-pop:before {
          height: 0;
          width: 0;
          border-top: 15px solid #e38102;
          border-left: 15px solid transparent;
          bottom: -15px;
          position: absolute;
          content: "";
          left: 0;
        }

        input {
          font-family: "Roboto";
          font-size: 20px;
          font-weight: 500;
          padding-left: 10px;
          line-height: inherit;
          color: gray !important;
        }
        .bannerimage {
          object-fit: cover;
          width: 100%;
        }
        form .box {
          display: inline-flex;
          flex-direction: column;
          position: relative;
          font-family: "Roboto";
          box-shadow: 0 0 3px #ddd;
          overflow: hidden;
          border-radius: 15px;
          background: #fff;
        }
        form .box label {
          position: absolute;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding: 0 0 0 10px;
          width: 100%;
          height: 100%;
          color: rgb(34 34 34 / 79%);
          user-select: none;
          transition: 0.5s;
          font-weight: 200;
        }
        form .box input {
          font-family: "Roboto";
          padding: 10px 10px 10px 10px;
          border: 1px solid #5b5b5b;
          outline: none;
          border-radius: 15px;
          transition: 0.5s;
        }

        // form .box input:focus + label, form .box input:not(:placeholder-shown) + label {
        //     transform: translateY(-30%);
        //     font-size: 0.6rem;
        // }

        // form .box input:not(:placeholder-shown) {
        //     border-bottom: 3px solid #f38120;
        // }
        form button {
          width: 100%;
          align-self: flex-end;
          padding: 10px 5px;
          border-radius: 0.75rem;
          color: #fff;
          border: none;
          transition: 0.3s;
        }
        form button:hover {
          background: #aaa;
        }
        .setmaindiv3 {
          border-radius: 20px;
        }
        .customgryfnt {
          color: #5b5b5b;
          font-weight: 200;
        }
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        /* Firefox */
        input[type="number"] {
          -moz-appearance: textfield;
        }
      `}</style>
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch("https://crm.unificars.com/api/endpoint");
  const text = await res.text(); // response ko text format me read karein

  let data;
  try {
    data = JSON.parse(text); // text ko JSON parse karein
  } catch (err) {
    console.error("Failed to parse JSON:", err);
    console.error("Response Text:", text);
    data = null; // agar JSON parse fail hota hai, to data ko null set karein
  }

  // Pass data to the page via props
  return { props: { data } };
}

export default dealership;
