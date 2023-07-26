import React from "react";
import Navbar from "../pages/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import { Toaster } from "react-hot-toast";
import HandleOrderContext from "../pages/contextApi/HandleOrderContext";
import HandleStudyContext from "../pages/contextApi/HandleStudyContext";

const Main = () => {
  return (
    <HandleOrderContext>
      <HandleStudyContext>
        <div>
          <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>
          <Toaster />
        </div>
      </HandleStudyContext>
    </HandleOrderContext>
  );
};

export default Main;
