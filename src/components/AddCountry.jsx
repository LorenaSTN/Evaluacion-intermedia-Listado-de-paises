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
        <input type="text" value={name} onChange={handleNameCountry} />

        <input type="text" value={capital} onChange={handleNameCapital} />

        <input type="text" id="flag" value={flag} onChange={handleFlag} />

        <input value={continent} onChange={handleNameContinent} />

        <button type="submit" onClick={handleSubmit}>
          Add Country
        </button>
      </form>
    </div>
  );
}

export default AddCountry;
