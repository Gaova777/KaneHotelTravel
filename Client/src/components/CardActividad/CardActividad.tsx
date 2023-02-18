import React from "react";
import styles from "./CardActividad.module.css"
import { Link } from "react-router-dom";

interface Props {
    name: string,
    image: string,
    id: number
}

export function CardActividad (props: Props){
    return(<div className={styles.container}>
        <img src={props.image} alt={props.name} className={styles.image}/>
        <div className={styles.cardInfo}>
            <h4>{props.name}</h4>
            <Link to={`/activity/${props.id}`} className={styles.button}>Saber más</Link>
        </div>
    </div>)
}