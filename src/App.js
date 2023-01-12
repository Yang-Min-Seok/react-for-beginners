import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([])
  
  // How to call API modernly
  const getMovies = async() => {
    const json = await (
      await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    // update movies to json.data.movies
    setMovies(json.data.movies);
    // update current loading status to false
    setLoading(false);
  };
  
  // Call only once
  useEffect(() => {
    getMovies();
  }, []);

  return (
  <div>
    {loading ? <h1>Loading...</h1> : 
      <div>
        {movies.map((movie) => (
          <div key={movie.id}>
            <img src={movie.medium_cover_image}></img>
            <h2>{movie.title}</h2>
            <p>{movie.summary}</p>
            <ul>
              {movie.genres.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    }
  </div>
  );
}

export default App; 