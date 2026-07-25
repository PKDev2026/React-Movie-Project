
import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home () {

    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: "A New Hope", release_Date: "1977", url: ""},
        {id: 2, title: "Empire Strikes Back", release_Date: "1980", url: ""},
        {id: 3, title: "Return of the Jedi", release_Date: "1983", url: ""},
    ]

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
                        movie => <MovieCard movie={movie} key={movie.id}/>
                    )
                }

            </div>
        </div>
    )
}

export default Home;