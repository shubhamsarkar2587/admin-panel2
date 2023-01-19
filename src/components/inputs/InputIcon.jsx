import { svgAssets } from '../../assets/asset';

const InputIcon = ({ height, iconText }) => {
	return (
		<div className="flex items-center">
			<input
				className={`w-full h-[${height || '47px'}] px-4  text-[#989898] rounded-l-[10px] shadow-[0px_2px_10px_rgba(201,201,201,0.25)]`}
				placeholder="Please enter email id"
			/>
			<button
				className={`min-w-max h-[${height || '47px'}] px-3.5 flex items-center whitespace-nowrap rounded-r-[10px] text-white bg-black`}
			>
				<img className="mr-2.5" alt="send_link_img" src={svgAssets.kyc.sendLink} />
				{iconText && (<span>{iconText}</span>)}
			</button>
		</div>
	);
};

export default InputIcon;
