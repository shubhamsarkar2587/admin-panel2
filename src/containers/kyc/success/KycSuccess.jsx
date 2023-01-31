import { pngAssets } from '../../../assets/asset';

export const KycSuccess = () => {
	return (
		<div className="flex flex-col items-center justify-center">
			<h6 className="mb-6 text-center text-[#007813] text-2xl leading-9 font-medium font-poppinsMedium">
				Congrats<br></br>
				You have Successfully completed all the steps
			</h6>
			<img
				className="mb-5"
				alt="success_kyc"
				src={pngAssets.kyc.kycSuccess}
			/>
		</div>
	);
};
