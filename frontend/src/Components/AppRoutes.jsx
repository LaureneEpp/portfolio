import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Cv from "./Pages/Cv";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";

function AppRoutes({ currUser, setCurrUser }) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cv" element={<Cv />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
    </Routes>
  );
}

export default AppRoutes;
