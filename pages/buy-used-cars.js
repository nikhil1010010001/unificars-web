// Import necessary modules using dynamic import for lazy loading
import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

// Lazy loading components
const FilterCars = dynamic(
  () => import("@/components/cars-listing/FilterCars"),
  { ssr: true }
);
const AllCars = dynamic(() => import("@/components/cars-listing/AllCars"), {
  ssr: true,
});
const BuyCarSearchFilter = dynamic(
  () => import("@/components/cars-listing/BuyCarSearchFilter"),
  { ssr: true }
);

const BuyUsedCars = ({ initialCars, initialTotalItems, featuredCars }) => {
  const [carListing, setCarListing] = useState(initialCars || []);
  const [loading, setLoading] = useState(false);
  const [gridView, setGridView] = useState(true);

  return (
    <>
      <Head>
        <title>
          Buy Used Cars Online | Certified Second-Hand Cars with UnifiCars
        </title>
        <meta
          name="description"
          content="Buy Used Cars at Unificars. We offers Certified Second Hand Cars at Best Price. Get Fully Inspected Second-Hand Cars with Benefit & Easy RC Transfer."
        />
        <meta
          name="keywords"
          content="Unificars, Unifi Cars, Direct Seller Cars, used cars in moti nagar, 210 Inspected points, Easy finance, Buy use Car in delhi, Buy Unificars Used Car, buy used car in moti nagar, Unificars Certified Cars, used car, used cars, buy used car, buy used cars, buy second hand cars, buy a used car, certified used car, inspected used car, used car in kirti nagar, buy used car online"
        />
        <link rel="canonical" href="https://unificars.com/buy-used-cars" />
      </Head>

      <div className="lg:grid grid-cols-11 bg-gray-100/10">
        <div
          className="overflow-y-scroll max-h-screen h-[78vh] sticky top-32 hidden lg:block col-span-2"
          id="filter">
          <BuyCarSearchFilter
            setCarListing={setCarListing}
            setLoading={setLoading}
            filterUrl={`https://crm.unificars.com/api/filterswebpricesidebar`}
          />
        </div>
        <div className="col-span-9">
          <div className="min-h-screen mb-4">
            <FilterCars
              model={""}
              gridView={gridView}
              setGridView={setGridView}
              setCarListing={setCarListing}
              setLoading={setLoading}
              filterUrl={`https://crm.unificars.com/api/filterswebpricesidebar`}
            />
            <AllCars
              carListing={carListing}
              featuredlist={featuredCars}
              gridView={gridView}
              loading={loading}
              imageLink={"button"}
              assured={0}
              folder={"listing"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

// Server-side function to fetch initial data
export async function getStaticProps() {
  let initialCars = [];
  let initialTotalItems = 0;
  let featuredCars = [];

  try {
    // Fetch initial cars data
    const res = await fetch(
      `https://crm.unificars.com/api/filterswebpricesidebar?page=1&limit=10`,
      {
        method: "POST",
        body: JSON.stringify({
          min_price: 100000,
          max_price: 2400000,
          owner: "",
          year: "",
          km: "",
          type: "",
          model: [],
        }),
        headers: { "Content-type": "application/json" },
      }
    );
    const jsonData = await res.json();

    if (jsonData.code === 200) {
      initialCars = jsonData.data.auction || [];
      initialTotalItems = jsonData.data.total || 0;
    } else {
      console.error("Failed to fetch initial car data:", jsonData.message);
    }

    // Fetch featured cars
    const featuredRes = await fetch(
      "https://crm.unificars.com/api/featuredcars",
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
      }
    );

    if (featuredRes.ok) {
      const featuredJson = await featuredRes.json();

      if (featuredJson.code === 200) {
        featuredCars = featuredJson.data || [];
      } else {
        console.error("Failed to fetch featured cars:", featuredJson.message);
      }
    } else {
      console.error(
        "Failed to fetch featured cars:",
        featuredRes.status,
        featuredRes.statusText
      );
    }
  } catch (error) {
    console.error("Error fetching initial car data:", error);
  }

  return {
    props: {
      initialCars,
      initialTotalItems,
      featuredCars,
    },
  };
}

export default BuyUsedCars;
