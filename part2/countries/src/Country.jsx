import React from "react";

const Country = ({ filteredCountries }) => {
  //   console.log("country in the Country component", filteredCountries);
  const { name, capital, area, flags, languages } = filteredCountries[0];
  //   console.log(name, capital, area, flags, languages);

  const entries = Object.entries(languages);

  return (
    <>
      <h1> {name.common}</h1>
      <p> Capital : {capital[0]}</p>
      <p>Area : {area}</p>
      <ul>
        {entries.map(([key, value]) => (
          <li key={value}>{value}</li>
        ))}
      </ul>
      <img src={flags.png} alt={`the flag of ${name}`} />
    </>
  );
};

export default Country;
