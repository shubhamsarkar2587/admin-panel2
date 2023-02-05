import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { MainTitle } from '../../../components/common/MainTitle';
import { StepProgressBar } from '../../../components/progressBar/ProgressBar';
import { verificationSteps } from '../../../containers/kyc/kycData';
import { AddressDetail } from '../../../containers/review/AddressDetail';
import { BankDetail } from '../../../containers/review/BankDetail';
import { BrokerageStep } from '../../../containers/review/brokerage/BrokerageStep';
import { ClientDetail } from '../../../containers/review/clientDetail/ClientDetail';
import { ClientPreview } from '../../../containers/review/clientDetail/ClientPreview';
import { MobileEmailDetail } from '../../../containers/review/MobileEmailDetail';
import { OccupationalDetail } from '../../../containers/review/OccupationalDetail';
import { PanDetail } from '../../../containers/review/PanDetail';
import { PersonalDetail } from '../../../containers/review/PersonalDetail';
import { Debounce } from '../../../hooks/Debounce';

const clientIntersectionOption = {
	rootMargin: '0px 0px -75% 0px',
	threshold: 0.3
};

const intersectionOption = {
	rootMargin: '0px 0px 50% 0px',
	threshold: 1
};

export const VerifyApplication = () => {
	const { ref: clientRef, inView: isClientRefInView } = useInView(clientIntersectionOption);
	const { ref: mobileRef, inView: isMobileRefView } = useInView(intersectionOption);
	const { ref: panRef, inView: isPanRefView } = useInView(intersectionOption);
	const { ref: addressRef, inView: isAddressRefView } = useInView(intersectionOption);
	const { ref: bankRef, inView: isBankRefView } = useInView(intersectionOption);
	const { ref: personalRef, inView: isPersonalRefView } = useInView(intersectionOption);
	const { ref: occupationalRef, inView: isOccupationalRefView } = useInView(intersectionOption);
	const { ref: brokerageRef, inView: isBrokerageRefView } = useInView(intersectionOption);

	const [isClientPreviewVisible, setIsClientPreviewVisible] = useState(false);
	const [steps, setSteps] = useState(verificationSteps || []);

	const debounceValue = Debounce(isClientRefInView, 500);

	useEffect(() => {
		setIsClientPreviewVisible(debounceValue);
	}, [debounceValue]);

	useEffect(() => {
		if (isMobileRefView) {
			handleSteps({ index: 0 });
		} else if (isPanRefView) {
			handleSteps({ index: 1 });
		} else if (isAddressRefView) {
			handleSteps({ index: 2 });
		} else if (isBankRefView) {
			handleSteps({ index: 3 });
		} else if (isPersonalRefView) {
			handleSteps({ index: 4 });
		} else if (isOccupationalRefView) {
			handleSteps({ index: 5 });
		} else if (isBrokerageRefView) {
			handleSteps({ index: 6 });
		}
	}, [isMobileRefView, isPanRefView, isAddressRefView, isBankRefView, isPersonalRefView, isOccupationalRefView, isBrokerageRefView]);

	const handleSteps = ({ index }) => {
		// console.log({ index });
		const updatedSteps = steps.map((el, i) => {
			if (i === index) {
				return ({
					...el,
					status: 'verifyView'
				});
			} else {
				return ({
					...el,
					status: 'success'
				});
			}
		});
		setSteps(updatedSteps);
	};

	return (
		<div className="w-full flex flex-col">
			<div className="flex items-center justify-between">
				<MainTitle title="Review Application Details"/>
				<div className="text-[#848484] font-medium font-poppinsMedium">Client of</div>
			</div>
			<div className="px-7 py-8 mb-[35px] rounded-[20px] bg-white shadow-[0px_4px_15px_rgba(171,171,171,0.25)]">
				<ClientDetail isVerify={true} />
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
								<StepProgressBar selectedStep={7} steps={steps} />
							</div>
						)
				}
			</div>
			<div className="px-7 py-8 rounded-[0_0_20px_20px] bg-white shadow-[0px_4px_15px_rgba(171,171,171,0.25)]">
				<div ref={mobileRef}>
					<MobileEmailDetail isVerify={true} />
				</div>
				<div ref={panRef}>
					<PanDetail />
				</div>
				<div ref={addressRef}>
					<AddressDetail />
				</div>
				<div ref={bankRef}>
					<BankDetail />
				</div>
				<div ref={personalRef}>
					<PersonalDetail />
				</div>
				<div ref={occupationalRef}>
					<OccupationalDetail />
				</div>
				<div ref={brokerageRef}>
					<BrokerageStep />
				</div>
			</div>
		</div>
	);
};
