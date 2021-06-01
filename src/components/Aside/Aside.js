import { useEffect, useState } from "react";

import "./Aside.css";
import WeatherCard from "../WeatherCard";
import { getWeather } from "../../services/data";

const Aside = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const cityCodes = [727011, 728193, 726050, 732770, 864561, 733191, 864553, 727524, 864558, 864562, 727221];
    cityCodes.forEach((code) => {
      getWeather(code)
        .then((res) => res.json())
        .then((info) => setData((prevState) => [...prevState, info]));
    });
  }, []);
  return (
    <div className="aside">
      {data.map((city) => {
        return <WeatherCard key={city.id} data={city} />;
      })}
    </div>
  );
};

export default Aside;
