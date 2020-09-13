import React, { useContext, useState } from "react";
import { MovieContext } from "./template/MovieContext";

function Login() {
  const [, , user, , , setIsLoggin] = useContext(MovieContext);
  const [input, setInput] = useState({ username: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      input.username.replace(/\s/g, "") !== "" &&
      input.password.replace(/\s/g, "") !== ""
    ) {
      if (
        user.username === input.username &&
        user.password === input.password
      ) {
        setIsLoggin(true);
      } else {
        alert(`Akun Tidak Terdaftar!`);
      }
    } else {
      alert(`Isi Dulu Formnya!`);
    }
  };
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <>
      <section>
        <h1 align="center">Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username :</label>
            <input
              type="text"
              value={input.username}
              onChange={handleChange}
              name="username"
            />
          </div>
          <div>
            <label>Password :</label>
            <input
              type="password"
              value={input.password}
              onChange={handleChange}
              name="password"
            />
          </div>
          <button>Submit</button>
        </form>
      </section>
    </>
  );
}

export default Login;
