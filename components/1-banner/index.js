import Image from "next/image";

const Banner = () => {
  return (
    <div className="banner">
      <div className="left">
        .<h2>Unete! En ClusterMeet hay muchas cosas para hacer</h2>
        <p>
          Únete a un grupo para conocer personas, hacer amigos, encontrar apoyo,
          desarrollar un negocio y explorar tus intereses. Se celebran miles de
          eventos todos los días, en línea y en persona.
        </p>
      </div>
      <div className="right"></div>
      <style jsx>
        {`
          .banner {
            width: 100vw;
            min-height: 90vh;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            position: relative;
          }

          .left,
          .right {
            width: 500px;
            min-height: 500px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: column;
          }

          h2 {
            width: 100%;
            font-size: 3em;
            line-height: 1em;
            margin-bottom: 0.2em;
          }
          p {
            font-size: 1.3em;
          }
          .right {
            background-image: url(/images/banner.svg);
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            margin-left: 2em;
          }
          .banner:before {
            position: absolute;
            top: 0;
            right: 2em;
            content: "";
            width: 3em;
            height: 3em;
            background: #b4bad2;
            border-radius: 100%;
            z-index: -100;
          }
          .banner:after {
            position: absolute;
            top: 2em;
            left: 8em;
            content: "";
            width: 5em;
            height: 5em;
            background: #e2a058;
            border-radius: 100%;
            z-index: -100;
          }

          // ==================================0

          @media (max-width: 600px) {
            .banner {
              padding: 0 1em;
            }
            .right {
              margin-left: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Banner;
