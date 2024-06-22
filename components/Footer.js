import Link from "next/link";
import React from "react";
import ScrollToTopButton from "./ScrollToTopButton";

import {
  BsTwitter,
  BsLinkedin,
  BsInstagram,
  BsFacebook,
  BsFillTelephoneFill,
  BsFillCarFrontFill,
} from "react-icons/bs";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <footer
        className="h-[400px] body-font bg-white border-t-2 border-black/10 text-sm font-light"
        style={{
          backgroundImage: `url('/footer-image.png')`,
          backgroundSize: "cover",
        }}>
        <div className="px-2 py-8 grid grid-cols-1 md:grid-cols-3 text-white container mx-auto md:w-[90%]">
          <div className="px-5 flex flex-col">
            <Link
              href={"/"}
              className="flex title-font font-medium items-center md:justify-start justify-center ">
              <Image src={"/whitelogo.png"} width={100} height={100} />
            </Link>
            <p className="text-left  text-sm max-w-[300px]">
              Your all-in-one platform for discovering and streaming your
              favorite shows on the go.
            </p>

            {/* <div className="cursor-pointer flex rounded font-bold  p-2 my-4 text-xl">
              <a href="tel:9911771977" className=" flex">
                <BsFillTelephoneFill className="ml-2 my-1" />&nbsp;&nbsp;
                +91 9911771977
              </a>
            </div> */}

            <div className="flex gap-2 my-6">
              <a
                target="_blank"
                className=" cursor-pointer hover:text-blue-500 transition-all duration-150"
                href="https://www.facebook.com/UnifiCars/">
                <BsFacebook className="text-2xl" />
              </a>
              <a
                target="_blank"
                className="ml-3 cursor-pointer hover:text-red-500 transition-all duration-150"
                href="https://www.instagram.com/unificars/">
                <BsInstagram className="text-2xl" />
              </a>
              <a
                target="_blank"
                className="ml-3 cursor-pointer hover:text-blue-500 transition-all duration-150"
                href="https://www.linkedin.com/company/unificars">
                <BsLinkedin className="text-2xl" />
              </a>
              <a
                target="_blank"
                className="ml-3 cursor-pointer hover:text-blue-500 transition-all duration-150"
                href="https://twitter.com/UnifiCars/">
                <BsTwitter className="text-2xl" />
              </a>
            </div>
            <p className="text-sm">
              Copyright © 2023. All rights reserved. by Unifi Cars
            </p>
          </div>

          <div className="my-4 mt-6">
            <div className="px-2 grid grid-cols-2 gap-3">
              <div>
                <h4 className="text-md mb-4 font-bold">
                  <b>Company</b>
                </h4>
                <ul className="flex gap-2 flex-col">
                  <li className="transition-all duration-150">
                    <Link href="/about">About</Link>
                  </li>
                  <li className="transition-all duration-150 ">
                    <Link href={"#"}>Services</Link>
                  </li>
                  <li className="transition-all duration-150 ">
                    <Link href={"/pre-delivery-inspection"}>Pricing</Link>
                  </li>

                  <li className="transition-all duration-150">
                    <Link href={"/scrap-cars"}>Scrap Car</Link>
                  </li>

                  <li className="transition-all duration-150">
                    <Link href={"/contact"}>Contact us</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-md mb-4  font-bold">
                  <b>What we do</b>
                </h4>
                <ul className="flex gap-2 flex-col ">
                  <li className="transition-all duration-150 ">
                    <Link href="/term-conditions">Terms & Conditions</Link>
                  </li>
                  <li className="transition-all duration-150">
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li className="transition-all duration-150">
                    <Link href="/contact">Blog / News</Link>
                  </li>
                  {/* <li className="transition-all duration-150">
                  <div className="bg-blue-200 cursor-pointer flex rounded hover:bg-orange-400 font-bold shadow-lg text-blue-950 p-2 whitespace-nowrap" style={{ width: 'max-content' }}>
                    <a href={"/dealer-onboarding"} className=" flex">
                      Become our partner
                    </a>
                  </div> 
                  </li> */}
                </ul>
              </div>
            </div>

            <div className="flex gap-10"></div>
          </div>
          <div className="flex flex-col mr-4 pl-3 mt-6">
            <h4 className=" font-bold mb-4 text-md">Sell your used car in</h4>
            <p className="text-left  text-sm">
              Building No. 1A, Top Floor, DLF, Moti Nagar, New Delhi-110015.
            </p>
            <br />
            <p className="text-left  text-sm">info@unificars.com</p>
            <br />
          </div>
        </div>
      </footer>
      <ScrollToTopButton />
    </div>
  );
};

export default Footer;
