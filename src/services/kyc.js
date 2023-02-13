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

export const verifyMobileOtpService = async (payload) => {
	const data = await axios.get(
		'https://dkyc.bigul.app/ekycapi/verify-mobile-otp/6',
		headers
	);
	return data;
};

export const sendEmailOtpService = async (payload) => {
	const data = await axios.get(
		'https://dkyc.bigul.app/ekycapi/send-email-otp/6',
		headers
	);
	return data;
};

export const verifyEmailOtpService = async (payload) => {
	const data = await axios.get(
		'https://dkyc.bigul.app/ekycapi/verify-email-otp/6',
		headers
	);
	return data;
};
