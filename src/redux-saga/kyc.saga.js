import { all, call, takeEvery } from 'redux-saga/effects';
import { sendEmailOtp, sendMobileOtp, setKycJourney, verifyEmailOtp, verifyMobileOtp } from '../redux/actions/kyc.action';
import { sendEmailOtpService, sendMobileOtpService, setKycJourneyService } from '../services/kyc';

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

function * verifyMobileOtpSaga ({ payload, callback }) {
	try {
		const data = yield call(sendMobileOtpService, payload);
		console.log(data);
	} catch (err) {
		console.log(err);
	};
};

function * sendEmailOtpSaga ({ payload, callback }) {
	try {
		const data = yield call(sendEmailOtpService, payload);
		console.log(data);
	} catch (err) {
		console.log(err);
	};
};

function * verifyEmailOtpSaga ({ payload, callback }) {
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
		takeEvery(sendMobileOtp, sendMobileOtpSaga),
		takeEvery(verifyMobileOtp, verifyMobileOtpSaga),
		takeEvery(sendEmailOtp, sendEmailOtpSaga),
		takeEvery(verifyEmailOtp, verifyEmailOtpSaga)
	]);
}

export default kycSaga;
