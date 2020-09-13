import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../asset/img/logo.png";
import { MovieContext } from "./MovieContext";

function Header() {
  const [, , , , isLoggin] = useContext(MovieContext);
  return (
    <>
      <header>
        <img id="logo" src={logo} width="200px" alt="Logo" />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            {isLoggin === true && (
              <li>
                <Link to="/movie-list">Movie List Editor</Link>
              </li>
            )}
            {isLoggin === false && (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
