import React from "react";
import Navber from "../Navber/Navber";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { Toaster } from 'react-hot-toast'

const Main = () => {
  return (
    <div>
      <Toaster />
      <Navber></Navber>
      <div className="min-h-[calc(100vh-200px)] container mx-auto mb-44 px-12">
        {/* Dynamic Section */}
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
