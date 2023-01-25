import { svgAssets } from '../../assets/asset';

export const InputBtnIcon = ({ icon, label, subLabel, isImportant, height, isDisable, placeholder, btnIcon, btnText }) => {
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
					className="w-full px-4 text-[#353535] leading-6 rounded-l-[10px] shadow-[0px_2px_10px_rgba(201,201,201,0.25)] font-poppinsRegular"
					style={{
						height: height || '47px'
					}}
					placeholder={placeholder}
					disabled={isDisable}
				/>
				<button
					className="min-w-max px-3.5 flex items-center whitespace-nowrap rounded-r-[10px] text-white bg-black shadow-[0px_2px_10px_rgba(201,201,201,0.25)] font-medium font-poppinsMedium"
					style={{
						height: height || '47px'
					}}
				>
					{ btnIcon && (<img className="mr-2.5" alt="send_link_img" src={svgAssets.kyc.sendLink} />) }
					{ btnText && (<span>{btnText}</span>) }
				</button>
			</div>
		</div>
	);
};
