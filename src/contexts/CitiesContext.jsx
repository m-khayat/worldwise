const { createContext, useState, useEffect } = require("react");

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([
    {
      cityName: "la Pobla de Segur",
      country: "Spain",
      emoji: "🇪🇸",
      date: "2024-09-19T20:52:27.439Z",
      notes: "dfgdfd",
      position: {
        lat: "42.27730877423709",
        lng: "0.9887695312500001",
      },
      id: 1,
    },
    {
      cityName: "Madrid",
      country: "Spain",
      emoji: "🇪🇸",
      date: "2024-09-19T21:00:22.031Z",
      notes: "dfsdg",
      position: {
        lat: "40.397009012567324",
        lng: "-3.6940833234476615",
      },
      id: 2,
    },
  ]);

  const [isLoading, setIsLoading] = useState(false);
  const [curCity, setCurCity] = useState(null);

  function getCity(id) {
    setIsLoading(true);
    const city = cities.find((city) => city.id === Number(id));
    if (city) {
      setCurCity(city);
    } else {
      throw new Error("City not found");
    }
    setIsLoading(false);
  }

  function addCity(newCity) {
    setIsLoading(true);
    newCity.id = cities.length
      ? Math.max(...cities.map((city) => city.id)) + 1
      : 1;
    setCities([...cities, newCity]);
    setIsLoading(false);
  }

  function deleteCity(id) {
    setIsLoading(true);
    setCities(cities.filter((city) => city.id !== id));
    setIsLoading(false);
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        curCity,
        getCity,
        addCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

export { CitiesProvider, CitiesContext };
