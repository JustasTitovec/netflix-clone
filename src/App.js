import React from 'react';
import './App.css';
import MoviesRow from './components/MoviesRow/MoviesRow';
import requests from './requests.js';
import Banner from './components/Banner/Banner';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <MoviesRow
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <MoviesRow title="Trending now" fetchUrl={requests.fetchTrending} />
      <MoviesRow title="Top rated" fetchUrl={requests.fetchTopRated} />
      <MoviesRow title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <MoviesRow title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <MoviesRow title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <MoviesRow
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
      />
      {/* <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} /> */}
    </div>
  );
}

export default App;
