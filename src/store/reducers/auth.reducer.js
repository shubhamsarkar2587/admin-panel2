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
			...initState,
			accessToken: action.payload.token
		};
	case setLoginUser:
		return {
			userDetails: action.payload.userDetails.user,
			accessToken: action.payload.userDetails.accessToken,
			isLogin: true
		};
	default:
		return state;
	}
};
