import React from "react";
import Navbar from "../pages/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import { Toaster } from "react-hot-toast";
import HandleOrderContext from "../pages/contextApi/HandleOrderContext";

const Main = () => {
  return (
    <HandleOrderContext>
      <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
        <Toaster />
      </div>
    </HandleOrderContext>
  );
};

export default Main;
