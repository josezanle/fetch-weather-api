import Image from "next/image";

const Card = ({ item }) => {
  const { uri, titulo } = item;
  return (
    <div className="card">
      <Image width={300} height={300} alt="soy image ok" src={uri} />
      <h2>{titulo}</h2>
      <span className="icon">&#10230;</span>

      <style jsx>
        {`
          .card {
            width: 300px;
            display: flex;
            justify-content: center;
            flex-flow: column;
          }
          h2 {
            margin-top: 0.5em;
          }
          .icon {
            font-size: 2em;
            color: red;
          }

          @media (max-width: 899px) {
            .card {
              margin-bottom: 0.5em;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Card;
