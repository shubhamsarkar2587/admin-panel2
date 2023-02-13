import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { pngAssets, svgAssets } from '../../../assets/asset';
import { MainTitle } from '../../../components/common/MainTitle';
import { InputBtnIcon } from '../../../components/inputs/InputBtnIcon';
import { OtpInput } from '../../../components/inputs/OtpInput';
import { sendEmailOtpAction, sendMobileOtpAction, verifyMobileOtpAction } from '../../../redux/actions/kyc.action';

export const VerifyMobileEmail = () => {
	const dispatch = useDispatch();

	const [input, setInput] = useState({
		mobileInput: {
			value: '',
			isError: false,
			errorText: ''
		},
		mobileOtp: {
			value: '',
			isError: false,
			errorText: ''
		},
		emailInput: {
			value: '',
			isError: false,
			errorText: ''
		},
		emailOtp: {
			value: '',
			isError: false,
			errorText: ''
		}
	});

	const handleInput = ({ value, type }) => {
		setInput({
			...input,
			[type]: {
				value,
				isError: false,
				errorText: ''
			}
		});
	};

	const handleStep = ({ type }) => {
		if (type === 'mobileInput') {
			dispatch(sendMobileOtpAction({ input: input.mobileInput.value }));
		} else if (type === 'mobileOtp') {
			dispatch(verifyMobileOtpAction({ input: input.emailInput.value }));
		} else if (type === 'emailInput') {
			dispatch(sendEmailOtpAction({ input: input.emailInput.value }));
		} else {
			dispatch(sendEmailOtpAction({ input: input.emailInput.value }));
		}
	};

	return (
		<div className="w-full flex flex-col mb-10">
			<MainTitle title="Mobile and Email Verification" />
			<div className="mb-8 grid grid-cols-2 gap-10">
				<div className="flex flex-col">
					<InputBtnIcon
						icon={pngAssets.kyc.mobileNumber}
						label="Mobile Number"
						isImportant={true}
						placeholder="Please enter mobile number"
						btnIcon={svgAssets.kyc.send}
						btnWidth="175px"
						btnText="Send OTP"
						value={input.mobileInput.value}
						inputType="mobileInput"
						handleInputChange={handleInput}
						handleSubmit={handleStep}
					/>
				</div>
				<div className="flex flex-col">
					<OtpInput
						label="Mobile OTP"
						isImportant={true}
					/>
				</div>
			</div>
			<div className="grid grid-cols-2 gap-10">
				<div className="flex flex-col">
					<InputBtnIcon
						icon={pngAssets.kyc.mail}
						label="Email Id"
						isImportant={true}
						placeholder="Please enter email id"
						btnIcon={svgAssets.kyc.send}
						btnWidth="175px"
						btnText="Send OTP"
						value={input.emailInput.value}
						inputType="emailInput"
						handleInputChange={handleInput}
						handleSubmit={handleStep}
					/>
				</div>
				<div className="flex flex-col">
					<OtpInput
						label="Email OTP"
						isImportant={true}
					/>
				</div>
			</div>
		</div>
	);
};
