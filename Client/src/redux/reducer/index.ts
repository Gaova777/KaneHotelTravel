import { Action } from "../actions";

// creamos la interface InitState con los tipos de dato de cada propiedad del estado inicial

const initialState = {
	cities: [],
	activities: [],
	hotels: [],
	hotelDetail: [],
};

const rootReducer = (state = initialState, action: Action) => {
	switch (action.type) {
		case "GET_CITIES":
			return {
				...state,
				cities: action.payload,
			};
		case "GET_HOTELS":
			return {
				...state,
				cities: action.payload,
			};
		case "GET_HOTEL_DETAIL": {
			return {
				...state,
				hotelDetail: { ...action.payload },
			};
		}
		default:
			return { ...state };
	}
};

export default rootReducer;
