import { combineReducers } from 'redux';
import { userReducer } from './auth.reducer';
import { kycReducer } from './kyc.reducer';

export default combineReducers({
	user: userReducer,
	kyc: kycReducer
});
