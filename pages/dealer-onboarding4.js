import React, { useEffect, useState } from 'react';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { RiStarSFill, RiStarSLine } from 'react-icons/ri';
import Link from 'next/link';


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


    const [UserDetails, setUserDetails] = useState({fname:"", lname:"", email:"", mobile:"", state: "", check:false})
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
        const {fname, lname, email, mobile, state, otp} = UserDetails

        if (otp) {
            const dataVerify = await fetch("https://crm.unificars.com/api/verifyotp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ mobile, otp , is_verify: '1' })
            });
            const jsonDataVerify = await dataVerify.json();
            if (jsonDataVerify.code === 200) {
                // Handle verification success
                setUserDetails({fname:"", lname:"", email:"",mobile:"", state:"", otp:"", check:false})
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
            if(fname!="" && lname!="" && state!="" && mobile.match(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/)&& email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)){
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
                    background:#ffffff59;
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
                    border-radius: 15px;
                    background: #ffffff59;
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
                }
                form .box input {
                    // min-width: 200px;
                    font-family: 'Roboto';
                    padding: 15px 0 5px 10px;
                    // border: none;
                    border: 1px solid #5b5b5b;
                    outline: none;
                    // border-bottom: 2px solid #ccc;
                    border-radius: 15px;
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
                    width: auto;
                    align-self: flex-end;
                    padding: 10px 40px;
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

                <div className='relative' style={{ paddingTop: '85px' }}>
                <div><img src='dealer-banner.png' className="h-[40rem] w-[100rem] bannerimage" /></div>
                <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center'>
                    <h1 className='text-white text-5xl text-center font-bold font-sansserif'>Your <span className='font-bold font-sansserif text-[#f38102]'>Dealership</span>  <br/>Our Priority</h1>
                    <p className='text-white text-2xl hidden lg:block text-center uppercase	font-sansserif'>At our dealership you get the best offers on car buying process.  </p>
                    <div className='flex gap-4 justify-center mt-3'>
                    <form onSubmit={HandleFormSubmit} id="enquiry">
                        
                        <div className="box form-grp w-full mt-5">
                            <input type="fname" placeholder="" name="fname" id="fname" onChange={(e) => UserInputChange(e)} value={UserDetails.fname} required />
                            <label for="fname">First Name</label>
                        </div>
                       
                        <div className="box form-grp w-full mt-5">
                            <input type="number" placeholder="" name="mobile" id="mobile" onChange={(e) => UserInputChange(e)} value={UserDetails.mobile} required />
                            <label for="mobile">Your Mobile</label>
                        </div>

                        <div className="box w-full form-grp mt-5 " style={{ display: isFormSubmitted ? 'flex' : 'none' }}>
                            <input type="number" placeholder="" name="otp" id="otp" onChange={(e) => UserInputChange(e)} value={UserDetails.otp} requiredb={isFormSubmitted} />
                            <label for="otp">OTP</label>
                            <span id="otp_error" className=""></span>
                        </div>
                        <div className="form-grp text-center">
                            {!isFormSubmitted && ( 
                                <button type='submit' className="bg-orange-500 rounded-xl shadow2 p-2 border disabled:border-0 border-orange-500 text-white disabled:bg-orange-300 mt-4 uppercase">Become a Partner</button>
                            )}
                            {isFormSubmitted && ( 
                                <button type='submit' className="bg-orange-500 rounded-xl shadow2 p-2 border disabled:border-0 border-orange-500 text-white disabled:bg-orange-300 mt-4" style={{ width: '100%' }}>Verify OTP</button>
                            )}
                        </div>
                        <div className='text-green-500'>{msg}</div>

                    </form>
                    </div>
                </div>

            </div>
           
        </div>
    )
}

export default dealership