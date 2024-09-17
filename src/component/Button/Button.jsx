import React from "react";
import style from "./Button.module.css";

export default function Button({ children, onClick, type }) {
  return (
    <button onClick={onClick} className={`${style.btn} ${style[type]}`}>
      {children}
    </button>
  );
}
