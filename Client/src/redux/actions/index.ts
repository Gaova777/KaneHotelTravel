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

export const getCities = () => (dispatch: Dispatch) => {
                fetch("http://localhost:3001/city")
                .then(res => res.json())
                .then(json => dispatch({type: "GET_CITIES", payload: json}))
                // dispatch({type: "GET_CITIES", payload: data.results})
    }

export const getActivities = (name:any) => (dispatch:Dispatch) => {
    fetch(`http://localhost:3001/activity?city=${name}&order=ASC`)
    .then(res => res.json())
    .then(json => dispatch({type: "GET_ACTIVITIES", payload: json[0].activities}))
}