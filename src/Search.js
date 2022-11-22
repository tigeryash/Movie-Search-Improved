import React from 'react';
import { Link } from 'react-router-dom';
import Result from './Result';
export default function Search() {
  const [query, setQuery] = React.useState('');
  const [clicked, setClicked] = React.useState(false);
  const [movies, setMovies] = React.useState([]);

  function handleChange(e) {
    setQuery(e.target.value);
    console.log(query);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setClicked(true);
  }

  React.useEffect(() => {
    if (clicked) {
      fetch(`https://www.omdbapi.com/?apikey=44fac5&s=${query}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setMovies(data.Search);
          setClicked(false);
        });
    }
  }, [clicked]);

  const displayMovies = movies.map((movie) => (
    <Result key={movie.imdbID} info={movie} />
  ));

  return (
    <>
    <div className="search">
      <div className="titles">
        <h1 className="search-title">Find Your Film</h1>
        <Link>
          <h3 className="link">My Watchlist</h3>
        </Link>
      </div>

      <form className="search-bar-container" onSubmit={(e) => handleSubmit(e)}>
        <input
          className="search-bar"
          type="text"
          value={query}
          onChange={handleChange}
          name="query"
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      
    </div>
    <div>{displayMovies}</div>
    </>
  );
}
