import { all, call, takeEvery } from 'redux-saga/effects';
import { setKycJourney } from '../redux/actions/kyc.action';
import { setKycJourneyService } from '../services/kyc';

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

function * kycSaga () {
	yield all([
		takeEvery(setKycJourney, setKycJourneySaga)
	]);
}

export default kycSaga;
