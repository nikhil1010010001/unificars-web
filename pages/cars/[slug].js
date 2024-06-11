import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import BarLoader from "react-spinners/BarLoader";
import { GrGallery } from 'react-icons/gr';
import { TiTick } from 'react-icons/ti';
import Link from 'next/link';
import dynamic from "next/dynamic";

const CarPageRelatedCars = dynamic(() => import ('@/components/CarDetailsComponents/CarPageRelatedCars') , { ssr: true });
const CarImageCarousel = dynamic(() => import ('@/components/CarDetailsComponents/CarImageCarousel') , { ssr: true });
const CarDetailsBox = dynamic(() => import ('@/components/CarDetailsComponents/CarDetailsBox') , { ssr: true });
// const CarFeature = dynamic(() => import ('@/components/CarDetailsComponents/CarFeature') , { ssr: true });
const HowItWork = dynamic(() => import ('@/components/CarDetailsComponents/HowItWork') , { ssr: true });
const CarOverView = dynamic(() => import ('@/components/CarDetailsComponents/CarOverView') , { ssr: true });
const OtpModal = dynamic(() => import ('@/components/CarDetailsComponents/OtpModal') , { ssr: true });
const Questions = dynamic(() => import ('@/components/HomeComponents/Questions') , { ssr: true });
const EnquiryModal = dynamic(() => import ('@/components/CarDetailsComponents/EnquiryModal') , { ssr: true });
const MoblieCarDetailsHeader = dynamic(() => import ('@/components/CarDetailsComponents/MoblieCarDetailsHeader') , { ssr: true });
const CheckPoint = dynamic(() => import ('@/components/CarDetailsComponents/CheckPoint') , { ssr: true });
// const CarSpecification = dynamic(() => import ('@/components/CarDetailsComponents/CarSpecification') , { ssr: true });
const CarReport = dynamic(() => import ('@/components/CarDetailsComponents/CarReport') , { ssr: true });


import Image from 'next/image';
import Head from 'next/head';


import { useDispatch, useSelector } from "react-redux";
import { IoLogoModelS, IoIosCloseCircle } from 'react-icons/io';
import { ImageDisplayHide } from "../../ReduxStore/actions/ModalImage";

