import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

export const TabName = (name: string) => {
  // const location = useLocation();
  useEffect(() => {
    // const pageName = location;
    document.title = `Ecom Automations Hub ${name}`;
  }, []);
};
