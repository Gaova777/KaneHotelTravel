import data from "./data.json";
import { Dispatch } from "redux";
import axios from "axios";

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
