import React, {useEffect, useState} from "react";
import { CardHotel } from "../CardHotel/CardHotel";
import styles from "./Hoteles.module.css"
import { getHotels } from "../../redux/actions";
import Paginado from "../Paginado/Paginado";
import {useParams} from "react-router-dom"

import { useAppDispatch, useAppSelector } from "../../redux/Hooks/Hooks";

export function Hoteles () {

    const params = useParams() 
    const dispatch = useAppDispatch()
    const allHotels = useAppSelector((state) => state.hotels)

    /////////////Paginado/////////////////////////

    const [currentPage, setCurrentPage] = useState(1); // Pagina actual
    const [hotelsInPage, setHotelsInPage] = useState(6); // Hoteles por pagina
    const indexLastHotel = currentPage * hotelsInPage; // Ultimo hotel por página
    const indexFirstHotel = indexLastHotel - hotelsInPage; // Primer hotel de cada página
    const currentHotel = allHotels.slice(indexFirstHotel, indexLastHotel); // el slice selecciona solo los hoteles entre el primer y ultimo hotel de cada pagina

    const paginado = (page:any) =>{
        setCurrentPage(page)  // funcion para modificar el estado de la pagina actual (cambia de página)
    }

    /////////////////////////////////////////////


    const [order, setOrder] = useState("ASC")

    function orderChange(e:any){
        e.preventDefault();
        setOrder(e.target.value)
        dispatch(getHotels(params.cityName, order) as any)
        
    }

    useEffect(() => {
        dispatch(getHotels(params.cityName, order) as any)
    },[dispatch])



    return(<div className={styles.container}>
        {/* Ordenamientos y filtrados */}
        <div>
            <div>
                <span>Categoría</span>
                <select>
                    <option>Económico</option>
                </select>
            </div>
            <div>
                <span>Alfabéticamente</span>
                <select onChange={(e) => orderChange(e)}>
                    <option value="ASC" key="ASC">Ascendente</option>
                    <option value="DESC" key="DESC">Descendente</option>
                </select>
            </div> 
        </div>

        <h1>Hoteles</h1>
        <div className={styles.hoteles}>
            {currentHotel.length ?
            currentHotel.map((c:any) => {
                return(
                    <CardHotel
                        name={c.name}
                        id={c.id}
                        image={c.image}
                        rating={c.rating}
                    />
            )
            }):
            (<h1>No se encontraron hoteles</h1>)
        
    }</div>
    <Paginado
            hotelsInPage= {hotelsInPage}
            allHotels= {allHotels}
            paginado= {paginado}
            currentPage= {currentPage}
        />
    </div>)
}