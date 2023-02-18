import React, {useEffect} from "react";
import { CardCiudad } from "../CardCiudad/CardCiudad";
import styles from "./Ciudades.module.css"
import { getCities } from "../../redux/actions";

import { useAppDispatch, useAppSelector } from "../../redux/Hooks/Hooks";

export function Ciudades () {

    const dispatch = useAppDispatch()
    const allCities:any = useAppSelector((state) => state.cities)

    useEffect(() => {
        dispatch(getCities() as any)
    },[dispatch])

    return(<div className={styles.container}>
        <h1>Ciudades</h1>
        <div className={styles.cards}>
            {allCities.length ?
            allCities.map((c:any) => {
                return(
                    <CardCiudad
                        name={c.name}
                        id={c.id}
                        image={c.image}
                        popularity={c.popularity}
                    />
                )
            }):
            (<h1>No se encontraron ciudades</h1>)
            }
        </div>
    </div>)
}