import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import BarLoader from "react-spinners/BarLoader";
import { GrGallery } from "react-icons/gr";
import Link from "next/link";
import CarPageRelatedCars from "@/components/CarDetailsComponents/CarPageRelatedCars";
import CarImageCarousel from "@/components/CarDetailsComponents/CarImageCarousel";
import CarDetailsBox from "@/components/CarDetailsComponents/CarDetailsBox";
import HowItWork from "@/components/CarDetailsComponents/HowItWork";
import CarDetailTable from "@/components/CarDetailsComponents/CarDetailTable";
import OtpModal from "@/components/CarDetailsComponents/OtpModal";
import Questions from "@/dump/HomeComponents/Questions";
import EnquiryModal from "@/components/CarDetailsComponents/EnquiryModal";
import MoblieCarDetailsHeader from "@/components/CarDetailsComponents/MoblieCarDetailsHeader";

const Car = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [Car, setCar] = useState("");
  const [relatedCars, setRelatedCars] = useState([]);
  const [ShowSpinner, setShowSpinner] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);

  const fetchCarDetails = async () => {
    const params = { lead_id: slug };
    const fecthCars = await fetch(
      "https://crm.unificars.com/api/webcardetail",
      {
        method: "POST",
        body: JSON.stringify(params),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const jsonData = await fecthCars.json();
    setShowSpinner(false);
    if (jsonData.code == 200) {
      setCar(jsonData.data);
      if (jsonData.data.lead[0].Brand) {
        const brandName = jsonData.data.lead[0].Brand.split(" ")[0];
        fetchRelatedCars(brandName);
      }
    }
  };
  const fetchRelatedCars = async (brandName) => {
    const params = { lead_id: slug, brand: brandName };
    const url = `https://crm.unificars.com/api/getcustomerrelatedcars`;
    const resdata = await fetch(url, {
      method: "POST",
      body: JSON.stringify(params),
      headers: {
        "Content-type": "application/json",
      },
    });
    const jsonData = await resdata.json();
    //    console.log(jsonData,"fromRelatedCars")
    setRelatedCars(jsonData.data.auction);
  };

  useEffect(() => {
    if (!router.isReady) return;
    fetchCarDetails();
  }, [router.isReady, slug]);

  return (
    <>
      {ShowSpinner ? (
        // showing spinner when car data is fecthing
        <div className="flex col-span-4 justify-center h-96 items-center w-11/12 my-8 m-auto rounded-xl">
          <div className="">
            <img src="../logo.png" className="h-20 animate-bounce  mx-auto" />
            <BarLoader color="#f38120" width={100} className="mx-auto" />
          </div>
        </div>
      ) : (
        <>
          <div className="sticky top-0 md:hidden bg-blue-100 z-50 text-xl p-4">
            <MoblieCarDetailsHeader
              Car={Car}
              setShowEnquiryModal={setShowEnquiryModal}
            />
          </div>
          <div className="md:w-11/12 grid grid-cols-1 md:grid-cols-3 gap-2 mx-auto">
            <div className="col-span-2 p-8">
              <CarImageCarousel images={Car.images} />
              <div className="flex justify-end mx-6">
                <Link
                  href={`/car-images/${slug.toString().toLowerCase()}`}
                  className="mb-6 hover:text-blue-600 flex gap-2 shadow p-2 rounded-xl">
                  <GrGallery className="my-1" />
                  View All 38 Images
                </Link>
              </div>
              <CarDetailTable CarDetails={Car.lead} />
              {/* <div className=' grid grid-cols-1 md:grid-cols-3'>
                                <div className="">
                                    <Image
                                        src="/inpection.png"
                                        alt="background image"
                                        width={348}
                                        height={348}
                                    />
                                </div>
                                <div className="col-span-2">
                                    <h4 className='text-2xl my-4 text-blue-700'> Buy Your Car In Just 30 Mins !</h4>
                                    <p> We know you have heard it many times that buying or selling a pre owned car is hell lot of work. Yes. It is.But not for you. We will look for all the work required to process selling or buying of your car and guess what you would not even know it. It will be as easy as buying or selling anything on an ecommerce website. Place your order/add your listing and you are done. Our wide range of catalogs have all the details you need. Nothing to hide. All you need to worry about is where to park your new car.
                                    </p>
                                    <div className='grid grid-cols-2 gap-4 text-lg my-4 font-semibold'>
                                        <div className='flex gap-2'><IoMdCheckboxOutline className='my-1 text-orange-500 flex-none' />Top Quality Cars</div>
                                        <div className='flex gap-2'><IoMdCheckboxOutline className='my-1 text-orange-500 flex-none' />Buy From Your Home</div>
                                        <div className='flex gap-2'><IoMdCheckboxOutline className='my-1 text-orange-500 flex-none' />Secure Payment</div>
                                        <div className='flex gap-2'><IoMdCheckboxOutline className='my-1 text-orange-500 flex-none' />Free RC Transfer</div>
                                    </div>




                                </div>
                            </div> */}
            </div>
            <div>
              <div className="md:py-8 p-4 sticky top-5">
                <CarDetailsBox
                  Car={Car}
                  showModal={showModal}
                  setShowModal={setShowModal}
                  setShowEnquiryModal={setShowEnquiryModal}
                />
              </div>
            </div>
          </div>
          {relatedCars && relatedCars.length > 0 ? (
            <div className="bg-blue-50">
              <CarPageRelatedCars relatedCars={relatedCars} />
            </div>
          ) : (
            <></>
          )}
          <div>
            <Questions />
          </div>
          <div>
            <HowItWork />
          </div>
          <OtpModal
            showModal={showModal}
            setShowModal={setShowModal}
            carId={slug}
          />
          <EnquiryModal
            carId={slug}
            showEnquiryModal={showEnquiryModal}
            setShowEnquiryModal={setShowEnquiryModal}
          />
        </>
      )}
    </>
  );
};

export default Car;
