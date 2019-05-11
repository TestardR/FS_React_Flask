import React, { useEffect, useState } from 'react';
import './App.css';
import { Movies } from './components/Movies';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('/movies').then(res =>
      res.json().then(data => {
        setMovies(data.movies);
      })
    );
  }, []);

  console.log(movies);

  return (
    <div className="App">
      <Movies movies={movies} />
    </div>
  );
}

export default App;
