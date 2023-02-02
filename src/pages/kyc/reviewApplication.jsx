import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { MainTitle } from '../../components/common/MainTitle';
import { StepProgressBar } from '../../components/progressBar/ProgressBar';
import { verificationSteps } from '../../containers/kyc/kycData';
import { BankDetail } from '../../containers/review/BankDetail';
import { ClientDetail } from '../../containers/review/clientDetail/ClientDetail';
import { ClientPreview } from '../../containers/review/clientDetail/ClientPreview';
import { MobileEmailDetail } from '../../containers/review/MobileEmailDetail';
import { OccupationalDetail } from '../../containers/review/OccupationalDetail';
import { PanDetail } from '../../containers/review/PanDetail';
import { PersonalDetail } from '../../containers/review/PersonalDetail';
import { Debounce } from '../../hooks/Debounce';

const clientIntersectionOption = {
	rootMargin: '0px 0px -75% 0px',
	threshold: 0.5
};

export const ReviewApplication = () => {
	const { ref: clientRef, inView: isClientRefInView } = useInView(clientIntersectionOption);
	const [isClientPreviewVisible, setIsClientPreviewVisible] = useState(false);
	const [steps, setSteps] = useState(verificationSteps || []);

	const debounceValue = Debounce(isClientRefInView, 500);

	useEffect(() => {
		setIsClientPreviewVisible(debounceValue);
	}, [debounceValue]);

	console.log({ isClientRefInView, debounceValue, isClientPreviewVisible });

	return (
		<div className="w-full flex flex-col">
			<div className="flex items-center justify-between">
				<MainTitle title="Review Application Details"/>
				<div className="text-[#848484] font-medium font-poppinsMedium">Client of</div>
			</div>
			<div className="px-7 py-8 mb-[35px] rounded-[20px] bg-white shadow-[0px_4px_15px_rgba(171,171,171,0.25)]">
				<ClientDetail />
			</div>

			<div ref={clientRef} className="sticky top-[85px] z-50">
				{
					isClientPreviewVisible
						? (
							<>
								<div className="px-7 py-3 rounded-[10px_10px_0_0] bg-white shadow-[0px_4px_15px_rgba(171,171,171,0.25)]">
									<ClientPreview/>
								</div>
								<div className="pt-5 pb-4 rounded-0 bg-[#E9F1FF]">
									<StepProgressBar selectedStep={7} steps={steps} setSteps={setSteps} />
								</div>
							</>
						)
						: (
							<div className="pt-5 pb-4 rounded-[20px_20px_0px_0px] bg-[#E9F1FF]">
								<StepProgressBar selectedStep={7} steps={steps} setSteps={setSteps} />
							</div>
						)
				}
			</div>
			<div className="px-7 py-8 mb-[35px] rounded-[0_0_20px_20px] bg-white shadow-[0px_4px_15px_rgba(171,171,171,0.25)]">
				<MobileEmailDetail />
				<PanDetail />
				<BankDetail />
				<PersonalDetail />
				<OccupationalDetail />
			</div>
		</div>
	);
};
