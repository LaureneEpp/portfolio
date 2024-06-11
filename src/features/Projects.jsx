import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import CardProject from "../components/CardProject";
import { imageMap, projectsList } from "../components/Data";


function Projects() {

  return (
    <div className="h-100 overflow-auto">
      <div className="d-flex align-items-center justify-content-center h-100">
        <div className="p-3 overflow-y-scroll m-2">
          <Row className="justify-content-md-center">
            {projectsList.map((project) => (
              <Col md={6} lg={3} className="mb-4" key={project.id}>
                <Link to={project.path}>
                  <CardProject
                    image={imageMap[project.image]}
                    title={project.title} 
                  />
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Projects;
