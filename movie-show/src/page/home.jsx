import React, { useEffect, useContext } from "react";
import axios from "axios";
import { MovieContext } from "./template/MovieContext";

function Home() {
  const [listMovie, setListMovie] = useContext(MovieContext);
  useEffect(() => {
    if (listMovie.length === 0) {
      axios
        .get(`http://backendexample.sanbercloud.com/api/movies`)
        .then((res) => {
          const movie = res.data.map((el) => {
            return {
              id: el.id,
              rating: el.rating,
              title: el.title,
              description: el.description,
              duration: el.duration,
              genre: el.genre,
              year: el.year,
            };
          });
          movie.sort((a, b) =>
            a.rating < b.rating ? 1 : b.rating < a.rating ? -1 : 0
          );
          // console.log(movie);
          setListMovie(movie);
        });
    }
  });

  return (
    <>
      <section>
        <h1>Daftar Film Film Terbaik</h1>
        <div id="article-list">
          {listMovie.map((el) => {
            return (
              <div>
                <h3>{el.title}</h3>
                <ul>
                  <li>
                    <b>Rating : {el.rating}</b>
                  </li>
                  <li>
                    <b>Durasi : {el.duration} </b>
                  </li>
                  <li>
                    <b>Genre : {el.genre} </b>
                  </li>
                </ul>
                <p>
                  <b>Deskripsi : </b>
                  {el.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Home;
