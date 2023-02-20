import { Action } from "../actions";

// creamos la interface InitState con los tipos de dato de cada propiedad del estado inicial

const initialState = {
	cities: [],
	activities: [],
	detailActivity: {},
	detailHotel: {},
};

const rootReducer = (state = initialState, action: Action) => {
	switch (action.type) {
		case "GET_CITIES":
			return {
				...state,
				cities: action.payload,
				activities: [],
				detailActivity: {},
			};
		case "GET_ACTIVITIES":
			return {
				...state,
				activities: action.payload,
				detailAtcivity: {},
			};
		case "GET_DETAIL_ACTIVITIE":
			return {
				...state,
				detailActivity: action.payload,
			};
		case "GET_HOTEL_DETAIL": {
			console.log("llegué al reducer");
			return {
				...state,
				detailHotel: action.payload,
			};
		}

		default:
			return { ...state };
	}
};

export default rootReducer;
