import { all, call, put, takeEvery } from 'redux-saga/effects';
import { loginUserService } from '../services/auth';
import { generateTokenService } from '../services/generateToken';
import { generateToken, loginUser, setLoginUserAction, setTokenAction } from '../store/actions/auth.action';

function * generateTokenSaga () {
	try {
		const token = yield call(generateTokenService);
		yield put(setTokenAction({ token: token.data.data || '' }));
	} catch (err) {
		console.log(err);
	};
};

function * loginUserSaga ({ payload, callback }) {
	try {
		const user = yield call(loginUserService, payload);
		yield put(setLoginUserAction({ userDetails: user?.data?.data || [] }));
		yield call(callback, { status: 200 });
	} catch (err) {
		yield call(callback, { status: 401 });
		console.log(err);
	};
};

function * authSaga () {
	yield all([
		takeEvery(generateToken, generateTokenSaga),
		takeEvery(loginUser, loginUserSaga)
	]);
}

export default authSaga;
