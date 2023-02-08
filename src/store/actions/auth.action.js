export const generateToken = 'GENERATE_TOKEN';
export const setToken = 'SET_TOKEN';
export const createUser = 'CREATE_USER';
export const loginUser = 'LOGIN_USER';
export const setLoginUser = 'SET_LOGIN_USER';

export const generateTokenAction = (callback) => ({
	type: generateToken,
	callback
});

export const setTokenAction = (payload, callback) => ({
	type: setToken,
	payload,
	callback
});

export const createUserAction = (payload, callback) => ({
	type: createUser,
	payload,
	callback
});

export const loginUserAction = (payload, callback) => ({
	type: loginUser,
	payload,
	callback
});

export const setLoginUserAction = (payload, callback) => ({
	type: setLoginUser,
	payload,
	callback
});
