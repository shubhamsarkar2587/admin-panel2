import { all } from 'redux-saga/effects';
import authSaga from './auth.saga';
import kycSaga from './kyc.saga';

export default function * rootSaga () {
	yield all([
		authSaga(),
		kycSaga()
	]);
};
