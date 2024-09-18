import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import FilmCards from "../components/FilmCards"

const movieUrl = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

const Search = () => {

  const location = useLocation()
  const [movies, setMovies] = useState([])
  let msg = ''

  if(location.state){
    msg = location.state.replace(/\s/g,'+')
  }

  const moviesGet = async (url) => {
    console.log(url)
    await fetch(url)
      .then((resp) => resp.json())
      .then((data) => setMovies(data))
  }

  useEffect(() => {
    const topURL = `${movieUrl}?query=${msg}&${apiKey}&language=pt-BR`
    moviesGet(topURL)
  }, [msg])

 
  return (
    <div className="searchMovies">
      <h1>Resultados para <span>{msg.replace('+',' ')}</span></h1>
      {movies.results < 1 ? (<h1>Não Encontrado</h1>):<FilmCards bestMovies={movies}/>}
    </div>
  )
}

export default Search