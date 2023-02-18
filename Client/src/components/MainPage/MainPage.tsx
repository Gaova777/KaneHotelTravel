import React from "react";
import { Actividades } from "../Actividades/Actividades";
import { Link } from "react-router-dom";


export function MainPage(){
    return(<div>
        <Link to="/">Volver</Link>
        <Actividades/>
    </div>)
}