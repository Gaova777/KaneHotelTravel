import React from "react";
import styles from "./CardActividad.module.css"

interface Props {
    name: string,
    image: string,
    rating: number,
    id: number
}

export function CardActividad (props: Props){
    return(<div className={styles.container}>
        <h4>{props.name}</h4>
        <img src={props.image} alt={props.name} className={styles.image}/>
        <p>rating{props.rating}</p>
    </div>)
}