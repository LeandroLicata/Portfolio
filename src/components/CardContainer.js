import Card from "./Card";
import projects from "@/data/projects";

export default function CardContainer() {
  return (
    <div>
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
    </div>
  );
}
