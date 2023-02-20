import { string } from "prop-types";
import React, {useEffect} from "react";
import { useParams } from "react-router";
import { getActivities } from "../../redux/actions";
import { useAppDispatch, useAppSelector } from "../../redux/Hooks/Hooks";
import { CardActividad } from "../CardActividad/CardActividad";
import styles from "./Actividades.module.css"



export function Actividades (){

    const params = useParams()
    const dispatch = useAppDispatch()
    const state:any = useAppSelector((state) => state.activities)

    useEffect(() => {
        dispatch(getActivities(params.cityName) as any)
    },[])

    return(<div className={styles.container}>
        <h1>Actividades</h1>
        <div className={styles.cards}>
            {state.length ? 
            state.map((a:any) => { return (
                <CardActividad 
                    name={a.name} 
                    image={a.image}
                    id={a.id}
                />
            )}) :
            <h4>No se encontraron actividades</h4>
            }
        </div>
    </div>)
}