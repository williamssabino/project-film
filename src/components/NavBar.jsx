import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './NavBar.css'
import { Link } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'

const NavBar = () => {

    const navigate = useNavigate()

    const [namee, setName] = useState('')

    const clickSearch = (e) => {
        e.preventDefault()
        navigate(
            'search', 
            {state:namee}
        )
    }

    return (
        <div className='container'>
            <nav>
                <h2>
                    <Link to="/"><span><BiCameraMovie /></span>MoviesLib</Link>
                </h2>
                <form className='form' onSubmit={clickSearch}>
                    <input
                        type="text"
                        name="name"
                        id=""
                        placeholder='Busque um Filme'
                        onChange={(e)=>setName(`${e.target.value}`)}
                        required
                    />
                    <button type="submit"><BiSearchAlt2 /></button>
                </form>
            </nav>
        </div>
    )
}

export default NavBar