import React, { useEffect, useContext } from "react";
import axios from "axios";
import { MovieContext } from "../template/MovieContext";

const MovieList = () => {
  const [listMovie, setListMovie, , , , , , setIdMovie] = useContext(
    MovieContext
  );

  const deleteMovie = (event) => {
    const id = parseInt(event.target.value);
    console.log(id);
    setListMovie(listMovie.filter((element) => element.id !== id));
    axios
      .delete(`http://backendexample.sanbercloud.com/api/movies/${id}`)
      .then((res) => {
        console.log(res);
      });
  };

  const editMovie = (event) => {
    setIdMovie(event.target.value);
  };

  useEffect(() => {
    if (listMovie.length === 0) {
      axios
        .get(`http://backendexample.sanbercloud.com/api/movies`)
        .then((res) => {
          const movie = res.data.map((element) => {
            return {
              id: element.id,
              rating: element.rating,
              title: element.title,
              description: element.description,
              duration: element.duration,
              genre: element.genre,
              year: element.year,
            };
          });
          movie.sort((a, b) =>
            a.rating < b.rating ? 1 : b.rating < a.rating ? -1 : 0
          );
          console.log(movie);
          setListMovie(movie);
        });
    }
  });

  return (
    <>
      <section>
        <h1 align="center">Tabel Movie</h1>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Judul</th>
              <th>Tahun</th>
              <th>Durasi</th>
              <th>Genre</th>
              <th>Rating</th>
              <th>Deskripsi</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {listMovie.map((el, i) => {
              return (
                <tr key={el.id}>
                  <td>{i + 1}</td>
                  <td>{el.title}</td>
                  <td>{el.year}</td>
                  <td>{el.duration} Menit</td>
                  <td>{el.genre}</td>
                  <td>{el.rating}/10</td>
                  <td>{el.description.substring(0, 50)}...</td>
                  <td>
                    <button value={el.id} onClick={editMovie}>
                      Edit
                    </button>{" "}
                    <button value={el.id} onClick={deleteMovie}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default MovieList;
