import { useEffect, useState } from "react";

const useWindowWidth = () => {
  const [clientWidth, setClientWidth] = useState({ width: undefined });
  useEffect(() => {
    const handleWidth = () => {
      setClientWidth({ width: window.innerWidth });
    };
    window.addEventListener("resize", handleWidth);
    handleWidth();
    return () => window.removeEventListener("resize", handleWidth);
  }, []);
  return clientWidth;
};

export default useWindowWidth;
