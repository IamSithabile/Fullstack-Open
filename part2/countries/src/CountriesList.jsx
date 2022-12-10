import React from "react";
import Country from "./Country";

const CountriesList = (props) => {
  const { filteredCountries } = props;
  //   console.log("countries in the coultriesList component", filteredCountries);

  if (filteredCountries.length > 10) {
    return <p>There are too many results, please refine the search</p>;
  }

  if (filteredCountries.length === 1) {
    return <Country filteredCountries={filteredCountries} />;
  }

  return (
    <ul>
      {filteredCountries.map((country) => {
        return <li key={country.name.common}> {country.name.common}</li>;
      })}
    </ul>
  );
};

export default CountriesList;
