import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function Skills() {
  return (
    <section id="skills">
      <div className="container" style={{ paddingTop: "80px" }}>
        <div className="row">
          <h3 className="text-info mb-4 text-center">Tecnologías</h3>
          <div className="col-6">
            <h4 className="text-secondary mb-4">Front-End</h4>
            <p>
              <FontAwesomeIcon
                icon={brands("html5")}
                className="text-danger mx-2"
                size="lg"
              />
              HTML5
            </p>
            <p>
              <FontAwesomeIcon
                icon={brands("css3-alt")}
                className="text-danger mx-2"
                size="lg"
              />
              CSS3
            </p>
            <p>
              <FontAwesomeIcon
                icon={brands("square-js")}
                className="text-danger mx-2"
                size="lg"
              />
              JavaScript
            </p>
            <p>
              <FontAwesomeIcon
                icon={brands("react")}
                className="text-danger mx-2"
                size="lg"
              />
              React
            </p>
            <p>
              <FontAwesomeIcon
                icon={solid("retweet")}
                className="text-danger mx-2"
                size="lg"
              />
              Redux
            </p>
            <p>
              <FontAwesomeIcon
                icon={brands("node-js")}
                className="text-danger mx-2"
                size="lg"
              />
              Next
            </p>
            <p>
              <FontAwesomeIcon
                icon={brands("bootstrap")}
                className="text-danger mx-2"
                size="lg"
              />
              Bootstrap
            </p>
          </div>
          <div className="col-6">
            <h4 className="text-secondary mb-4">Back-end</h4>
            <p>
              <FontAwesomeIcon
                icon={brands("node-js")}
                className="text-danger mx-2"
                size="lg"
              />
              Node.js
            </p>
            <p>
              <FontAwesomeIcon
                icon={solid("server")}
                className="text-danger mx-2"
                size="lg"
              />
              Express
            </p>
            <p>
              <FontAwesomeIcon
                icon={solid("database")}
                className="text-danger mx-2"
                size="lg"
              />
              MongoDB
            </p>
            <p>
              <FontAwesomeIcon
                icon={solid("database")}
                className="text-danger mx-2"
                size="lg"
              />
              PostgreSQL
            </p>
            <p>
              <FontAwesomeIcon
                icon={solid("link")}
                className="text-danger mx-2"
                size="lg"
              />
              Mongoose
            </p>
            <p>
              <FontAwesomeIcon
                icon={brands("js-square")}
                className="text-danger mx-2"
                size="lg"
              />
              Sequelize
            </p>
            <p>
              <FontAwesomeIcon
                icon={solid("cloud-arrow-up")}
                className="text-danger mx-2"
                size="lg"
              />
              Cloudinary
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
