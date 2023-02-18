import './App.css'
import { Actividades } from './components/Actividades/Actividades'
import { NavBar } from './components/NavBar/NavBar'
import { Ciudades } from './components/Ciudades/Ciudades'
import { MainPage } from './components/MainPage/MainPage'
import { DetailActividad } from './components/DetailActividad/DetailActividad'
import {Route, Routes} from "react-router-dom"
import { Home } from './components/Home/Home'

function App() {
  return (
    <div className="App">
      {/* <NavBar/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/MainPage/:cityName" element={<MainPage/>}/>
        <Route path='/activity/:id' element={<DetailActividad/>}/>
      </Routes>
    </div>
  )
}

export default App
