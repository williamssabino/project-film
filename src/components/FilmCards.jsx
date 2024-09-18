import { FaStar } from "react-icons/fa"
import { Link } from "react-router-dom"


const FilmCards = ({bestMovies}) => {
  const imgCard= import.meta.env.VITE_IMG
 
  return (
    <div className='movies-container'>
        {bestMovies.results &&(bestMovies.results.map((movie)=>(
          <div key={movie.id} className='cards'>
            <img src={imgCard + movie.poster_path} alt="poster_image" />
            <h3 className="title">{movie.title}</h3>
            <p><span><FaStar/></span> {movie.vote_average}</p>
            <Link to={`/details/${movie.id}`}>Detalhes</Link>
          </div>
        )))}
    </div>
  )
}

export default FilmCards