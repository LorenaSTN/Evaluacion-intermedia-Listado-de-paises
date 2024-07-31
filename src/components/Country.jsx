import "../scss/main/country.scss";

function Country({ item }) {
  return (
    <div className="country__card">
      <p>{item.flag}</p>
      <h4>{item.name.official}</h4>
      <p>{item.capital[0]}</p>
      <p>{item.continents[0]}</p>
    </div>
  );
}

export default Country;
