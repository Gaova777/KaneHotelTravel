import React from "react";
import styles from "./Paginado.module.css"

interface Props{
    currentPage: number,
    hotelsInPage: number,
    allHotels: any,
    paginado: any

}

export default function Paginado(props: Props){

    let pageLength = []

    for(let i = 1; i <= Math.ceil(props.allHotels.length/props.hotelsInPage); i++){ 
        pageLength.push(i)  // me pushea en pageLength 
    }

    return (<div className={styles.container}>
        <ul className={styles.containerList}>
            <li className={styles.list}>
                <a onClick={(e) => {props.currentPage > 1 ? props.paginado(props.currentPage-1): props.paginado(props.currentPage)}}>←</a></li>
            {pageLength.length > 0 ?
                pageLength.map(p => (
                <li className={styles.list} key={p}>
                    <a onClick={() => props.paginado(p)}>{p}</a>
                </li>)):
                <p>...</p>   
            }
            <li className={styles.list}>
                <a onClick={() => {props.currentPage < pageLength.length ? props.paginado(props.currentPage+1): props.paginado(props.currentPage)}}>→</a>
            </li>
        </ul>
    </div>)
}