import React from "react";
import Header from "../Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

const RootLayout = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />

      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
