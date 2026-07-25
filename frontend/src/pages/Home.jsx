import "../css/Home.css"
import MovieCard from "../components/MovieCard";
import { searchMovies, getPopularMovies } from "../services/api";
import { useState, useEffect } from "react";

function Home () {

    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    // const movies = [
    //     {id: 1, title: "A New Hope", release_Date: "1977", url: null},
    //     {id: 2, title: "Empire Strikes Back", release_Date: "1980", url: null},
    //     {id: 3, title: "Return of the Jedi", release_Date: "1983", url: null},
    // ]

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (error) {
                console.log(error);
                setError("Failed to get search result...");
            }
            finally {
                setLoading(false)
            }
        }

        loadPopularMovies()
    }, []);

    const handleMovieSearch = (e) => {
        e.preventDefault(); // This will prevent the default behavior for the submit button since it normally refreshes the page
        alert(searchQuery);
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
            <div className="movies-grid">
                {
                    movies.map (
                        (movie) => 
                            movie.title.toLowerCase().includes(searchQuery) && ( <MovieCard movie={movie} key={movie.id}/> )
                    )
                }
            </div>
        </div>
    )
}

export default Home;