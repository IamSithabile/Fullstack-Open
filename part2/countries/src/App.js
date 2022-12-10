import { useState, useEffect } from "react";

import axios from "axios";
import CountriesList from "./CountriesList";
import Filter from "./components/Filter";

function App() {
  const [query, setQuery] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      const data = response.data;
      console.log(data);
      setCountries(data);
    });
  }, []);

  const filterHandler = (e) => {
    setQuery(e.target.value);
  };

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <h2>Search</h2>
      <Filter query={query} filterHandler={filterHandler} />
      <h2>Countries found:</h2>
      <CountriesList filteredCountries={filteredCountries} />
    </>
  );
}

export default App;
