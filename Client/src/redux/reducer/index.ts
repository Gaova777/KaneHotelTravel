import { Action } from "../actions";

// creamos la interface InitState con los tipos de dato de cada propiedad del estado inicial

const initialState = {
<<<<<<< HEAD
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
=======
    cities: [],
    activities: [],
    detailActivity: {}
}

const rootReducer = (state = initialState, action: Action) => {
    switch(action.type){
        case "GET_CITIES":
            return{
                ...state,
                cities: action.payload,
                activities: [],
                detailActivity: {}
            }
        case "GET_ACTIVITIES":
            return{
                ...state,
                activities: action.payload,
                detailAtcivity: {}
            }
        case "GET_DETAIL_ACTIVITIE":
            return{
                ...state,
                detailActivity: action.payload
            }
        default:
            return {...state}
    }
}
>>>>>>> 65d1249c191bb0073b5eed15aef1235a8ac95877

export default rootReducer;
