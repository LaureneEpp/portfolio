import Star from "../assets/icons/Star";

function Skills() {
  return (
    <div className="h-100 overflow-auto">
      <div className=" h-100 w-100 d-flex align-items-center justify-content-center" style={{marginTop: "5rem"}}>
        <div className="p-3">
          <div className="p-3 my-2 bg_primary-color rounded-lg d-flex align-items-center justify-content-between">
            <div className=" flex-shrink-1 w-50 text-uppercase fw-semibold rounded">
              CSS
            </div>
            <div className="rounded bg_secondary-color p-2 mx-2 d-flex flex-row align-items-center justify-center">
              <Star color={"orange"} />
              <Star color={"orange"} />
              <Star color={"orange"} />
              <Star color={"white"} />
              <Star color={"white"} />
            </div>
          </div>
          <div className="p-3 my-2 bg_primary-color rounded-lg d-flex align-items-center justify-content-between">
            <div className=" flex-shrink-1 w-50 text-uppercase fw-semibold rounded">
              HTML
            </div>
            <div className="rounded bg_secondary-color p-2 mx-2 d-flex flex-row align-items-center justify-center">
              <Star color={"orange"} />
              <Star color={"orange"} />
              <Star color={"orange"} />
              <Star color={"white"} />
              <Star color={"white"} />
            </div>
          </div>
          <div className="p-3 my-2 bg_primary-color rounded-lg d-flex align-items-center justify-content-between">
            <div className=" flex-shrink-1 w-50 text-uppercase fw-semibold rounded">
              Ruby on Rails
            </div>
            <div className="rounded bg_secondary-color p-2 mx-2 d-flex flex-row align-items-center justify-center">
              <Star color={"orange"} />
              <Star color={"orange"} />
              <Star color={"orange"} />
              <Star color={"white"} />
              <Star color={"white"} />
            </div>
          </div>
          <div className="p-3 my-2 bg_primary-color rounded-lg d-flex align-items-center justify-content-between">
            <div className=" flex-shrink-1 w-50 text-uppercase fw-semibold rounded">
              javascript
            </div>
            <div className="rounded bg_secondary-color p-2 mx-2 d-flex flex-row align-items-center justify-center">
              <Star color={"orange"} />
              <Star color={"orange"} />
              <Star color={"orange"} />
              <Star color={"white"} />
              <Star color={"white"} />
            </div>
          </div>
          <div className="p-3 my-2 bg_primary-color rounded-lg d-flex align-items-center justify-content-between">
            <div className="  flex-shrink-1 w-50 text-uppercase fw-semibold rounded">
              bootstrap
            </div>
            <div className="rounded bg_secondary-color p-2 mx-2 d-flex flex-row align-items-center justify-center">
              <Star color={"orange"} />
              <Star color={"orange"} />
              <Star color={"orange"} />
              <Star color={"orange"} />
              <Star color={"white"} />
            </div>
          </div>
          <div className="p-3 my-2 bg_primary-color rounded-lg d-flex align-items-center justify-content-between">
            <div className=" flex-shrink-1 w-50 text-uppercase fw-semibold rounded">
              tailwind
            </div>
            <div className="rounded bg_secondary-color p-2 mx-2 d-flex flex-row align-items-center justify-center">
              <Star color={"orange"} />
              <Star color={"orange"} />
              <Star color={"orange"} />
              <Star color={"white"} />
              <Star color={"white"} />
            </div>
          </div>
          <div className="p-3 my-2 bg_primary-color rounded-lg d-flex align-items-center justify-content-between">
            <div className=" flex-shrink-1 w-50 text-uppercase fw-semibold rounded">
              React
            </div>
            <div className="rounded bg_secondary-color p-2 mx-2 d-flex flex-row align-items-center justify-center">
              <Star color={"orange"} />
              <Star color={"orange"} />
              <Star color={"white"} />
              <Star color={"white"} />
              <Star color={"white"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
