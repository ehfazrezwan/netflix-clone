import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      {/* Title */}
      <h2>{title}</h2>
      {/* Container -> posters */}
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            className="row__poster"
            src={movie.poster_path}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
