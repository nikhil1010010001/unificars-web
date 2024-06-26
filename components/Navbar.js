import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import TopBar from "./TopBar";
import Image from "next/image";
import { CloseIcon, Hamburger } from "@/common/IconsSvg";

const Navbar = () => {
  const [slider, setSlider] = useState(false);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  // Effect to handle window resizing and possible hydration issues
  useEffect(() => {
    // Ensure the component is mounted before allowing state changes that affect the DOM structure
    const handleResize = () => {
      if (window.innerWidth >= 2560) {
        setSlider(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      <nav className="w-full z-20 bg-white shadow-sm position-fixed">
        <TopBar />
        <div className="flex justify-between items-center navmargin">
          <div>
            <Link href="/">
              <Image
                width={120}
                height={120}
                src="/logo.png"
                className="w-36"
              />
            </Link>
          </div>
          <div>
            <div className="" onClick={() => setSlider(!slider)}>
              <Hamburger className="block text-xl font-semibold xl:hidden me-2" />
            </div>
            <ul
              className={`font-medium hidden text-base items-start xl:flex space-x-6`}
              style={{ alignItems: "center" }}>
              <Link
                href="/"
                className={`hover:text-[#f38102] active:text-orange-600 decoration-2 decoration-[#f38102] ${
                  router.pathname == "/"
                    ? "text-orange-600 underline underline-offset-8"
                    : ""
                }`}>
                Home
              </Link>
              <Link
                href="/buy-used-cars"
                className={`hover:text-[#f38102] active:text-orange-600 decoration-2 decoration-[#f38102] ${
                  router.pathname == "/buy-used-cars"
                    ? "text-orange-600 underline underline-offset-8"
                    : ""
                }`}>
                {" "}
                Buy Car
              </Link>
              <Link
                href="/sell-used-cars"
                className={`hover:text-[#f38102] active:text-orange-600 decoration-2 decoration-[#f38102] ${
                  router.pathname == "/sell-used-cars"
                    ? "text-orange-600 underline underline-offset-8"
                    : ""
                }`}>
                Sell Car
              </Link>

              <Link
                href="/contact"
                className={`hover:text-[#f38102] active:text-orange-600 decoration-2 decoration-[#f38102] ${
                  router.pathname == "/contact"
                    ? "text-orange-600 underline underline-offset-8"
                    : ""
                }`}>
                Contact Us
              </Link>

              <div
                className="relative py-2"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}>
                <button
                  onClick={toggleDropdown}
                  className={`hover:text-[#f38102] active:text-orange-600 decoration-2 decoration-[#f38102] ${
                    isOpen ? "text-orange-600 underline underline-offset-8" : ""
                  }`}>
                  More
                </button>
                {isOpen && (
                  <ul
                    className="absolute -left-1/2 mt-2 bg-white shadow-lg rounded-lg"
                    style={{ width: "max-content" }}>
                    <li
                      className={`hover:bg-gray-100 ${
                        router.pathname == "/about" ? "bg-gray-200" : ""
                      }`}>
                      <Link href="/about" className="block px-4 py-2">
                        About Us
                      </Link>
                    </li>

                    <li
                      className={`hover:bg-gray-100 ${
                        router.pathname == "/assured-cars" ? "bg-gray-200" : ""
                      }`}>
                      <Link href="/assured-cars" className="block px-4 py-2">
                        Assured Fix
                      </Link>
                    </li>

                    <li
                      className={`hover:bg-gray-100 ${
                        router.pathname == "/pre-delivery-inspection"
                          ? "bg-gray-200"
                          : ""
                      }`}>
                      <Link
                        href="/pre-delivery-inspection"
                        className="block px-4 py-2">
                        Pre Inspection
                      </Link>
                    </li>

                    <li
                      className={`hover:bg-gray-100 ${
                        router.pathname == "/scrap-cars" ? "bg-gray-200" : ""
                      }`}>
                      <Link href="/scrap-cars" className="block px-4 py-2">
                        Scrap Car
                      </Link>
                    </li>

                    <li
                      className={`hover:bg-gray-100 ${
                        router.pathname == "/challan-check" ? "bg-gray-200" : ""
                      }`}>
                      <Link href="/challan-check" className="block px-4 py-2">
                        Challan Check
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
              {/* <Link
                href="/login"
                className={`hover:text-[#f38102] active:text-orange-600 `}
                >
                <div
                  className="border-orange-500 border-2 cursor-pointer flex rounded-xl font-bold text-orange-500  px-4 whitespace-nowrap p-1"
                  style={{ width: "max-content" }}>
                  Login
                </div>
              </Link> */}

              <Link
                href="/dealer-onboarding"
                className={`hover:text-[#f38102] active:text-orange-600 ${
                  router.pathname == "/sell-used-cars" ? "text-orange-600 " : ""
                }`}>
                <div
                  className="bg-orange-500 cursor-pointer flex rounded-xl font-bold text-white p-1 px-4 whitespace-nowrap border-2 border-orange-500"
                  style={{ width: "max-content" }}>
                  Become our partner
                </div>
              </Link>
            </ul>

            {/* navbar for small devices */}
            <ul
              className={`text-base fixed w-0 opacity-0 z-50 h-full bg-black/60 overflow-hidden right-0 bottom-0 transition-all xl:hidden text-white ${
                slider ? "w-full opacity-100" : ""
              }`}>
              <div className="bg-[#202020] h-full w-64 right-0 absolute flex flex-col space-y-2 font-bold tracking-wider">
                <div
                  className="absolute right-2 text-2xl top-4 p-4"
                  onClick={() => setSlider(!slider)}>
                  <CloseIcon />
                </div>
                <li className="px-4">
                  <Link
                    href="/"
                    onClick={() => {
                      setSlider(false);
                    }}>
                    <Image
                      width={120}
                      height={120}
                      src="/whitelogo.png"
                      className="w-36"
                    />
                  </Link>
                </li>
                <li className="px-4 border-white/20 py-2 border-b-[1px] border-t-[1px] ">
                  <Link
                    href="/"
                    onClick={() => {
                      setSlider(false);
                    }}
                    className={`${
                      router.pathname == "/" ? "text-[#f38102] " : ""
                    }`}>
                    Home
                  </Link>
                </li>
                <li className="px-4 border-white/20 py-2 border-b-[1px]">
                  {" "}
                  <Link
                    href="/buy-used-cars"
                    onClick={() => {
                      setSlider(false);
                    }}
                    className={`${
                      router.pathname == "/buy-used-cars"
                        ? "text-[#f38102] "
                        : ""
                    }`}>
                    Buy Car
                  </Link>
                </li>
                <li className="px-4 border-white/20 py-2 border-b-[1px]">
                  {" "}
                  <Link
                    href="/sell-used-cars"
                    onClick={() => {
                      setSlider(false);
                    }}
                    className={`${
                      router.pathname == "/sell-used-cars"
                        ? "text-[#f38102] "
                        : ""
                    }`}>
                    Sell Car
                  </Link>
                </li>

                <li className="px-4 border-white/20 py-2 border-b-[1px]">
                  {" "}
                  <Link
                    href="/assured-cars"
                    onClick={() => {
                      setSlider(false);
                    }}
                    className={`${
                      router.pathname == "/assured-cars"
                        ? "text-[#f38102] "
                        : ""
                    }`}>
                    Assured Fix
                  </Link>
                </li>

                <li className="px-4 border-white/20 py-2 border-b-[1px]">
                  {" "}
                  <Link
                    href="/pre-delivery-inspection"
                    onClick={() => {
                      setSlider(false);
                    }}
                    className={`${
                      router.pathname == "/pre-delivery-inspection"
                        ? "text-[#f38102] "
                        : ""
                    }`}>
                    Pre Inspection
                  </Link>
                </li>
                <li className="px-4 border-white/20 py-2 border-b-[1px]">
                  {" "}
                  <Link
                    href="/scrap-cars"
                    onClick={() => {
                      setSlider(false);
                    }}
                    className={`${
                      router.pathname == "/scrap-cars" ? "text-[#f38102] " : ""
                    }`}>
                    Scrap Car
                  </Link>
                </li>
                <li className="px-4 border-white/20 py-2 border-b-[1px]">
                  {" "}
                  <Link
                    href="/challan-check"
                    onClick={() => {
                      setSlider(false);
                    }}
                    className={`${
                      router.pathname == "/challan-check"
                        ? "text-[#f38102] "
                        : ""
                    }`}>
                    Challan Check
                  </Link>
                </li>
                <li className="px-4 border-white/20 py-2 border-b-[1px]">
                  {" "}
                  <Link
                    href="/about"
                    onClick={() => {
                      setSlider(false);
                    }}
                    className={`${
                      router.pathname == "/about" ? "text-[#f38102] " : ""
                    }`}>
                    About Us
                  </Link>
                </li>
                <li className="px-4 border-white/20 py-2 border-b-[1px]">
                  {" "}
                  <Link
                    href="/contact"
                    onClick={() => {
                      setSlider(false);
                    }}
                    className={`${
                      router.pathname == "/contact" ? "text-[#f38102] " : ""
                    }`}>
                    Contact
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
