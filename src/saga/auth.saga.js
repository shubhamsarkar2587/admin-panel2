import { all, call, put, takeEvery } from 'redux-saga/effects';
import { generateTokenService } from '../services/generateToken';
import { generateToken, setTokenAction } from '../store/actions/auth.action';

function * generateTokenSaga () {
	try {
		const token = yield call(generateTokenService);
		yield put(setTokenAction({ token: token.data.data || '' }));
	} catch (err) {
		console.log(err);
	};
};

// function * createUserSaga ({ payload, callback }) {
// 	try {
// 		yield call(createUserService, payload);
// 		yield call(callback, { status: 200 });
// 	} catch (err) {
// 		const { wrongValue, msg } = err.response.data;
// 		if (err.response.status === 403 && wrongValue) {
// 			yield call(callback, { status: 403, value: wrongValue, msg });
// 		} else {
// 			console.log(err);
// 		}
// 	};
// };

// function * loginUserSaga ({ payload, callback }) {
// 	try {
// 		const user = yield call(loginUserService, payload);
// 		yield put(setLoginUserAction({ userDetails: user?.data || {} }));
// 		yield call(callback, { status: 200 });
// 	} catch (err) {
// 		yield call(callback, { status: 401 });
// 		console.log(err);
// 	};
// };

function * authSaga () {
	yield all([
		takeEvery(generateToken, generateTokenSaga)
		// takeEvery(createUser, createUserSaga),
		// takeEvery(loginUser, loginUserSaga)
	]);
}

export default authSaga;
