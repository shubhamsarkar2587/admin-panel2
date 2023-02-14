import { all, call, put, takeEvery } from 'redux-saga/effects';
import { getAnnualIncome, getEducationDetail, getExperienceDetail, getOccuptionDetail, sendEmailOtp, sendMobileOtp, setAnnualIncomeAction, setBankAllInfo, setEducationDetailAction, setExperienceDetailAction, setKycJourney, setOccuptionAllInfo, setOccuptionDetailAction, setPersonalDetail, verifyEmailOtp, verifyMobileOtp } from '../redux/actions/kyc.action';
import { getAnnualIncomeService, getEducationDetailService, getExperienceDetailService, getOccuptionDetailService, saveOccuptionService, sendEmailOtpService, sendMobileOtpService, setBankAllInfoService, setKycJourneyService, setPersonalDetailService, verifyEmailOtpService, verifyMobileOtpService } from '../services/kyc';

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

function * setPersonalDetailSaga ({ payload, callback }) {
	try {
		const data = yield call(setPersonalDetailService, payload);
		console.log(data);
	} catch (err) {
		console.log(err);
	};
};

function * getOccuptionDetailSaga () {
	try {
		const data = yield call(getOccuptionDetailService);
		yield put(setOccuptionDetailAction({ data: data?.data?.data || [] }));
	} catch (err) {
		console.log(err);
	};
};

function * getAnnualIncomeSaga () {
	try {
		const data = yield call(getAnnualIncomeService);
		yield put(setAnnualIncomeAction({ data: data?.data?.data || [] }));
	} catch (err) {
		console.log(err);
	};
};

function * getEducationDetailSaga () {
	try {
		const data = yield call(getEducationDetailService);
		yield put(setEducationDetailAction({ data: data?.data?.data || [] }));
	} catch (err) {
		console.log(err);
	};
};

function * getExperienceDetailSaga () {
	try {
		const data = yield call(getExperienceDetailService);
		yield put(setExperienceDetailAction({ data: data?.data?.data || [] }));
	} catch (err) {
		console.log(err);
	};
};

function * saveOccuptionSaga ({ payload }) {
	try {
		const data = yield call(saveOccuptionService, payload);
		console.log(data);
	} catch (err) {
		console.log(err);
	};
};

function * setBankAllInfoSaga ({ payload }) {
	try {
		const data = yield call(setBankAllInfoService, payload);
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
		takeEvery(verifyEmailOtp, verifyEmailOtpSaga),
		takeEvery(setPersonalDetail, setPersonalDetailSaga),
		takeEvery(getOccuptionDetail, getOccuptionDetailSaga),
		takeEvery(getAnnualIncome, getAnnualIncomeSaga),
		takeEvery(getEducationDetail, getEducationDetailSaga),
		takeEvery(getExperienceDetail, getExperienceDetailSaga),
		takeEvery(setOccuptionAllInfo, saveOccuptionSaga),
		takeEvery(setBankAllInfo, setBankAllInfoSaga)
	]);
}

export default kycSaga;
