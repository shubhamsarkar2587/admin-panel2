import { svgAssets } from '../../../assets/asset';
import { InputBtnIcon } from '../../../components/inputs/InputBtnIcon';
import { UploadSelfie } from '../step7/UploadSelfie';

export const UploadSignature = () => {
	return (
		<>
			<UploadSelfie marginBottom="0" />
			<div className="w-full flex flex-col mb-10">
				<div className="mb-8 grid grid-cols-2 gap-10 items-end">
					<InputBtnIcon
						label="Signature Link"
						subLabel="Share below link with client"
						isImportant={true}
						placeholder="pqK0QFWZ6lS6VP5ss5iRvx/DKYC-UI?node-id=0%3A"
						btnWidth="67px"
						btnIcon={svgAssets.kyc.kycMessage}
					/>
					<div className="w-[113px] flex flex-col items-center">
						<img
							className="w-[64px] h-[64px] rounded-[10px]"
							alt="user_image"
							src={svgAssets.kyc.signature}
						/>
					</div>
				</div>
			</div>
		</>
	);
};
