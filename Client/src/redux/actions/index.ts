import dataJson from "./data.json"
import { Dispatch } from "redux"


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
                fetch(dataJson as any)
                .then(res => res.json())
                .then(json => dispatch({type: "GET_CITIES", payload: json.data}))

            
        }    
    }