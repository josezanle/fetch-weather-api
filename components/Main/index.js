import React from "react";

const Main = ({ eventos }) => {
  return (
    <div className="main">
      {eventos.map((item) => (
        <div className="card" key={item._id}>
          <div className="image">aqui imagen</div>
          <div className="text">
            <h1>{item.titulo}</h1>
            <p>{item.descripcion}</p>
          </div>
          <button>ver</button>
        </div>
      ))}
      <style jsx>
        {`
      
      .main{
          width:930px;
          min-height:100vh;
          display:flex;
          flex-wrap:wrap;
          background:yellow;
      }
      .card{
          width:300px;
          height:300px;
          border-radius:1em;
          margin:1em .5em;
          padding:.5em;
          background:white;
          display:flex;
          flex-flow:column;
      }
      .image,
      .text{
          flex:1;
          width:100%;
          height:100%;
          display:flex;
          align-items:center;
          flex-flow:column;


      }
      `}
      </style>
    </div>
  );
};

export default Main;
