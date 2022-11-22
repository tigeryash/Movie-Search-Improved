import React from 'react';

export default function Result({ info }) {
  const [movieInfo, setMovieInfo] = React.useState('');
  React.useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=44fac5&i=${info.imdbID}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovieInfo(data);
      });
  }, [info.imdbID]);

  return (
    <div className="result">
      <img src={movieInfo.Poster} />
      <div>
        <div className="top">
          <h3>{movieInfo.Title}</h3>
        </div>
        <div className="mid">
          <p className="duration">{movieInfo.Runtime}</p>
          <p className="genre">{movieInfo.Genre}</p>
          <p className="add">Watchlist</p>
        </div>
        <p>{movieInfo.Plot}</p>
      </div>
    </div>
  );
}
