import React, { useEffect, useState } from "react";

const contact = () => {
  const [UserDetails, setUserDetails] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
    check: false,
  });
  const [msg, setMsg] = useState("");
  const UserInputChange = (e) => {
    const { name, value } = e.target;
    // console.log(name,value)
    if (name == "check") {
      setUserDetails({ ...UserDetails, check: !UserDetails.check });
    } else {
      setUserDetails({ ...UserDetails, [name]: value });
    }
  };

  const HandleFormSubmit = async (e) => {
    e.preventDefault();
    const { name, email, mobile, subject, message, check } = UserDetails;
    if (
      name != "" &&
      subject != "" &&
      message != "" &&
      check == true &&
      mobile.match(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/) &&
      email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)
    ) {
      const dataSub = await fetch("https://api.unificars.com/api/enquiry", {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(UserDetails),
      });
      const jsonData = await dataSub.json();
      if (jsonData.code == 200) {
        setMsg(jsonData.message);
        setUserDetails({
          name: "",
          email: "",
          mobile: "",
          subject: "",
          message: "",
          check: false,
        });
      }
    }
  };

  const title = "Contact Us - Unificars";
  const description =
    "Complete contact information, phone numbers, Email address of Unificars.";
  const canonicalUrl = "https://unificars.com/contact";

  return (
    <div className="">
      <div className="relative" style={{ paddingTop: "85px" }}>
        <div>
          <img src="/contactus.png" className="w-[100%]" />
        </div>
        {/* <div className='absolute left-[45%] top-1/3 '>
                    <h2 className='text-white text-xl lg:text-5xl text-center'>Buy, Sell, and Drive On!</h2>
                    <p className='text-white text-2xl my-4 hidden lg:block'>Let the UNIFI WHEELS PRIVATE LIMITED be a part of your journey.</p>
                    <div className='flex gap-4 justify-center mt-3'>
                        <Link href={"/assured-cars"} className='bg-[#f38102] p-1 lg:p-2 text-white cursor-pointer hover:scale-105 lg:px-6 hover:text-[#f38102] hover:bg-white border-[#f38102] border text-center transition-all duration-300 ease-in-out rounded shadow'>Buy Car</Link>
                        <Link href={"/sell-used-cars"} className='bg-[#f38102] p-1 lg:p-2 text-white cursor-pointer hover:scale-105 lg:px-6 hover:text-[#f38102] hover:bg-white border-[#f38102] border text-center transition-all duration-300 ease-in-out rounded shadow'>Sell Car</Link>
                    </div>
                </div> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <div className="p-8 md:pl-16 justify-self-center">
          {/* <Head>
                        <title>{title}</title>
                        <meta name="description" content={description} />
                        <link rel="canonical" href={canonicalUrl} />
                    </Head> */}

          <div className="mb-6">
            <h1 className="text-3xl font-bold">CONTACT US</h1>
            <nav className="text-black text-sm">
              <a href="#" className="hover:underline text-black">
                Home
              </a>{" "}
              / <span>Contact</span>
            </nav>
          </div>
        </div>

        <div className="p-8 rounded">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-4">HOW CAN WE HELP?</h2>
            <p className="text-gray-600">
              Buy and Sell Used cars from unificars with ease. Certified used
              cars with more than 210 Check points instant payment and hassel
              free process
            </p>
            <form
              className="space-y-4"
              onSubmit={HandleFormSubmit}
              id="enquiry">
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={(e) => UserInputChange(e)}
                    value={UserDetails.name}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  <span id="name_error" className=""></span>
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    onChange={(e) => UserInputChange(e)}
                    value={UserDetails.email}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  <span id="email_error" className=""></span>
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label
                    htmlFor="mobile"
                    className="block text-sm font-medium text-gray-700">
                    Mobile
                  </label>
                  <input
                    type="number"
                    id="mobile"
                    name="mobile"
                    onChange={(e) => UserInputChange(e)}
                    value={UserDetails.phone}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  <span id="mobile_error" className=""></span>
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700">
                    subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    onChange={(e) => UserInputChange(e)}
                    value={UserDetails.subject}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  <span id="subject_error" className=""></span>
                </div>
              </div>
              {/* <div>
                                <label htmlFor="topic" className="block text-sm font-medium text-gray-700">
                                    Which topic best matches your question?
                                </label>
                                <input type="text" id="topic" className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                            </div> */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  onChange={(e) => UserInputChange(e)}
                  value={UserDetails.message}
                  rows="4"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
                <span id="message_error" className=""></span>
              </div>
              {/* <div>
                            <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                SEND MESSAGE
                            </button>
                            </div> */}
              <div className="">
                <span className=""></span>
                <label className="" htmlFor="check2">
                  <input
                    required
                    className=""
                    id="check2"
                    name="check"
                    type="checkbox"
                    onChange={(e) => UserInputChange(e)}
                    checked={UserDetails.check}
                  />
                  &nbsp; <b>"</b> By submitting our Form, you agree to receive
                  calls on the number shared, and such calls and SMS would be
                  coming from unificars.<b>"</b>
                </label>
                <div className="" id="check_error"></div>
                <span id="" className=""></span>
              </div>
              <div className="text-green-500">{msg}</div>
              <button
                type="submit"
                className="bg-blue-500 rounded-md shadow p-2 px-4 border disabled:border-0 bg-blue-500 text-white disabled:bg-blue-300"
                disabled={!UserDetails.check}>
                Submit
              </button>
            </form>
          </div>

          {/* <div className="bg-gray-100 p-8 rounded">
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
                    </div > */}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <div
          className="p-8 md:pl-16 justify-self-center"
          style={{ width: "60%" }}>
          {/* <Head>
                        <title>{title}</title>
                        <meta name="description" content={description} />
                        <link rel="canonical" href={canonicalUrl} />
                    </Head> */}

          <div className="mb-6">
            <h1 className="text-3xl font-bold">CONTACT</h1>
            <nav className="text-black text-sm"></nav>
          </div>
        </div>

        <div className="p-8 rounded">
          <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
            <div className="flex bg-blue-100 p-8 rounded justify-between">
              <h3 className="font-bold">Mail :</h3>
              <p>
                <a href="mailto:info@unificars.com" className="text-blue-600">
                  info@unificars.com
                </a>
              </p>
            </div>
            <div className="flex bg-white p-8 rounded justify-between">
              <h3 className="font-bold">Location:</h3>
              <p>
                Building No. 1A, Top Floor, DLF, Moti Nagar, New Delhi-110015.
              </p>
            </div>
            <div className="flex bg-blue-100 p-8 rounded justify-between">
              <h3 className="font-bold">Phone:</h3>
              <p>
                <a href="tel:+919911771977" className="text-blue-600">
                  +91 9911771977
                </a>
              </p>
            </div>
            <div className="flex bg-white p-8 rounded justify-between">
              <h3 className="font-bold">Open Hour:</h3>
              <p>Sun - Mon: Open 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
