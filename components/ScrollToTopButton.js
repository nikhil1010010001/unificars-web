// components/ScrollToTopButton.js
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add scroll event listener to check scroll position
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(currentScrollPos > 300); // Change 300 to adjust when button appears
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="container mx-auto px-2 md:w-[85%]">
      <div
        className="p-4 bg-orange-500 rounded-full m-2 w-fit mb-0 -mt-6 mx-auto"
        onClick={scrollToTop}>
        <FaAngleDoubleUp className="text-white text-xl" />
      </div>
      <div className="w-full flex flex-wrap justify-between items-center p-2 pb-4 gap-4">
        <p>© 2023 All Rights Reserved Unificars wheel PVT LTD</p>
        <div className="flex gap-4">
          <Link href="/privacy-policy">Privacy Policy </Link>
          <p>|</p>
          <Link href="/term-conditions">Terms & Conditions</Link>
        </div>
      </div>
    </div>
  );
};

export default ScrollToTopButton;
