import axios from 'axios';
import { headers } from './common';

export const setKycJourneyService = async (payload) => {
	const data = await axios.post(
		'https://dkyc.bigul.app/ekycapi/kyc-journey/step-1',
		payload,
		headers
	);
	return data;
};

export const sendMobileOtpService = async (payload) => {
	const data = await axios.get(
		'https://dkyc.bigul.app/ekycapi/send-mobile-otp/6',
		headers
	);
	return data;
};
