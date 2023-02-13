import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { pngAssets, svgAssets } from '../../../assets/asset';
import { MainTitle } from '../../../components/common/MainTitle';
import { InputBtnIcon } from '../../../components/inputs/InputBtnIcon';
import { OtpInput } from '../../../components/inputs/OtpInput';
import { sendEmailOtpAction, sendMobileOtpAction, verifyEmailOtpAction, verifyMobileOtpAction } from '../../../redux/actions/kyc.action';

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

	const handleInput = ({ type, value }) => {
		setInput({
			...input,
			[type]: {
				value,
				isError: false,
				errorText: ''
			}
		});
	};

	const handleStep = ({ type, value }) => {
		if (type === 'mobileInput') {
			dispatch(sendMobileOtpAction());
		} else if (type === 'mobileOtp') {
			handleInput({ type, value });
			dispatch(verifyMobileOtpAction({ mobile_otp: value }));
		} else if (type === 'emailInput') {
			dispatch(sendEmailOtpAction());
		} else if (type === 'emailOtp') {
			handleInput({ type, value });
			dispatch(verifyEmailOtpAction({ email_otp: value }));
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
						inputType="mobileOtp"
						handleInputChange={handleInput}
						handleSubmit={handleStep}
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
						inputType="emailOtp"
						handleSubmit={handleStep}
					/>
				</div>
			</div>
		</div>
	);
};
