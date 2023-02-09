import { setLoginUser, setToken } from '../actions/auth.action';

const initState = {
	userDetails: {},
	accessToken: '',
	isLogin: false
};

export const userReducer = (state = initState, action) => {
	switch (action.type) {
	case setToken:
		return {
			...state,
			accessToken: action.payload.token
		};
	case setLoginUser:
		return {
			...state,
			userDetails: action.payload.userDetails,
			isLogin: true
		};
	default:
		return state;
	}
};
