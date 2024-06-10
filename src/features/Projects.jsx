import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import CardProject from "../components/CardProject";
import yoga from "../assets/images/yoga.jpg";
import dashboard from "../assets/images/dashboard.jpg";
import news from "../assets/images/news.jpg";
import fabric from "../assets/images/fabric.jpg";

function Projects() {
  return (
    <div className="h-100 overflow-auto">
      <div className="d-flex align-items-center justify-content-center h-100">
        <div className="p-3 overflow-y-scroll m-2">
          <Row className="justify-content-md-center">
            <Col md={6} lg={3} className="mb-4">
              <Link to="/cv">
                <CardProject image={yoga} text="YogaPlace" />
              </Link>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <Link to="#">
                <CardProject image={dashboard} text="Manage my payroll" />
              </Link>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <Link to="#">
                <CardProject image={news} text="Newsblog" />
              </Link>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <Link to="#">
                <CardProject image={fabric} text="Circular lab" />
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Projects;
