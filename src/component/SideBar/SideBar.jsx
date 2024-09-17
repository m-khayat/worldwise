import React from "react";
import Logo from "../Logo/Logo";
import AppNav from "../AppNav/AppNav";
import Footer from "./Footer/Footer";

import style from "./SideBar.module.css";
import { Outlet } from "react-router-dom";

export default function SideBar() {
  return (
    <div className={style.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <Footer />
    </div>
  );
}
