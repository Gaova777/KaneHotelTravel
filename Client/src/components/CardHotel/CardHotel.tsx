import React from "react";
import styles from "./CardHotel.module.css"
import iconHeart from "../../images/Icon-Heart.png"
import {Link} from "react-router-dom"

interface Props {
    id: number,
    image: string,
    name: string,
    rating: number
}

export function CardHotel (props: Props) {
    return(<div className={styles.container}>
        <img className={styles.image} src={props.image}/>
        <div className={styles.cardInfo}>
            <h4 className={styles.hotelName}>{props.name}</h4>
            <div className={styles.popularity}>
                <img src={iconHeart} alt="rating" />
                <p>{props.rating}</p>
            </div>
            <Link to={`/HotelDetail/${props.id}`} className={styles.button}>Saber más</Link>
        </div>
    </div>)
}