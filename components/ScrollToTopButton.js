// components/ScrollToTopButton.js
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
      <div className="w-full flex justify-between items-center pb-4 gap-4">
        <p>© 2023 All Rights Reserved Unificars wheel PVT LTD</p>
        <div className="flex gap-4">
          <p>Privacy Policy </p>
          <p>|</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
    </div>
  );
};

export default ScrollToTopButton;
