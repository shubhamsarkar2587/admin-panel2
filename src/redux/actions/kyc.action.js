export const setKycJourney = 'SET_KYC_JOURNEY';

export const setKycJourneyAction = (payload, callback) => ({
	type: setKycJourney,
	payload,
	callback
});
