import { svgAssets } from '../../assets/asset';

const messageTypeParameter = {
	success: {
		icon: '',
		color: '#007813'
	},
	error: {
		icon: svgAssets.kyc.invalidInput,
		color: '#FF4343'
	}
};

export const InputBtnIcon = ({ icon, label, subLabel, isImportant, height, isDisable, placeholder, btnWidth, btnIcon, btnText, inputMessage, inputMessageType }) => {
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
			<div className="flex mt-4">
				<input
					className="w-full px-4 text-[#353535] leading-6 rounded-l-[10px] shadow-[0px_2px_10px_rgba(201,201,201,0.25)] font-poppinsRegular focus:outline-none"
					style={{
						height: height || '47px'
					}}
					placeholder={placeholder}
					disabled={isDisable}
				/>
				<button
					className="flex items-center justify-center whitespace-nowrap rounded-r-[10px] text-white bg-black shadow-[0px_2px_10px_rgba(201,201,201,0.25)] font-medium font-poppinsMedium"
					style={{
						height: height || '47px',
						width: btnWidth || '100%'
					}}
				>
					{ btnIcon && (<img className={ btnText && 'mr-2.5'} alt="send_link_img" src={btnIcon} />) }
					{ btnText && (<span>{btnText}</span>) }
				</button>
			</div>
			{
				inputMessage && inputMessageType && (
					<div
						style={{
							color: messageTypeParameter[inputMessageType].color
						}}
						className="mt-2.5 flex items-center text-sm font-poppinsRegular"
					>
						<img className="mr-1.5" alt="input_message_type_icon" src={messageTypeParameter[inputMessageType].icon} />
						<span className="inline-flex items-center">{inputMessage}</span>
					</div>
				)
			}
		</div>
	);
};
