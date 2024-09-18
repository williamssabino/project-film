import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import './App.css'


function App() {

  return (
      <div>
        <NavBar/>
        <Outlet />
        <Footer/>
      </div>
  )
}

export default App
