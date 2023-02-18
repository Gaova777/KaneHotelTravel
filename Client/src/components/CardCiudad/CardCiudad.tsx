import React from "react";
import styles from "./CardCiudad.module.css"
import {Link} from "react-router-dom"

interface Props {
    id: number,
    image: string,
    name: string,
    popularity: number
}

export function CardCiudad (props: Props) {
    return(<div className={styles.container}>
        <h4>{props.name}</h4>
        <img className={styles.image} src={props.image} />
        <p>Popularidad: {props.popularity}</p>
        <Link to={`/MainPage/${props.name}`}>Saber más</Link>
    </div>)
}