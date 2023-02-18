import React from "react";
import styles from "./CardCiudad.module.css"
import iconHeart from "../../images/Icon-Heart.png"
import {Link} from "react-router-dom"

interface Props {
    id: number,
    image: string,
    name: string,
    popularity: number
}

export function CardCiudad (props: Props) {
    return(<div className={styles.container}>
        <img className={styles.image} src={props.image} />
        <div className={styles.cardInfo}>
            <h2 className={styles.cityName}>{props.name}</h2>
            <div className={styles.popularity}>
                <img src={iconHeart}/>
                <p>{props.popularity}</p>
            </div>
            <Link to={`/MainPage/${props.name}`} className={styles.button}>Saber más</Link>
        </div>
    </div>)
}