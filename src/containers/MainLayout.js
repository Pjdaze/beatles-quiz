import React from "react";

import Header from "./ui-components/Header";
import Routes from "../Router/routes";
import Footer from "./ui-components/Footer";

const MainLayout = () => {
  return (
    <div className="full-height-flex">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
};

export default MainLayout;
