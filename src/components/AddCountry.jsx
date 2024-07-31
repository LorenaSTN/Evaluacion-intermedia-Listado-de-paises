function AddCountry({
  onChangeNameCountry,
  onChangeNameCapital,
  onChangeFlag,
  onChangeContinent,
}) {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const handleNameCountry = (ev) => {
    onChangeNameCountry(ev.target.value);
  };

  const handleNameCapital = (ev) => {
    onChangeNameCapital(ev.target.value);
  };

  const handleFlag = (ev) => {
    onChangeFlag(ev.target.value);
  };

  const handleNameContinent = (ev) => {
    onChangeContinent(ev.target.value);
  };

  return (
    <div>
      <h4>Add New Country</h4>
      <form>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameCountry}
        />

        <label htmlFor="capital">Capital:</label>
        <input
          type="text"
          id="capital"
          value={capital}
          onChange={handleNameCapital}
        />

        <label htmlFor="flag">Flag Emoji:</label>
        <input type="text" id="flag" value={flag} onChange={handleFlag} />

        <label htmlFor="continent">Continent:</label>
        <input
          id="continent"
          value={continent}
          onChange={handleNameContinent}
        />

        <button type="submit" onClick={handleSubmit}>
          Add Country
        </button>
      </form>
    </div>
  );
}

export default AddCountry;
