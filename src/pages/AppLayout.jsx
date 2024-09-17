import React from "react";
import SideBar from "../component/SideBar/SideBar";
import Map from "../component/Map/Map";
import style from "./AppLayout.module.css";
export default function AppLayout() {
  return (
    <div className={style.app}>
      <SideBar />
      <Map />
    </div>
  );
}
