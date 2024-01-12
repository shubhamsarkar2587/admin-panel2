import axios from 'axios';
import { headers } from './common';

export const generateTokenService = async (payload) => {
	const user = await axios.post(
		'',
		{
			email: '',
			password: ''
		},
		headers
	);
	return user;
};
