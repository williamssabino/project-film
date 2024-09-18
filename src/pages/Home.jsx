import { useEffect, useState } from "react"
import FilmCards from "../components/FilmCards"
import './Movies.css'

const movieUrl = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Home = () => {

    const [topMovies, setTopMovies] = useState([])

    const moviesTopGet = async(url)=> {
        await fetch(url)
        .then((resp)=>resp.json()) 
        .then((data)=>setTopMovies(data))
    }


    useEffect(() => {
        const topURL = `${movieUrl}/top_rated?${apiKey}&language=pt-BR`
        moviesTopGet(topURL)
    }, [])

    return (
        <div className="init">
            <h1>Melhores Filmes</h1>
            <FilmCards bestMovies={topMovies}/>
        </div>
    )
}

export default Home