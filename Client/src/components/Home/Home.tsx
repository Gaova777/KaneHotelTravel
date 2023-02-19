import React from "react";
import styles from "./Home.module.css"
import { Ciudades } from "../Ciudades/Ciudades";

export function Home(){
    return(<div className={styles.container}>
        <div className={styles.welcome}>
            <h1>¡Bienvenido!</h1>
            <p>Encuentra el lugar perfecto para pasar tus vacaciones!</p>
        </div>
        <Ciudades/>
    </div>)
}