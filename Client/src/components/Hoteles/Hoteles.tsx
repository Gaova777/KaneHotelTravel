import React, {useEffect} from "react";
import { CardHotel } from "../CardHotel/CardHotel";
import styles from "./Hoteles.module.css"
import { getHotels } from "../../redux/actions";
import {useParams} from "react-router-dom"

import { useAppDispatch, useAppSelector } from "../../redux/Hooks/Hooks";

export function Hoteles () {

    const params = useParams() 
    const dispatch = useAppDispatch()
    const allHotels = useAppSelector((state) => state.hotels)

    useEffect(() => {
        dispatch(getHotels(params.cityName) as any)
    },[dispatch])

    return(<div className={styles.container}>
        <h1>Hoteles</h1>
        <div className={styles.hoteles}>
            {allHotels.length ?
            allHotels.map((c:any) => {
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
    </div>)
}