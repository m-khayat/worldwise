import React, { useContext } from "react";
import style from "./CityItem.module.css";
import { Link } from "react-router-dom";
import { CitiesContext } from "../../../contexts/CitiesContext";
const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

export default function Cityitem({ city }) {
  const { curCity, deleteCity } = useContext(CitiesContext);
  const { cityName, date, emoji, id, position } = city;

  function handleClick(e) {
    e.preventDefault();
    deleteCity(id);
  }
  return (
    <li>
      <Link
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
        className={`${style.cityItem} ${
          city.id === curCity.id ? style["cityItem--active"] : ""
        }`}
      >
        <span className={style.emoji}>{emoji}</span>
        <h3 className={style.name}>{cityName}</h3>
        <time className={style.date}>{formatDate(date)}</time>
        <button className={style.deleteBtn} onClick={handleClick}>
          &times;
        </button>
      </Link>
    </li>
  );
}
