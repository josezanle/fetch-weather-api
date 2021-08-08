import React from "react";
import { tresImagenes } from "../../data/options";
import Item from "./Item";

const Options = () => {
  return (
    <div className="container">
      {tresImagenes.map((item, index) => (
        <Item item={item} key={index} />
      ))}
      <style jsx>
        {`
          .container {
            width: 100vw;
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-wrap: wrap;
            margin-top:4em;
          }
        `}
      </style>
    </div>
  );
};

export default Options;
