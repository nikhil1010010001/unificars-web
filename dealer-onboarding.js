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
import "react-multi-carousel/lib/styles.css";
import { RiStarSFill ,RiStarSLine} from 'react-icons/ri';


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


    const [UserDetails, setUserDetails] = useState({name:"", email:"",mobile:"" , state: "", check:false})
    const [msg , setMsg] = useState("")
    const [isFormSubmitted, setIsFormSubmitted] = useState(false); 
    const UserInputChange=(e)=>{
        const {name,value} =e.target
        // console.log(name,value)
        if(name=="check"){
            setUserDetails({...UserDetails,check:!(UserDetails.check)})
        }
        else{

            setUserDetails({...UserDetails,[name]:value})
        }
    }

    const HandleFormSubmit= async(e)=>{
        e.preventDefault()
        const {name, email, mobile, state, otp} = UserDetails

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
                setUserDetails({name:"", email:"",mobile:"", state:"", otp:"", check:false})
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
                    font-family: 'Roboto';
                    font-size: 20px;
                    font-weight: 500;
                    padding-left:10px;
                    line-height: inherit;
                    color: gray !important;
                }
                .bannerimage{
                    object-fit: cover;
                    width: 100%;
                }


                form .box {
                    display: inline-flex;
                    flex-direction: column;
                    position: relative;
                    font-family: 'Roboto';
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
                    // min-width: 200px;
                    font-family: 'Roboto';
                    padding: 12px 0 5px 10px;
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
                    border-bottom: 3px solid #f38120;
                }
                form button {
                    width: 100%;
                    align-self: flex-end;
                    padding: 10px 5px;
                    border-radius: 0.25rem;
                    // background: dodgerblue;
                    color: #fff;
                    border: none;
                    transition: 0.3s;
                }
                form button:hover {
                    background: #aaa;
                }
                .setmaindiv3{
                    border-radius: 20px;
                }
                  
            `}</style>
            <div className='relative' style={{paddingTop:'90px'}}>
                <div><img src='Banner-Image.png' className="h-[40rem] w-[100rem] bannerimage"/></div>
                
                <div className="setmaindiv3 absolute left-[60%] top-5 right-[5%] bg-white p-7 rounded" style={{marginTop:'90px'}}>
                    <h3 className="font-bold text-2xl my-2 capitalize text-center">ENTER YOUR DETAILS TO<br />JOIN OUR NETWORK</h3>
                    
                    <form onSubmit={HandleFormSubmit} id="enquiry">
                        
                        <div className="box form-grp w-full mt-5">
                            <input type="name" placeholder="" name="name" id="name" onChange={(e)=>UserInputChange(e)} value={UserDetails.name} required/>
                            <label for="name">Your Name</label>
                        </div>

                        <div className="box form-grp w-full mt-5">
                            <input type="email" placeholder="" name="email" id="email" onChange={(e)=>UserInputChange(e)} value={UserDetails.email} required/>
                            <label for="email">Your Email</label>
                        </div>

                        <div className="box form-grp w-full mt-5">
                            <input type="number" placeholder="" name="mobile" id="mobile" onChange={(e)=>UserInputChange(e)} value={UserDetails.mobile} required/>
                            <label for="mobile">Your Mobile</label>
                        </div>

                        <div className="box form-grp w-full mt-5">
                            <input type="state" placeholder="" name="state" id="state" onChange={(e)=>UserInputChange(e)} value={UserDetails.state} required/>
                            <label for="state">Your State</label>
                        </div>
                        <div className="box w-full form-grp mt-5" style={{display: isFormSubmitted ? 'flex' : 'none' }}>
                            <input type="number" placeholder=""  name="otp" id="otp" onChange={(e)=>UserInputChange(e)} value={UserDetails.otp} requiredb={isFormSubmitted}/>
                            <label for="otp">OTP</label>

                            {/* <label className="flex gap-2 mt-2" htmlFor="otp"><FaAngleDoubleRight className='my-1 text-orange-500' /> Otp <span className='text-orange-500'>*</span></label>
                            <input  requiredb={isFormSubmitted} type="number" onChange={(e)=>UserInputChange(e)} value={UserDetails.otp} className='p-2 w-full focus:outline-none rounded-xl shadow2' name="otp" id="otp" placeholder="Your otp"/> */}
                            <span id="otp_error" className=""></span>
                        </div>
                        <div className="form-grp">
                            {!isFormSubmitted && ( // Show the 'Send OTP' button if form is not submitted
                                <button type='submit' className="bg-orange-500 rounded-xl shadow2 p-2 border disabled:border-0 border-orange-500 text-white disabled:bg-orange-300 mt-4">Send OTP</button>
                                )}
                            {isFormSubmitted && ( // Show the 'Verify OTP' button if form is submitted
                                <button type='submit' className="bg-orange-500 rounded-xl shadow2 p-2 border disabled:border-0 border-orange-500 text-white disabled:bg-orange-300 mt-4" style={{width:'100%'}}>Verify OTP</button>
                            )}
                        </div>
                        <span className="prvtag">We respect your privacy. Your information is confidential with us.</span>
                        <div className='text-green-500'>{msg}</div>

                        {/* <button>Başvur</button> */}
                    </form>
                </div >
            </div>
            <div className=''>
                <div>
                    <div className=" container mx-auto items-center">
                        
                        <div className="p-4">
                            <div className="">
                                
                                <div className='text-center items-center flex flex-col mb-6'>
                                    <h2 className='text-4xl my-2'>Why choose us</h2>
                                    <p className='tracking-widest text-gray-500 text-lg'>Trust and transparency are the key of every relationship. Start your car<br />buying journey with us without any hassle.</p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                                    <div className="text-center flex flex-wrap justify-center align-item-center">
                                        <img src="carousel/WCU1.jpg" className="img-fluid transition duration-300 transform hover:scale-110 whychooseus relative" alt="howitworks" width="250px" />
                                        <div className="after"></div>
                                        <div className="px-4 absolute">
                                            
                                        </div>
                                    </div>
                                    <div className="text-center flex flex-wrap justify-center align-item-center">
                                    <img src="carousel/WCU2.jpg" className="img-fluid transition duration-300 transform hover:scale-110 whychooseus relative" alt="howitworks" width="250px" />
                                        <div className="px-4 absolute">
                                            
                                        </div>
                                    </div>
                                    <div className="text-center flex flex-wrap justify-center align-item-center">
                                        <img src="carousel/WCU3.png" className="img-fluid transition duration-300 transform hover:scale-110 whychooseus relative" alt="howitworks" width="250px" />
                                        <div className="px-4 absolute">
                                            
                                        </div>
                                    </div>
                                    <div className="text-center flex flex-wrap justify-center align-item-center">
                                        <img src="carousel/WCU4.png" className="img-fluid transition duration-300 transform hover:scale-110 whychooseus relative" alt="howitworks" width="250px" />
                                        <div className="px-4 absolute">
                                            
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div>
                <div className="py-10 text-center bg-gradient-radial from-white text-gray-600" >
                    <div className='w-11/12 mx-auto'>
                        
                        <div className='text-center items-center flex flex-col mb-6'>
                            <h2 className='text-4xl text-[#000] my-2'>How It Works !</h2>
                            <p className='tracking-widest text-gray-500 text-lg'>Make your car buying journey easy and convenient with us.</p>
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
                        
                    </div>
                </div>
            </div>

            
            <div className='flex items-center mx-auto'>
                <div className='hidden lg:block w-[100%]'>
                    <img src="howitjoin.png" className=' w-[100%]' />
                </div>
            </div>

            {/* <Reviews/> */}
            <div className='bg-gray-50 py-12'>
                <div className='text-center items-center flex flex-col mb-6'>
                        <h2 className='text-4xl text-[#000] my-2'>What Our Clients Are Saying</h2>
                        <p className='tracking-widest text-gray-500 text-lg'>THEIR GOOD REVIEWS MOTIVATE US TO DO MORE</p>
                        {/* <img src='/home/title_line.png' /> */}
                    </div>
                    <div className=' w-11/12 mx-auto'>
                        <Carousel responsive={responsive}>
                                <div className='flex flex-col items-center bg-white shadow rounded p-6 mx-4 '>
                                        <div>
                                            <img src='/home/reviews/man.png' className='w-24'/>
                                        </div>
                                        <div className='flex text-orange-500'>
                                            <RiStarSFill/>
                                            <RiStarSFill/>
                                            <RiStarSFill/>
                                            <RiStarSFill/>
                                            <RiStarSFill/>
                                        </div>
                                        <p className='font-medium my-4'> Excellent customer service from inquiry till the final settlement of the amount, everything is super easygoing.</p>
                                        <h5 className='my-4 text-lg text-blue-950'>Abhishek, Agra</h5>
                                </div>
                                
                                <div className='flex flex-col items-center bg-white shadow rounded p-6 mx-4 '>
                                        <div>
                                            <img src='/home/reviews/worker.png' className='w-24'/>
                                        </div>
                                        <div className='flex text-orange-500'>
                                            <RiStarSFill/>
                                            <RiStarSFill/>
                                            <RiStarSFill/>
                                            <RiStarSFill/>
                                            <RiStarSLine/>
                                        </div>
                                        <p className='font-medium my-4'> While selling the cars via Unifi cars you don't need to be restless as the whole process is very transparent and prompt.</p>
                                        <h5 className='my-4 text-lg text-blue-950'>Geeta, Gujarat</h5>
                                </div>
                                
                                <div className='flex flex-col items-center bg-white shadow rounded p-6 mx-4 '>
                                        <div>
                                            <img src='/home/reviews/man.png' className='w-24'/>
                                        </div>
                                        <div className='flex text-orange-500'>
                                            <RiStarSFill/>
                                            <RiStarSFill/>
                                            <RiStarSFill/>
                                            <RiStarSFill/>
                                            <RiStarSFill/>
                                        </div>
                                        <p className='font-medium my-4'> The entire process was completely online, and after a few hours, we received the Car at home as well.</p>
                                        <h5 className='my-4  text-lg text-blue-950'>Snigdha, Delhi</h5>
                                </div>

                                <div className='flex flex-col items-center bg-white shadow rounded p-6 mx-4 '>
                                        <div>
                                            <img src='/home/reviews/worker.png' className='w-24'/>
                                        </div>
                                        <div className='flex text-orange-500'>
                                            <RiStarSFill/>
                                            <RiStarSFill/>
                                            <RiStarSFill/>
                                            <RiStarSFill/>
                                            <RiStarSFill/>
                                        </div>
                                        <p className='font-medium my-4'>Delighted with the behavior of staff members of Unifi Cars, very efficient, customer friendly, soft-spoken, and patient staff.</p>
                                        <h5 className='my-4 text-lg text-blue-950'>Partha, Gurgaon</h5>
                                </div>

                                <div className='flex flex-col items-center bg-white shadow rounded p-6 mx-4 '>
                                        <div>
                                            <img src='/home/reviews/man.png' className='w-24'/>
                                        </div>
                                        <div className='flex text-orange-500'>
                                            <RiStarSFill/>
                                            <RiStarSFill/>
                                            <RiStarSFill/>
                                            <RiStarSFill/>
                                            <RiStarSFill/>
                                        </div>
                                        <p className='font-medium my-4'>I had an awesome and seamless experience in selling my Maruti Suzuki ciaz with Unifi Cars they offer the best deals</p>
                                        <h5 className='my-4 text-lg text-blue-950'>Snigdha, Delhi</h5>
                                </div>

                                <div className='flex flex-col items-center bg-white shadow rounded p-6 mx-4 '>
                                        <div>
                                            <img src='/home/reviews/worker.png' className='w-24'/>
                                        </div>
                                        <div className='flex text-orange-500'>
                                            <RiStarSFill/>
                                            <RiStarSFill/>
                                            <RiStarSFill/>
                                            <RiStarSFill/>
                                            <RiStarSFill/>
                                        </div>
                                        <p className='font-medium my-4'>All over the interaction was extremely great and I highly recommend Unifi Cars for selling the cars.</p>
                                        <h5 className='my-4  text-lg text-blue-950'>Geeta, Gujarat</h5>
                                </div>
                        </Carousel>
                    </div>
            </div>
        </div>
        )
}

export default dealership