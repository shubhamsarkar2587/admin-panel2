import { svgAssets } from '../../../assets/asset';
import { MainTitle } from '../../../components/common/MainTitle';
import { InputBtnIcon } from '../../../components/inputs/InputBtnIcon';

export const UploadSelfie = ({ marginBottom }) => {
	return (
		<div
			className="w-full flex flex-col"
			style={{
				marginBottom: marginBottom || '10px'
			}}
		>
			<MainTitle title="Upload Selfie, E-sign And Supporting Docs" />
			<div className="mb-8 grid grid-cols-2 gap-10 items-end">
				<div className="flex flex-col ">
					<InputBtnIcon
						label="Selfie Link"
						subLabel="Share below link with client"
						isImportant={true}
						placeholder="pqK0QFWZ6lS6VP5ss5iRvx/DKYC-UI?node-id=0%3A"
						btnWidth="67px"
						btnIcon={svgAssets.kyc.kycMessage}
					/>
				</div>
				<div className="flex flex-col">
					<img
						className="w-[113px] h-[113px] rounded-[10px]"
						alt="user_image"
						src={svgAssets.kyc.profileUser}
					/>
				</div>
			</div>
		</div>
	);
};
