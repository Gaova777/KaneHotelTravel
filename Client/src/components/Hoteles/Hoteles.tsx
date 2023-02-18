import React, {useEffect} from "react";
// import { CardCiudad } from "../CardCiudad/CardCiudad";
// import styles from "./Hoteles.module.css"
// import { getHotels } from "../../redux/actions";
// import {useParams} from "react-router-dom"

// import { useAppDispatch, useAppSelector } from "../../redux/Hooks/Hooks";

// export function Hoteles () {

//     type paramsId ={
//         id: string
//     }

//     const {id} = useParams() 
//     const dispatch = useAppDispatch()
//     const allCities = useAppSelector((state) => state.cities)

//     useEffect(() => {
//         dispatch(getHotels() as any)
//     },[dispatch])

//     return(<div className={styles.container}>
//         <h1>Hoteles</h1>
//         <div className={styles.hoteles}>
//         {allCities.length ?
//         allCities.map((c:any) => {
//             return(
//                 // <CardCiudad
//                 //     shortName={c.shortName}
//                 //     id={c.id}
//                 //     image={c.image}
//                 // />
//                 <h1>Hola</h1>
//             )
//         }):
//         (<h1>No se encontraron ciudades</h1>)
        
//     }</div>
//     </div>)
// }