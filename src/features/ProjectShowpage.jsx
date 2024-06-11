import { useParams } from "react-router-dom";
import { projectsList } from "../components/Data";
import ReactPlayer from "react-player";

function ProjectShowpage() {
  const { id } = useParams();
  const project = projectsList.find((project) => project.id === parseInt(id));

  return (
    <div className="h-100 overflow-auto">
      <div className="bg_secondary-color me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
        <div className="my-3 p-3">
          <h2 className="fs-4 fw-bold">{project.title}</h2>
          <p className="lead">{project.subtitle}</p>
        </div>
        <div
          className="container-fluid bg_primary-color shadow-sm mx-auto h-100 p-3 h-100"
          style={{
            width: "80%",
            paddingBottom: "56.25%",
            borderRadius: "21px 21px 0 0",
          }}>
          <div className="w-100 d-flex justify-content-between flex-row">
            <div className="my-3 p-3">
              <h4 className="fs-5 fw-normal d-flex align-items-start ">Category</h4>
              <ul className="list-unstyled d-flex flex-column align-items-start" style={{ textAlign: "start" }}>
                {project.category.map((cat, index) => (
                  <li key={index} className="fs-6 fw-light my-2">{cat}</li>
                ))}
              </ul>
            </div>
            <div className="my-3 p-3">
              <h4 className="fs-5 fw-normal d-flex flex-column align-items-end">Stack</h4>
              <ul className="list-unstyled d-flex flex-column align-items-end" style={{textAlign: "end"}}>
                {project.stack.map((tech, index) => (
                  <li key={index} className="fs-6 fw-light my-2">{tech}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-100 d-flex justify-content-center">
            <p className="lh-lg m-3 p-3 w-75" style={{textAlign: "justify"}}>{project.text }</p>
          </div>
          {project.features && (
            <div className="w-100 d-flex justify-content-center">
              <div className="m-3 p-3 w-75 d-flex flex-column align-items-start">
                <h4 className="fs-5 fw-normal">Features</h4>
                <ul className="list-unstyled d-flex flex-column align-items-start">
                  {project.features.map((feature) => (
                    <li key={feature.id} className="fs-6 fw-light my-2" style={{textAlign: "justify"}}>
                      <strong className="fw-bold">{feature.name}:</strong> {feature.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          <div className="d-flex justify-content-center">
            <ReactPlayer
              url={project.videoUrl}
              className="react-player"
              width="100%"
              height="100%"
              controls
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectShowpage;
