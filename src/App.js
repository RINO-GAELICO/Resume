import React, { useState, useEffect } from "react";
import Resume from "./Resume";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App" id={load ? "no-scroll" : "scroll"}>

        <Routes>
          <Route path="/" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;