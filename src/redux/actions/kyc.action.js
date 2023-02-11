export const setKycJourney = 'SET_KYC_JOURNEY';
export const sendMobileOtp = 'SEND_MOBILE_OTP';

export const setKycJourneyAction = (payload, callback) => ({
	type: setKycJourney,
	payload,
	callback
});

export const sendMobileOtpAction = (payload, callback) => ({
	type: sendMobileOtp,
	payload,
	callback
});
