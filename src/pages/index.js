import Head from "next/head";
// import { Inter } from "@next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="container mt-4 font">
        <div className="row text-center">
          <h1 className="text-success">Leandro Nicolas Licata</h1>
          <h2 className="text-info mb-4">Full Stack Web Developer</h2>
          <div className="my-4">
            <a
              href="/LeandroLicata-CV.pdf"
              download
              className="btn btn-outline-light mb-5"
            >
              Descargar CV
            </a>
          </div>

          <h3 className="text-secondary">Acerca de mí</h3>
          <p className="">
            Soy un apasionado desarrollador web con experiencia en tecnologías
            como HTML, CSS, JavaScript, React, Node.js y MongoDB.
          </p>
          <p className="">
            Me encanta trabajar en equipo, aprender nuevas tecnologías y crear
            soluciones innovadoras.
          </p>
          <p className="mb-3">
            Siempre estoy buscando nuevos desafíos y colaboraciones con equipos
            creativos e innovadores para seguir mejorando mis habilidades en el
            desarrollo de aplicaciones web.
          </p>
          <i className="fab fa-react fa-3x"></i>
        </div>
      </div>
    </>
  );
}
