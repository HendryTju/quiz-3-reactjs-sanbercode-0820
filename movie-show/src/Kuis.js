import React from "react";
import { MovieProvider } from "./page/template/MovieContext";
import Routes from "./page/template/Router";

function Kuis() {
  return (
    <>
      <MovieProvider>
        <Routes />
      </MovieProvider>
    </>
  );
}

export default Kuis;
