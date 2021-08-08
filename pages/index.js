import React, { useEffect, useState } from "react";
import Card from "./Card";

// api key 5f2699df4b84b441ca43c87bd28da369

// city name
// url api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

// city and code
// api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={API key}

// api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}

// lang
// http://api.openweathermap.org/data/2.5/weather?id=524901&lang=fr&appid={API key}

const Home = () => {
  const [busqueda, setBusqueda] = useState({
    ciudad: "buenos aires",
  });
  const { ciudad } = busqueda;

  const getClima = async () => {
    const appId = "5f2699df4b84b441ca43c87bd28da369";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${appId}&lang=es`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setBusqueda(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getClima();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <Card busqueda={busqueda} />
      <style jsx>
        {`
          .container {
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #ebebeb;
          }
        `}
      </style>
    </div>
  );
};

export default Home;
