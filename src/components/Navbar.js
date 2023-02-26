import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-navy">
      <div className="container">
        <div className="col-md-8">
        <div className="navbar-brand">Logo</div>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link href="/">
                <div className="nav-link">Home</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/education">
                <div className="nav-link">Education</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/projects">
                <div className="nav-link">Projects</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/skills">
                <div className="nav-link">Skills</div>
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
