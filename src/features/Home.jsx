import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ModalContact from "../components/ModalContact";
import CardFlip from "../components/CardFlip";
import homepage from "../assets/images/homepage.jpg";
import yoga from "../assets/images/yoga.jpg";
import ID from "../assets/images/ID.jpg";
import dashboard from "../assets/images/dashboard.jpg";
import Linkedin from "../assets/icons/Linkedin";
import Github from "../assets/icons/Github";
import Twitter from "../assets/icons/Twitter";

const name = "My name is Laurène!";
const position = "Full stack web-developper";
const intro =
  "Through a creative, proactive mindset and a pragmatic approach, I am eager to embark on innovative projects from their conception. ".split(
    " "
  );
const presentation01 = "Have you ever taken a risk? ";
const presentation02 =
  "And that's what I did in 2021 when I ventured into web development. Have a look on my career path";

function Home() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="h-100 w-100">
      <div
        className="container-fluid h-100 overflow-auto "
        style={{
          backgroundImage: `url(${homepage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className="text-center text-md-start p-3 w-100 d-flex flex-column align-items-center jusitfy-content-center">
          <div className="fs-5 fw-light mb-3 align-self-start">{position}</div>
          <div className=" my-3 text-wrap w-75 text-start shadow-lg">
            {intro.map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.25,
                  delay: i / 5,
                }}
                key={i}
                className="lh-base fs-4 fw-bold px-1 d-inline-block">
                {el}{" "}
              </motion.span>
            ))}
          </div>
          <div className="buttons-intro p-3 d-flex align-items-start">
            <button
              onClick={() => setModalShow(true)}
              className="btn btn-outline-light rounded-pill fw-semibold fs-5 p-3">
              Contact-me !
            </button>
            <Link
              to="/projects"
              className="white-color fs-5 p-3 link-underline-light link-offset-3 hover:text-white">
              Discover my work
            </Link>
          </div>
        </div>
      </div>
      <div className=" py-5 w-100 bg_primary-color">
        <div className="p-4 mx-2">
          <h3 className="white-color fs-4 fw-medium text-uppercase">
            Most recent works
          </h3>
          <p className="white-color fs-5 fw-light">
            What have I been doing recently ?
          </p>
        </div>
        <Row className="justify-content-md-center">
          <Col md={6} lg={3} className="mb-4">
            <CardFlip
              frontText="yogaRoom"
              backText="YogaClass to manage class bookings, user management"
              image={yoga}
            />
          </Col>
          <Col md={6} lg={3} className="mb-4">
            <CardFlip
              frontText="dashBoard"
              backText="YogaClass to manage class bookings, user management"
              image={dashboard}
            />
          </Col>
          <Col md={6} lg={3} className="mb-4">
            <CardFlip
              frontText="dashBoard"
              backText="YogaClass to manage class bookings, user management"
              image={dashboard}
            />
          </Col>
        </Row>
      </div>
      <div className="container-fluid h-100 overflow-auto p-5">
        <Row className="align-items-lg-center">
          <Row className="d-flex justify-content-center">
            <h3 className="white-color fs-4 fw-medium text-uppercase p-4">
              What about me?
            </h3>
          </Row>
          <Col lg="6" xl="5" className="d-flex justify-content-center">
            <img
              className="img-fluid rounded"
              width="250px"
              height="350px"
              loading="lazy"
              src={ID}
              alt="About 1"
            />
          </Col>
          <Col lg="6" xl="7">
            <Row className="justify-content-xl-center">
              <div className="">
                <h2 className="mb-3 fs-4 primary-color mb-3">
                  {presentation01}
                </h2>
                <p className="mb-5">
                  {name} {presentation02}
                </p>
                <Row>
                  <div className="d-flex flex-row">
                    <Link
                      to="https://github.com/LaureneEpp"
                      className="rounded-circle m-3 p-1 border-2 ">
                      <Github height="40" width="40" color="primary-color" />
                    </Link>
                    <Link
                      to="https://linkedin.com"
                      className="rounded-circle m-3 p-1 border-2 ">
                      <Linkedin height="40" width="40" color="primary-color" />
                    </Link>
                    <Link
                      to="https://twitter.com"
                      className="rounded-circle m-3 p-1 border-2 ">
                      <Twitter height="40" width="40" color="primary-color" />
                    </Link>
                  </div>
                </Row>
              </div>
            </Row>
          </Col>
        </Row>
      </div>
      <ModalContact show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}

export default Home;
