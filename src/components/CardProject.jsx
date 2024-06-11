function CardProject({ title, image }) {
  return (
  <div className="d-flex align-items-center justify-content-center h-100">
    <div
      className=" rounded"
      style={{ height: "250px", width: "300px" }}>
      <div className="position-relative w-100 h-100 ">
        <div
          className="position-absolute w-100 h-100 rounded white-color border border-3"
          style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}>
          <div className="w-100 h-100 text-center align-content-center">
            <h3 className="fs-2 fw-bold" style={{textShadow: "1px 1px 2px black"}}>{title}</h3>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CardProject;
