import './App.css'
import { Actividades } from './components/Actividades/Actividades'
import { Ciudades } from './components/Ciudades/Ciudades'
import { MainPage } from './components/MainPage/MainPage'
import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Ciudades/>}/>
        <Route path="/MainPage/:cityName" element={<MainPage/>}/>
      </Routes>
    </div>
  )
}

export default App
