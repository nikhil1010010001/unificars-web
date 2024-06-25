import React, { useEffect, useState } from "react";
import { hasCookie, setCookie } from "cookies-next";

function CookiesSection() {
  const [showConsent, setShowConsent] = useState(true);

  useEffect(() => {
    setShowConsent(hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie("localConsent", "true", {});
  };

  if (showConsent) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 md:px-6 p-4 mb-4 bg-gray-100/50 500 rounded-xl backdrop-blur-lg border-2 z-[100] w-[95%] max-w-fit m-auto">
      <span className="md:text-base w-fit text-sm">
        This website uses cookies to improve user experience. By using our
        website you consent to all cookies in accordance with our Cookie Policy.
      </span>
      <button
        className="bg-green-500 p-2 md:px-4 rounded text-white ml-auto md:text-base text-sm w-full md:w-fit"
        onClick={acceptCookie}>
        Accept
      </button>
    </div>
  );
}

export default CookiesSection;
