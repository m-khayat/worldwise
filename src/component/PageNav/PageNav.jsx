import React from "react";
import { NavLink } from "react-router-dom";
import style from "./PageNav.module.css";
import Logo from "../Logo/Logo";
export default function PageNav() {
  return (
    <nav className={style.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/product">product</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">pricing</NavLink>
        </li>
      </ul>
    </nav>
  );
}
