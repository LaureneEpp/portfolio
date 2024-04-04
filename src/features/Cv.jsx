import Card from "../components/Card";
import { motion } from "framer-motion";

function Cv() {
  const experiences = [
    {
      date: "2021-Now",
      title: "Web Development",
      desc: "Le Wagon Web-Dev Bootcamp in 2021 (Bruxelles, Belgium). Being working on personal projects while practising my dev skills. I'm now for a junior full-stack web-developper position.",
    },
    {
      date: "2018-2021",
      title: "DATA PROTECTION",
      desc: "Data protection & Security consultant at Business & Decision (Bruxelles, Belgium).",
    },
    {
      date: "2016-2018",
      title: "EUROPEAN AFFAIRS",
      desc: "European affairs adviser at Orange GroupBruxelles (Bruxelles, Belgium).",
    },
    {
      date: "2009-2015",
      title: "EDUCATION",
      desc: "Bachelor in law (Versailles, France), followed by Master degrees (Bordeaux, France).",
    },
  ];

  return (
    <div className="h-100 overflow-auto p-3">
      <div className="d-flex align-items-center justify-content-center ">
        <div className="p-3 overflow-y-scroll" style={{ marginTop: "12rem" }}>
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="d-flex justify-content-center"
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? 200 : -200,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 2,
                },
              }}
              viewport={{ once: true }}>
              <Card
                date={experience.date}
                title={experience.title}
                desc={experience.desc}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cv;
