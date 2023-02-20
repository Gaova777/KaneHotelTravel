import React, {useState} from "react";
import { Actividades } from "../Actividades/Actividades";
import { Hoteles } from "../Hoteles/Hoteles";
import styles from "./MainPage.module.css"
import { useParams } from "react-router-dom";
import { CreateNav } from "../Form";


export function MainPage(){

    const params:any = useParams()
    const [order, setOrder] = useState("ASC")


    return(<div className={styles.container}>
        <CreateNav value="Nuevo hotel" url="/backoffice/hotel/create"/>
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
                <select>
                    <option value="ASC">Ascendente</option>
                    <option value="DSC">Descendente</option>
                </select>
            </div> 
        </div>
        <div className={styles.cityName}>
            <h1>{params.cityName}</h1>
        </div>
        <Hoteles/>
        <Actividades/>
    </div>)
}