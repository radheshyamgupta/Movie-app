import React, { useState, useCallback, useEffect } from 'react'
import "./App.css"
import MovieList from './MovieList'
import AddMovie from './AddMovie'
export default function App() {
  const [Movies, setMovies] = useState([])
  const [loding, setloding] = useState(false)
  const [error, seterror] = useState(null)

  const fetchMovieHandler = useCallback(async () => {
    setloding(true)
    seterror(null)
    try {
      const res = await fetch(" https://swapi.dev/api/films")
      if (!res.ok) {
        throw new error("something went wrong")
      }

      const data = await res.json()

      setMovies(data.results)
      setloding(false)
    }

    catch (error) {
      seterror(error.message)
    }


  }, [])

  useEffect(() => {
    fetchMovieHandler()
  }, [fetchMovieHandler])

  return (
    <div className="container">
      <div>
        <AddMovie></AddMovie>
      </div>
      <div className="div">
        <button onClick={fetchMovieHandler}> Fetch Movie</button>
      </div>
      <div className="div1">
        {!loding && <MovieList MOVIELIST={Movies}></MovieList>}
        {!loding && Movies.length === 0 && <h2> Click the above Button to load some movie data ...</h2>}
        {error && <p>failed to fetch </p>}
        {loding && <h3> Processing your request...</h3>}
      </div>
    </div>
  )
}
