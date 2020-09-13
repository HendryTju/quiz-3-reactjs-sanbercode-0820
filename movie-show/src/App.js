import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Kuis from "./Kuis";
import "./asset/css/style.css";

function App() {
  return (
    <>
      <Router>
        <Kuis />
      </Router>
    </>
  );
}

export default App;
