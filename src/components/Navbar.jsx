import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const handleNavLinkClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <div className="navbar-brand text-success col-md-8">
            Leandro Licata
          </div>
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link
                className="nav-link"
                href="#home"
                onClick={(event) => handleNavLinkClick(event, "home")}
              >
                Inicio
                <span className="visually-hidden">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                href="#skills"
                onClick={(event) => handleNavLinkClick(event, "skills")}
              >
                Tecnologías
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                href="#projects"
                onClick={(event) => handleNavLinkClick(event, "projects")}
              >
                Proyectos
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                href="#contact"
                onClick={(event) => handleNavLinkClick(event, "contact")}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
