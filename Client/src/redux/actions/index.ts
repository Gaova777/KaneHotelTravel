<<<<<<< HEAD
import data from "./data.json";
import { Dispatch } from "redux";
import axios from "axios";
=======
import { Dispatch } from "redux"
>>>>>>> 65d1249c191bb0073b5eed15aef1235a8ac95877

interface GetCitiesAction {
	type: "GET_CITIES";
	payload: any;
}

interface GetActivitiesAction {
	type: "GET_ACTIVITIES";
	payload: any;
}

interface GetHotelsAction {
	type: "GET_HOTELS";
	payload: any;
}
<<<<<<< HEAD
interface GetHotelDetail {
	type: "GET_HOTEL_DETAIL";
	payload: any;
}
export type Action =
	| GetCitiesAction
	| GetActivitiesAction
	| GetHotelsAction
	| GetHotelDetail;

export const getCities = () => {
	return async function (dispatch: Dispatch) {
		// fetch(data)
		// .then(res => res.json())
		// .then(json => dispatch({type: "GET_CITIES", payload: json.data}))
		dispatch({ type: "GET_CITIES", payload: data.results });
	};
};

export const getHotels = () => {
	return async function (dispatch: Dispatch) {
		dispatch({ type: "GET_HOTELS", payload: data.results });
	};
};

export function getHotelDetail(id: any) {
	return async function (dispatch: any) {
		try {
			var json = await axios.get(`http://localhost:3001/hotel/${id}`);
			console.log(json.data);

			return dispatch({
				type: "GET_DETAILS",
				payload: json.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
}
=======

interface GetDetailActivitiesAction {
    type: "GET_DETAIL_ACTIVITIE",
    payload: any
}

export type Action = GetCitiesAction | GetActivitiesAction | GetHotelsAction | GetDetailActivitiesAction

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

export const getActivityDetail = (id:any) => (dispatch:Dispatch) => {
    fetch(`http://localhost:3001/activity/${id}`)
    .then(res => res.json())
    .then(json => dispatch({type: "GET_DETAIL_ACTIVITIE", payload: json}))
}
>>>>>>> 65d1249c191bb0073b5eed15aef1235a8ac95877
