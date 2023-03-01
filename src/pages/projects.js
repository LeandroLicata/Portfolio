import Image from "next/image";

export default function Projects() {
  return (
    <section>
      <h2> Proyectos </h2>
      <div class="card-deck">
        <div class="card">
          <Image
            class="card-img-top"
            src="ruta-a-imagen-proyecto1.jpg"
            alt="Imagen del Proyecto 1"
          />
          <div class="card-body">
            <h5 class="card-title"> Título del Proyecto 1 </h5>
            <p class="card-text"> Descripción breve del proyecto 1 </p>
            <a href="url-demo-proyecto1" class="btn btn-primary">
              {" "}
              Demo{" "}
            </a>
            <a href="url-codigo-frontend-proyecto1" class="btn btn-secondary">
              {" "}
              Código Frontend{" "}
            </a>
            <a href="url-codigo-backend-proyecto1" class="btn btn-secondary">
              {" "}
              Código Backend{" "}
            </a>
          </div>
        </div>
        <div class="card">
          <Image
            class="card-img-top"
            src="ruta-a-imagen-proyecto2.jpg"
            alt="Imagen del Proyecto 2"
          />
          <div class="card-body">
            <h5 class="card-title"> Título del Proyecto 2 </h5>
            <p class="card-text"> Descripción breve del proyecto 2 </p>
            <a href="url-demo-proyecto2" class="btn btn-primary">
              {" "}
              Demo{" "}
            </a>
            <a href="url-codigo-frontend-proyecto2" class="btn btn-secondary">
              {" "}
              Código Frontend{" "}
            </a>
            <a href="url-codigo-backend-proyecto2" class="btn btn-secondary">
              {" "}
              Código Backend{" "}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
