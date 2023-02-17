import data from "./data.json"
import { Dispatch } from "redux"

interface GetCitiesAction {
    type: "GET_CITIES",
    payload: any
}

interface GetActivitiesAction {
    type: "GET_ACTIVITIES",
    payload: any
}

interface GetHotelsAction {
    type: "GET_HOTELS",
    payload: any
}

export type Action = GetCitiesAction | GetActivitiesAction | GetHotelsAction

export const getCities = () => {
            return async function(dispatch: Dispatch){
                // fetch(data)
                // .then(res => res.json())
                // .then(json => dispatch({type: "GET_CITIES", payload: json.data}))
                dispatch({type: "GET_CITIES", payload: data.results})
            
        }    
    }

export const getHotels = () => {
    return async function(dispatch: Dispatch){
        dispatch({type: "GET_HOTELS", payload: data.results})
    }
}