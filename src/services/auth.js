import axios from 'axios';
import { headers } from './common';

export const loginUserService = async (payload) => {
	const user = await axios.post(
		'https://dkyc.bigul.app/ekycapi/UserLogin',
		payload,
		headers
	);
	return user;
};
