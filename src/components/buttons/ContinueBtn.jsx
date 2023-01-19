import { svgAssets } from '../../assets/asset';

const ContinueBtn = ({ handleContinueBtn }) => {
	return (
		<button
			className="h-[47px] px-5 flex items-center rounded-[10px] leading-6	 text-white bg-black"
			onClick={() => handleContinueBtn()}
		>
			<span className="mr-2">continue</span>
			<img alt="continue_icon" src={svgAssets.kyc.continueIcon} />
		</button>
	);
};

export default ContinueBtn;
