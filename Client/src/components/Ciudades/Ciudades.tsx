import React, {useEffect} from "react";
import { CardCiudad } from "../CardCiudad/CardCiudad";
import dataCities from "./CiudadesData";
import styles from "./Ciudades.module.css"
import { getCities } from "../../redux/actions";

import { useAppDispatch, useAppSelector } from "../../redux/Hooks/Hooks";

export function Ciudades () {

    const dispatch = useAppDispatch()
    const allCities = useAppSelector((state) => state.cities)

    useEffect(() => {
        dispatch(getCities() as any)
    },[dispatch])

    return(<div className={styles.container}>
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
    }
    </div>)
}