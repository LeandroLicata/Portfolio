import Link from "next/link";

const colors = {
  primary: "#00ff9f",
  secondary: "#00b8ff",
  dark: "#001eff",
  accent: "#bd00ff",
  accent2: "#d600ff",
};

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary font">
      <div className="container">
        <div className="col-md-8">
          <div className="navbar-brand text-success">Leandro Licata</div>
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
        </div>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link href="/">
                <div className="nav-link">Home</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/skills">
                <div className="nav-link">Skills</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/projects">
                <div className="nav-link">Projects</div>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/contact">
                <div className="nav-link">Contact</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
