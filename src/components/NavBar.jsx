import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg_primary-color fixed-top z-2 p-4">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"></a>
        <Link to="/" className="navbar-brand">
          <span className="fw-semibold link-underline-opacity-100">
            Coding
            <strong>
              <span className="secondary-color">Portfolio</span>
            </strong>
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link active white-color"
                aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cv" className="nav-link">
                Cv
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/skills" className="nav-link">
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link">
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
