import React from "react";
import { Actividades } from "../Actividades/Actividades";
import styles from "./MainPage.module.css"
import { Link, useParams } from "react-router-dom";
import { CreateNav } from "../Form";


export function MainPage(){

    const params:any = useParams()

    return(<div className={styles.container}>
        <CreateNav value="Nuevo hotel" url="/backoffice/hotel/create"/>
        {/* <h1>Main Page</h1> */}
        <div className={styles.cityName}>
            <h1>{params.cityName}</h1>
        </div>
        <Actividades/>
        <Link to="/">Volver</Link>
    </div>)
}