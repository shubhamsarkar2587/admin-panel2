import { svgAssets } from '../../../assets/asset';
import InputIcon from '../../../components/inputs/InputIcon';

const UploadSelfie = ({ marginBottom }) => {
	return (
		<div
			className="w-full flex flex-col"
			style={{
				marginBottom: marginBottom || '10px'
			}}
		>
			<div className="mb-[22px] text-[#000] font-medium text-lg leading-[27px]">Upload Selfie, E-sign And Supporting Docs</div>
			<div className="mb-8 grid grid-cols-2 gap-10 items-end">
				<div className="flex flex-col ">
					<span className="mb-3">Selfie Link *</span>
					<span className="text-[#A3A3A3] mb-1">Share below link with client</span>
					<InputIcon iconText="Send Link" />
				</div>
				<div className="flex flex-col">
					<img
						className="w-[113px] h-[113px] rounded-[10px]"
						alt="user_image"
						src={svgAssets.kyc.profile_user}
					/>
				</div>
			</div>
		</div>
	);
};

export default UploadSelfie;
