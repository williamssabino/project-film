import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"
import { FaStar } from "react-icons/fa"
import { 
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill
 } from "react-icons/bs"

const movieUrl = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY
const imgMovie= import.meta.env.VITE_IMG

const DetailsMovie = () => {
  const [getMovie, setMovie] = useState([])
  const { id } = useParams()

  const movieGet = async (url) => {
    await fetch(url)
      .then((resp) => resp.json())
      .then((data) => setMovie(data))
  }


  useEffect(() => {
    const topURL = `${movieUrl}/${id}?${apiKey}&language=pt-BR`
    movieGet(topURL)
  }, [])

  const formatNumber = (number)=>{
    if(number){
      return number.toLocaleString("en-US",{
        style:'currency',
        currency:'USD'
      })
    }

  }

  return (
    <div>
      {getMovie && (<div className="details-movie">
        <div className="start-details">
          <img src={imgMovie + getMovie.poster_path} alt="foto" />
          <h2>{getMovie.title}</h2>
          <p><span><FaStar/></span> {getMovie.vote_average}</p>
          <p>{getMovie.tagline}</p>
        </div>
        <div className="details-info">
          <h4><span><BsGraphUp/></span> Orçamento: <p>{formatNumber(getMovie.budget)}</p></h4>
          <h4><span><BsWallet2></BsWallet2></span> Receita: <p>{formatNumber(getMovie.revenue)}</p></h4>
          <h4><span><BsHourglassSplit/></span> Duração: <p>{getMovie.runtime} minutos</p></h4>
          <h4><span><BsFillFileEarmarkTextFill/></span> Descrição: <p>{getMovie.overview}</p></h4>
        </div>
      </div>)}
    </div>
  )
}

export default DetailsMovie