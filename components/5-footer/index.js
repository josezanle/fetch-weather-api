import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <a href="#">project</a>

      <a href="#" target="blank">
        Correo
      </a>

      <Link href="/privacy_policy">
        <a>Política de privacidad</a>
      </Link>

      <style jsx>
        {`
          .footer {
            width: 100vw;
            min-height: 70vh;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            background: #b4bad2;
            color: white;
          }

          a {
            color: white;
            margin: 1em;
          }
        `}
      </style>
    </div>
  );
};
export default Footer;
