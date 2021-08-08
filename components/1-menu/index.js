import Link from "next/link";

const Menu = () => {
  return (
    <div className="menu">
      <div className="logo">ClusterMeet</div>
      <div className="sesion">
        <Link href="/login">
          <a className="button">
            <h3>Iniciar sesion</h3>
          </a>
        </Link>
        <Link href="/register">
          <a className="button">
            <h3>Registrarme</h3>
          </a>
        </Link>
      </div>
      <style jsx>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&display=swap");
          .menu {
            width: 100vw;
            padding: 1em 2em;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
          }
          .logo {
            color: #d54889;
            font-size: 2em;
            font-family: "Dancing Script", cursive;
          }
          .logo,
          .sesion {
            width: 500px;
          }
          .sesion {
            display: flex;
            justify-content: flex-end;
          }
          .button {
            width: 150px;
            border-radius: 0.5em;
            padding: 0 0.5em;
            margin-left: 1em;
            border: 3px solid #5fb9f9;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .button:nth-child(2) {
            background: #5fb9f9;
            color: white;
          }

          // =================================
          @media (max-width: 500px) {
            .sesion {
              flex-flow: column;
              align-items: flex-end;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Menu;
