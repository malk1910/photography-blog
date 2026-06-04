import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import MainPage from "./MainPage";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Nav />
      <MainPage />
      <Outlet />

      <Footer />
    </div>
  );
}
