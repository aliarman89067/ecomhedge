import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const TabName = () => {
  const location = useLocation();
  useEffect(() => {
    const pageName = location;
    document.title = `Ecomasis ${
      pageName.pathname.substring(1)
        ? ` | ${pageName.pathname.substring(1)}`
        : ""
    }`;
  }, []);
};
