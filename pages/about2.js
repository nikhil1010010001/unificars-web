import React from 'react'
import { TiTick } from 'react-icons/ti';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { AiOutlineCar } from 'react-icons/ai';
import { BsFillRocketTakeoffFill } from 'react-icons/bs';
import { GiCarWheel } from 'react-icons/gi';
import Link from 'next/link';
import { BsFillCarFrontFill } from 'react-icons/bs';
import { FaShoppingBag } from 'react-icons/fa';
import Reviews from '@/components/Home/Reviews';
import Head from 'next/head';


const about = () => {
    const title = "About Us | Experience Delightful Car Ownership | Unificars";
    const description = "Unificars is your top destination for buy and sell used cars, offering competitive pricing and valuable car-related information.";
    const canonicalUrl = "https://unificars.com/about";
    return (
        <div className=''>
            <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonicalUrl} />
            {/* Add other meta tags if needed */}
            </Head>
            <div className='relative' style={{paddingTop:'90px'}}>
                <div><img src='/abouthero.jpg' /></div>
                <div className='absolute left-[45%] top-1/3 '>
                    <h2 className='text-white text-xl lg:text-5xl text-center'>Buy, Sell, and Drive On!</h2>
                    <p className='text-white text-2xl my-4 hidden lg:block'>Let the UNIFI WHEELS PRIVATE LIMITED be a part of your journey.</p>
                    <div className='flex gap-4 justify-center mt-3'>
                        <Link href={"/assured-cars"} className='bg-[#f38102] p-1 lg:p-2 text-white cursor-pointer hover:scale-105 lg:px-6 hover:text-[#f38102] hover:bg-white border-[#f38102] border text-center transition-all duration-300 ease-in-out rounded shadow'>Buy Car</Link>
                        <Link href={"/sell-used-cars"} className='bg-[#f38102] p-1 lg:p-2 text-white cursor-pointer hover:scale-105 lg:px-6 hover:text-[#f38102] hover:bg-white border-[#f38102] border text-center transition-all duration-300 ease-in-out rounded shadow'>Sell Car</Link>
                    </div>
                </div>
            </div>

            <div className='bg-[url("/background/abtbg.jpg")]'>
                <div className='w-10/12 mx-auto pt-20'>
                    <div>
                        <h5 className='text-[#f38102] tracking-widest'>ABOUT US</h5>
                        <h5 className='text-blue-900 text-4xl my-2'>UNIFI WHEELS PRIVATE LIMITED</h5>
                    </div>
                    <div>
                        <p className='my-6 text-xl font-bold'>Welcome to our platform for buying and selling used cars! We strive to provide a seamless and convenient experience for individuals looking to purchase or sell pre-owned cars.</p>
                    </div>

                    <div className='flex items-center justify-start'>
                        <div className='bg-blue-300/40 border border-blue-300 p-4 rounded'>
                            <p className=''>Let's Dig into some amazing facts about us</p>
                        </div>
                    </div>

                    <div>
                        <ul className='my-12 flex flex-col gap-6 '>
                            <li className='flex font-normal'><div className='flex-none pt-1 mr-2'><TiTick className='bg-[#373d46] text-xl rounded-full text-[#f38102]' /></div>Looking for a second hand car or want to sell one? Unificars is the destination.</li>

                            <li className='flex font-normal'><div className='flex-none pt-1 mr-2'><TiTick className='bg-[#373d46] text-xl rounded-full text-[#f38102]' /></div>Or, you want to sell your car to someone who understands the value of it, pays the right price and the transaction is hassle free.</li>

                            <li className='flex font-normal'><div className='flex-none pt-1 mr-2'><TiTick className='bg-[#373d46] text-xl rounded-full text-[#f38102]' /></div>Sounds familiar? You are at the right place. We understand the subtlety of your pain points and we are here to rectify those to make your experience wonderful.
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto items-center">
                        <div className="">
                            <img src={"/ourPurpose.jpg"} className='rounded-xl' alt="" />
                        </div>
                        <div className="p-4">
                            <div className="">
                                <div className="text-4xl font-bold text-orange-500">
                                    <h2 className='py-2'>Our <span className='text-blue-900'>Purpose </span></h2>
                                    <img src='/home/title_line.png' alt="line" />
                                </div>
                                <p className='italic leading-relaxed text-justify font-normal text-gray-600 my-2'>To link buyers and sellers in the used car market, Unifi cars was established to meet the needs of our customers. Our goal is to make the process of purchasing or selling an automobile simpler while guaranteeing a transparent and reliable environment for all parties involved. We recognize that this may be a complicated process. At Unifi cars, we are working to eliminate the obstacles that prevent online pre-owned car sales and purchases. There are currently many platforms available to buy or sell cars, but our USP makes up for what others lack in customer service we believe it is time to transform the way used cars are sold and purchased in India
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='grid grid-cols-1 lg:grid-cols-2 container mx-auto gap-4 mt-16 lg:mt-24 '>

                    <div className=" mx-4 font-bold text-orange-500">
                        <h2 className='py-2 text-4xl' >Our <span className='text-blue-900' >Mission </span></h2>
                        <img src='/home/title_line.png' alt="line" />
                        <p className='font-normal italic text-gray-600 my-2 text-justify'>At Unificars we are trying to rectify the pain points, still holding a pre owned car seller or buyer from selling or buying it online. There are already multiple platforms to buy or sell a car but what they lack in service, is our USP.
                        </p><h6 className='font-normal text-black my-2 text-justify'>We think it's time to revolutionize the process of selling and buying pre owned cars in India.</h6>
                    </div>
                    <div className="line"><img src={"/ourMission.png"} alt="" className='rounded-xl' /></div>
                </div>




                <div className='flex items-center container mx-auto my-6 pb-4'>
                    <div className='hidden lg:block w-[200rem]'>
                        <img src="/home/unifiwhychoose3.png" className='h-[30rem] w-[100rem]' />
                    </div>
                    <div className='lg:-ml-16 ml-0 bg-white p-6 rounded shadow'>
                        <h3 className='text-[#f38102]'>Why Choose Us</h3>
                        <h2 className='text-2xl text-blue-900'>We are Qualified & Professional Giving Best Services</h2>
                        <p className='font-normal text-blue-900 my-2'>Selling a car through Unifi Cars is a hassle-free and flawless experience. Excellent customer service from inquiry till the final settlement of the amount, everything is super easygoing.</p>

                        <div className='flex gap-4 flex-col md:flex-row '>
                            <div className='w-full'>
                                <h2 className='text-xl text-[#f38102] my-2 flex items-center gap-2'><FaShoppingBag /> Customers</h2>
                                <hr />
                                <p className='my-2 font-medium text-blue-900'>Our platform provides a large variety of used cars for sale to our consumers in a range of manufacturers, models, and pricing points. To assist you in making wise choices, we offer thorough descriptions, specifications, and high-quality photos of each car. With the help of our search filters, you may limit your options based on particular criteria like brand, year, mileage, and more. We can help you find the affordable sedan, dependable SUV, or sporty convertible you're searching for..</p>
                            </div>
                            <div className='w-full'>
                                <h2 className='text-xl text-[#f38102] my-2 flex items-center gap-2'><BsFillCarFrontFill /> Sellers</h2>
                                <hr />
                                <p className='my-2 font-medium text-blue-900'>We provide a simple approach to help you rapidly connect with prospective buyers if you're trying to sell your used car. By incorporating pertinent information about your car, such as its condition, mileage, service history, and any extra amenities, you may make a listing. You can upload pictures of your car's appearance, interior, and other distinguishing features using our site as well. As soon as your listing becomes online, potential purchasers can get in touch with you directly through our secure messaging system, making negotiation and communication simple</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>


            <div className='mx-4 py-8 px-6 bg-[#f6f4f8]'>
                <h2 className='text-4xl text-blue-900'><span className='text-[#f38102]'>Community</span> & Support</h2>
                <p className='my-2 text-gray-600 font-normal'>We are committed to creating a thriving online community for auto enthusiasts where members may share expertise, stories, and advice. To promote this sense of community, our platform may provide elements like forums, discussion boards, and user reviews. Additionally, we offer customer assistance channels to address any queries or worries you might have while purchasing or selling.</p>
            </div>

            <div className='mx-4 py-8 px-6 mt-6 bg-[#f6f4f8]'>
                <h2 className='text-4xl text-blue-900'><span className='text-[#f38102]'>Safety </span> & Trust</h2>
                <p className='my-2 text-gray-600 font-normal'>Our main priorities are the security and trust of our users. Even though we put a lot of effort into developing a platform where buyers and sellers can communicate, it's important to exercise caution while making a purchase. We encourage thorough inspections, test drives, and background checks before making any purchases. Additionally, users are advised to engage in open discussion, ask questions, and verify the accuracy of any information they may have received from another user.</p>
                <p className='my-2 text-gray-600 font-normal'>Don't forget that our site acts as a marketplace where buyers and sellers can establish direct contact. We do not participate in the actual transaction and do not guarantee the correctness or condition of the listed automobiles. It's important to do your research and make informed choices based on your unique needs and interests. We're glad for placing your immense trust in us also obliged for choosing Unicars for your used car needs. We're excited to assist you in finding the perfect cars or facilitating a successful sale! Less than 2% of young Indians are happy with their experience buying a used car, despite the fact that four wheels fuel dreams in our nation. Our aim is for the nation to believe in, trust, and enjoy our cars. We hope to fulfill a billion dreams in this way.</p>
            </div>



            <div>
                <section className="container my-6  rounded-xl  mx-4 p-2">
                    <h3 className="text-4xl font-bold text-blue-900 my-6" >What Matters To Us </h3>
                    <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 text-lg font-semibold text-blue-900">
                        <div className="">
                            <AiOutlineCar className='text-6xl text-orange-500' />
                            <h4 className="my-3 text-2xl font-semibold text-blue-900">Integrity and accountability </h4>
                            <p className='text-base font-normal text-gray-600'>It fosters trust. Customers feel more secure knowing all of the information regarding our car is readily available at our hubs following our rigorous verification procedure. We are in the business of growing and establishing connections </p>
                        </div>
                        <div className="">
                            <GiCarWheel className='text-6xl text-orange-500' />
                            <h4 className="my-3 text-2xl font-semibold text-blue-900" >Experience that is tailored </h4>
                            <p className='text-base font-normal text-gray-600'>Every customer is different, and every customer has distinct expectations for a set of four wheels. It's because of this, our inventory is diverse and the people you deal with while using Unifi cars are skilled at listening carefully before offering advice.</p>
                        </div>
                        <div className="">
                            <BsFillRocketTakeoffFill className='text-6xl text-orange-500' />
                            <h4 className="my-3 text-2xl font-semibold text-blue-900" >Quality that matters -</h4>
                            <p className='text-base font-normal text-gray-600'>We are in business and will stay that way as long as people are interested in our cars. Since we are a brand that puts customer service first, quality at every point of contact with our clients is equally important to us.</p>
                        </div>
                    </div>
                </section>
            </div>

            <div className='bg-[url("/background/abtbg.jpg")]'>
                <div className="container  mx-auto pt-12  p-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center ">
                        <div className="col-span-2">
                            <div className="">
                                <div className=" mb-6">
                                    <h2 className='py-2 text-4xl text-[#f38102]' >Our <span className='text-blue-900' >Mission </span></h2>
                                    <img src='/home/title_line.png' alt="line" />                  </div>
                                <div className="about-list font-semibold">
                                    <ul className='flex flex-col gap-4 '>
                                        <li className='font-normal'>
                                            <div className="flex  text-justify font-normal my-2">
                                                <div className='flex-none pt-1 mr-2'><TiTick className='bg-[#373d46] text-xl rounded-full text-[#f38102]' /></div>
                                                Building Trust: <br />
                                                </div>
                                                Trust is paramount in the used car market. We want our platform to be a trusted space where buyers and sellers can confidently engage with one another. We implement strict quality control measures, such as verifying seller information and encouraging users to provide accurate and detailed vehicle descriptions. We also facilitate secure communication channels to foster trust and transparency during negotiations.
                                        </li>
                                        <li className='font-normal'>
                                            <div className="flex  text-justify font-normal my-2">
                                                <div className='flex-none pt-1 mr-2'><TiTick className='bg-[#373d46] text-xl rounded-full text-[#f38102]' /></div>
                                                Simplifying the Process: <br />
                                                </div>
                                                We aim to simplify the entire process of buying and selling used cars. We understand that it can be a daunting and time-consuming task, so we strive to streamline the experience by providing user-friendly tools, intuitive interfaces, and comprehensive information about each car
                                        </li>
                                        <li className='font-normal'>
                                            <div className="flex  text-justify font-normal my-2">
                                                <div className='flex-none pt-1 mr-2'><TiTick className='bg-[#373d46] text-xl rounded-full text-[#f38102]' /></div>
                                                Supporting Sellers: <br />
                                                </div>
                                                We aim to support sellers in effectively showcasing their vehicles to potential buyers. Our platform provides user-friendly listing creation tools, enabling sellers to present their cars with accurate and appealing descriptions, along with high-resolution images. We may also offer guidance on pricing strategies and tips for optimizing listings to attract interested buyers.
                                        </li>
                                        <li className='font-normal'>
                                            <div className="flex text-justify font-normal my-2">
                                                <div className='flex-none pt-1 mr-2'><TiTick className='bg-[#373d46] text-xl rounded-full text-[#f38102]' /></div>
                                                Engaging Buyers: <br />
                                                </div>
                                                Our purpose is to provide customers with all the knowledge and resources they need to make wise decisions. We offer detailed descriptions of every vehicle, along with specifications, condition reports, and service records. In order to give potential purchasers a realistic impression of the car, high-quality pictures, and virtual tours might also be offered. We also provide search filters and tailored recommendations to assist buyers in finding the ideal car that fits their needs and budget.
                                        </li>
                                        <li className='font-normal'>
                                            <div className="flex  text-justify font-normal my-2">
                                                <div className='flex-none pt-1 mr-2'><TiTick className='bg-[#373d46] text-xl rounded-full text-[#f38102]' /></div>
                                                Promoting Community Engagement: <br />
                                                </div>
                                                We envision our platform as more than just a marketplace. We aspire to create a vibrant community where car enthusiasts can connect, share knowledge, and engage in discussions. This may involve facilitating forums, user reviews, and social features that encourage collaboration and foster a sense of belonging among our users.
                                        </li>
                                        <li className='font-normal'>
                                            <div className="flex  text-justify font-normal my-2">
                                                <div className='flex-none pt-1 mr-2'><TiTick className='bg-[#373d46] text-xl rounded-full text-[#f38102]' /></div>

                                                Embracing Technology: <br />
                                            </div>
                                            We leverage the power of technology to enhance the buying and selling experience. This may include features such as advanced search algorithms, virtual reality test drives, and secure online payment options. We continuously explore innovative solutions to improve the efficiency, convenience, and safety of the process.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="about-img-wrap">
                                <div className="row align-items-end">
                                    <div className="col-sm-12">
                                        <div className="about-exp">
                                        </div>
                                        <div className="about-img">
                                            <img src="/ourVision.jpg" className='rounded-xl opacity-90' alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            

            <Reviews />

        </div>)
}

export default about