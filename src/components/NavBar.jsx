import { useState } from "react";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";
import ModalContact from "./ModalContact";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function NavBar() {
  // const [modal, setModal] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <nav className="navbar navbar-expand-lg bg_primary-color fixed-top z-2 p-4">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand fs-4">
          <span className="fw-bold link-offset-2 link-underline-opacity-100">
            Coding
            <strong>
              <span className="secondary-color">Portfolio</span>
            </strong>
          </span>
        </Link>
        <button
          className="navbar-toggler border border-white"
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
              <NavLink path={"/"} text={"Home"} />
            </li>
            <li className="nav-item">
              <NavLink path={"/cv"} text={"Cv"} />
            </li>
            <li className="nav-item">
              <NavLink path={"/skills"} text={"Skills"} />
            </li>
            <li className="nav-item">
              <NavLink path={"/projects"} text={"Projects"} />
            </li>
            <li className="nav-item">
              <Button
                variant="outline-light"
                onClick={() => setModalShow(true)}
                className="nav-link fw-semibold fs-5">
                Contact
              </Button>
            </li>
          </ul>
        </div>
      </div>

      <ModalContact show={modalShow} onHide={() => setModalShow(false)} />
    </nav>
  );
}

export default NavBar;
