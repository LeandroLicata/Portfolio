import Card from "./Card";
import projects from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects">
      <h3 className="text-info text-center" style={{ paddingTop: "80px" }}>
        Proyectos
      </h3>
      {projects.map((project) => {
        return (
          <Card
            key={project.name}
            name={project.name}
            image={project.image}
            description={project.description}
            url={project.url}
          />
        );
      })}
    </section>
  );
}
