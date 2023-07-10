import { useState, useEffect } from "react";

const useWindowResize = (breakpoint = 768) => {
  const [ismobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < breakpoint) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return ismobile;
};

export default useWindowResize;
