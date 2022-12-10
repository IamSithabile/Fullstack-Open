import React from "react";
import Country from "./Country";

const CountriesList = (props) => {
  const { filteredCountries, showCountry, query } = props;
  //   console.log("countries in the coultriesList component", filteredCountries);

  if (query === "") {
    return <p>Search for a country in the field above</p>;
  }

  if (filteredCountries.length > 10) {
    return <p>There are too many results, please refine the search</p>;
  }

  if (filteredCountries.length === 1) {
    return <Country filteredCountries={filteredCountries} />;
  }

  return (
    <ul>
      {filteredCountries.map((country) => {
        return (
          <>
            <li key={country.name.common}>
              {country.name.common}
              <button
                onClick={() => {
                  showCountry(country.name.common);
                }}
              >
                Show
              </button>
            </li>
          </>
        );
      })}
    </ul>
  );
};

export default CountriesList;
