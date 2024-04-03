import { BrowserRouter as Router } from "react-router-dom";
import "./styles/App.css";
import NavBar from "./components/NavBar";
import AppRoutes from "./components/AppRoutes";

function App() {
  return (
    <Router>
        <NavBar />
      <div className="body-content">
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;