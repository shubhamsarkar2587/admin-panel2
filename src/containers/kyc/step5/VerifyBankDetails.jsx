import { useState } from 'react';
import { pngAssets, svgAssets } from '../../../assets/asset';
import { CommonInput } from '../../../components/inputs/CommonInput';
import { VerifyBtn } from '../../../components/buttons/VerifyBtn';
import { SearchIfcModal } from '../../../components/modal/kyc/SearchIfcModal';
import { MainTitle } from '../../../components/common/MainTitle';
import { useDispatch } from 'react-redux';
import { setBankAllInfoAction } from '../../../redux/actions/kyc.action';

export const VerifyBankDetails = () => {
	const dispatch = useDispatch();
	const [isModelOpen, setIsModelOpen] = useState(false);

	const handleKycModel = (condition) => {
		if (condition) {
			setIsModelOpen(true);
		} else {
			setIsModelOpen(false);
		}
	};

	const handleVerifyBtn = () => {
		dispatch(setBankAllInfoAction({
			BankIFSC: 'ICIC0000433',
			BankAccountNumber: '024101531444',
			BankName: 'ICICI BANK',
			BankAccountHolderName: 'anil prajapati'
		}));
	};

	return (
		<div className="w-full flex flex-col mb-10">
			<MainTitle title="Bank Details" />
			<div className="grid grid-cols-2 gap-10 items-end mb-8">
				<CommonInput
					icon={pngAssets.kyc.mobileNumber}
					label="IFSC"
					isImportant={true}
					placeholder="Please enter ifsc"
				/>
				<div className="flex items-center">
					<span className="mr-[26px]">OR</span>
					<button
						className="h-[47px] px-5 flex items-center rounded-[10px] leading-6 text-white bg-black"
						onClick={() => handleKycModel(true)}
					>
						<img className="mr-2 text-xl leading-[30px] font-semibold" alt="back_icon" src={svgAssets.kyc.verify} />
						<span>Search IFSC</span>
					</button>
				</div>
			</div>
			<div className="grid grid-cols-2 gap-10 items-end mb-10">
				<CommonInput
					icon={pngAssets.kyc.mobileNumber}
					label="Bank Account Number"
					isImportant={true}
					placeholder="Please enter bank a/c number"
				/>
				<CommonInput
					icon={pngAssets.kyc.mobileNumber}
					label="Confirm Bank Account Number"
					isImportant={true}
					placeholder="Please enter confirm bank a/c number"
				/>
			</div>
			<div className="flex items-center justify-center">
				<VerifyBtn
					verifyBtn={() => handleVerifyBtn()}
				/>
			</div>
			<SearchIfcModal isModalOpen={isModelOpen} handleKycModel={handleKycModel} />
		</div>
	);
};
