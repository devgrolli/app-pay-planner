import { useEffect, useState } from "react";

const useWindowResize = (callback: () => void) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      callback();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [callback]);

  return windowWidth;
};

export default useWindowResize;
