import React, { useEffect } from "react";
import NavBar from "./navbar";
import Footer from "./Footer";
// import Menu from "../components/menu";
// import MenuBtn from "../components/menuBtn";
// import DropdownMenu from "../components/dropdownMenu";
import { initGA, logPageView } from "../utils/GoogleAnalytics";

const Layout = ({ children }) => {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);

  return (
    <div>
      {<NavBar />}

      {children}
      <Footer />
    </div>
  );
};

export default Layout;
