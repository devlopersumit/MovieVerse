import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        setLoading(true);
        setError(null);
        const popularMovies = await getPopularMovies();
        if (popularMovies && Array.isArray(popularMovies)) {
          setMovies(popularMovies);
        } else {
          setError("Invalid data received from API");
        }
      } catch (err) {
        console.error("Error loading movies:", err);
        setError("Failed to load movies. Please check your API key.");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);
    setError(null);
    try {
      const searchResults = await searchMovies(searchQuery);
      if (searchResults && Array.isArray(searchResults)) {
        setMovies(searchResults);
      } else {
        setError("Invalid search results received");
      }
    } catch (err) {
      console.error("Search error:", err);
      setError("Failed to search movies. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {error && (
        <div className="error-message">
          {error}
          <p>Please make sure you have a valid TMDB API key in src/services/api.js</p>
        </div>
      )}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies && movies.length > 0 ? (
            movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)
          ) : (
            !error && <div className="no-results">No movies found</div>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