const carPage = () => {

    const router = useRouter()
    const { slug ,id, assured} = router.query


    const [car, setCar] = useState("");
    const [relatedCars, setRelatedCars] = useState([]);
    const [ShowSpinner, setShowSpinner] = useState(true)
    const [showModal, setShowModal] = useState(false);
    const [showEnquiryModal, setShowEnquiryModal] = useState(false);

    const dispatch = useDispatch()
    const CurrentImage = useSelector(state => state.CurrentImage)

    // data fetching for main car
    const fetchCarDetails = async () => {
        const params = { "lead_id": id , "assured":assured }
        const fecthCars = await fetch("https://crm.unificars.com/api/webcardetail", {
            method: 'POST',
            body: JSON.stringify(params),
            headers: {
                'Content-type': 'application/json',
            },
        })
        const jsonData = await fecthCars.json()
        // console.log(jsonData,"car details")
        setShowSpinner(false)
        if (jsonData.code == 200) {
            setCar(jsonData.data)
            console.log(jsonData.data)
            if ((jsonData.data.lead[0]).Brand) {
                const brandName = ((jsonData.data.lead[0]).Brand).split(" ")[0]
                fetchRelatedCars(brandName)
            }
        }
    };
    const fetchRelatedCars = async (brandName) => {
        const params = { "lead_id": id, brand: brandName }
        const url =assured==1?"https://crm.unificars.com/api/getassuredrelatedcars": `https://crm.unificars.com/api/getcustomerrelatedcars`
        const resdata = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(params),
            headers: {
                'Content-type': 'application/json',
            },
        })
        const jsonData = await resdata.json()
        // console.log(jsonData, "fromRelatedCars")
        setRelatedCars(jsonData.data.auction)
    }

    useEffect(() => {
        if (!router.isReady) return;
        fetchCarDetails()
        // console.log(assured , id)
    }, [router.isReady, slug, id]);


    return (
        <>
        <Head>
            <title>{car && car.lead[0] ?car.lead[0].Model:""} {car && car.lead[0] ?car.lead[0].Brand:""} - Unifi Cars</title>
        </Head>
        <div className='bg-gray-100/60' style={{paddingTop:'90px'}}>
            {ShowSpinner ?
                // showing spinner when car data is fecthing
                (<div className="flex col-span-4 justify-center h-96 items-center w-11/12 my-8 m-auto rounded-xl">
                    <div className="">
                        <img src='../logo.png' className='h-20 animate-bounce  mx-auto' />
                        <BarLoader color="#f38120" width={100} className="mx-auto" />
                    </div>
                </div>)
                :
                (<>
                 <div className='sticky top-0 lg:hidden z-10 bg-white border-b-[1px] border-black/10 p-4'>
                                    <MoblieCarDetailsHeader car={car} setShowEnquiryModal={setShowEnquiryModal} />
                 </div>
                    <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-2 py-4 mx-auto lg:w-11/12 '>
                        <div className='col-span-2 px-4 mb-4'>
                            <div>
                                <div className="relative">
                                <CarImageCarousel images={car.assuredimages.length>0?car.assuredimages:car.images} car={car}/>
                                </div>
                                <div className='flex justify-end mx-6'>
                                <Link
                                    href={{
                                        pathname: `/car-images/${((car.lead[0]).Brand).replace(/ /g,"_").toLowerCase()}-${((car.lead[0]).varient).replace(/ /g,"_").toLowerCase()}-${((car.lead[0]).Model).replace(/ /g,"_").toLowerCase()}-${(((car.lead[0])["Registration In"]).replace(/ /g,"_")).slice(0, 2).toLowerCase()}`,
                                        query: { id: id, assured: assured }
                                    }}
                                    className="mb-6 hover:text-blue-600 flex gap-2 shadow p-2 rounded-xl"
                                >
                                    <GrGallery className='my-1' />
                                    View All Images
                                </Link>                                </div>
                                <div className='space-y-4'>
                                    <CarOverView CarDetails={car.lead} />
                                    {/* <CheckPoint/> */}
                                    {/* {car.detaiapi && car.detaiapi.  length > 0 ? <CarReport carDetails={car.detaiapi} /> : <></>} */}

                                    {/* <CarFeature CarFeature={car.features} />
                                    <CarSpecification CarSpecific={car.specifications}/> */}
                                </div>
                            </div>
                        </div>
                        <div className='md:p-0 md:pb-4'>
                            <div className='sticky top-5'>
                            <CarDetailsBox car={car} id={id} showModal={showModal} setShowModal={setShowModal} setShowEnquiryModal={setShowEnquiryModal} />
                            <div className='mt-2 mx-4 lg:mx-0 flex flex-wrap gap-1 text-sm'>
                                    <p className='flex-none items-center flex border-2 border-[#e38102] py-1 px-2 rounded-full gap-1'><TiTick className='bg-[#e38102] rounded-full text-white'/>Instant Loan Approval</p>
                                    <p className='flex-none items-center flex border-2 border-[#e38102] py-1 px-2 rounded-full gap-1'><TiTick className='bg-[#e38102] rounded-full text-white'/>Lowest Rate Of Interest</p>
                                    <p className='flex-none items-center flex border-2 border-[#e38102] py-1 px-2 rounded-full gap-1'><TiTick className='bg-[#e38102] rounded-full text-white'/>Priority Closer</p>
                                    <p className='flex-none items-center flex border-2 border-[#e38102] py-1 px-2 rounded-full gap-1'><TiTick className='bg-[#e38102] rounded-full text-white'/>Best Deal</p>
                                    <p className='flex-none items-center flex border-2 border-[#e38102] py-1 px-2 rounded-full gap-1'><TiTick className='bg-[#e38102] rounded-full text-white'/>Free Rc Transfer</p>
                                    <p className='flex-none items-center flex border-2 border-[#e38102] py-1 px-2 rounded-full gap-1'><TiTick className='bg-[#e38102] rounded-full text-white'/>Sell From Your Home</p>
                            </div>
                            {/* <div className='my-2'>
                                <img src="/productBannner.png" className='shadow' />
                            </div> */}
                            </div>
                        </div>
                    </div>

                    {/* auto bid modal start here  */}
                    <div className={`fixed z-50 overflow-hidden top-0 w-full transition-all duration-200 ease-in-out flex justify-center items-center ${CurrentImage.url != "" ? "h-full" : "h-0"}`}>
                        <div className='absolute top-0 bg-black/50 w-full h-full' onClick={() => dispatch(ImageDisplayHide())}></div>
                        <div className='z-40 bg-white relative m-4'>
                            <div className='absolute -top-2 -right-2 z-40 bg-white/70 rounded-full cursor-pointer' onClick={() => { dispatch(ImageDisplayHide()) }}> <IoIosCloseCircle className='text-2xl text-black' /> </div>
                            <div className='relative'>
                                <img src={CurrentImage.url} className='w-96 h-96'/>
                                <h3 className='absolute bottom-0 text-lg w-full p-2 bg-white/50 text-center'>{CurrentImage.part}</h3>
                            </div>
                            <hr />
                        </div>
                    </div>

                    {relatedCars && relatedCars.length>0? <div className='w-11/12 my-1 mx-auto'>
                        <CarPageRelatedCars relatedCars={relatedCars}  assured={assured}/>
                    </div>:<></>}
                    <div>
                        <Questions />
                    </div>
                    <div>
                        <HowItWork />
                    </div>
                    <OtpModal showModal={showModal} setShowModal={setShowModal} carId={id}/>
                    <EnquiryModal carId={id} showEnquiryModal={showEnquiryModal} setShowEnquiryModal={setShowEnquiryModal}/>
                </>)}
        </div>
        </>
    )
}

export default carPage