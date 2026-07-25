import "../css/Home.css"
import MovieCard from "../components/MovieCard";
import { searchMovies, getPopularMovies } from "../services/api";
import { useState, useEffect } from "react";

function Home () {

    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (error) {
                console.log(error);
                setError("Failed to get movies...");
            }
            finally {
                setLoading(false)
            }
        }

        loadPopularMovies()
    }, []);

    const handleMovieSearch = async (e) => {
        e.preventDefault(); // This will prevent the default behavior for the submit button since it normally refreshes the page
        if (!searchQuery.trim()) return
        if (loading) return
        setLoading(true)

        try {
            const searchResults = await searchMovies();
            setMovies(searchResults);
            setError(null);
        } catch (error) {
            console.log(error);
            setError("Failed to get search result...");
        }
        finally {
            setLoading(false)
        }

        setSearchQuery(""); // Since the page won't reset, we will set the search query to empty again
    }

    return (
        <div className="home">
            <form onSubmit={handleMovieSearch} className="search-form">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search for movies..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-btn">Search</button>
            </form>

            {error && <div className="error-message">{error}</div>}
            
            {loading ? (
                <div className="loading">Loading...</div>
            ) : (
                <div className="movies-grid">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Home;