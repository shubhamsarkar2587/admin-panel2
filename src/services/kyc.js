import axios from 'axios';
import { headers } from './common';

export const setKycJourneyService = async (payload) => {
	const data = await axios.post(
		'https:/kyc-journey/step-1',
		payload,
		headers
	);
	return data;
};

export const sendMobileOtpService = async () => {
	const data = await axios.get(
		'https:/send-mobile-otp/6',
		headers
	);
	return data;
};

export const verifyMobileOtpService = async (payload) => {
	const data = await axios.post(
		'https:/verify-mobile-otp/6',
		payload,
		headers
	);
	return data;
};

export const sendEmailOtpService = async () => {
	const data = await axios.get(
		'https:/send-email-otp/6',
		headers
	);
	return data;
};

export const verifyEmailOtpService = async (payload) => {
	const data = await axios.post(
		'https:/verify-email-otp/6',
		payload,
		headers
	);
	return data;
};

export const setPersonalDetailService = async (payload) => {
	const data = await axios.post(
		'https:/save-personal-info/6',
		payload,
		headers
	);
	return data;
};

export const getOccuptionDetailService = async () => {
	const data = await axios.get(
		'https:/GetOccuptionMaster',
		headers
	);
	return data;
};

export const getAnnualIncomeService = async () => {
	const data = await axios.get(
		'https:/GetAnnualIncomeMaster',
		headers
	);
	return data;
};

export const getEducationDetailService = async () => {
	const data = await axios.get(
		'https:/GetEducationMaster',
		headers
	);
	return data;
};

export const getExperienceDetailService = async () => {
	const data = await axios.get(
		'https:/GetExperienceMaster',
		headers
	);
	return data;
};

export const saveOccuptionService = async (payload) => {
	const data = await axios.post(
		'https:/save-accupational-info/6',
		payload,
		headers
	);
	return data;
};

export const setBankAllInfoService = async (payload) => {
	const data = await axios.post(
		'https:/save-bank-info/6',
		payload,
		headers
	);
	return data;
};
