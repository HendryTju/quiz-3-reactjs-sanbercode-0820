import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./header.jsx";
import AboutMe from "../about";
import Home from "../home";
import Movie from "../movie/movie";
import Login from "../login";
import { MovieContext } from "./MovieContext";

function Routes() {
  const [, , , , isLoggin] = useContext(MovieContext);
  return (
    <>
      <Header />
      <div class="wrapper">
        <Switch>
          <Route exact path="/about">
            <AboutMe />
          </Route>
          <Route exact path="/movie-list">
            {isLoggin === false ? <Redirect to="/" /> : <Movie />}
          </Route>
          <Route exact path="/login">
            {isLoggin ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Routes;
