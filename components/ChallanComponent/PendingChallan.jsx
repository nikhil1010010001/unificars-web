import React from "react";

const PendingChallan = ({ challanData, carNumber, chassisNumber }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  return (
    <div className="flex flex-col gap-4">
      <div>
        <p className="text-2xl font-bold mb-2 text-gray-700">
          Registration No.
        </p>
        <p className="text-xl font-semibold">{carNumber}</p>
      </div>

      <div className="flex justify-between items-center gap-2">
        <p className="font-bold mb-2 text-gray-700">
          Pending Challan ({challanData.result.length})
        </p>
        <p className="font-semibold">O Pay all challan</p>
      </div>

      <div className="flex flex-col gap-4">
        {challanData.result.map((challan, index) => (
          <div key={index} className="flex gap-2 bg-orange-100 rounded-xl p-4">
            <div className="flex flex-col gap-2 w-full">
              <div className="w-full flex items-center gap-2 justify-between">
                <div className="flex-col flex">
                  <span className="text-gray-700 font-bold">Challan No.:</span>
                  <span>{challan.challanNumber}</span>
                </div>

                <div className="flex-col flex">
                  <span className="text-gray-700 font-bold">Issue Date</span>
                  <span>{formatDate(challan.challanDate)}</span>
                </div>

                <div className="flex-col flex">
                  <span className="text-gray-700 font-bold">Fine Amount</span>
                  <span className="font-bold text-red-500">
                    ₹{challan.amount}
                  </span>
                </div>
              </div>

              <div className="w-full space-y-2">
                <span className="text-gray-700 font-bold">Offence: </span>
                <span>{challan.offenseDetails}</span>
              </div>
              {/* <div className="w-full space-y-2">
                <span className="text-gray-700 font-bold">Court: </span>
                <span>{challan.offenseDetails}</span>
              </div> */}
            </div>

            <div className="space-y-2 text-right">
              <button className="bg-blue-600 p-2 px-4 font-bold text-white rounded-xl">
                Pay Now
              </button>
              <button className="text-orange-500 font-bold">More Info</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PendingChallan;
