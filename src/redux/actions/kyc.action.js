export const setKycJourney = 'SET_KYC_JOURNEY';
export const sendMobileOtp = 'SEND_MOBILE_OTP';
export const verifyMobileOtp = 'VERIFY_MOBILE_OTP';
export const sendEmailOtp = 'SEND_EMAIL_OTP';
export const verifyEmailOtp = 'VERIFY_EMAIL_OTP';
export const setPersonalDetail = 'SET_PERSONAL_DETAIL';
export const getOccuptionDetail = 'GET_OCCUPTION_DETAIL';
export const setOccuptionDetail = 'SET_OCCUPTION_DETAIL';
export const getAnnualIncome = 'GET_ANNUAL_INCOME';
export const setAnnualIncome = 'SET_ANNUAL_INCOME';
export const getEducationDetail = 'GET_EDUCATION_DETAIL';
export const setEducationDetail = 'SET_EDUCATION_DETAIL';
export const getExperienceDetail = 'GET_EXPERIENCE_DETAIL';
export const setExperienceDetail = 'SET_EXPERIENCE_DETAIL';
export const setOccuptionAllInfo = 'SET_OCCUPTION_ALL_INFO';

export const setKycJourneyAction = (payload, callback) => ({
	type: setKycJourney,
	payload,
	callback
});

export const sendMobileOtpAction = (callback) => ({
	type: sendMobileOtp,
	callback
});

export const verifyMobileOtpAction = (payload, callback) => ({
	type: verifyMobileOtp,
	payload,
	callback
});

export const sendEmailOtpAction = (callback) => ({
	type: sendEmailOtp,
	callback
});

export const verifyEmailOtpAction = (payload, callback) => ({
	type: verifyEmailOtp,
	payload,
	callback
});

export const setPersonalDetailAction = (payload, callback) => ({
	type: setPersonalDetail,
	payload,
	callback
});

export const getOccuptionDetailAction = (callback) => ({
	type: getOccuptionDetail,
	callback
});

export const setOccuptionDetailAction = (payload) => ({
	type: setOccuptionDetail,
	payload
});

export const getAnnualIncomeAction = (callback) => ({
	type: getAnnualIncome,
	callback
});

export const setAnnualIncomeAction = (payload) => ({
	type: setAnnualIncome,
	payload
});

export const getEducationDetailAction = (callback) => ({
	type: getEducationDetail,
	callback
});

export const setEducationDetailAction = (payload) => ({
	type: setEducationDetail,
	payload
});

export const getExperienceDetailAction = (callback) => ({
	type: getExperienceDetail,
	callback
});

export const setExperienceDetailAction = (payload) => ({
	type: setExperienceDetail,
	payload
});

export const setOccuptionAllInfoAction = (payload) => ({
	type: setOccuptionAllInfo,
	payload
});
