import "../scss/App.scss";
import dataCountries from "../services/data.json";
import ListCountries from "./ListCountries";
import Filter from "./Filter";
import { useState } from "react";
// import AddCountry from "./AddCountry";

function App() {
  const [inputCountry, setInputCountry] = useState("");
  const [inputContinent, setInputContinent] = useState("value1");
  const [addNameCountry, setNameCountry] = useState("");

  //FILTRAR
  const handleFilterCountry = (valueInput) => {
    setInputCountry(valueInput);
  };

  const handleFilterContinent = (valueSelect) => {
    setInputContinent(valueSelect);
  };

  const getContinentName = (value) => {
    switch (value) {
      case "value2":
        return "Africa";
      case "value3":
        return "North America";
      case "value4":
        return "South America";
      case "value5":
        return "Asia";
      case "value6":
        return "Europe";
      case "value7":
        return "Oceania";
      default:
        return "All";
    }
  };

  const filteredCountries = dataCountries.filter((country) => {
    const matchesCountry = country.name.official
      .toLowerCase()
      .includes(inputCountry.toLowerCase());
    const matchesContinent =
      inputContinent === "value1" ||
      country.continents[0] === getContinentName(inputContinent);
    return matchesCountry && matchesContinent;
  });

  //AÑADIR PAIS

  return (
    <>
      <header>
        <h2>Country Info App</h2>
        <h4>
          Explore Information about countries, capitals and flags. Add new
          countries and filter through the list!
        </h4>
      </header>
      <main>
        <Filter
          onChangeInput={handleFilterCountry}
          onChangeSelect={handleFilterContinent}
        />
        {/* <AddCountry onChangeNameCountry={handleAddNameCountry} onChangeNameCapital={}/> */}
        <ListCountries countriesData={filteredCountries} />
      </main>
    </>
  );
}

export default App;
