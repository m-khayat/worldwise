import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { CitiesContext } from "../../contexts/CitiesContext";
import style from "./Map.module.css";

export default function Map() {
  const { cities } = useContext(CitiesContext);
  const [mapPosition, setMapposition] = useState([40, 0]);
  const [searchParam] = useSearchParams();
  const maplat = searchParam.get("lat");
  const maplng = searchParam.get("lng");

  useEffect(
    function () {
      if (maplat && maplng) setMapposition([maplat, maplng]);
    },
    [maplat, maplng]
  );

  return (
    <div className={style.mapContainer}>
      <MapContainer
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={true}
        className={style.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city.emoji}</span> <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={mapPosition} />
        <SetOnClick />
      </MapContainer>
    </div>
  );

  function ChangeCenter({ position }) {
    const map = useMap();
    map.setView(position);
    return null;
  }

  function SetOnClick() {
    const navegate = useNavigate();

    useMapEvents({
      click: (e) => navegate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
    });

    return null;
  }
}
