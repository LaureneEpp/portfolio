import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./navigation/AppRoutes";

import NavBar from "./Components/NavBar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="body-content">
          <AppRoutes />
        </div>
      </Router>
    </>
  );
}

export default App;
