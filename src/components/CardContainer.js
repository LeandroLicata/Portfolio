import Card from "./Card";
import projects from "@/data/projects";

export default function CardContainer() {
  return (
    <div className="container">
      <div className="row">
        {projects.map((project) => {
          return (
            <div className="col-6">
              <Card
                name={project.name}
                image={project.image}
                description={project.description}
                url={project.url}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
