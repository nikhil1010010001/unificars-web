import React from "react";

const PayDetailModal = ({ selectedChallans, handleCloseModal }) => {
  const handleConfirmPayment = () => {
    console.log("Payment confirmed for:", selectedChallans);
  };

  return (
    <div className="fixed top-12 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-orange-50 rounded-lg p-6 min-w-96 max-w-[600px] h-[70vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Payment Summary</h2>

        <div className="mb-4 space-y-4">
          <div>
            <h3 className="text-xl font-bold text-gray-700 mb-2">
              Challan No:
            </h3>
            <ul className="font-semibold border border-gray-500 p-4 rounded-xl">
              {selectedChallans.map(
                (challan, index) =>
                  challan.challanNumber && (
                    <li key={index}>{challan.challanNumber}</li>
                  )
              )}
            </ul>
          </div>

          {/* vechicle number */}
          <div className="flex gap-2 flex-wrap justify-between items-center">
            <h3>Vehicle No:</h3>
            <p className="text-gray-700 font-bold">
              {selectedChallans[0].carNumber}
            </p>
          </div>

          {/* phone number */}
          {selectedChallans[0].phoneNumber && (
            <div className="flex gap-2 flex-wrap justify-between items-center">
              <h3>Phone No:</h3>
              <p className="text-gray-700 font-bold">
                {selectedChallans[0].phoneNumber}
              </p>
            </div>
          )}

          <hr />

          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold text-gray-700 mb-2">Offence:</h3>
            {selectedChallans.map((challan, index) => (
              <p
                key={index}
                className="border-b last:border-none pb-2
              ">
                {challan.offenseDetails}
              </p>
            ))}
          </div>

          <hr />
          <div>
            <h3 className="text-xl font-bold text-gray-700 mb-2">
              Challan Amount:
            </h3>

            <p>₹{selectedChallans[0].amount}</p>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-md mr-2"
            onClick={handleConfirmPayment}>
            Confirm Payment
          </button>
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
            onClick={handleCloseModal}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default PayDetailModal;
