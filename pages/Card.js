import React from "react";

const kelvin = 273.15;
// entidad para el grado
// &#x2103

const Card = ({ busqueda }) => {
  const { name, main } = busqueda;
  if (!name) {
    return null;
  }

  return (
    <div className="card">
      <h1>{name}</h1>
      <h3>
        Temperatura:
        <p>{parseInt(main.temp - kelvin)} &#x2103;</p>
      </h3>
      <style jsx>
        {`
          .card {
            width: 450px;
            height: 700px;
            display: flex;
            justify-content: center;
            flex-flow: column;
            border-radius: 1em;
            background: white;
            border: 3px solid silver;
          }
          h1 {
            font-size: 4em;
          }
          h3 {
            font-size: 2.5em;
          }
        `}
      </style>
    </div>
  );
};

export default Card;
