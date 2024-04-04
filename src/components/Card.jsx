function Card({ title, date, desc }) {
  return (
    <div
      className="card m-4 p-3 bg_primary-color shadow  rounded-1 d-flex justify-content-center align-items-center"
      style={{ width: "20rem", height: "20rem" }}>
      <div className="white-color p-3 text-wrap ">
        <p className="fs-4 fw-semibold ">{date}</p>
        <p className="text-uppercase fs-5 fw-medium">{title}</p>
        <p className="fs-6 fw-normal">{desc}</p>
      </div>
    </div>
  );
}

export default Card;
