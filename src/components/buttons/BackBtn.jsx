import { svgAssets } from '../../assets/asset';

export const BackBtn = ({ handleBackBtn }) => {
	return (
		<button
			className="h-[47px] px-5 flex items-center rounded-[10px] leading-6 text-white bg-black"
			onClick={() => handleBackBtn()}
		>
			<img className="mr-2" alt="back_icon" src={svgAssets.kyc.backIcon} />
			<span>Back</span>
		</button>
	);
};
