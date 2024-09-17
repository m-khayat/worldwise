import React, { useContext } from "react";
import { CitiesContext } from "../../contexts/CitiesContext";

import Cityitem from "./Cityitem/Cityitem";
import Spinner from "../Spinner/Spinner";
import Message from "../Message/Message";
import style from "./CityList.module.css";
export default function CityList() {
  const { cities, isLoading } = useContext(CitiesContext);
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="there is no city in the list please click on the city in the map to add one" />
    );
  return (
    <div className={style.cityList}>
      <ul>
        {cities.map((city) => (
          <Cityitem city={city} key={city.id} />
        ))}
      </ul>
    </div>
  );
}
