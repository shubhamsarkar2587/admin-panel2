import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pngAssets } from '../../../assets/asset';
import { MainTitle } from '../../../components/common/MainTitle';
import { SelectDropdown } from '../../../components/dropdown/SelectDropdown';
import { getAnnualIncomeAction, getEducationDetailAction, getExperienceDetailAction, getOccuptionDetailAction } from '../../../redux/actions/kyc.action';

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
					icon={pngAssets.kyc.mobileNumber}
					label="Occupation"
					isImportant={true}
					placeholder="Please select occupation"
					options={occuptionDetail}
					inputType="occuptionDetail"
					handleSelect={handleForm}
				/>
				<SelectDropdown
					icon={pngAssets.kyc.mobileNumber}
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
					icon={pngAssets.kyc.mobileNumber}
					label="Education"
					isImportant={true}
					placeholder="Please select education"
					options={educationDetail}
					inputType="educationDetail"
					handleSelect={handleForm}
				/>
				<SelectDropdown
					icon={pngAssets.kyc.mobileNumber}
					label="Trading Experience"
					isImportant={true}
					placeholder="Please select trading experience"
					options={experienceDetail}
					inputType="experienceDetail"
					handleSelect={handleForm}
				/>
			</div>
		</div>
	);
};
