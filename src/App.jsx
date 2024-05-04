import './App.css'
import Navbar from "./assets/Navbar"
import Movie_Card from "./assets/Movie_Card"
import { useState, useEffect } from 'react'

function App() {
  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    async function callMovieApi() {
      const result = await fetch('/movieApi')

      const moviesData = await result.json()

      setMovieList(moviesData.results)
    }

    callMovieApi()
  }, [])


  return(
    <>
      <Navbar/>
      <main className="p-5">
        <div className="row">
        {movieList.map((movie) => {
            return <div className="col-4" key={movie.id}>
              <Movie_Card title={movie.title} image={"https://image.tmdb.org/t/p/original/" + movie.poster_path} desc={movie.overview.substring(0, 150)} />
            </div>
          })}
        </div>
      </main>
    </>
  )
}

export default App
