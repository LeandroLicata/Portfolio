import Image from "next/image";
import Link from "next/link";

export default function Card({ name, image, description, url }) {
  return (
    <div className="card border-info m-3">
      <div className="card-body row flex-column flex-sm-row">
        <img src={image} alt="project" layout="responsive" className="col-12 col-sm-4 mb-3 mb-sm-0"/>
        <div className="col-12 col-sm-8">
          <h4 className="card-title text-secondary">{name}</h4>
          <p className="card-text">{description}</p>
          <p className="card-text">
            Demo <Link href={url[0]}>{url[0]}</Link>
          </p>
          <p className="card-text">
            Code <Link href={url[1]}>{url[1]}</Link> (front-end){" "}
            <Link href={url[2]}> {url[2]} </Link> (back-end)
          </p>
        </div>
      </div>
    </div>
  );
}

