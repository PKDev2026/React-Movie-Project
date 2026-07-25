
import MovieCard from "../components/MovieCard";

function Home () {

    const movies = [
        {id: 1, title: "A New Hope", release_Date: "1977", url: ""},
        {id: 2, title: "Empire Strikes Back", release_Date: "1980", url: ""},
        {id: 3, title: "Return of the Jedi", release_Date: "1983", url: ""},
    ]

    const handleMovieSearch = () => {
        alert("Searching...");
    }

    return (
        <div className="home">
            <form onSubmit={handleMovieSearch} className="search-form">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search for movies..."
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