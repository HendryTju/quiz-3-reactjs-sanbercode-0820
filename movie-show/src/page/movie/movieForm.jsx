import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { MovieContext } from "../template/MovieContext";

const MovieForm = () => {
  const [listMovie, setListMovie, , , , , idMovie, setIdMovie] = useContext(
    MovieContext
  );
  const [input, setInput] = useState({
    title: "",
    year: 0,
    duration: 0,
    genre: "",
    rating: 0,
    description: "",
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      input.title.replace(/\s/g, "") !== "" &&
      input.genre.replace(/\s/g, "") !== "" &&
      input.description.replace(/\s/g, "") !== ""
    ) {
      if (idMovie === "") {
        axios
          .post(`http://backendexample.sanbercloud.com/api/movies`, {
            title: input.title,
            year: input.year,
            duration: input.duration,
            genre: input.genre,
            rating: input.rating,
            description: input.description,
          })
          .then((res) => {
            setListMovie([
              ...listMovie,
              {
                title: res.data.title,
                year: res.data.year,
                duration: res.data.duration,
                genre: res.data.genre,
                rating: res.data.rating,
                description: res.data.description,
              },
            ]);
          });
      } else {
        axios
          .put(
            `http://backendexample.sanbercloud.com/api/movies/${parseInt(
              idMovie
            )}`,
            {
              title: input.title,
              year: input.year,
              duration: input.duration,
              genre: input.genre,
              rating: input.rating,
              description: input.description,
            }
          )
          .then((res) => {
            // console.log(res);
            let movie = listMovie.filter((el) => el.id === res.data.id);
            movie = {
              id: res.data.id,
              title: res.data.title,
              year: res.data.year,
              duration: res.data.duration,
              genre: res.data.genre,
              rating: res.data.rating,
              description: res.data.description,
            };
            // eslint-disable-next-line
            const oldMovie = listMovie.filter((el) => el.id != res.data.id);
            setListMovie([...oldMovie, movie]);
          });
      }
    } else {
      alert(`Masih ada yang kosong tuh!`);
    }
    setInput({
      title: "",
      year: 0,
      duration: 0,
      genre: "",
      rating: 0,
      description: "",
    });
    setIdMovie("");
  };

  useEffect(() => {
    // eslint-disable-next-line
    if (idMovie !== "") {
      // eslint-disable-next-line
      const movie = listMovie.filter((el) => el.id == idMovie);
      // eslint-disable-next-line
      setInput(...movie);
    }
  }, [idMovie]);

  return (
    <>
      <section>
        <h1 align="center">Form Movie</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Judul:</label>
            <input
              type="text"
              value={input.title}
              onChange={handleChange}
              name="title"
            />
          </div>
          <div>
            <label>Tahun : </label>
            <input
              type="number"
              value={input.year}
              onChange={handleChange}
              name="year"
              min="0"
            />
          </div>
          <div>
            <label>Durasi : </label>
            <input
              type="number"
              value={input.duration}
              onChange={handleChange}
              name="duration"
              min="0"
            />
          </div>
          <div>
            <label>Genre : </label>
            <input
              type="text"
              value={input.genre}
              onChange={handleChange}
              name="genre"
            />
          </div>
          <div>
            <label>Rating : </label>
            <input
              type="number"
              value={input.rating}
              onChange={handleChange}
              name="rating"
              min="1"
              max="10"
            />
          </div>
          <div>
            <label>Deskripsi : </label>
            <textarea
              type="text"
              value={input.description}
              onChange={handleChange}
              name="description"
              rows="10"
            />
          </div>
          <button>Submit</button>
        </form>
      </section>
    </>
  );
};

export default MovieForm;
