import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [listMovie, setListMovie] = useState([]);
  const [user, setUser] = useState({
    username: "admin",
    password: "password",
  });
  const [isLoggin, setIsLoggin] = useState(false);
  const [idMovie, setIdMovie] = useState("");

  return (
    <MovieContext.Provider
      value={[
        listMovie,
        setListMovie,
        user,
        setUser,
        isLoggin,
        setIsLoggin,
        idMovie,
        setIdMovie,
      ]}
    >
      {props.children}
    </MovieContext.Provider>
  );
};
