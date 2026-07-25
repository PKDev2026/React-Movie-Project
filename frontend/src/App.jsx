import './App.css'
import MovieCard from './components/MovieCard.jsx'

function App() {

  return (
    <div>
      {/*
        This allows the App component to showcase the movie card using explicit props that you can pass down
        Since each movie card is distinct, it can just pass down the props that you select and allows the resuble MovieCard component to take the props and display what you want for that specific movie.
      */}

      <MovieCard movie={
        {
          title: "Batman Begins",
          release_Date: "2005",
          url: "",
        }
      }/>
      <MovieCard movie={
        {
          title: "The Dark Knight",
          release_Date: "2008",
          url: "",
        }
      }/>
      <MovieCard movie={
        {
          title: "The Dark Knight Rises",
          release_Date: "2012",
          url: "",
        }
      }/>
    </div>
  )
}

export default App
