import React, { useContext } from "react";

import { CitiesContext } from "../../contexts/CitiesContext";

import CountryItem from "./CountryItem/CountryItem";
import Spinner from "../Spinner/Spinner";
import Message from "../Message/Message";
import style from "./CountryList.module.css";
export default function CountryList() {
  const { cities, isLoading } = useContext(CitiesContext);
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="there is no city in the list please click on the city in the map to add one" />
    );

  let countries = [];

  const uniqueCountries = cities.filter((city) => {
    if (countries.includes(city.country, city.emoji)) {
      return false;
    } else {
      countries.push(city.country, city.emoji);
      return true;
    }
  });

  return (
    <div className={style.countryList}>
      <ul>
        {uniqueCountries.map((country) => (
          <CountryItem country={country} key={country.id} />
        ))}
      </ul>
    </div>
  );
}
