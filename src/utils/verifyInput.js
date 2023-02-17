export const validateUserId = (userId) => {
	return String(userId).length > 1;
};

export const validateEmail = (email) => {
	const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	return regex.test(email.toLowerCase());
};

export const validatePassword = (password) => {
	return String(password).length > 7;
};
