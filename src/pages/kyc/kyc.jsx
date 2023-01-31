import { useEffect, useState } from 'react';
import { kycSteps } from '../../containers/kyc/kycData';
import { KycModal } from '../../components/modal/kyc/KycModal';
import { StepProgressBar } from '../../components/progressBar/ProgressBar';
import { BackBtn } from '../../components/buttons/BackBtn';
import { ContinueBtn } from '../../components/buttons/ContinueBtn';

export const Kyc = () => {
	const [isModelOpen, setIsModelOpen] = useState(false);
	// const [selectedStep, setSelectedStep] = useState(0);
	const [steps, setSteps] = useState(kycSteps || []);

	const handleKycModel = (condition) => {
		if (condition) {
			setIsModelOpen(true);
		} else {
			setIsModelOpen(false);
		}
	};

	const handleBackBtn = ({ step, index }) => {
		const updatedSteps = steps.map((el, i) => {
			if (i === index) {
				return ({
					...el,
					status: 'inactive'
				});
			} else if (i === index - 1) {
				return ({
					...el,
					status: 'active'
				});
			} else {
				return el;
			}
		});
		setSteps(updatedSteps);
	};

	const handleContinueBtn = ({ step, index }) => {
		const updatedSteps = steps.map((el, i) => {
			if (i === index) {
				return ({
					...el,
					status: 'success'
				});
			} else if (i === index + 1) {
				return ({
					...el,
					status: 'active'
				});
			} else {
				return el;
			}
		});
		setSteps(updatedSteps);
	};

	useEffect(() => {
		setTimeout(() => {
			handleKycModel(true);
		}, 1000);
	}, []);

	return (
		<>
			{
				steps?.length > 0
					? steps.map((step, index) => step.status === 'active'
						? (
							<div key={`kyc_step_${index}`}>
								<div className="w-full pb-4 mb-10 bg-[#F6F8F9] sticky top-[105px] z-50">
									<StepProgressBar selectedStep={index} steps={steps} />
								</div>
								<div className="min-h-[calc(100vh-310px)]">
									{
										step.component
									}
								</div>
								<div className={`flex items-center 
                ${index === 0 ? 'justify-end' : index === steps.length - 1 ? 'justify-start' : 'justify-between'}
              `}>
									{index !== 0 && (<BackBtn handleBackBtn={() => handleBackBtn({ step, index })} />)}
									{index !== steps.length - 1 && (<ContinueBtn handleContinueBtn={() => handleContinueBtn({ step, index })} />)}
								</div>
							</div>)
						: null
					)
					: null
			}
			<KycModal isModalOpen={isModelOpen} handleKycModel={handleKycModel} />
		</>
	);
};
