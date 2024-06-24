import Image from "next/image";
import React, { useEffect, useState } from "react";
import BarLoader from "react-spinners/BarLoader";

const SellByPopularBrands = ({ setCarInfo, carInfo, screen, setScreen }) => {
  const [BrandsLogo, setBrandsLogo] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  // console.log(setScreen);

  const fetchBrands = async () => {
    setLoading(true);
    try {
      const fetchBrand = await fetch(
        "https://api.unificars.com/api/getwebrands",
        {
          method: "POST",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      );
      const jsonRes = await fetchBrand.json();
      if (jsonRes.code == 200) {
        console.log(jsonRes.data, "Success");
        setBrandsLogo(jsonRes.data);
        setLoading(false);
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  return (
    <>
      <div></div>
      {!Loading ? (
        screen == 1 ? (
          // For Screen 1
          <div
            className={`grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-6`}>
            {BrandsLogo.length > 0 ? (
              (showAll ? BrandsLogo : BrandsLogo.slice(0, 9)).map(
                (e, index) => (
                  <div
                    onClick={() => {
                      setScreen(2);
                      setCarInfo((prevCarInfo) => ({
                        ...prevCarInfo,
                        brand: {
                          id: e.id,
                          name: e.brand_name,
                          image: e.image,
                        },
                      }));
                    }}
                    className="shadow-md border p-2 cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-200 rounded-2xl"
                    key={index}>
                    <Image
                      priority
                      width={200}
                      height={200}
                      src={e.image}
                      alt={e.brand_name}
                    />
                  </div>
                )
              )
            ) : (
              <></>
            )}
            {BrandsLogo.length > 8 && (
              <button
                onClick={() => {
                  setShowAll(!showAll);
                }}
                className="shadow-md border w-full p-4 cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-200 hover:bg-gray-50 flex items-center justify-center rounded-2xl font-sans text-[#da251c] text-lg">
                {showAll ? "Less" : "More"}
              </button>
            )}
          </div>
        ) : (
          // For Screen 2
          <div>
            <p className="w-full text-lg mb-2">Select a brand to get started</p>
            <div
              className={`grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-6`}>
              {BrandsLogo.length > 0 ? (
                (showAll ? BrandsLogo : BrandsLogo.slice(0, 7)).map(
                  (e, index) => (
                    <div
                      onClick={() => {
                        setScreen(2);
                        setCarInfo((prevCarInfo) => ({
                          ...prevCarInfo,
                          brand: {
                            ...prevCarInfo.brand,
                            id: e.id,
                            name: e.brand_name,
                            image: e.image,
                          },
                        }));
                      }}
                      className="shadow-md w-full p-2 cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center justify-center rounded-2xl"
                      key={index}>
                      <Image
                        priority
                        width={200}
                        height={200}
                        src={e.image}
                        alt={e.brand_name}
                      />
                    </div>
                  )
                )
              ) : (
                <></>
              )}
              {BrandsLogo.length > 8 && (
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="shadow-md border w-full p-4 cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-200 hover:bg-gray-50 flex items-center justify-center rounded-2xl font-sans text-[#da251c] text-lg">
                  {showAll ? "Less" : "More"}
                </button>
              )}
            </div>
          </div>
        )
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <img src="../logo.png" className="h-20 animate-bounce  mx-auto" />
          <BarLoader color="#f38120" width={100} className="mx-auto" />
        </div>
      )}
    </>
  );
};

export default SellByPopularBrands;
