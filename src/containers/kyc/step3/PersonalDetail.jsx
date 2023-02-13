import { pngAssets } from '../../../assets/asset';
import { CommonInput } from '../../../components/inputs/CommonInput';
import { MainTitle } from '../../../components/common/MainTitle';
import { SelectDropdown } from '../../../components/dropdown/SelectDropdown';
import { ContinueBtn } from '../../../components/buttons/ContinueBtn';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPersonalDetailAction } from '../../../redux/actions/kyc.action';

export const PersonalDetail = () => {
	const dispatch = useDispatch();
	const [form, setForm] = useState({
		marital_status: '',
		father_spo_name: '',
		gender: '',
		birthPlace: ''
	});

	const handleForm = ({ type, value }) => {
		setForm({
			...form,
			[type]: value
		});
	};

	const handleContinueBtn = () => {
		dispatch(setPersonalDetailAction({
			marital_status: 'Married',
			father_spo_name: 'LATE RB PRAJAPATI',
			gender: 'M',
			birth_place: 'SINGRAULI',
			nationality: 'Indian'
		}));
	};

	return (
		<div className="w-full flex flex-col mb-10">
			<MainTitle title="Personal Details" />
			<div className="grid grid-cols-2 gap-10 items-end mb-8">
				<SelectDropdown
					icon={pngAssets.kyc.mobileNumber}
					label="Marital Status"
					isImportant={true}
					placeholder="Please select marital status"
					inputType="marital_status"
					handleSelect={handleForm}
				/>
				<CommonInput
					icon={pngAssets.kyc.mobileNumber}
					label="Father’s/Spouse Name"
					isImportant={true}
					placeholder="Please enter father’s/spouse name"
					inputType="father_spo_name"
					value={form.father_spo_name}
					handleInput={handleForm}
				/>
			</div>
			<div className="grid grid-cols-2 gap-10 items-end mb-8">
				<SelectDropdown
					icon={pngAssets.kyc.mobileNumber}
					label="Gender"
					isImportant={true}
					placeholder="Please select marital status"
					inputType="gender"
					handleSelect={handleForm}
				/>
				<CommonInput
					icon={pngAssets.kyc.mobileNumber}
					label="City Of Birth"
					isImportant={true}
					placeholder="Please enter city of birth"
					inputType="birthPlace"
					value={form.birthPlace}
					handleInput={handleForm}
				/>
			</div>
			<div className="w-full flex items-end">
				<CommonInput
					icon={pngAssets.kyc.mobileNumber}
					label="Nationality"
					isImportant={true}
					placeholder="Indian"
					isDisable={true}
				/>
			</div>
			<div className="max-w-max inline-flex justify-between">
				<ContinueBtn handleContinueBtn={() => handleContinueBtn()} />
			</div>
		</div>
	);
};
