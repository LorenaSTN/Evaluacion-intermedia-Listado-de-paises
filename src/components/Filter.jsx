function Filter({ onChangeInput }) {
  const handleFilterCountry = (ev) => {
    onChangeInput(ev.target.value);
  };

  return (
    <div>
      <h4>Filters</h4>
      <form action="">
        <label htmlFor="country">By Country</label>
        <input
          type="text"
          placeholder="Spain..."
          id="country"
          onChange={handleFilterCountry}
        />

        <label htmlFor="continent">By Continent</label>
        <select name="continent" id="continent">
          <option value="value1">All</option>
          <option value="value2">Africa</option>
          <option value="value3">North America</option>
          <option value="value4">South America</option>
          <option value="value5">Asia</option>
          <option value="value6">Europe</option>
          <option value="value7">Oceania</option>
        </select>
      </form>
    </div>
  );
}

export default Filter;
