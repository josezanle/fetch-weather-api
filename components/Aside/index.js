// este componente retonara los 5 ultimos eventos mas recientes ingresados

import Item from "./Item";

const Aside = ({ eventos }) => {
  return (
    <div className="aside">
      <h2>Todays Highlight</h2>
      {eventos.map((item, index) => (
        <Item item={item} key={index} />
      ))}
      <style jsx>
        {`
          .aside {
            width: 350px;
            min-height:100vh;
            display: flex;
            flex-flow: column;
          }
        `}
      </style>
    </div>
  );
};

export default Aside;
