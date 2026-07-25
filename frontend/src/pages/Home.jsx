
import MovieCard from "../components/MovieCard";

function Home () {

    const movies = [
        {id: 1, title: "A New Hope", release_Date: "1977", url: ""},
        {id: 2, title: "Empire Strikes Back", release_Date: "1980", url: ""},
        {id: 3, title: "Return of the Jedi", release_Date: "1983", url: ""},
    ]

    return (
        <div className="home">
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