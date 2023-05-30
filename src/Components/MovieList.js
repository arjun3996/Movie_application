import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
const url = "https://hoblist.com";

const MovieList = () => {
  const [movie, setMovie] = useState([]);

  const getData = async () => {
    const res = await axios.post(`${url}/api/movieList`, {
      category: "movies",
      language: "kannada",
      genre: "all",
      sort: "voting",
    });
    console.log("res = ", res.data);
    setMovie(res.data.result);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h3 className="display-3 text-success">Movie List</h3>
        </div>
      </div>
      <div className="row">
        {movie &&
          movie.map((item, index) => {
            return <MovieCard key={index} {...item} />;
          })}
      </div>
    </div>
  );
};

export default MovieList;
