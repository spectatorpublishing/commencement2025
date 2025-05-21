import { useEffect, useState } from "react";
import MobileHeader from "../components/MobileHeader";
import NewHeader from "../components/NewHeader";
import Credits from "./Credits";

//Custom hook to detect mobile screen sizes -- Noel
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
}

function Homepage() {
  const isMobile = useIsMobile();

  return (
    <div>
      {isMobile ? <MobileHeader /> : <NewHeader />}
      <Credits />
    </div>
  );
}

export default Homepage;
