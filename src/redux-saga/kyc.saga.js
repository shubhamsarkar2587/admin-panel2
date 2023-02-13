import { all, call, takeEvery } from 'redux-saga/effects';
import { sendEmailOtp, sendMobileOtp, setKycJourney, verifyEmailOtp, verifyMobileOtp } from '../redux/actions/kyc.action';
import { sendEmailOtpService, sendMobileOtpService, setKycJourneyService, verifyEmailOtpService, verifyMobileOtpService } from '../services/kyc';

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

function * sendMobileOtpSaga ({ callback }) {
	try {
		const data = yield call(sendMobileOtpService);
		console.log(data);
	} catch (err) {
		console.log(err);
	};
};

function * verifyMobileOtpSaga ({ payload, callback }) {
	try {
		const data = yield call(verifyMobileOtpService, payload);
		console.log(data);
	} catch (err) {
		console.log(err);
	};
};

function * sendEmailOtpSaga ({ callback }) {
	try {
		const data = yield call(sendEmailOtpService);
		console.log(data);
	} catch (err) {
		console.log(err);
	};
};

function * verifyEmailOtpSaga ({ payload, callback }) {
	try {
		const data = yield call(verifyEmailOtpService, payload);
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
