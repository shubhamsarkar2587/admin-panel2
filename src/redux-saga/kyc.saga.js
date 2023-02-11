import { all, call, takeEvery } from 'redux-saga/effects';
import { sendMobileOtp, setKycJourney } from '../redux/actions/kyc.action';
import { sendMobileOtpService, setKycJourneyService } from '../services/kyc';

function * setKycJourneySaga ({ payload, callback }) {
	try {
		const data = yield call(setKycJourneyService, payload);
		console.log(data);
		yield call(callback, { status: 200 });
	} catch (err) {
		console.log(err);
		yield call(callback);
	};
};

function * sendMobileOtpSaga ({ payload, callback }) {
	try {
		const data = yield call(sendMobileOtpService, payload);
		console.log(data);
	} catch (err) {
		console.log(err);
	};
};

function * kycSaga () {
	yield all([
		takeEvery(setKycJourney, setKycJourneySaga),
		takeEvery(sendMobileOtp, sendMobileOtpSaga)
	]);
}

export default kycSaga;
