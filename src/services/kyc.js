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

export const sendMobileOtpService = async () => {
	const data = await axios.get(
		'https://dkyc.bigul.app/ekycapi/send-mobile-otp/6',
		headers
	);
	return data;
};

export const verifyMobileOtpService = async (payload) => {
	const data = await axios.post(
		'https://dkyc.bigul.app/ekycapi/verify-mobile-otp/6',
		payload,
		headers
	);
	return data;
};

export const sendEmailOtpService = async () => {
	const data = await axios.get(
		'https://dkyc.bigul.app/ekycapi/send-email-otp/6',
		headers
	);
	return data;
};

export const verifyEmailOtpService = async (payload) => {
	const data = await axios.post(
		'https://dkyc.bigul.app/ekycapi/verify-email-otp/6',
		payload,
		headers
	);
	return data;
};

export const setPersonalDetailService = async (payload) => {
	const data = await axios.post(
		'https://dkyc.bigul.app/ekycapi/save-personal-info/6',
		payload,
		headers
	);
	return data;
};

export const getOccuptionDetailService = async () => {
	const data = await axios.get(
		'https://dkyc.bigul.app/ekycapi/GetOccuptionMaster',
		headers
	);
	return data;
};

export const getAnnualIncomeService = async () => {
	const data = await axios.get(
		'https://dkyc.bigul.app/ekycapi/GetAnnualIncomeMaster',
		headers
	);
	return data;
};

export const getEducationDetailService = async () => {
	const data = await axios.get(
		'https://dkyc.bigul.app/ekycapi/GetEducationMaster',
		headers
	);
	return data;
};

export const getExperienceDetailService = async () => {
	const data = await axios.get(
		'https://dkyc.bigul.app/ekycapi/GetExperienceMaster',
		headers
	);
	return data;
};

export const saveOccuptionService = async (payload) => {
	const data = await axios.post(
		'https://dkyc.bigul.app/ekycapi/save-accupational-info/6',
		payload,
		headers
	);
	return data;
};
