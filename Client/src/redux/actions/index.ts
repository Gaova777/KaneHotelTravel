import {data} from "./data"
import { Dispatch } from "redux"
import { json } from "react-router"


interface GetCitiesAction {
    type: "GET_CITIES",
    payload: any
}

interface GetActivitiesAction {
    type: "GET_ACTIVITIES",
    payload: any
}

export type Action = GetCitiesAction | GetActivitiesAction

export const getCities = () => {
            return async function(dispatch: Dispatch){
                // fetch(data)
                // .then(res => res.json())
                // .then(json => dispatch({type: "GET_CITIES", payload: json.data}))
                dispatch({type: "GET_CITIES", payload: data})

            
        }    
    }