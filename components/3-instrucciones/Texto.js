const Texto = ({ item }) => {
  const { icon, titulo, descripcion } = item;
  return (
    <div className="card">
      <span
        style={{
          WebkitMask: `url(${icon}) 50% 100% no-repeat`,
          backgroundPosition: "center",
          backgroundImage:
            "linear-gradient(to right, #d54889 0%, #e2a058 100%)",
          width: "50px",
          height: "50px",
        }}
      ></span>
      <h2>{titulo}</h2>
      <p>{descripcion}</p>

      <style jsx>
        {`
          .card {
            width: 300px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: column;
          }

          h2 {
            margin: 0.5em 0;
            color: #d54889;
          }

          @media (max-width: 899px) {
            .card {
              margin-bottom: 1em;
            }
          }
          @media (max-width: 388px) {
            .card {
              width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Texto;
