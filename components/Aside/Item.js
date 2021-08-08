const Item = ({ item }) => {
  const { ciudad, pais, descripcion, nombreEvento } = item;

  return (
    <div className="item">
      <div className="image">image</div>
      <div className="content">
        <div className="titulo">
          <h5>{nombreEvento}</h5>
          <h5>17:30 hs</h5>
        </div>
        <div className="descripcion">
          <p>{descripcion}</p>
        </div>
        <div className="lugar">
          <h5>
            {ciudad} - {pais}
          </h5>
        </div>
      </div>

      <style jsx>
        {`
          .item {
            width: 350px;
            height: 100px;
            display: flex;
            justify-content: center;
            border: 1px solid #1c1c1c;
            border-radius: .5em;
            padding:.5em;
            margin: 0.5em 0;
          }
          .image {
            flex: 3;
          }
          .content {
            flex: 7;
          }
          .titulo {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .lugar {
            display: flex;
            justify-content: flex-end;
          }
        `}
      </style>
    </div>
  );
};

export default Item;
