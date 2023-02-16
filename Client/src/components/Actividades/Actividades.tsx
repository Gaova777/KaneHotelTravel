import React from "react";
import { CardActividad } from "../CardActividad/CardActividad";
import data from "./ActividadesData";

export function Actividades (){
    return(<div>
        {data.length ? 
        
        data.map(a => { return (
        <CardActividad 
            name={a.name} 
            image={a.image}
            description={a.description}
            price={a.price}
            duration={a.duration}
            id={a.id}/>
        )}) :

        <h4>No se encontraron actividades</h4>
        }
    </div>)
}