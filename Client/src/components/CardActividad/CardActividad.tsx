import React from "react";

interface Props {
    name: string,
    image: string,
    description: string,
    price: number,
    duration: string,
    id: number
}

export function CardActividad (props: Props){
    return(<div>
        <h1>{props.name}</h1>
        <img src={props.image} alt={props.name}/>
        <p>{props.description}</p>
        <p>{props.price}</p>
        <p>{props.duration}</p>
        <p>{props.id}</p>
    </div>)
}