import Image from "next/image";
import Link from "next/link";

const Item = ({ item }) => {
  const { uri, titulo } = item;
  return (
    <Link href="/login">
      <a className="card">
        <Image
          width={300}
          height={250}
          alt="soy image ok"
          src={uri}
        />
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
              color: #4d6bca;
            }
            .icon {
              font-size: 3em;
              color: #4d6bca;
              margin-top: -10px
            }

            @media (max-width: 899px) {
              .card {
                margin-bottom: 0.5em;
              }
            }
          `}
        </style>
      </a>
    </Link>
  );
};

export default Item;
