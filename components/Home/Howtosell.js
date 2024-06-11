import React from 'react';

const HowToSell = () => {
  return (
    <div className="relative max-w-5xl mx-auto px-4 pt-16">
      <div className="absolute w-full h-60 inset-0 bg-blue-50 -z-10 rounded-lg shadow-md top-4"></div>
      {/* <h2 className="text-3xl font-bold text-center mb-4">How to Sell !</h2> */}
      <h1 className='py-2 font-bold text-center'> <span className='text-blue-500 sellheadfont'>How </span><span className='sellheadfont'>to Sell !</span></h1>
      <p className="text-center mb-8 hiwpara">keys to cash unlock the value of your car</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="hover:bg-blue-500 hover:text-white bg-white text-black p-6 rounded-lg shadow-md ">
          {/* <div className="mb-4">
            <img src="/icons/car-details.svg" alt="Car Details" className="mx-auto" />
          </div> */}
          <h4 className="text-base font-semibold mb-2 buyh4 text-center">SUBMIT YOUR CAR DETAILS</h4>
          <p className="mb-4">Provide simple details of your car like mobile number, year and mileage for accurate price.</p>
          {/* <a href="#" className="text-white">Read more</a> */}
        </div>
        <div className="hover:bg-blue-500 hover:text-white bg-white text-black p-6 rounded-lg shadow-md ">
          {/* <div className="mb-4">
            <img src="/icons/quick-valuation.svg" alt="Quick Valuation" className="mx-auto" />
          </div> */}
          <h4 className="text-base font-semibold mb-2 buyh4 text-center">GET QUICK VALUATION</h4>
          <p className="mb-4">Our advance methods quickly analyze your car price and get the estimate value of your car.</p>
          {/* <a href="#" className="text-blublack">Read more</a> */}
        </div>
        <div className="hover:bg-blue-500 hover:text-white bg-white text-black p-6 rounded-lg shadow-md ">
          {/* <div className="mb-4">
            <img src="/icons/easy-payment.svg" alt="Easy Payment" className="mx-auto" />
          </div> */}
          <h4 className="text-base font-semibold mb-2 buyh4 text-center">EASY PAYMENT METHODS</h4>
          <p className="mb-4">We Provide you online and cash payment options according to your suitability.</p>
          {/* <a href="#" className="text-blublack">Read more</a> */}
        </div>
      </div>
    </div>
  );
};

export default HowToSell;
