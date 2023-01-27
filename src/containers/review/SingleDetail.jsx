import { useState } from 'react';
import { svgAssets } from '../../assets/asset';
import { SelectDropdown } from '../../components/dropdown/SelectDropdown';
import { MyModal } from '../../components/modal/Modal';

export const VerifySingleDetail = ({ label, value, isValid }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleModal = (state) => {
		setIsOpen(false);
	};

	return (
		<>
			<div className={`mb-[15px] px-[18px] py-[11px] grid grid-cols-3 gap-5 items-center rounded-[10px] border border-solid 
      ${isValid ? 'border-[#69BF77]' : 'border-[#F6F6F6] shadow-[0px_1px_12px_rgba(185,185,185,0.25)]'}
    `}>
				<div className="text-[#90A5B5]">{label}</div>
				<div className="">{value}</div>
				<div className='flex items-center justify-end'>
					<img className="mr-5" alt="wrong_field" src={svgAssets.verifyApplication.wrongField} />
					<img className="cursor-pointer" onClick={() => setIsOpen(!isOpen)} alt="right_field" src={svgAssets.verifyApplication.rightField} />
				</div>
			</div>
			<MyModal
				isModalOpen={isOpen}
				handleModal={handleModal}
				title="Tell us rejection reason"
				centered={false}
				width={590}
			>
				<div className="h-40">
					<h6 className="mb-4 text-lg font-medium">PAN Details - PAN linked with Aadhaar</h6>
					<SelectDropdown />
				</div>
			</MyModal >
		</>
	);
};
