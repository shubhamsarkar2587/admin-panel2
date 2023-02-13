import { setAnnualIncome, setEducationDetail, setExperienceDetail, setOccuptionDetail } from '../actions/kyc.action';

const initState = {
	occuptionDetail: [],
	annualIncome: [],
	educationDetail: [],
	experienceDetail: []
};

export const kycReducer = (state = initState, action) => {
	switch (action.type) {
	case setOccuptionDetail:
		return {
			...state,
			occuptionDetail: action.payload.data
		};
	case setAnnualIncome:
		return {
			...state,
			annualIncome: action.payload.data
		};
	case setEducationDetail:
		return {
			...state,
			educationDetail: action.payload.data
		};
	case setExperienceDetail:
		return {
			...state,
			experienceDetail: action.payload.data
		};
	default:
		return state;
	}
};
