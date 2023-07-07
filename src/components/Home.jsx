export default function Home() {
  return (
    <section id="home" >
      <div className="container" style={{ paddingTop: "80px" }}>
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
            Constantemente busco expandir mi conjunto de habilidades en el
            desarrollo de aplicaciones web a través de colaboraciones con
            equipos innovadores y creativos que ofrezcan nuevos desafíos. Estoy
            siempre dispuesto a aprender y mejorar, y estoy seguro de que puedo
            hacer una valiosa contribución a cualquier proyecto que emprenda.
          </p>
          <i className="fab fa-react fa-3x"></i>
        </div>
      </div>
    </section>
  );
}
