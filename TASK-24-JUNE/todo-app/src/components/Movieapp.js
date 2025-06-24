import React, { useEffect, useState } from 'react';



const API_KEY = " "; 
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
const Search_URL=`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`;


function MovieApp() {
  const [movies, setMovies] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
  const [query, setQuery] = useState('');
  const [title, setTitle] = useState('Popular Movies');


 

  const fetchMovies = async (url, heading = '') => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      if (data.results) {
        setMovies(data.results);
        setTitle(heading);
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  useEffect(() => {
    fetchMovies(`${API_URL}`, 'Popular Movies');
  }, []);

  const handleSearch = () => {
    if (query.trim() !== '') {
      fetchMovies(`${Search_URL}&&query===${query}`, `Results for "${query}"`);
    }
    else{
     fetchMovies(`${API_URL}`, `Results for popular`);   
    }
      setQuery('');
  };

  

  return (
    <>
     <div className="app">
      <h1>{title}</h1>

      <div className="search-input">
        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

     <div className="movie-grid">
        {movies.length > 0 ? (
          movies.map((movie) => {
            const posterURL = movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : 'https://via.placeholder.com/300x450?text=No+Image';
              const movieOverview=movie.overview;
            return (
              <div key={movie.id} className="movie-card">
                <img src={posterURL} alt={movie.title} />
                <div className="movie-info">
                  <h3>{movieOverview.length > 20 ? movieOverview.slice(0, 20) + "..." :movieOverview}</h3>
                  <p>{movie.overview.trim()}</p>
                  <p><i class="fa-solid fa-calendar-days"></i> {movie.release_date}</p>
                  <p><i class="fa-solid fa-star"></i> {movie.vote_average}</p>
                </div>
              </div> )})): "no movie found"}</div>
              </div>
                </>
  );
}

export default MovieApp;
