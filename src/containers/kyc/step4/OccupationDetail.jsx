import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { svgAssets } from '../../../assets/asset';
import { ContinueBtn } from '../../../components/buttons/ContinueBtn';
import { MainTitle } from '../../../components/common/MainTitle';
import { SelectDropdown } from '../../../components/dropdown/SelectDropdown';
import { getAnnualIncomeAction, getEducationDetailAction, getExperienceDetailAction, getOccuptionDetailAction, setOccuptionAllInfoAction } from '../../../redux/actions/kyc.action';

export const OccuptionDetail = () => {
	const dispatch = useDispatch();
	const { occuptionDetail, annualIncome, educationDetail, experienceDetail } = useSelector(state => state.kyc);
	const [form, setForm] = useState({
		occuptionDetail: '',
		annualIncome: '',
		educationDetail: '',
		experienceDetail: ''
	});

	const handleForm = ({ type, value }) => {
		setForm({
			...form,
			[type]: value
		});
	};

	const handleContinueBtn = () => {
		dispatch(setOccuptionAllInfoAction({
			occupation_id: 1,
			education_id: 2,
			income_id: 3,
			trading_experience: 1
		}));
	};

	useEffect(() => {
		occuptionDetail?.length < 1 && dispatch(getOccuptionDetailAction());
		annualIncome?.length < 1 && dispatch(getAnnualIncomeAction());
		educationDetail?.length < 1 && dispatch(getEducationDetailAction());
		experienceDetail?.length < 1 && dispatch(getExperienceDetailAction());
	}, []);

	return (
		<div className="w-full flex flex-col mb-10">
			<MainTitle title="Occupational Details" />
			<div className="grid grid-cols-2 gap-10 items-end mb-8">
				<SelectDropdown
					icon={svgAssets.kyc.occupation}
					label="Occupation"
					isImportant={true}
					placeholder="Please select occupation"
					options={occuptionDetail}
					inputType="occuptionDetail"
					handleSelect={handleForm}
				/>
				<SelectDropdown
					icon={svgAssets.kyc.income}
					label="Annual Income"
					isImportant={true}
					placeholder="Please select annual income"
					options={annualIncome}
					inputType="annualIncome"
					handleSelect={handleForm}
				/>
			</div>
			<div className="grid grid-cols-2 gap-10 items-end">
				<SelectDropdown
					icon={svgAssets.kyc.education}
					label="Education"
					isImportant={true}
					placeholder="Please select education"
					options={educationDetail}
					inputType="educationDetail"
					handleSelect={handleForm}
				/>
				<SelectDropdown
					icon={svgAssets.kyc.trading}
					label="Trading Experience"
					isImportant={true}
					placeholder="Please select trading experience"
					options={experienceDetail}
					inputType="experienceDetail"
					handleSelect={handleForm}
				/>
			</div>
			<div className="max-w-max hidden justify-between">
				<ContinueBtn handleContinueBtn={() => handleContinueBtn()} />
			</div>
		</div>
	);
};
