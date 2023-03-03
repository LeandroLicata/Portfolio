import Image from "next/image";
import Link from "next/link";

export default function Card({ name, image, description, url }) {
  return (
    <div className="card text-white bg-secondary m-3">
      <h4>{name}</h4>
      <img src={image} alt="project" width={300} height={200} />
      <p>{description}</p>
      <p>
        Demo <Link href={url[0]}>{url[0]}</Link>
      </p>
      <p>
        Code <Link href={url[1]}>{url[1]}</Link> (front-end){" "}
        <Link href={url[2]}> {url[2]} </Link> (back-end)
      </p>
    </div>
  );
}
