import React, { useEffect, useState } from 'react'
import { MdLocationOn } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import Head from 'next/head';

const contact = () => {

    const [UserDetails, setUserDetails] = useState({name:"", email:"",mobile:"" , subject:"", message:"", check:false})
    const [msg , setMsg] = useState("")
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
        const {name, email, mobile, subject, message, check} = UserDetails
        if(name!="" && subject!="" && message!="" && check==true && mobile.match(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/)&& email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)){
            const dataSub = await fetch("https://api.unificars.com/api/enquiry",{
                method: "POST",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(UserDetails)
            })
            const jsonData = await dataSub.json()
            if(jsonData.code ==200){
                setMsg(jsonData.message)
                setUserDetails({name:"", email:"",mobile:"" , subject:"", message:"", check:false})
            }
        }
    }

    const title = "Contact Us - Unificars";
    const description = "Complete contact information, phone numbers, Email address of Unificars.";
    const canonicalUrl = "https://unificars.com/contact";

    return (
        <div className='grid grid-cols-1 md:grid-cols-2' style={{paddingTop:'90px'}}>
            <div className="p-8 md:pl-16">
                <Head>
                    <title>{title}</title>
                    <meta name="description" content={description} />
                    <link rel="canonical" href={canonicalUrl} />
                </Head>
                <div className="">
                    <span className="text-lg uppercase tracking-widest font-bold text-blue-900">contact information</span>
                    <h2 className="text-orange-500 font-bold text-2xl my-2">Our Contact Support</h2>
                    <div className=""><img src={'/title_line.png'} alt="" /></div>
                </div>
                <p className='my-4 text-gray-500 font-bold'>Buy and Sell Used cars from anywhere with ease. Certified used cars with more than 150 check points
                    Instant payment and hassel free process.</p>
                <ul className=" flex flex-col gap-4">
                    <li>
                        <div className="">
                            <h5 className='text-xl font-bold text-black flex gap-2 my-2'><MdLocationOn className='my-1' />Company Office</h5>
                            <p>Building No. 1A, Top Floor, DLF, Moti Nagar, New Delhi-110015.</p>
                        </div>
                    </li>
                    <li>
                        <div className="">
                            <h5 className='text-xl font-bold text-black flex gap-2 my-2'><BsFillTelephoneFill className='my-1' />Hotline Number</h5>
                            <p><a href="tel:9911771977">+91 9911771977</a></p>
                        </div>
                    </li>
                    <li>
                        <div className="">
                            <h5 className='text-xl font-bold text-black flex gap-2 my-2'><AiOutlineMail className='my-1' />Ask your question</h5>
                            <p><a href="mailto:info@unificars.com"><span className="__cf_email__">info@unificars.com</span></a></p>
                        </div>
                    </li>
                </ul>
            </div>


            <div>

                <div className="bg-gray-100 p-8 rounded">
                    <h3 className="font-bold text-2xl my-2 capitalize">Send your <span className='text-orange-500 '>request</span></h3>
                    <div className=""><img src={'/title_line.png'} alt="" /></div>
                    <form onSubmit={HandleFormSubmit} className="my-8 text-lg font-bold flex flex-col gap-4 text-gray-500" id="enquiry">
                        <input type="hidden" name="_token" value="q5uspgkkP3yGAGQbSSHw4nlvqRQOdpo9k1NYgF9l" /> <div className="form-grp" >
                            <label className="flex gap-2 my-2" htmlFor="name"><FaAngleDoubleRight className='my-1 text-orange-500' /> Name <span className='text-orange-500'>*</span></label>
                            <input required  type="text" onChange={(e)=>UserInputChange(e)} value={UserDetails.name} className='p-4 w-full focus:outline-none rounded-xl shadow' name="name" id="name" placeholder="Your Name" />
                            <span id="name_error" className=""></span>
                        </div>
                        <div className="form-grp">
                            <label className="flex gap-2 my-2" htmlFor="email"><FaAngleDoubleRight className='my-1 text-orange-500' /> Email <span className='text-orange-500'>*</span></label>
                            <input  required type="email" onChange={(e)=>UserInputChange(e)} value={UserDetails.email} className='p-4 w-full focus:outline-none rounded-xl shadow' name="email" id="email" placeholder="Your Email" />
                            <span id="email_error" className=""></span>
                        </div>
                        <div className="form-grp">
                            <label className="flex gap-2 my-2" htmlFor="email"><FaAngleDoubleRight className='my-1 text-orange-500' /> Mobile <span className='text-orange-500'>*</span></label>
                            <input  required type="number" onChange={(e)=>UserInputChange(e)} value={UserDetails.phone} className='p-4 w-full focus:outline-none rounded-xl shadow' name="mobile" id="mobile" placeholder="Your Mobile" />
                            <span id="mobile_error" className=""></span>
                        </div>
                        <div className="form-grp">
                            <label className="flex gap-2 my-2" htmlFor="email"><FaAngleDoubleRight className='my-1 text-orange-500' /> Subject <span className='text-orange-500'>*</span></label>
                            <input  required type="text" onChange={(e)=>UserInputChange(e)} value={UserDetails.subject} className='p-4 w-full focus:outline-none rounded-xl shadow' name="subject"  id="subject" placeholder="Subject" />
                            <span id="subject_error" className=""></span>
                        </div>
                        <div className="form-grp">
                            <label className="flex gap-2 my-2" htmlFor="message"><FaAngleDoubleRight className='my-1 text-orange-500' /> Message <span className='text-orange-500'>*</span></label>
                            <textarea onChange={(e)=>UserInputChange(e)} value={UserDetails.message} className='p-4 w-full focus:outline-none rounded-xl shadow' name="message" id="message" placeholder="Your Message"></textarea>
                            <span id="message_error" className=""></span>
                        </div>
                        <div className="">
                            <span className=""></span>
                            <label className="" htmlFor="check2" >
                                <input  required className="" id="check2" name="check" type="checkbox" onChange={(e)=>UserInputChange(e)} checked={UserDetails.check} />&nbsp; <b>"</b> By submitting our webform, you agree to receive promotional calls on the number shared,
                                and such calls and SMS would be coming from a third-party platform.<b>"</b></label>
                            <div className="" id="check_error"></div>
                            <span id="" className=""></span>
                        </div>
                        <div className='text-green-500'>{msg}</div>
                        <button type='submit' className="bg-orange-400 rounded-xl shadow p-2 border disabled:border-0 border-orange-500 text-white disabled:bg-orange-300" disabled={!(UserDetails.check)}>Submit</button>
                    </form>
                </div >
            </div >

        </div >
    )
}

export default contact