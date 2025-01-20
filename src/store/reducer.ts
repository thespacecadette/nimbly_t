import initialState from './user/initialState';

interface Action {
	type: string;
	payload: any;
}

export default function appReducer(state = initialState, action: Action) {
	switch (action.type) {
		case 'setUser': {
			return {
				...state,
				...action.payload,
			};
		}
		default:
			return state;
	}
}
