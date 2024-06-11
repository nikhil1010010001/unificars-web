// components/ScrollToTopButton.js
import { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add scroll event listener to check scroll position
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(currentScrollPos > 300); // Change 300 to adjust when button appears
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className=''>
        <style jsx>{`
        .scroll-to-top {
            position: fixed;
            bottom: 20px;
            right: 20px;
            cursor: pointer;
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .scroll-to-top.visible {
            opacity: 1;
            font-size: 30px!important;
            color: #ea580c;
            background: white;
            border-radius: 22px;
        }
        
        .scroll-to-top svg {
            width: 2em!important;
        }
    `}</style>
        <div className={`scroll-to-top ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
        <FaArrowCircleUp />
        </div>
    </div>
  );
};

export default ScrollToTopButton;
