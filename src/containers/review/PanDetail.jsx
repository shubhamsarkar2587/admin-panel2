import { useState } from 'react';
import { svgAssets } from '../../assets/asset';
import { MainTitle } from '../../components/common/MainTitle';
import { PdfViewer } from './PdfViewer';
import { SingleDetail } from './SingleDetail2';

export const PanDetail = () => {
	const [isPdfOpen, setIsPdfOpen] = useState(false);

	const handlePdfviewer = () => {
		setIsPdfOpen(!isPdfOpen);
	};
	return (
		<div className="mb-5 pb-2.5 border-b border-solid border-[#D9D9D9]">
			<div className="mb-5">
				<MainTitle title="PAN Details"/>
			</div>
			<div className="grid grid-cols-12 gap-10">
				<div className="col-span-8">
					<SingleDetail label="Name As On PAN" value="Amit Singh" />
					<SingleDetail label="Name As On PAN" value="Amit Singh" />
					<SingleDetail label="Name As On PAN" value="Amit Singh" />
					<SingleDetail label="Name As On PAN" value="Amit Singh" />
					<div className="pt-[10px] mb-2 grid grid-cols-3 gap-5 items-center">
						<div className="text-lg font-medium font-poppinsMedium">Documents Uploaded</div>
						<div
							className="px-3 py-1.5 w-max flex items-center justify-start rounded-[10px] border border-solid border-[#E0E0E0] cursor-pointer"
							onClick={() => handlePdfviewer()}
						>
							<img className="mr-2" alt="doc_view" src={svgAssets.kyc.docView}></img>
							<div className="flex flex-col justify-center">
								<span className="font-poppinsRegular">Rajendra Singh</span>
								<span className="text-[#757575] text-xs font-poppinsRegular">Pan Car...jpeg</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<PdfViewer isPdfOpen={isPdfOpen} />
		</div>
	);
};
