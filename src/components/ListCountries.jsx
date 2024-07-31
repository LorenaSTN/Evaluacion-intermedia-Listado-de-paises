import Country from "./Country";

function ListCountries({ countriesData }) {
  return (
    <div>
      {countriesData.map((countryData) => {
        return <Country key={countryData.name.official} item={countryData} />;
      })}
    </div>
  );
}

export default ListCountries;
