import { useState } from "react";
import { motion } from "framer-motion";
import yoga from "../assets/images/yoga.jpg";
import dashboard from "../assets/images/dashboard.jpg";

export default function CardFlip({frontText, backText, image}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  const handleFlip = () => {
    if (!isAnimated) {
      setIsFlipped(!isFlipped);
      setIsAnimated(true);
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center h-100">
      <div
        className="flip-card rounded"
        onClick={handleFlip}
        style={{ height: "250px", width: "300px" }}>
        <motion.div
          className="flip-card-inner w-100 h-100 "
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 360 }}
          transition={{ duration: 0.6, animationDirection: "normal" }}
          onAnimationComplete={() => setIsAnimated(false)}>
          <div
            className="flip-card-front w-100 h-100 rounded white-color border border-3"
            style={{ backgroundImage: `url(${image})` }}>
            <div className="w-100 h-100 text-center align-content-center">
              <h3 className="fs-2 fw-bold">{frontText}</h3>
            </div>
          </div>
          <div
            className="flip-card-back w-100 h-100 rounded white-color border border-3 bg_secondary-color">
            <div className="w-100 h-100 text-center align-content-center">
              <p className="fs-5 fw-normal p-1">{backText}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
