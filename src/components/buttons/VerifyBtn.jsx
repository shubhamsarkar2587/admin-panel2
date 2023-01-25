import { svgAssets } from '../../assets/asset';

export const VerifyBtn = ({ height }) => {
	return (
		<button className={`px-5 h-[${height || '47px'}] flex items-center rounded-[10px] leading-6 text-white bg-black`}>
			<img className="mr-2" alt="back_icon" src={svgAssets.kyc.verify} />
			<span>Verify</span>
		</button>
	);
};
