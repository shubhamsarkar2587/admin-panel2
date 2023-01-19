import { useState } from 'react';
import { svgAssets } from '../../assets/asset';
import BrokerageDetails from '../kyc/step5/BrokerageDetails';
import { VerifySingleDetail } from './SingleDetail';
import { verifyApplicationData } from '../../utils/data';
import PdfViewer from './PdfViewer';

const VerifyApplication = () => {
	const [isPdfOpen, setIsPdfOpen] = useState(false);

	const handlePdfviewer = () => {
		setIsPdfOpen(!isPdfOpen);
	};

	return (
		<div className="w-full flex flex-col mb-10">
			<div className="flex items-center justify-between">
				<div className="mb-[22px] font-medium text-lg leading-[27px]">Review Application Details</div>
				<div>Client of</div>
			</div>
			<div className="px-7 py-8 mb-[35px] rounded-[20px] bg-white shadow-[0px_4px_15px_rgba(171,171,171,0.25)]">
				<div className="mb-5">Client Details</div>
				<div className="grid grid-cols-12 gap-10">
					<div className="col-span-8">
						{
							verifyApplicationData.clientDetails.map((el, index) => (
								<VerifySingleDetail key={index} label={el.label} value={el.value} isValid={index === 0 && true} />
							))
						}
					</div>
					<div className="mb-[15px] col-span-4 grid grid-rows-6 gap-5">
						<div className="row-span-4 px-[70px] py-[40px] flex items-center justify-center rounded-[10px] shadow-[0px_1px_12px_rgba(185,185,185,0.25)]">
							<img className="object-contain" alt="user_image" src={svgAssets.kyc.profileUser}></img>
						</div>
						<div className="row-span-2 py-4 flex items-center justify-center rounded-[10px] shadow-[0px_1px_12px_rgba(185,185,185,0.25)]">
							<img className="h-full object-contain" alt="user_image" src={svgAssets.kyc.signature}></img>
						</div>
					</div>
				</div>
			</div>

			<div className="px-7 py-8 rounded-[20px] bg-white shadow-[0px_4px_15px_rgba(171,171,171,0.25)]">
				<div className="mb-5 pb-2.5 border-b border-solid border-[#D9D9D9]">
					<div className="mb-5">Mobile Number & Email Id</div>
					<div className="grid grid-cols-12 gap-10">
						<div className="col-span-8">
							{
								verifyApplicationData.mobileNumberAndEmailDetails.map((el, index) => (
									<VerifySingleDetail key={index} label={el.label} value={el.value} isValid={index === 0 && true} />
								))
							}
						</div>
					</div>
				</div>

				<div className="mb-5 pb-2.5 border-b border-solid border-[#D9D9D9]">
					<div className="mb-5">PAN Details</div>
					<div className="grid grid-cols-12 gap-10">
						<div className="col-span-8">
							{
								verifyApplicationData.panDetails.map((el, index) => (
									<VerifySingleDetail key={index} label={el.label} value={el.value} isValid={index === 0 && true} />
								))
							}

							<div className="pt-[10px] grid grid-cols-3 gap-5 items-center">
								<div className="">Documents Uploaded</div>
								<div className="w-[150px] py-2.5 flex items-center justify-center rounded-[10px] border border-solid border-[#E0E0E0]">
									<img className="mr-2" alt="doc_view" src={svgAssets.kyc.docView}></img>
									<span >Rajendra Singh</span>
								</div>
								<div className="w-[150px] py-2.5 flex items-center justify-center rounded-[10px] border border-solid border-[#E0E0E0]">
									<img className="mr-2" alt="doc_view" src={svgAssets.kyc.docView}></img>
									<span >Rajendra Singh</span>
								</div>
							</div>

						</div>
					</div>
				</div>

				<div className="mb-5 pb-2.5 border-b border-solid border-[#D9D9D9]">
					<div className="mb-5">Bank Details</div>
					<div className="grid grid-cols-12 gap-10">
						<div className="col-span-8">
							{
								verifyApplicationData.bankDetails.map((el, index) => (
									<VerifySingleDetail key={index} label={el.label} value={el.value} isValid={index === 0 && true} />
								))
							}
							<div className="pt-[10px] grid grid-cols-3 gap-5 items-center">
								<div className="">Documents Uploaded</div>
								<div
									className="w-[150px] py-2.5 flex items-center justify-center rounded-[10px] border border-solid border-[#E0E0E0] cursor-pointer"
									onClick={() => handlePdfviewer()}
								>
									<img className="mr-2" alt="doc_view" src={svgAssets.kyc.docView}></img>
									<span>Rajendra Singh</span>
								</div>
							</div>

						</div>
					</div>
					<PdfViewer isPdfOpen={isPdfOpen} />
				</div>

				<BrokerageDetails />

			</div>
		</div>
	);
};

export default VerifyApplication;
