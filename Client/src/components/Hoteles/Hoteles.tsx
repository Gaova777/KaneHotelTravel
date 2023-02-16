import React, {useEffect} from "react";
import { CardCiudad } from "../CardCiudad/CardCiudad";
import dataCities from "../Ciudades/CiudadesData";
import styles from "./Hoteles.module.css"
import { getCities } from "../../redux/actions";
import {useParams} from "react-router-dom"

import { useAppDispatch, useAppSelector } from "../../redux/Hooks/Hooks";

export function Hoteles () {

    type paramsId ={
        id: string
    }

    const {id} = useParams() 
    const dispatch = useAppDispatch()
    const allCities = useAppSelector((state) => state.cities)

    

    const ciudad = dataCities.results.filter(c => c.id.toString() == id)
    console.log(ciudad);

    useEffect(() => {
        dispatch(getCities() as any)
    },[dispatch])

    return(<div className={styles.container}>
        <h1>Hoteles</h1>
        <div className={styles.hoteles}>
        {dataCities.results.length ?
        dataCities.results.map(c => {
            return(
                <CardCiudad
                    shortName={c.shortName}
                    id={c.id}
                    image={c.image}
                />
            )
        }):
        (<h1>No se encontraron ciudades</h1>)
        
    }</div>
    </div>)
}