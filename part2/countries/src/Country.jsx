import { useState, useEffect } from "react";

import axios from "axios";

const Country = ({ filteredCountries }) => {
  //   console.log("country in the Country component", filteredCountries);
  const { name, capital, area, flags, languages } = filteredCountries[0]; // destructuring the properties I want to use from the object

  const [forecast, setForecast] = useState(undefined);
  // The forecast is initially set to undefined, this is because the data does NOT exist when the Country component loads. Only when the counts components gets the filteredCountries can the component start making a request to the api. Therefore, "initially" the forecast is undefined
  //   console.log(name, capital, area, flags, languages);

  // const { main, weather, wind } = forecast;

  useEffect(() => {
    axios
      .get("https://api.openweathermap.org/data/2.5/weather", {
        params: {
          q: `${name.common}`,
          APPID: `${process.env.REACT_APP_API_KEY}`,
        },
      })

      .then((response) => {
        const data = response.data;
        setForecast(data);

        // console.log("This is the weather data ", data);
      });
  }, [name]);

  const languagesObjectToArray = Object.entries(languages);
  console.log(
    `http://openweathermap.org/img/wn/${forecast?.weather?.icon}@2x.png`,
    forecast
  );

  return (
    <>
      <h1> {name.common}</h1>
      <p> Capital : {capital[0]}</p>
      <p>Area : {area}</p>
      <ul>
        {languagesObjectToArray.map(([key, language]) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={flags.png} alt={`the flag of ${name}`} />

      {forecast && (
        <>
          <h2>Here is the weather for :{name.common}</h2>
          <p>The temparature is : {forecast?.main?.temp}</p>
          <img
            src={`http://openweathermap.org/img/wn/${forecast?.weather[0]?.icon}@2x.png`}
            alt="weather icon"
          />
          <p> {forecast?.weather?.description}</p>
          <p>The wind speed is currently: {forecast?.wind?.speed} m/s</p>
        </>
      )}
    </>
  );
};

export default Country;
