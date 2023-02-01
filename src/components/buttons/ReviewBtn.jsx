import { svgAssets } from '../../assets/asset';

export const ReviewBtn = ({ handleReviewBtn }) => {
	return (
		<button
			className="h-[47px] px-5 flex items-center rounded-[10px] leading-6	 text-white bg-black"
			onClick={() => handleReviewBtn()}
		>
			<span className="mr-2 font-medium font-poppinsMedium">Review Application</span>
			<img alt="Review_icon" src={svgAssets.kyc.continueIcon} />
		</button>
	);
};
