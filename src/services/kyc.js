import axios from 'axios';
import { headers } from './common';

export const setKycJourneyService = async (payload) => {
	console.log(payload);
	const data = await axios.post(
		'https://dkyc.bigul.app/ekycapi/kyc-journey/step-1',
		payload,
		headers
	);
	return data;
};
