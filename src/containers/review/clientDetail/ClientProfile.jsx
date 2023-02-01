import { svgAssets } from '../../../assets/asset';

export default function ClientProfile () {
	return (
		<div className="mb-[15px] col-span-4 grid grid-rows-6 gap-5">
			<div className="row-span-4 px-[70px] py-[40px] flex items-center justify-center rounded-[10px] shadow-[0px_1px_12px_rgba(185,185,185,0.25)]">
				<img className="object-contain" alt="user_image" src={svgAssets.kyc.profileUser}></img>
			</div>
			<div className="row-span-2 py-4 flex items-center justify-center rounded-[10px] shadow-[0px_1px_12px_rgba(185,185,185,0.25)]">
				<img className="h-full object-contain" alt="user_image" src={svgAssets.kyc.signature}></img>
			</div>
		</div>
	);
}
