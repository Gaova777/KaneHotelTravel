import './App.css'
import { Actividades } from './components/Actividades/Actividades'
import { Ciudades } from './components/Ciudades/Ciudades'
import { Hoteles } from './components/Hoteles/Hoteles'
import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Ciudades/>}/>
        <Route path="/MainPage/:id" element={<Hoteles/>}/>
      </Routes>
    </div>
  )
}

export default App
