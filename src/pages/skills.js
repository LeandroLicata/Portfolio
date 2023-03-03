import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function skills() {
  return (
    <div className=" mt-4 font container">
      <div className="row">
        <h3 className="text-info mb-4">Tecnologías</h3>
        <div className="col-6">
          <h4 className="text-secondary mb-4">Front-End</h4>
          <p>
            <FontAwesomeIcon
              icon={brands("html5")}
              className="text-danger mx-2"
              size="lg"
              fixedWidth
            />
            HTML5
          </p>
          <p>
            <FontAwesomeIcon
              icon={brands("css3-alt")}
              className="text-danger mx-2"
              size="lg"
              fixedWidth
            />
            CSS3
          </p>
          <p>
            <FontAwesomeIcon
              icon={brands("square-js")}
              className="text-danger mx-2"
              size="lg"
              fixedWidth
            />
            JavaScript
          </p>
          <p>
            <FontAwesomeIcon
              icon={brands("react")}
              className="text-danger mx-2"
              size="lg"
              fixedWidth
            />
            React
          </p>
          <p>
            <FontAwesomeIcon
              icon={solid("retweet")}
              className="text-danger mx-2"
              size="lg"
              fixedWidth
            />
            Redux
          </p>
          <p>
            <FontAwesomeIcon
              icon={brands("node-js")}
              className="text-danger mx-2"
              size="lg"
              fixedWidth
            />
            Next
          </p>
          <p>
            <FontAwesomeIcon
              icon={brands("bootstrap")}
              className="text-danger mx-2"
              size="lg"
              fixedWidth
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
              fixedWidth
            />
            Node.js
          </p>
          <p>
            <FontAwesomeIcon
              icon={solid("server")}
              className="text-danger mx-2"
              size="lg"
              fixedWidth
            />
            Express
          </p>
          <p>
            <FontAwesomeIcon
              icon={solid("database")}
              className="text-danger mx-2"
              size="lg"
              fixedWidth
            />
            MongoDB
          </p>
          <p>
            <FontAwesomeIcon
              icon={solid("database")}
              className="text-danger mx-2"
              size="lg"
              fixedWidth
            />
            PostgreSQL
          </p>
          <p>
            <FontAwesomeIcon
              icon={solid("link")}
              className="text-danger mx-2"
              size="lg"
              fixedWidth
            />
            Mongoose
          </p>
          <p>
            <FontAwesomeIcon
              icon={brands("js-square")}
              className="text-danger mx-2"
              size="lg"
              fixedWidth
            />
            Sequelize
          </p>
          <p>
            <FontAwesomeIcon
              icon={solid("cloud-arrow-up")}
              className="text-danger mx-2"
              size="lg"
              fixedWidth
            />
            Cloudinary
          </p>
        </div>
      </div>
    </div>
  );
}
