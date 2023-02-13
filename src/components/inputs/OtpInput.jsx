import React, { useRef, useState } from 'react';
import { svgAssets } from '../../assets/asset';

export const OtpInput = ({ icon, label, subLabel, isImportant, height, isDisable, inputType, handleSubmit }) => {
	const [otp, setOtp] = useState(Array(6).fill(''));
	const [concatOtp, setConcatOtp] = useState('');
	const inputRefs = useRef([...Array(6)].map(() => React.createRef()));

	const handleChange = (value, index) => {
		const newOtp = [...otp];
		newOtp[index] = value;
		setOtp(newOtp);
		setConcatOtp(newOtp.toString().replaceAll(',', ''));

		if (value.length === 1) {
			inputRefs.current[index + 1]?.current?.focus();
		}
	};

	const handleKeyDown = (event, index) => {
		if (event?.key === 'Backspace' && otp[index].length === 0) {
			inputRefs?.current[index - 1]?.current?.focus();
		} else if (event?.key === 'Enter' && concatOtp.length > 5) {
			handleSubmit({ type: inputType, value: concatOtp });
		};
	};

	return (
		<div className="w-full flex flex-col">
			<label className="flex items-center leading-6 font-medium font-poppinsMedium">
				{
					icon && (<img
						className="max-h-[22px] mr-1.5 object-contain"
						alt="input_icon"
						src={icon}
					/>)
				}
				<span className="mr-1">{label}</span>
				{isImportant && <span className="text-[#EA0000]">*</span>}
			</label>
			{
				subLabel && (<span className="text-xs text-[#9F9F9F] font-poppinsRegular">{subLabel}</span>)
			}
			<div className="flex items-center mt-4">
				<div className="grid grid-cols-6 gap-4 mr-3.5 justify-between">
					{
						[...Array(6)].map((value, index) => (
							<input
								key={`otp_input_${index}`}
								maxLength={1}
								className="w-full px-4 text-[#353535] text-center rounded-[10px] shadow-[0px_2px_10px_rgba(201,201,201,0.25)] font-poppinsRegular focus:outline-none"
								style={{
									height: height || '47px'
								}}
								disabled={isDisable}
								value={value}
								onChange={(e) => handleChange(e.target.value, index)}
								onKeyDown={(event) => handleKeyDown(event, index)}
								ref={inputRefs.current[index]}
								tabIndex={index + 1}
							/>
						))
					}
				</div>
				<button
					className={`min-w-max px-3.5 flex items-center whitespace-nowrap rounded-r-[10px] text-white  font-medium font-poppinsMedium
						${concatOtp.length > 5 ? 'cursor-pointer bg-black' : ' cursor-default bg-[#b4babd61]'}
					`}
					style={{
						height: height || '47px'
					}}
					onClick={() => concatOtp.length > 5 && handleSubmit({ type: inputType, value: concatOtp })}
				>
					<img className="mr-2.5" alt="send_link_img" src={svgAssets.kyc.verify} />
					<span>Verify</span>
				</button>
			</div>
		</div>
	);
};
