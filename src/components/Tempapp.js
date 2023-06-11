import React, { useEffect, useState } from "react";

import "../css/style.css";

const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Varanasi");
  const [icon, seticon] = useState(null);
  useEffect(() => {
    const fetchAPI = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=51f1c6706b2695cb844b6ba7449e6817&units=metric`;
      const response = await fetch(url);

      const resJson = await response.json();
      setCity(resJson.main);
      seticon(resJson.weather);
    };

    fetchAPI();
  }, [search]);

  return (
    <>
      <div className="weather">
        <span className="title">Weather App</span>
        <br />
        <form>
          <div className="line">
          <h2 style={{marginRight:"10px"}}>Search City:</h2>
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="City"
                name="city"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
              {search && (
                <button className="clear-button" onClick={() => setSearch("")}>
                  <i className="fas fa-times"></i>
                </button>
              )}
            </div>
          </div>
          {/* <span className="or">OR</span> */}
          &nbsp; &nbsp; &nbsp;&nbsp;
          {/* <input type="text" placeholder="Country" name="country" /> */}
          {/* <button className="getweather">Submit</button> */}
        </form>

        <div>
          {icon ? (
            <img
              id="wicon"
              src={`http://openweathermap.org/img/wn/${icon[0].icon}@2x.png`}
              alt="weather icon"
            ></img>
          ) : (
            <p></p>
          )}
        </div>

        {!city ? (
          <p>NO Data found</p>
        ) : (
          <div className="info">
            <h1 className="location">{search}</h1>

            <div>
              <img className="icon" id="icon" />
            </div>

            <h1 className="temp">{city.temp}°C</h1>

            <h3 className="tempmin_max">
              {" "}
              Min : {city.temp_min}°C | Max : {city.temp_max}°C
            </h3>
          </div>
        )}
      </div>
    </>
  );
};

export default Tempapp;
