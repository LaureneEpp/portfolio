function Card({ title, date, desc }) {
  return (
    <div className="card w-50 h-50 p-3 d-flex justify-content-center align-items-center">
      <div className="card-text ">
        <p className="fs-4 fw-semibold ">{date}</p>
        <p className="text-uppercase fs-5 fw-medium">{title}</p>
        <p className="fs-6 fw-normal">{desc}</p>
      </div>
    </div>
  );
}

export default Card;
