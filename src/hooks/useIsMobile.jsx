import { useEffect, useState } from "react";

const useIsMobile = (breakpoint = 700) => {
    const [isMobile, setIsMobile] = useState(
        typeof window !== "undefined" ? breakpoint : false 
    )

    useEffect(() => {
        const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);

        const onChange = () => {
            setIsMobile(window.innerWidth < breakpoint);
        }

        mql.addEventListener("change", onChange);

        setIsMobile(window.innerWidth < breakpoint);
        return () => {
            mql.removeEventListener("change", onChange);
        };
    }, [breakpoint]);

    return isMobile;
}

export default useIsMobile;