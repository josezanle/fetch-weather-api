import Link from "next/link";

const Unete = () => {
  return (
    <div className="container">
      <h2>Unete a nosotros!</h2>
      <button>
        <Link href="/register">
          <a>
            <h3>Registrarme</h3>
          </a>
        </Link>
      </button>
      <style jsx>
        {`
          .container {
            width: 100vw;
            min-height: 50vh;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: column;
            margin-bottom: 4em;
          }
          h2 {
            font-size: 4em;
            font-weight:bold;
            color: #e2a058;
          }
          button {
            outline: none;
            border: none;
            border: 5px solid #e2a058;
            background: white;
            border-radius: 1em;
            padding: 1em 1.5em;
            margin-top: 0.5em;
          }
          button:hover {
            background: #e2a058;
            color: white;
          }
        `}
      </style>
    </div>
  );
};

export default Unete;
