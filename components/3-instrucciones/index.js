import React from "react";
import { instruccionesMap } from "../../data/instrucciones";
import Texto from "./Texto";

const Instrucciones = () => {
  return (
    <div className="container">
      <div className="text">
        <h2>
          Cómo funciona
          <b> ClusterMeet</b>?
        </h2>
        <p>
          Conoce a personas nuevas que compartan tus intereses a través de
          eventos en línea y en persona. Crear una cuenta es gratis.
        </p>
      </div>
      {instruccionesMap.map((item, index) => (
        <Texto item={item} key={index} />
      ))}
      <style jsx>
        {`
          .container {
            width: 100vw;
            min-height: 80vh;
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-wrap: wrap;
            padding: 1em;
          }
          .text {
            width: 100vw;
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-flow: column;
            margin:4em 0;
          }
          h2 {
            width: 500px;
            font-size: 3em;
          }
          b {
            font-style: italic;
          }
          p {
            width: 500px;
            font-size:1.6em
          }

          @media (max-width: 388px) {
            .container {
              width: 100vw;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Instrucciones;
