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
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
      <div className="container">
        <div className="col-md-8">
          <div className="navbar-brand" style={{ fontFamily: "Orbitron", color: colors.primary }}>
            Leandro Licata
          </div>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link href="/">
                <div
                  className="nav-link"
                  style={{
                    fontFamily: "Orbitron",
                    boxShadow: `0 0 5px ${colors.secondary}`, color: colors.secondary
                  }}
                >
                  <i className="fas fa-home mr-2"></i>
                  Home
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/education">
                <div
                  className="nav-link"
                  style={{
                    fontFamily: "Orbitron",
                    boxShadow: `0 0 5px ${colors.secondary}`, color: colors.secondary
                  }}
                >
                  <i className="fas fa-graduation-cap mr-2"></i>
                  Education
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/projects">
                <div
                  className="nav-link"
                  style={{
                    fontFamily: "Orbitron",
                    boxShadow: `0 0 5px ${colors.secondary}`, color: colors.secondary
                  }}
                >
                  <i className="fas fa-code mr-2"></i>
                  Projects
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/skills">
                <div
                  className="nav-link"
                  style={{
                    fontFamily: "Orbitron",
                    boxShadow: `0 0 5px ${colors.secondary}`, color: colors.secondary
                  }}
                >
                  <i className="fas fa-cogs mr-2"></i>
                  Skills
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact">
                <div
                  className="nav-link"
                  style={{
                    fontFamily: "Orbitron",
                    boxShadow: `0 0 5px ${colors.secondary}`, color: colors.secondary
                  }}
                >
                  <i className="fas fa-envelope mr-2"></i>
                  Contact
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
