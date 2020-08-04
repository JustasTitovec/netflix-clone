import React, { useState, useEffect } from 'react';
import axios from 'axios';
import requests from '../../requests';
import './Banner.css';

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `http://api.themoviedb.org/3${requests.fetchNetflixOriginals}`
      );
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("http://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundPosition: 'center center'
      }}
    >
      <div className="banner__content">
        <h1 className="banner__title">
          {movie.title || movie.name || movie.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My list</button>
        </div>
        <h1 className="banner__description">{movie.overview}</h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
