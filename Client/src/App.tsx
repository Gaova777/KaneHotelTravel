import "./App.css";
import { Actividades } from "./components/Actividades/Actividades";
import { NavBar } from "./components/NavBar/NavBar";
import { Ciudades } from "./components/Ciudades/Ciudades";
import { MainPage } from "./components/MainPage/MainPage";
import { CreateHotel } from "./view";
import { DetailActividad } from "./components/DetailActividad/DetailActividad";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { DetailHotel } from "./components/DetailHotel/DetailHotel";

function App() {
	return (
		<div className="App">
			{/* <NavBar/> */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/backoffice/hotel/create" element={<CreateHotel />} />
				<Route path="/MainPage/:cityName" element={<MainPage />} />
				<Route path="/activity/:id" element={<DetailActividad />} />
				<Route path="/hotel/:id" element={<DetailHotel />} />
			</Routes>
		</div>
	);
}

export default App;
