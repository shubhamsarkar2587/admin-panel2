import axios from 'axios';
import { headers } from './common';

export const generateTokenService = async (payload) => {
	const user = await axios.post(
		'https://dkyc.bigul.app/ekycapi/ApiToken',
		{
			email: 'dkyc@bonanzaonline.com',
			password: 'password'
		},
		headers
	);
	return user;
};
