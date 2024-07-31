import "../scss/App.scss";
import dataCountries from "../services/data.json";
import ListCountries from "./ListCountries";
import Filter from "./Filter";
import { useState } from "react";

function App() {
  const [inputCountry, setInputCountry] = useState("");

  const handleFilterCountry = (valueInput) => {
    console.log(valueInput);
    setInputCountry(valueInput);
  };

  const filteredCountries = dataCountries.filter((filterCountry) => {
    return filterCountry.name.official
      .toLowerCase()
      .includes(inputCountry.toLowerCase());
  });

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
        <Filter onChangeInput={handleFilterCountry} />
        <ListCountries countriesData={filteredCountries} />
      </main>
    </>
  );
}

export default App;
