import "../scss/main/country.scss";

function Country({ item }) {
  return (
    <div className="country__card">
      <p>{item.flag}</p>
      <h4>{item.name.official}</h4>
      <p>{item.capital}</p>
      <p>{item.continents}</p>
    </div>
  );
}

export default Country;
