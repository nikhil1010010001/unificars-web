import React, { useEffect, useState } from 'react';
import { TiTick } from 'react-icons/ti';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { AiOutlineCar } from 'react-icons/ai';
import { BsFillRocketTakeoffFill } from 'react-icons/bs';
import { GiCarWheel } from 'react-icons/gi';
import Link from 'next/link';
import { BsFillCarFrontFill } from 'react-icons/bs';
import { FaShoppingBag } from 'react-icons/fa';
import Reviews from '@/components/Home/Reviews';
import { FaAngleDoubleRight } from 'react-icons/fa';
import HowItWork from "@/components/CarDetailsComponents/HowItWork"
import { AiOutlineArrowRight } from 'react-icons/ai';
import Carousel from "react-multi-carousel";
import Image from 'next/image';


const dealership = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1280 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 1280, min: 720 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 720, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1.25
        }
    }


    const [UserDetails, setUserDetails] = useState({name:"", email:"",mobile:"" , check:false})
    const [msg , setMsg] = useState("")
    const [isFormSubmitted, setIsFormSubmitted] = useState(false); 
    const UserInputChange=(e)=>{
        const {name,value} =e.target
        // console.log(name,value)
        if(name=="check"){
            setUserDetails({...UserDetails,check:!(UserDetails.check)})
        }else{
            setUserDetails({...UserDetails,[name]:value})
        }
    }

    const HandleFormSubmit= async(e)=>{
        e.preventDefault()
        const {name, email, mobile, otp} = UserDetails

        if (otp) {
            const dataVerify = await fetch("https://crm.unificars.com/api/verifyotp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ mobile, otp })
            });
            const jsonDataVerify = await dataVerify.json();
            if (jsonDataVerify.code === 200) {
                // Handle verification success
                setUserDetails({name:"", email:"",mobile:"", otp:"", check:false})
                setMsg(jsonDataVerify.message);
                // Do other actions upon successful verification
                // setTimeout(() => {
                //     router.push('/dealership'); 
                // }, 3000);
            } else {
                // Handle verification failure
                setMsg(jsonDataVerify.message);
            }
        } else {
            if(name!="" && mobile.match(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/)&& email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)){
                const dataSub = await fetch("https://crm.unificars.com/api/mobileotpsend",{
                    method: "POST",
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(UserDetails)
                })
                const jsonData = await dataSub.json()
                if(jsonData.code == 200){
                    setMsg(jsonData.message)
                    // setUserDetails({name:"", email:"",mobile:"", check:false})
                    setIsFormSubmitted(true);
                }
            }
        }
    }


    return (
        <div className=''>
            <style jsx>{`
            ::placeholder {
                color: gray;
                font-size:14px;
                font-weight:lighter;
                padding-left:10px;
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
                font-family: inherit;
                font-size: 90%;
                font-weight: 500;
                padding-left:10px;
                line-height: inherit;
                color: gray !important;
                }
                .bannerimage{
                    object-fit: cover;
                    width: 100%;
                }

                form {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    gap: 10px;
                  }
                  form .box {
                    display: inline-flex;
                    flex-direction: column;
                    position: relative;
                    font-family: Poppins;
                    box-shadow: 0 0 3px #ddd;
                    overflow: hidden;
                    border-radius: 5px;
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
                    color: #bbb;
                    user-select: none;
                    transition: 0.5s;
                  }
                  form .box input {
                    min-width: 200px;
                    font-family: Poppins;
                    padding: 20px 0 5px 10px;
                    border: none;
                    outline: none;
                    border-bottom: 2px solid #ccc;
                    border-radius: 5px;
                    transition: 0.5s;
                  }
                  form .box input:focus + label, form .box input:not(:placeholder-shown) + label {
                    transform: translateY(-30%);
                    font-size: 0.6rem;
                  }
                  form .box input:not(:placeholder-shown) {
                    border-bottom: 3px solid #00ff0066;
                  }
                  form button {
                    width: 50%;
                    align-self: flex-end;
                    padding: 10px 5px;
                    border-radius: 0.25rem;
                    background: dodgerblue;
                    color: #fff;
                    border: none;
                    transition: 0.3s;
                  }
                  form button:hover {
                    background: #aaa;
                  }
                  
                  * {
                    box-sizing: border-box;
                  }
                  
                  body {
                    display: flex;
                    justify-content: center;
                    background: #eee;
                  }

            `}</style>
            <div className='relative'>
                <div><img src='bannercar2.jfif' className="h-[40rem] w-[100rem] bannerimage"/></div>
                {/* <div className='absolute left-[45%] top-1/3 '>
                    <h2 className='text-white text-xl lg:text-5xl text-center'>Buy, Sell, and Drive On!</h2>
                    <p className='text-white text-2xl my-4 hidden lg:block'>Let the UNIFI WHEELS PRIVATE LIMITED be a part of your journey.</p>
                    <div className='flex gap-4 justify-center mt-3'>
                        <Link href={"/assured-cars"} className='bg-[#f38102] p-1 lg:p-2 text-white cursor-pointer hover:scale-105 lg:px-6 hover:text-[#f38102] hover:bg-white border-[#f38102] border text-center transition-all duration-300 ease-in-out rounded shadow'>Buy Car</Link>
                        <Link href={"/sell-used-cars"} className='bg-[#f38102] p-1 lg:p-2 text-white cursor-pointer hover:scale-105 lg:px-6 hover:text-[#f38102] hover:bg-white border-[#f38102] border text-center transition-all duration-300 ease-in-out rounded shadow'>Sell Car</Link>
                    </div>
                </div> */}
                <div className="setmaindiv3 absolute left-[60%] top-5 right-[5%] bg-white-light p-7 rounded">
                    <div className="ribbon-pop font-bold text-2xl my-2 capitalize">Dealer Onboarding</div>
                    {/* <h3 className="font-bold text-2xl my-2 capitalize">Dealer <span className='text-orange-500 '>Onboarding</span></h3> */}
                    {/* <div className=""><img src={'/title_line.png'} alt="" /></div> */}
                    <form onSubmit={HandleFormSubmit} className="my-5 text-lg font-bold flex flex-col gap-3 text-gray-500" id="enquiry">
                        <input type="hidden" name="_token" value="q5uspgkkP3yGAGQbSSHw4nlvqRQOdpo9k1NYgF9l" /> <div className="form-grp" >
                            <label className="flex gap-2 mt-2" htmlFor="name"><FaAngleDoubleRight className='my-1 text-orange-500' /> Name <span className='text-orange-500'>*</span></label>
                            <input required  type="text" onChange={(e)=>UserInputChange(e)} value={UserDetails.name} className='p-2 w-full focus:outline-none rounded-xl shadow2' name="name" id="name" placeholder="Your Name" />
                            <span id="name_error" className=""></span>
                        </div>
                        <div className="form-grp">
                            <label className="flex gap-2 mt-2" htmlFor="email"><FaAngleDoubleRight className='my-1 text-orange-500' /> Email <span className='text-orange-500'>*</span></label>
                            <input  required type="email" onChange={(e)=>UserInputChange(e)} value={UserDetails.email} className='p-2 w-full focus:outline-none rounded-xl shadow2' name="email" id="email" placeholder="Your Email" />
                            <span id="email_error" className=""></span>
                        </div>
                        <div className="form-grp">
                            <label className="flex gap-2 mt-2" htmlFor="mobile"><FaAngleDoubleRight className='my-1 text-orange-500' /> Mobile <span className='text-orange-500'>*</span></label>
                            <input  required type="number" onChange={(e)=>UserInputChange(e)} value={UserDetails.mobile} className='p-2 w-full focus:outline-none rounded-xl shadow2' name="mobile" id="mobile" placeholder="Your Mobile" disabled={isFormSubmitted}/>
                            <span id="mobile_error" className=""></span>
                        </div>
                        <div className="form-grp" style={{display: isFormSubmitted ? 'block' : 'none' }}>
                            <label className="flex gap-2 mt-2" htmlFor="otp"><FaAngleDoubleRight className='my-1 text-orange-500' /> Otp <span className='text-orange-500'>*</span></label>
                            <input  requiredb={isFormSubmitted} type="number" onChange={(e)=>UserInputChange(e)} value={UserDetails.otp} className='p-2 w-full focus:outline-none rounded-xl shadow2' name="otp" id="otp" placeholder="Your otp"/>
                            <span id="otp_error" className=""></span>
                        </div>
                        
                        {/* <button type='submit' className="bg-orange-400 rounded-xl shadow2 p-2 border disabled:border-0 border-orange-500 text-white disabled:bg-orange-300" disabled="" >Send Otp</button> */}
                        {!isFormSubmitted && ( // Show the 'Send OTP' button if form is not submitted
                            <button type='submit' className="bg-orange-500 rounded-xl shadow2 p-2 border disabled:border-0 border-orange-500 text-white disabled:bg-orange-300">Send OTP</button>
                            )}
                        {isFormSubmitted && ( // Show the 'Verify OTP' button if form is submitted
                            <button type='submit' className="bg-orange-500 rounded-xl shadow2 p-2 border disabled:border-0 border-orange-500 text-white disabled:bg-orange-300">Verify OTP</button>
                        )}
                        <span className="prvtag ">We respect your privacy. Your information is confidential with us.</span>
                        <div className='text-green-500'>{msg}</div>

                    </form>
                </div >
            </div>
            <div>
                <div className="py-10 text-center bg-gradient-radial  from-white text-gray-600" >
                    <div className='w-11/12 mx-auto'>
                        {/* <div className="text-center my-8 font-normal text-xl">
                            <h2 className="text-4xl text-orange-500">How It Works !</h2>
                            <span className="uppercase tracking-widest">Make your car buying journey easy and convenient with us.</span>
                        </div> */}
                        <div className='text-center items-center flex flex-col mb-6'>
                            <p className='tracking-widest text-gray-600 text-lg'>Make your car buying journey easy and convenient with us.</p>
                            <h2 className='text-4xl text-[#f38102] my-2'>How It Works !</h2>
                            <img src='/home/title_line.png' alt='home'/>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            <div className="text-center flex flex-wrap justify-center cardhow">
                                <img src="icons/join.png" className="img-fluid transition duration-300 transform hover:scale-110 p-[16px]" alt="howitworks" width="200px" />
                                <div className="px-4 pb-3">
                                    <h4 className="text-xl text-orange-500 font-bold tracking-widest uppercase mt-4 flex-none">Join our family</h4>
                                    <p className="mx-5 hiwpara">You can easily become the part of our family by downloading our auction app to take part in the auctions.</p>
                                </div>
                            </div>
                            <div className="text-center flex flex-wrap justify-center cardhow">
                                <img src="icons/onboarding.png" className="img-fluid transition duration-300 transform hover:scale-110 p-[16px]" alt="howitworks" width="200px" />
                                <div className="px-4 pb-3">
                                    <h4 className="text-xl text-orange-500 font-bold tracking-widest uppercase flex-none">On boarding form</h4>
                                    <p className="mx-5 hiwpara">Our advance methods quickly analyse your car price and get the estimate value of your car. </p>
                                </div>
                            </div>
                            <div className="text-center flex flex-wrap justify-center cardhow">
                                <img src="icons/biding.png" className="img-fluid transition duration-300 transform hover:scale-110 p-[16px]" alt="howitworks" width="200px" />
                                <div className="px-4 pb-3">
                                    <h4 className="text-xl text-orange-500 font-bold tracking-widest uppercase flex-none">Bid placing time</h4>
                                    <p className="mx-5 hiwpara">You can easily start the bidding from our wide range of cars. </p>
                                </div>
                            </div>
                            <div className="text-center flex flex-wrap justify-center cardhow">
                                <img src="icons/dealclose.png" className="img-fluid transition duration-300 transform hover:scale-110 p-[16px]" alt="howitworks" width="200px" />
                                <div className="px-4 pb-3">
                                    <h4 className="text-xl text-orange-500 font-bold tracking-widest uppercase flex-none">Deal closing time</h4>
                                    <p className="mx-5 hiwpara">Close the deal after winning the bid.</p>
                                </div>
                            </div>
                            <div className="text-center flex flex-wrap justify-center cardhow">
                                <img src="icons/payment.png" className="img-fluid transition duration-300 transform hover:scale-110 p-[16px]" alt="howitworks" width="200px" />
                                <div className="px-4 pb-3">
                                    <h4 className="text-xl text-orange-500 font-bold tracking-widest uppercase flex-none">Payment time</h4>
                                    <p className="mx-5 hiwpara">After winning the bidding we will offers the various payment methods just like online and offline methods.</p>
                                </div>
                            </div>
                            <div className="text-center flex flex-wrap justify-center cardhow">
                                <img src="https://api.unificars.com/front/img/icon/hiw1copy.png" className="img-fluid transition duration-300 transform hover:scale-110 p-[16px]" alt="howitworks" width="200px" />
                                <div className="px-4 pb-3">
                                    <h4 className="text-xl text-orange-500 font-bold tracking-widest uppercase flex-none">Delivery time</h4>
                                    <p className="mx-5 hiwpara">After completion of payment, we will provide you the doorstep delivery with all completed documents.</p>
                                </div>
                            </div>
                        </div>
                        {/* <button className="bg-blue-200 p-2 px-3 hover:animate-none animate-[bounce_1s_ease-in-out_infinite] font-medium text-lg text-blue-900 rounded-full mt-5">
                            <span className='flex'><Link href={"/buy-used-cars"}> Buy a Car</Link><AiOutlineArrowRight className='flex-none ml-2 my-1'/></span>
                        </button> */}
                    </div>
                </div>
            </div>

            
            <div className='flex items-center mx-auto'>
                <div className='hidden lg:block w-[100%]'>
                    <img src="howitjoin.png" className=' w-[100%]' />
                </div>
                <div className='lg:-ml-16 ml-0 bg-white p-6 rounded shadow'>
                    {/* <h3 className='text-[#f38102]'>Why Choose Us</h3>
                    <h2 className='text-2xl text-blue-900'>We are Qualified & Professional Giving Best Services</h2>
                    <p className='font-normal text-blue-900 my-2'>Selling a car through Unifi Cars is a hassle-free and flawless experience. Excellent customer service from inquiry till the final settlement of the amount, everything is super easygoing.</p> */}

                    {/* <div className='flex gap-4 flex-col md:flex-row '>
                        <div className='w-full'>
                            <h2 className='text-xl text-[#f38102] my-2 flex items-center gap-2'><FaShoppingBag /> Join our family</h2>
                            <hr />
                            <p className='my-2 font-medium text-blue-900'>You can easily download our auction app to take part in the auction.</p>
                        </div>
                        <div className='w-full'>
                            <h2 className='text-xl text-[#f38102] my-2 flex items-center gap-2'><BsFillCarFrontFill /> Place the Bid</h2>
                            <hr />
                            <p className='my-2 font-medium text-blue-900'>You can choose the car from our wide range of premium cars.</p>
                        </div>
                    </div>
                    <div className='flex gap-4 flex-col md:flex-row '>
                        <div className='w-full'>
                            <h2 className='text-xl text-[#f38102] my-2 flex items-center gap-2'><BsFillCarFrontFill />Closing of Deal</h2>
                            <hr />
                            <p className='my-2 font-medium text-blue-900'>We will negotiate with sellers to gives you the car at best price.</p>
                        </div>
                        <div className='w-full'>
                            <h2 className='text-xl text-[#f38102] my-2 flex items-center gap-2'><BsFillCarFrontFill />Payment Time</h2>
                            <hr />
                            <p className='my-2 font-medium text-blue-900'>After completing the payment via online method or offline method to take the doorstep delivery of the wish listed car with all complete documents.</p>
                        </div>

                    </div> */}

                </div>
            </div>

            <div className='bg-[url("/background/abtbg.jpg")]'>
                <div>
                    <div className=" container mx-auto  pt-20 items-center">
                        
                        <div className="p-4">
                            <div className="">
                                {/* <div className="text-4xl font-bold text-orange-500">
                                    <h2 className='py-2'>Why choose us <span className='text-blue-900'>US </span></h2>
                                    <img src='/home/title_line.png' alt="line" />
                                </div> */}
                                <div className='text-center items-center flex flex-col mb-6'>
                                    <p className='tracking-widest text-gray-600 text-lg'>Trust and transparency are the key of every relationship. Start your car buying journey with us without any hassle.</p>
                                    <h2 className='text-4xl text-[#f38102] my-2'>Why choose us</h2>
                                    <img src='/home/title_line.png' alt='home'/>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                                    <div className="text-center flex flex-wrap justify-center align-item-center">
                                        <img src="carousel/carousel2.webp" className="img-fluid transition duration-300 transform hover:scale-110 whychooseus relative" alt="howitworks" width="250px" />
                                        <div className="after"></div>
                                        <div className="px-4 absolute">
                                            <h4 className="text-xl text-white font-bold tracking-widest uppercase mt-4 flex-none">Verified cars</h4>
                                            {/* <p className="mx-5 hiwpara">You can easily become the part of our family by downloading our auction app to take part in the auctions.</p> */}
                                        </div>
                                    </div>
                                    <div className="text-center flex flex-wrap justify-center align-item-center">
                                    <img src="carousel/carousel2.webp" className="img-fluid transition duration-300 transform hover:scale-110 whychooseus relative" alt="howitworks" width="250px" />
                                        <div className="px-4 absolute">
                                            <h4 className="text-xl text-white font-bold tracking-widest uppercase flex-none">Transparent bidding process</h4>
                                            {/* <p className="mx-5 hiwpara"> </p> */}
                                        </div>
                                    </div>
                                    <div className="text-center flex flex-wrap justify-center align-item-center">
                                        <img src="carousel/carousel2.webp" className="img-fluid transition duration-300 transform hover:scale-110 whychooseus relative" alt="howitworks" width="250px" />
                                        <div className="px-4 absolute">
                                            <h4 className="text-xl text-white font-bold tracking-widest uppercase flex-none">Get car at your doorstep</h4>
                                            {/* <p className="mx-5 hiwpara">After winning the bidding we will offers the various payment methods just like online and offline methods.</p> */}
                                        </div>
                                    </div>
                                    <div className="text-center flex flex-wrap justify-center align-item-center">
                                        <img src="carousel/carousel2.webp" className="img-fluid transition duration-300 transform hover:scale-110 whychooseus relative" alt="howitworks" width="250px" />
                                        <div className="px-4 absolute">
                                            <h4 className="text-xl text-white font-bold tracking-widest uppercase flex-none">Secured payment methods</h4>
                                            {/* <p className="mx-5 hiwpara">Secured payment methods</p> */}
                                        </div>
                                    </div>
                                    <div className="text-center flex flex-wrap justify-center align-item-center">
                                        <img src="carousel/carousel2.webp" className="img-fluid transition duration-300 transform hover:scale-110 whychooseus relative" alt="howitworks" width="250px" />
                                        <div className="px-4 absolute">
                                            <h4 className="text-xl text-white font-bold tracking-widest uppercase flex-none">Doorstep delivery</h4>
                                            {/* <p className="mx-5 hiwpara">Close the deal after winning the bid.</p> */}
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

            


            <Reviews/>
        </div>
        )
}

export default dealership