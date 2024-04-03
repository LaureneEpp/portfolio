import { Route, Routes } from "react-router-dom";
import Home from "../features/Home"
import Cv from "../features/Cv"
import Skills from "../features/Skills"
import Projects from "../features/Projects"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cv" element={<Cv />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}

export default AppRoutes;