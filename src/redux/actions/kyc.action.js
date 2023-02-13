export const setKycJourney = 'SET_KYC_JOURNEY';
export const sendMobileOtp = 'SEND_MOBILE_OTP';
export const verifyMobileOtp = 'VERIFY_MOBILE_OTP';
export const sendEmailOtp = 'SEND_EMAIL_OTP';
export const verifyEmailOtp = 'VERIFY_EMAIL_OTP';

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

export const sendEmailOtpAction = (payload, callback) => ({
	type: sendEmailOtp,
	callback
});

export const verifyEmailOtpAction = (payload, callback) => ({
	type: verifyEmailOtp,
	payload,
	callback
});
