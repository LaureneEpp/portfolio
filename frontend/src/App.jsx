import { BrowserRouter as Router } from "react-router-dom";
import "./styles/App.css";
import NavBar from "./components/NavBar";
import AppRoutes from "./components/AppRoutes";

function App() {
  return (
    <Router>
      <div className="body-content">
        <NavBar />
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;