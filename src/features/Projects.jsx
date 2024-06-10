import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import yoga from "../assets/images/yoga.jpg";
import dashboard from "../assets/images/dashboard.jpg";
import news from "../assets/images/news.jpg";
import fabric from "../assets/images/fabric.jpg";


function Projects() {
  return (
    <div className="h-100 overflow-auto">
      <div className="h-100 d-flex align-items-center justify-content-center ">
        <div className="p-3 overflow-y-scroll" style={{ marginTop: "10rem" }}>
          <Row>
            <div className="col-lg-3 col-md-6 mb-4">
              <Link to="#">
                <div className="position-relative overflow-hidden rounded shadow">
                  <Image
                    src={yoga}
                    fluid
                    className="object-fit-cover border rounded"
                    style={{width:"25rem", height:"15rem"}}
                  />
                  <div className="position-absolute top-0 left-0 p-5">
                    <h4 className="fs-4 fw-semibold primary-color">
                      YogaPlace
                    </h4>
                    <p className=" fs-6 fw-medium white-color">
                      Yoga class bookings Mgt
                    </p>
                  </div>
                </div>
              </Link>
            </div>{" "}
            <div className="col-lg-3 col-md-6 mb-4">
              <Link to="#">
                <div className="position-relative overflow-hidden rounded shadow">
                  <Image
                    src={dashboard}
                    fluid
                    className="object-fit-cover border rounded"
                    style={{width:"25rem", height:"15rem"}}

                  />
                  <div className="position-absolute top-0 left-0 p-5">
                    <h4 className="fs-4 fw-semibold primary-color">
                      Manage my payroll
                    </h4>
                    <p className=" fs-6 fw-medium white-color">
                      Payroll Dashboard [WIP]
                    </p>
                  </div>
                </div>
              </Link>
            </div>{" "}
            <div className="col-lg-3 col-md-6 mb-4">
              <Link to="#">
                <div className="position-relative overflow-hidden rounded shadow">
                  <Image
                    src={news}
                    fluid
                    className="object-fit-cover border rounded"
                    style={{width:"25rem", height:"15rem"}}

                  />
                  <div className="position-absolute top-0 left-0 p-5">
                    <h4 className="fs-4 fw-semibold primary-color">
                      what about?
                    </h4>
                    <p className=" fs-6 fw-medium white-color">
                      Blog Post [WIP]
                    </p>
                  </div>
                </div>
              </Link>
            </div>{" "}
            <div className="col-lg-3 col-md-6 mb-4">
              <Link to="#">
                <div className="position-relative overflow-hidden rounded shadow">
                  <Image
                    src={fabric}
                    fluid
                    className="object-fit-cover border rounded" 
                    style={{width:"25rem", height:"15rem"}}

                  />
                  <div className="position-absolute top-0 left-0 p-5">
                    <h4 className="fs-4 fw-semibold primary-color">
                    Circular lab
                    </h4>
                    <p className=" fs-6 fw-medium white-color">
                    Market place [WIP]
                    </p>
                  </div>
                </div>
              </Link>
            </div>{" "}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Projects;
