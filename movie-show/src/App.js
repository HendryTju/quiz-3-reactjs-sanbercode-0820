import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Kuis from "./Kuis";

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
