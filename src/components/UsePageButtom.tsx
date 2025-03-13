import { useEffect, useState } from "react";

const usePageBottom = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  const handleScroll = () => {
    const windowHeight = window.innerHeight; 
    const documentHeight = document.documentElement.scrollHeight; 
    const scrollPosition = window.scrollY;

    if (windowHeight + scrollPosition >= documentHeight - 1) {
      setIsAtBottom(true);
    } else {
      setIsAtBottom(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 
  return isAtBottom; 
};

export default usePageBottom; 
